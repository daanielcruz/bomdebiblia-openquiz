export default class ScoresSchema {
  static schema = {
    name: 'Scores',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      category: 'string',
      score: 'int',
      createdAt: 'date',
    },
  };
}
