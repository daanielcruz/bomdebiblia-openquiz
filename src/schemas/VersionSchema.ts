export default class VersionSchema {
  static schema = {
    name: 'Version',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      version: 'int',
    },
  };
}
