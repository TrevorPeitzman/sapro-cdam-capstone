// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Checklist, ChecklistItem, SupportingDocument } = initSchema(schema);

export {
  Checklist,
  ChecklistItem,
  SupportingDocument
};