/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ChecklistItem } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChecklistItemUpdateForm(props) {
  const {
    id: idProp,
    checklistItem: checklistItemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    itemName: "",
    completion: false,
    mandatory: false,
    description: "",
    reference: "",
    tier: "",
    responsibleParty: "",
  };
  const [itemName, setItemName] = React.useState(initialValues.itemName);
  const [completion, setCompletion] = React.useState(initialValues.completion);
  const [mandatory, setMandatory] = React.useState(initialValues.mandatory);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [reference, setReference] = React.useState(initialValues.reference);
  const [tier, setTier] = React.useState(initialValues.tier);
  const [responsibleParty, setResponsibleParty] = React.useState(
    initialValues.responsibleParty
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = checklistItemRecord
      ? { ...initialValues, ...checklistItemRecord }
      : initialValues;
    setItemName(cleanValues.itemName);
    setCompletion(cleanValues.completion);
    setMandatory(cleanValues.mandatory);
    setDescription(cleanValues.description);
    setReference(cleanValues.reference);
    setTier(cleanValues.tier);
    setResponsibleParty(cleanValues.responsibleParty);
    setErrors({});
  };
  const [checklistItemRecord, setChecklistItemRecord] = React.useState(
    checklistItemModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ChecklistItem, idProp)
        : checklistItemModelProp;
      setChecklistItemRecord(record);
    };
    queryData();
  }, [idProp, checklistItemModelProp]);
  React.useEffect(resetStateValues, [checklistItemRecord]);
  const validations = {
    itemName: [{ type: "Required" }],
    completion: [{ type: "Required" }],
    mandatory: [],
    description: [],
    reference: [],
    tier: [],
    responsibleParty: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
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
          itemName,
          completion,
          mandatory,
          description,
          reference,
          tier,
          responsibleParty,
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
            ChecklistItem.copyOf(checklistItemRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ChecklistItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Item name"
        isRequired={true}
        isReadOnly={false}
        value={itemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName: value,
              completion,
              mandatory,
              description,
              reference,
              tier,
              responsibleParty,
            };
            const result = onChange(modelFields);
            value = result?.itemName ?? value;
          }
          if (errors.itemName?.hasError) {
            runValidationTasks("itemName", value);
          }
          setItemName(value);
        }}
        onBlur={() => runValidationTasks("itemName", itemName)}
        errorMessage={errors.itemName?.errorMessage}
        hasError={errors.itemName?.hasError}
        {...getOverrideProps(overrides, "itemName")}
      ></TextField>
      <SwitchField
        label="Completion"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completion}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              itemName,
              completion: value,
              mandatory,
              description,
              reference,
              tier,
              responsibleParty,
            };
            const result = onChange(modelFields);
            value = result?.completion ?? value;
          }
          if (errors.completion?.hasError) {
            runValidationTasks("completion", value);
          }
          setCompletion(value);
        }}
        onBlur={() => runValidationTasks("completion", completion)}
        errorMessage={errors.completion?.errorMessage}
        hasError={errors.completion?.hasError}
        {...getOverrideProps(overrides, "completion")}
      ></SwitchField>
      <SwitchField
        label="Mandatory"
        defaultChecked={false}
        isDisabled={false}
        isChecked={mandatory}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              itemName,
              completion,
              mandatory: value,
              description,
              reference,
              tier,
              responsibleParty,
            };
            const result = onChange(modelFields);
            value = result?.mandatory ?? value;
          }
          if (errors.mandatory?.hasError) {
            runValidationTasks("mandatory", value);
          }
          setMandatory(value);
        }}
        onBlur={() => runValidationTasks("mandatory", mandatory)}
        errorMessage={errors.mandatory?.errorMessage}
        hasError={errors.mandatory?.hasError}
        {...getOverrideProps(overrides, "mandatory")}
      ></SwitchField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              completion,
              mandatory,
              description: value,
              reference,
              tier,
              responsibleParty,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Reference"
        isRequired={false}
        isReadOnly={false}
        value={reference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              completion,
              mandatory,
              description,
              reference: value,
              tier,
              responsibleParty,
            };
            const result = onChange(modelFields);
            value = result?.reference ?? value;
          }
          if (errors.reference?.hasError) {
            runValidationTasks("reference", value);
          }
          setReference(value);
        }}
        onBlur={() => runValidationTasks("reference", reference)}
        errorMessage={errors.reference?.errorMessage}
        hasError={errors.reference?.hasError}
        {...getOverrideProps(overrides, "reference")}
      ></TextField>
      <TextField
        label="Tier"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tier}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              itemName,
              completion,
              mandatory,
              description,
              reference,
              tier: value,
              responsibleParty,
            };
            const result = onChange(modelFields);
            value = result?.tier ?? value;
          }
          if (errors.tier?.hasError) {
            runValidationTasks("tier", value);
          }
          setTier(value);
        }}
        onBlur={() => runValidationTasks("tier", tier)}
        errorMessage={errors.tier?.errorMessage}
        hasError={errors.tier?.hasError}
        {...getOverrideProps(overrides, "tier")}
      ></TextField>
      <TextField
        label="Responsible party"
        isRequired={false}
        isReadOnly={false}
        value={responsibleParty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              completion,
              mandatory,
              description,
              reference,
              tier,
              responsibleParty: value,
            };
            const result = onChange(modelFields);
            value = result?.responsibleParty ?? value;
          }
          if (errors.responsibleParty?.hasError) {
            runValidationTasks("responsibleParty", value);
          }
          setResponsibleParty(value);
        }}
        onBlur={() => runValidationTasks("responsibleParty", responsibleParty)}
        errorMessage={errors.responsibleParty?.errorMessage}
        hasError={errors.responsibleParty?.hasError}
        {...getOverrideProps(overrides, "responsibleParty")}
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
          isDisabled={!(idProp || checklistItemModelProp)}
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
              !(idProp || checklistItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
