/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SupportingDocument } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SupportingDocumentUpdateForm(props) {
  const {
    id: idProp,
    supportingDocument,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    filename: "",
    fileURL: "",
    author: "",
  };
  const [filename, setFilename] = React.useState(initialValues.filename);
  const [fileURL, setFileURL] = React.useState(initialValues.fileURL);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = supportingDocumentRecord
      ? { ...initialValues, ...supportingDocumentRecord }
      : initialValues;
    setFilename(cleanValues.filename);
    setFileURL(cleanValues.fileURL);
    setAuthor(cleanValues.author);
    setErrors({});
  };
  const [supportingDocumentRecord, setSupportingDocumentRecord] =
    React.useState(supportingDocument);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SupportingDocument, idProp)
        : supportingDocument;
      setSupportingDocumentRecord(record);
    };
    queryData();
  }, [idProp, supportingDocument]);
  React.useEffect(resetStateValues, [supportingDocumentRecord]);
  const validations = {
    filename: [{ type: "Required" }],
    fileURL: [{ type: "URL" }],
    author: [],
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
          filename,
          fileURL,
          author,
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
            SupportingDocument.copyOf(supportingDocumentRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SupportingDocumentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Filename"
        isRequired={true}
        isReadOnly={false}
        value={filename}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              filename: value,
              fileURL,
              author,
            };
            const result = onChange(modelFields);
            value = result?.filename ?? value;
          }
          if (errors.filename?.hasError) {
            runValidationTasks("filename", value);
          }
          setFilename(value);
        }}
        onBlur={() => runValidationTasks("filename", filename)}
        errorMessage={errors.filename?.errorMessage}
        hasError={errors.filename?.hasError}
        {...getOverrideProps(overrides, "filename")}
      ></TextField>
      <TextField
        label="File url"
        isRequired={false}
        isReadOnly={false}
        value={fileURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              filename,
              fileURL: value,
              author,
            };
            const result = onChange(modelFields);
            value = result?.fileURL ?? value;
          }
          if (errors.fileURL?.hasError) {
            runValidationTasks("fileURL", value);
          }
          setFileURL(value);
        }}
        onBlur={() => runValidationTasks("fileURL", fileURL)}
        errorMessage={errors.fileURL?.errorMessage}
        hasError={errors.fileURL?.hasError}
        {...getOverrideProps(overrides, "fileURL")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              filename,
              fileURL,
              author: value,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
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
          isDisabled={!(idProp || supportingDocument)}
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
              !(idProp || supportingDocument) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
