/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Checklist } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChecklistUpdateFormInputValues = {
    commandName?: string;
    commandPOC?: string;
    commandPOCEmail?: string;
};
export declare type ChecklistUpdateFormValidationValues = {
    commandName?: ValidationFunction<string>;
    commandPOC?: ValidationFunction<string>;
    commandPOCEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistUpdateFormOverridesProps = {
    ChecklistUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    commandName?: PrimitiveOverrideProps<TextFieldProps>;
    commandPOC?: PrimitiveOverrideProps<TextFieldProps>;
    commandPOCEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChecklistUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChecklistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    checklist?: Checklist;
    onSubmit?: (fields: ChecklistUpdateFormInputValues) => ChecklistUpdateFormInputValues;
    onSuccess?: (fields: ChecklistUpdateFormInputValues) => void;
    onError?: (fields: ChecklistUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChecklistUpdateFormInputValues) => ChecklistUpdateFormInputValues;
    onValidate?: ChecklistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChecklistUpdateForm(props: ChecklistUpdateFormProps): React.ReactElement;
