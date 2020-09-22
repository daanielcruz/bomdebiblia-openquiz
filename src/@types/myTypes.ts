export interface iCategories {
  id: number;
  name: string;
  imageUrl: string;
}

export interface iQuestions {
  id: number;
  category: string;
  question: string;
  answer: string;
  fakeanswer1: string;
  fakeanswer2: string;
  fakeanswer3: string;
  knowmore: string;
}
export interface iCurrentScore {
  question: number;
  isCorrect: boolean | null;
}

export interface iCurrentSessionStateProps {
  questions: iQuestions[];
  currentCategory: string | null;
  finalScore: number;
}

export interface iInitialDataStateProps {
  categories: iCategories[];
  scores: iScores[];
  isLoading: boolean;
  isFailed: null | true;
  versionNumber: number;
  isUpdateRequired: null | boolean;
  isMuted: boolean;
}

export interface iScores {
  id: number;
  category: string;
  score: number;
  createdAt: Date;
}

export interface iFirstTimeStateProps {
  isFirstTime: boolean | null;
}

export interface iState {
  initialDataState: iInitialDataStateProps;
  firstTimeState: iFirstTimeStateProps;
  currentSessionState: iCurrentSessionStateProps;
}

export interface iCurrentSessionAction {
  payload: string | iQuestions[];
  type: string;
}

export interface iInitialDataAction {
  payload: iCategories[] | boolean | string;
  type: string;
}

export interface iFirstTimeAction {
  payload: boolean | null;
  type: string;
}

export interface iVersion {
  id: number;
  version: number;
}

export interface iLoadInitialDataAction {
  type: string;
  versionNumber: number;
}

export interface iLoadQuestionsAction {
  type: string;
  payload: string;
}

export interface iSaveIsMutedAction {
  type: string;
  payload: boolean;
}

export interface iSaveScoreAction {
  type: string;
  scoreObject: iScorePayload;
}

export interface iScorePayload {
  category: string;
  score: number;
}

export interface iShuffledQuestion {
  question: string;
  answers: string[];
  knowmore: string;
}
