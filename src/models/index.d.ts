import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerEmailForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmailForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmailForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmailForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EmailForm = LazyLoading extends LazyLoadingDisabled ? EagerEmailForm : LazyEmailForm

export declare const EmailForm: (new (init: ModelInit<EmailForm>) => EmailForm) & {
  copyOf(source: EmailForm, mutator: (draft: MutableModel<EmailForm>) => MutableModel<EmailForm> | void): EmailForm;
}