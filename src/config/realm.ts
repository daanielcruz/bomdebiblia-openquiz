import Realm from 'realm';

import QuestionsSchema from '../schemas/QuestionsSchema';
import CategoriesSchema from '../schemas/CategoriesSchema';
import VersionSchema from '../schemas/VersionSchema';
import FirstTimeSchema from '../schemas/FirstTimeSchema';
import ScoresSchema from '../schemas/ScoresSchema';
import MutedSchema from '../schemas/MutedSchema';

export default function getRealm() {
  return Realm.open({
    schema: [
      QuestionsSchema,
      CategoriesSchema,
      VersionSchema,
      FirstTimeSchema,
      ScoresSchema,
      MutedSchema,
    ],
  });
}
