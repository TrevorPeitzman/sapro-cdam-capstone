/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const checklists = /* GraphQL */ `
  query Checklists {
    checklists {
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
export const getChecklist = /* GraphQL */ `
  query GetChecklist($id: ID!) {
    getChecklist(id: $id) {
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
export const listChecklists = /* GraphQL */ `
  query ListChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChecklistItem = /* GraphQL */ `
  query GetChecklistItem($id: ID!) {
    getChecklistItem(id: $id) {
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
export const listChecklistItems = /* GraphQL */ `
  query ListChecklistItems(
    $filter: ModelChecklistItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklistItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSupportingDocument = /* GraphQL */ `
  query GetSupportingDocument($id: ID!) {
    getSupportingDocument(id: $id) {
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
export const listSupportingDocuments = /* GraphQL */ `
  query ListSupportingDocuments(
    $filter: ModelSupportingDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupportingDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          checklistChecklistItemsId
        }
        filename
        createdAt
        updatedAt
        checklistItemSupportingDocumentsId
      }
      nextToken
    }
  }
`;
