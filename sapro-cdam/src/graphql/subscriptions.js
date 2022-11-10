/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChecklist = /* GraphQL */ `
  subscription OnCreateChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
    onCreateChecklist(filter: $filter) {
      id
      commandName
      responsibleParty
      percentCompletion
      checklistItems {
        items {
          id
          itemName
          completion
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          checklistChecklistItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChecklist = /* GraphQL */ `
  subscription OnUpdateChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
    onUpdateChecklist(filter: $filter) {
      id
      commandName
      responsibleParty
      percentCompletion
      checklistItems {
        items {
          id
          itemName
          completion
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          checklistChecklistItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChecklist = /* GraphQL */ `
  subscription OnDeleteChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
    onDeleteChecklist(filter: $filter) {
      id
      commandName
      responsibleParty
      percentCompletion
      checklistItems {
        items {
          id
          itemName
          completion
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          checklistChecklistItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChecklistItem = /* GraphQL */ `
  subscription OnCreateChecklistItem(
    $filter: ModelSubscriptionChecklistItemFilterInput
  ) {
    onCreateChecklistItem(filter: $filter) {
      id
      checklist {
        id
        commandName
        responsibleParty
        percentCompletion
        checklistItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      itemName
      completion
      description
      reference
      tier
      responsibleParty
      supportingDocuments {
        items {
          id
          filename
          createdAt
          updatedAt
          checklistItemSupportingDocumentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      checklistChecklistItemsId
    }
  }
`;
export const onUpdateChecklistItem = /* GraphQL */ `
  subscription OnUpdateChecklistItem(
    $filter: ModelSubscriptionChecklistItemFilterInput
  ) {
    onUpdateChecklistItem(filter: $filter) {
      id
      checklist {
        id
        commandName
        responsibleParty
        percentCompletion
        checklistItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      itemName
      completion
      description
      reference
      tier
      responsibleParty
      supportingDocuments {
        items {
          id
          filename
          createdAt
          updatedAt
          checklistItemSupportingDocumentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      checklistChecklistItemsId
    }
  }
`;
export const onDeleteChecklistItem = /* GraphQL */ `
  subscription OnDeleteChecklistItem(
    $filter: ModelSubscriptionChecklistItemFilterInput
  ) {
    onDeleteChecklistItem(filter: $filter) {
      id
      checklist {
        id
        commandName
        responsibleParty
        percentCompletion
        checklistItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      itemName
      completion
      description
      reference
      tier
      responsibleParty
      supportingDocuments {
        items {
          id
          filename
          createdAt
          updatedAt
          checklistItemSupportingDocumentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      checklistChecklistItemsId
    }
  }
`;
export const onCreateSupportingDocument = /* GraphQL */ `
  subscription OnCreateSupportingDocument(
    $filter: ModelSubscriptionSupportingDocumentFilterInput
  ) {
    onCreateSupportingDocument(filter: $filter) {
      id
      checklistItem {
        id
        checklist {
          id
          commandName
          responsibleParty
          percentCompletion
          createdAt
          updatedAt
        }
        itemName
        completion
        description
        reference
        tier
        responsibleParty
        supportingDocuments {
          nextToken
        }
        createdAt
        updatedAt
        checklistChecklistItemsId
      }
      filename
      createdAt
      updatedAt
      checklistItemSupportingDocumentsId
    }
  }
`;
export const onUpdateSupportingDocument = /* GraphQL */ `
  subscription OnUpdateSupportingDocument(
    $filter: ModelSubscriptionSupportingDocumentFilterInput
  ) {
    onUpdateSupportingDocument(filter: $filter) {
      id
      checklistItem {
        id
        checklist {
          id
          commandName
          responsibleParty
          percentCompletion
          createdAt
          updatedAt
        }
        itemName
        completion
        description
        reference
        tier
        responsibleParty
        supportingDocuments {
          nextToken
        }
        createdAt
        updatedAt
        checklistChecklistItemsId
      }
      filename
      createdAt
      updatedAt
      checklistItemSupportingDocumentsId
    }
  }
`;
export const onDeleteSupportingDocument = /* GraphQL */ `
  subscription OnDeleteSupportingDocument(
    $filter: ModelSubscriptionSupportingDocumentFilterInput
  ) {
    onDeleteSupportingDocument(filter: $filter) {
      id
      checklistItem {
        id
        checklist {
          id
          commandName
          responsibleParty
          percentCompletion
          createdAt
          updatedAt
        }
        itemName
        completion
        description
        reference
        tier
        responsibleParty
        supportingDocuments {
          nextToken
        }
        createdAt
        updatedAt
        checklistChecklistItemsId
      }
      filename
      createdAt
      updatedAt
      checklistItemSupportingDocumentsId
    }
  }
`;
