import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type ChecklistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChecklistItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccessRequestListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerChecklist = {
  readonly id: string;
  readonly commandName: string;
  readonly commandPOC?: string | null;
  readonly commandPOCEmail?: string | null;
  readonly checklistItems?: (ChecklistItem | null)[] | null;
  readonly percentCompletion?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChecklist = {
  readonly id: string;
  readonly commandName: string;
  readonly commandPOC?: string | null;
  readonly commandPOCEmail?: string | null;
  readonly checklistItems: AsyncCollection<ChecklistItem>;
  readonly percentCompletion?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Checklist = LazyLoading extends LazyLoadingDisabled ? EagerChecklist : LazyChecklist

export declare const Checklist: (new (init: ModelInit<Checklist, ChecklistMetaData>) => Checklist) & {
  copyOf(source: Checklist, mutator: (draft: MutableModel<Checklist, ChecklistMetaData>) => MutableModel<Checklist, ChecklistMetaData> | void): Checklist;
}

type EagerChecklistItem = {
  readonly id: string;
  readonly checklist?: Checklist | null;
  readonly itemName: string;
  readonly completion: boolean;
  readonly mandatory?: boolean | null;
  readonly description?: string | null;
  readonly reference?: string | null;
  readonly tier?: number | null;
  readonly responsibleParty?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChecklistItem = {
  readonly id: string;
  readonly checklist: AsyncItem<Checklist | undefined>;
  readonly itemName: string;
  readonly completion: boolean;
  readonly mandatory?: boolean | null;
  readonly description?: string | null;
  readonly reference?: string | null;
  readonly tier?: number | null;
  readonly responsibleParty?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChecklistItem = LazyLoading extends LazyLoadingDisabled ? EagerChecklistItem : LazyChecklistItem

export declare const ChecklistItem: (new (init: ModelInit<ChecklistItem, ChecklistItemMetaData>) => ChecklistItem) & {
  copyOf(source: ChecklistItem, mutator: (draft: MutableModel<ChecklistItem, ChecklistItemMetaData>) => MutableModel<ChecklistItem, ChecklistItemMetaData> | void): ChecklistItem;
}

type EagerAccessRequestList = {
  readonly id: string;
  readonly userID: string;
  readonly email: string;
  readonly reason?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccessRequestList = {
  readonly id: string;
  readonly userID: string;
  readonly email: string;
  readonly reason?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AccessRequestList = LazyLoading extends LazyLoadingDisabled ? EagerAccessRequestList : LazyAccessRequestList

export declare const AccessRequestList: (new (init: ModelInit<AccessRequestList, AccessRequestListMetaData>) => AccessRequestList) & {
  copyOf(source: AccessRequestList, mutator: (draft: MutableModel<AccessRequestList, AccessRequestListMetaData>) => MutableModel<AccessRequestList, AccessRequestListMetaData> | void): AccessRequestList;
}