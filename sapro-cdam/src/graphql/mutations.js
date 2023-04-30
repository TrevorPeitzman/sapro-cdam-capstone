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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      checklistChecklistItemsId
    }
  }
`;
export const createAccessRequestList = /* GraphQL */ `
  mutation CreateAccessRequestList(
    $input: CreateAccessRequestListInput!
    $condition: ModelAccessRequestListConditionInput
  ) {
    createAccessRequestList(input: $input, condition: $condition) {
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
export const updateAccessRequestList = /* GraphQL */ `
  mutation UpdateAccessRequestList(
    $input: UpdateAccessRequestListInput!
    $condition: ModelAccessRequestListConditionInput
  ) {
    updateAccessRequestList(input: $input, condition: $condition) {
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
export const deleteAccessRequestList = /* GraphQL */ `
  mutation DeleteAccessRequestList(
    $input: DeleteAccessRequestListInput!
    $condition: ModelAccessRequestListConditionInput
  ) {
    deleteAccessRequestList(input: $input, condition: $condition) {
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
