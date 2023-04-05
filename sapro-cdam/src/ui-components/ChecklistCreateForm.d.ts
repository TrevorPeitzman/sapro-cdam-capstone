/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChecklistCreateFormInputValues = {
    commandName?: string;
    commandPOC?: string;
    commandPOCEmail?: string;
    percentCompletion?: number;
};
export declare type ChecklistCreateFormValidationValues = {
    commandName?: ValidationFunction<string>;
    commandPOC?: ValidationFunction<string>;
    commandPOCEmail?: ValidationFunction<string>;
    percentCompletion?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistCreateFormOverridesProps = {
    ChecklistCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    commandName?: PrimitiveOverrideProps<TextFieldProps>;
    commandPOC?: PrimitiveOverrideProps<TextFieldProps>;
    commandPOCEmail?: PrimitiveOverrideProps<TextFieldProps>;
    percentCompletion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChecklistCreateFormProps = React.PropsWithChildren<{
    overrides?: ChecklistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChecklistCreateFormInputValues) => ChecklistCreateFormInputValues;
    onSuccess?: (fields: ChecklistCreateFormInputValues) => void;
    onError?: (fields: ChecklistCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChecklistCreateFormInputValues) => ChecklistCreateFormInputValues;
    onValidate?: ChecklistCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChecklistCreateForm(props: ChecklistCreateFormProps): React.ReactElement;
