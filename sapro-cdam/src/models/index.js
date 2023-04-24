// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Checklist, ChecklistItem, AccessRequestList } = initSchema(schema);

export {
  Checklist,
  ChecklistItem,
  AccessRequestList
};