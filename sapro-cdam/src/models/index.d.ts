import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type ChecklistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChecklistItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SupportingDocumentMetaData = {
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
  readonly supportingDocuments?: SupportingDocument | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly checklistItemSupportingDocumentsId?: string | null;
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
  readonly supportingDocuments: AsyncItem<SupportingDocument | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly checklistItemSupportingDocumentsId?: string | null;
}

export declare type ChecklistItem = LazyLoading extends LazyLoadingDisabled ? EagerChecklistItem : LazyChecklistItem

export declare const ChecklistItem: (new (init: ModelInit<ChecklistItem, ChecklistItemMetaData>) => ChecklistItem) & {
  copyOf(source: ChecklistItem, mutator: (draft: MutableModel<ChecklistItem, ChecklistItemMetaData>) => MutableModel<ChecklistItem, ChecklistItemMetaData> | void): ChecklistItem;
}

type EagerSupportingDocument = {
  readonly id: string;
  readonly checklistItem?: ChecklistItem | null;
  readonly filename: string;
  readonly fileURL?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySupportingDocument = {
  readonly id: string;
  readonly checklistItem: AsyncItem<ChecklistItem | undefined>;
  readonly filename: string;
  readonly fileURL?: string | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SupportingDocument = LazyLoading extends LazyLoadingDisabled ? EagerSupportingDocument : LazySupportingDocument

export declare const SupportingDocument: (new (init: ModelInit<SupportingDocument, SupportingDocumentMetaData>) => SupportingDocument) & {
  copyOf(source: SupportingDocument, mutator: (draft: MutableModel<SupportingDocument, SupportingDocumentMetaData>) => MutableModel<SupportingDocument, SupportingDocumentMetaData> | void): SupportingDocument;
}