export default class QuestionsSchema {
  static schema = {
    name: 'Questions',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      category: 'string',
      question: 'string',
      answer: 'string',
      fakeanswer1: 'string',
      fakeanswer2: 'string',
      fakeanswer3: 'string',
      knowmore: 'string',
    },
  };
}
