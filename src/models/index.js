// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EmailForm } = initSchema(schema);

export {
  EmailForm
};