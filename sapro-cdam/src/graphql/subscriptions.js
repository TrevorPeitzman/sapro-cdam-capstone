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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      checklistChecklistItemsId
    }
  }
`;
export const onCreateAccessRequestList = /* GraphQL */ `
  subscription OnCreateAccessRequestList(
    $filter: ModelSubscriptionAccessRequestListFilterInput
  ) {
    onCreateAccessRequestList(filter: $filter) {
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
export const onUpdateAccessRequestList = /* GraphQL */ `
  subscription OnUpdateAccessRequestList(
    $filter: ModelSubscriptionAccessRequestListFilterInput
  ) {
    onUpdateAccessRequestList(filter: $filter) {
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
export const onDeleteAccessRequestList = /* GraphQL */ `
  subscription OnDeleteAccessRequestList(
    $filter: ModelSubscriptionAccessRequestListFilterInput
  ) {
    onDeleteAccessRequestList(filter: $filter) {
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
