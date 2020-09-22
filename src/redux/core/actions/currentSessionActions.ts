import types from './types/currentSessionTypes';
import {iQuestions} from '../../../@types/myTypes';

export const setCurrentCategory = (currentCategory: string | null) => ({
  type: types.SET_CURRENT_CATEGORY,
  payload: currentCategory,
});

export const loadQuestionsSaga = (category: string) => ({
  type: types.LOAD_QUESTIONS_SAGA,
  payload: category,
});

export const setQuestions = (questions: iQuestions[]) => ({
  type: types.SET_QUESTIONS,
  payload: questions,
});

export const setFinalScore = (score: number) => ({
  type: types.SET_FINAL_SCORE,
  payload: score,
});

export const saveScoreSaga = (score: number, currentCategory: string) => ({
  type: types.SAVE_SCORE_SAGA,
  scoreObject: {category: currentCategory, score},
});

export const saveIsMutedSaga = (payload: boolean) => ({
  type: types.SAVE_IS_MUTED_SAGA,
  payload,
});
