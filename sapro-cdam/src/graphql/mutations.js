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
      responsibleParty
      percentCompletion
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
          checklistChecklistItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      responsibleParty
      percentCompletion
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
          checklistChecklistItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      responsibleParty
      percentCompletion
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
          checklistChecklistItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
      mandatory
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
      mandatory
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
      mandatory
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
          responsibleParty
          percentCompletion
          createdAt
          updatedAt
        }
        itemName
        completion
        mandatory
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
          responsibleParty
          percentCompletion
          createdAt
          updatedAt
        }
        itemName
        completion
        mandatory
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
          responsibleParty
          percentCompletion
          createdAt
          updatedAt
        }
        itemName
        completion
        mandatory
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
