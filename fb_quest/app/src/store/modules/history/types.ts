export type MockHRegisterState = {
  id: number;
  scores: number;
  questionsCount: boolean;
  date: Date;
  time: string;
};

export type HistoryState = {
  mocks: MockHRegisterState[] | null;
};
