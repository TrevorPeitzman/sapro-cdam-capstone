/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChecklist = /* GraphQL */ `
  mutation CreateChecklist(
    $input: CreateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    createChecklist(input: $input, condition: $condition) {
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
export const updateChecklist = /* GraphQL */ `
  mutation UpdateChecklist(
    $input: UpdateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    updateChecklist(input: $input, condition: $condition) {
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
export const deleteChecklist = /* GraphQL */ `
  mutation DeleteChecklist(
    $input: DeleteChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    deleteChecklist(input: $input, condition: $condition) {
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
export const createChecklistItem = /* GraphQL */ `
  mutation CreateChecklistItem(
    $input: CreateChecklistItemInput!
    $condition: ModelChecklistItemConditionInput
  ) {
    createChecklistItem(input: $input, condition: $condition) {
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
export const updateChecklistItem = /* GraphQL */ `
  mutation UpdateChecklistItem(
    $input: UpdateChecklistItemInput!
    $condition: ModelChecklistItemConditionInput
  ) {
    updateChecklistItem(input: $input, condition: $condition) {
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
export const deleteChecklistItem = /* GraphQL */ `
  mutation DeleteChecklistItem(
    $input: DeleteChecklistItemInput!
    $condition: ModelChecklistItemConditionInput
  ) {
    deleteChecklistItem(input: $input, condition: $condition) {
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
export const createSupportingDocument = /* GraphQL */ `
  mutation CreateSupportingDocument(
    $input: CreateSupportingDocumentInput!
    $condition: ModelSupportingDocumentConditionInput
  ) {
    createSupportingDocument(input: $input, condition: $condition) {
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
export const updateSupportingDocument = /* GraphQL */ `
  mutation UpdateSupportingDocument(
    $input: UpdateSupportingDocumentInput!
    $condition: ModelSupportingDocumentConditionInput
  ) {
    updateSupportingDocument(input: $input, condition: $condition) {
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
export const deleteSupportingDocument = /* GraphQL */ `
  mutation DeleteSupportingDocument(
    $input: DeleteSupportingDocumentInput!
    $condition: ModelSupportingDocumentConditionInput
  ) {
    deleteSupportingDocument(input: $input, condition: $condition) {
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
