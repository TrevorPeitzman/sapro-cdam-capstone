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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        checklistChecklistItemsId
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        checklistChecklistItemsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAccessRequestList = /* GraphQL */ `
  query GetAccessRequestList($id: ID!) {
    getAccessRequestList(id: $id) {
      id
      userID
      email
      reason
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAccessRequestLists = /* GraphQL */ `
  query ListAccessRequestLists(
    $filter: ModelAccessRequestListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccessRequestLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        email
        reason
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
export const syncAccessRequestLists = /* GraphQL */ `
  query SyncAccessRequestLists(
    $filter: ModelAccessRequestListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccessRequestLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        email
        reason
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
