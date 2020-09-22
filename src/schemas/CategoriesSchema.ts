export default class CategoriesSchema {
  static schema = {
    name: 'Categories',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      imageUrl: 'string',
    },
  };
}
