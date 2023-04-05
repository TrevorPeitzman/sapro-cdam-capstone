/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChecklist = /* GraphQL */ `
  subscription OnCreateChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
    onCreateChecklist(filter: $filter) {
      id
      commandName
      commandPOC
      commandPOCEmail
      checklistItems {
        items {
          id
          itemName
          completion
          mandatory
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          checklistChecklistItemsId
          checklistItemSupportingDocumentsId
        }
        nextToken
        startedAt
      }
      percentCompletion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      commandPOC
      commandPOCEmail
      checklistItems {
        items {
          id
          itemName
          completion
          mandatory
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          checklistChecklistItemsId
          checklistItemSupportingDocumentsId
        }
        nextToken
        startedAt
      }
      percentCompletion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      commandPOC
      commandPOCEmail
      checklistItems {
        items {
          id
          itemName
          completion
          mandatory
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          checklistChecklistItemsId
          checklistItemSupportingDocumentsId
        }
        nextToken
        startedAt
      }
      percentCompletion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        commandPOC
        commandPOCEmail
        checklistItems {
          nextToken
          startedAt
        }
        percentCompletion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      itemName
      completion
      mandatory
      description
      reference
      tier
      responsibleParty
      supportingDocuments {
        id
        checklistItem {
          id
          itemName
          completion
          mandatory
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          checklistChecklistItemsId
          checklistItemSupportingDocumentsId
        }
        filename
        fileURL
        author
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supportingDocumentChecklistItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      checklistChecklistItemsId
      checklistItemSupportingDocumentsId
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
        commandPOC
        commandPOCEmail
        checklistItems {
          nextToken
          startedAt
        }
        percentCompletion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      itemName
      completion
      mandatory
      description
      reference
      tier
      responsibleParty
      supportingDocuments {
        id
        checklistItem {
          id
          itemName
          completion
          mandatory
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          checklistChecklistItemsId
          checklistItemSupportingDocumentsId
        }
        filename
        fileURL
        author
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supportingDocumentChecklistItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      checklistChecklistItemsId
      checklistItemSupportingDocumentsId
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
        commandPOC
        commandPOCEmail
        checklistItems {
          nextToken
          startedAt
        }
        percentCompletion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      itemName
      completion
      mandatory
      description
      reference
      tier
      responsibleParty
      supportingDocuments {
        id
        checklistItem {
          id
          itemName
          completion
          mandatory
          description
          reference
          tier
          responsibleParty
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          checklistChecklistItemsId
          checklistItemSupportingDocumentsId
        }
        filename
        fileURL
        author
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        supportingDocumentChecklistItemId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      checklistChecklistItemsId
      checklistItemSupportingDocumentsId
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
          commandPOC
          commandPOCEmail
          percentCompletion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        itemName
        completion
        mandatory
        description
        reference
        tier
        responsibleParty
        supportingDocuments {
          id
          filename
          fileURL
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          supportingDocumentChecklistItemId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        checklistChecklistItemsId
        checklistItemSupportingDocumentsId
      }
      filename
      fileURL
      author
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supportingDocumentChecklistItemId
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
          commandPOC
          commandPOCEmail
          percentCompletion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        itemName
        completion
        mandatory
        description
        reference
        tier
        responsibleParty
        supportingDocuments {
          id
          filename
          fileURL
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          supportingDocumentChecklistItemId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        checklistChecklistItemsId
        checklistItemSupportingDocumentsId
      }
      filename
      fileURL
      author
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supportingDocumentChecklistItemId
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
          commandPOC
          commandPOCEmail
          percentCompletion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        itemName
        completion
        mandatory
        description
        reference
        tier
        responsibleParty
        supportingDocuments {
          id
          filename
          fileURL
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          supportingDocumentChecklistItemId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        checklistChecklistItemsId
        checklistItemSupportingDocumentsId
      }
      filename
      fileURL
      author
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      supportingDocumentChecklistItemId
    }
  }
`;
