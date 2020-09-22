import moment from 'moment';

import getRealm from '../config/realm';
import {iScorePayload} from '../@types/myTypes';
import shuffleArray from '../utils/arrayShuffler';

export async function checkFirstTimeAsync() {
  const realm = await getRealm();

  const firstTimeObject: any = realm.objects('FirstTime')[0];

  if (firstTimeObject) {
    return false;
  }

  return true;
}

export async function registerNoFirstTimeAsync() {
  const realm = await getRealm();

  realm.write(() => {
    realm.create('FirstTime', {isFirstTime: false}, true);
  });
}

export async function loadCategoriesAsync() {
  const realm = await getRealm();

  const categories = realm.objects('Categories');
  return [...categories];
}

export async function loadQuestionsAsync(category: string) {
  const realm = await getRealm();
  const questions = realm
    .objects('Questions')
    .filtered(`category = "${category}"`);

  const arrayWithQuestions = [...questions];
  shuffleArray(arrayWithQuestions);
  return arrayWithQuestions.slice(0, 10);
}

export async function saveScoreAsync(scoreObject: iScorePayload) {
  const realm = await getRealm();
  const {category, score} = scoreObject;
  const createdAt = moment().format();
  const lastScore: any = realm.objects('Scores').sorted('id', true)[0];

  const lastId = lastScore === undefined ? 0 : lastScore.id;

  if (lastId > 8) {
    const lowestScore: any = realm.objects('Scores').sorted('score', false)[0];

    if (score > lowestScore.score) {
      realm.write(() => {
        realm.create(
          'Scores',
          {id: lowestScore.id, category, score, createdAt},
          true,
        );
      });
    }
  } else {
    const nextId = lastId + 1;
    realm.write(() => {
      realm.create('Scores', {id: nextId, category, score, createdAt}, true);
    });
  }
  const scores = realm.objects('Scores');
  return [...scores];
}

export async function loadScoresAsync() {
  const realm = await getRealm();

  const scores = realm.objects('Scores');
  if (scores.length > 0) {
    return [...scores];
  } else {
    return [];
  }
}

export async function loadIsMutedAsync() {
  const realm = await getRealm();
  const mutedObject: any = realm.objects('Muted')[0];

  if (mutedObject) {
    return mutedObject.isMuted;
  }
  return false;
}

export async function saveIsMutedAsync(payload: boolean) {
  const realm = await getRealm();

  realm.write(() => {
    realm.create('Muted', {isMuted: payload}, true);
  });
}
