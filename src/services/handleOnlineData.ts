import getRealm from '../config/realm';
import {iCategories, iVersion} from '../@types/myTypes';
import api from './api';

export async function fetchCategoriesAndQuestionsThenSaveOfflineAsync(
  versionNumber: number,
) {
  try {
    const realm = await getRealm();

    const {data: categoriesData} = await api.get('/categories.json');

    const arrayOfCategories: iCategories[] = [];
    let id = 0;
    Object.keys(categoriesData).map((category) => {
      let categoryDataToWrite = {
        id: id++,
        name: categoriesData[category].name,
        imageUrl: categoriesData[category].image,
      };

      arrayOfCategories.push(categoryDataToWrite);

      realm.write(() => {
        realm.create('Categories', categoryDataToWrite, true);
      });
    });

    id = 0;
    const {data: questionsData} = await api.get('/questions.json');

    for (let category of arrayOfCategories) {
      Object.keys(questionsData[category.name]).forEach((questionId) => {
        let questionsDataToWrite = {
          id: id++,
          category: category.name,
          question: questionsData[category.name][questionId].question,
          answer: questionsData[category.name][questionId].answer,
          fakeanswer1: questionsData[category.name][questionId].fakeanswer1,
          fakeanswer2: questionsData[category.name][questionId].fakeanswer2,
          fakeanswer3: questionsData[category.name][questionId].fakeanswer3,
          knowmore: questionsData[category.name][questionId].knowmore,
        };
        realm.write(() => {
          realm.create('Questions', questionsDataToWrite, true);
        });
      });
    }

    realm.write(() => {
      realm.create('Version', {id: 0, version: versionNumber}, true);
    });

    return arrayOfCategories;
  } catch (e) {
    return 'FAIL';
  }
}

export async function checkIfUpdateRequiredAsync() {
  try {
    const realm = await getRealm();
    const {data: versionOnlineData} = await api.get('/version.json');

    const versionOfflineData: iVersion | undefined = realm.objectForPrimaryKey(
      'Version',
      0,
    );

    if (
      versionOfflineData === undefined ||
      versionOfflineData.version < versionOnlineData
    ) {
      return {isUpdateRequired: true, versionNumber: versionOnlineData};
    } else if (versionOfflineData.version === versionOnlineData) {
      return {isUpdateRequired: false, versionNumber: 0};
    }
  } catch (e) {
    return 'FAIL';
  }
}
