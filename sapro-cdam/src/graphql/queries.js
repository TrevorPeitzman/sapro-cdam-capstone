/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChecklist = /* GraphQL */ `
  query GetChecklist($id: ID!) {
    getChecklist(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChecklists = /* GraphQL */ `
  query SyncChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChecklists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncChecklistItems = /* GraphQL */ `
  query SyncChecklistItems(
    $filter: ModelChecklistItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChecklistItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncSupportingDocuments = /* GraphQL */ `
  query SyncSupportingDocuments(
    $filter: ModelSupportingDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSupportingDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
      nextToken
      startedAt
    }
  }
`;
