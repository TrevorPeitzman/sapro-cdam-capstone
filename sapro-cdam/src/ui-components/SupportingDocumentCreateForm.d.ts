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
export declare type SupportingDocumentCreateFormInputValues = {
    filename?: string;
    fileURL?: string;
    author?: string;
};
export declare type SupportingDocumentCreateFormValidationValues = {
    filename?: ValidationFunction<string>;
    fileURL?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SupportingDocumentCreateFormOverridesProps = {
    SupportingDocumentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    fileURL?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SupportingDocumentCreateFormProps = React.PropsWithChildren<{
    overrides?: SupportingDocumentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SupportingDocumentCreateFormInputValues) => SupportingDocumentCreateFormInputValues;
    onSuccess?: (fields: SupportingDocumentCreateFormInputValues) => void;
    onError?: (fields: SupportingDocumentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SupportingDocumentCreateFormInputValues) => SupportingDocumentCreateFormInputValues;
    onValidate?: SupportingDocumentCreateFormValidationValues;
} & React.CSSProperties>;
export default function SupportingDocumentCreateForm(props: SupportingDocumentCreateFormProps): React.ReactElement;
