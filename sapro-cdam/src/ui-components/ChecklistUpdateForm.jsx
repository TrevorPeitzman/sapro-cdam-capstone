/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Checklist } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChecklistUpdateForm(props) {
  const {
    id: idProp,
    checklist,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    commandName: "",
    commandPOC: "",
    commandPOCEmail: "",
  };
  const [commandName, setCommandName] = React.useState(
    initialValues.commandName
  );
  const [commandPOC, setCommandPOC] = React.useState(initialValues.commandPOC);
  const [commandPOCEmail, setCommandPOCEmail] = React.useState(
    initialValues.commandPOCEmail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = checklistRecord
      ? { ...initialValues, ...checklistRecord }
      : initialValues;
    setCommandName(cleanValues.commandName);
    setCommandPOC(cleanValues.commandPOC);
    setCommandPOCEmail(cleanValues.commandPOCEmail);
    setErrors({});
  };
  const [checklistRecord, setChecklistRecord] = React.useState(checklist);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Checklist, idProp)
        : checklist;
      setChecklistRecord(record);
    };
    queryData();
  }, [idProp, checklist]);
  React.useEffect(resetStateValues, [checklistRecord]);
  const validations = {
    commandName: [{ type: "Required" }],
    commandPOC: [],
    commandPOCEmail: [{ type: "Email" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          commandName,
          commandPOC,
          commandPOCEmail,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Checklist.copyOf(checklistRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChecklistUpdateForm")}
      {...rest}
    >
      <TextField
        label="Command name"
        isRequired={true}
        isReadOnly={false}
        value={commandName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              commandName: value,
              commandPOC,
              commandPOCEmail,
            };
            const result = onChange(modelFields);
            value = result?.commandName ?? value;
          }
          if (errors.commandName?.hasError) {
            runValidationTasks("commandName", value);
          }
          setCommandName(value);
        }}
        onBlur={() => runValidationTasks("commandName", commandName)}
        errorMessage={errors.commandName?.errorMessage}
        hasError={errors.commandName?.hasError}
        {...getOverrideProps(overrides, "commandName")}
      ></TextField>
      <TextField
        label="Command poc"
        isRequired={false}
        isReadOnly={false}
        value={commandPOC}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              commandName,
              commandPOC: value,
              commandPOCEmail,
            };
            const result = onChange(modelFields);
            value = result?.commandPOC ?? value;
          }
          if (errors.commandPOC?.hasError) {
            runValidationTasks("commandPOC", value);
          }
          setCommandPOC(value);
        }}
        onBlur={() => runValidationTasks("commandPOC", commandPOC)}
        errorMessage={errors.commandPOC?.errorMessage}
        hasError={errors.commandPOC?.hasError}
        {...getOverrideProps(overrides, "commandPOC")}
      ></TextField>
      <TextField
        label="Command poc email"
        isRequired={false}
        isReadOnly={false}
        value={commandPOCEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              commandName,
              commandPOC,
              commandPOCEmail: value,
            };
            const result = onChange(modelFields);
            value = result?.commandPOCEmail ?? value;
          }
          if (errors.commandPOCEmail?.hasError) {
            runValidationTasks("commandPOCEmail", value);
          }
          setCommandPOCEmail(value);
        }}
        onBlur={() => runValidationTasks("commandPOCEmail", commandPOCEmail)}
        errorMessage={errors.commandPOCEmail?.errorMessage}
        hasError={errors.commandPOCEmail?.hasError}
        {...getOverrideProps(overrides, "commandPOCEmail")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || checklist)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || checklist) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
