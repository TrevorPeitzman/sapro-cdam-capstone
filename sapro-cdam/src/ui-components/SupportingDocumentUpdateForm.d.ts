/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SupportingDocument } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SupportingDocumentUpdateFormInputValues = {
    filename?: string;
    fileURL?: string;
    author?: string;
};
export declare type SupportingDocumentUpdateFormValidationValues = {
    filename?: ValidationFunction<string>;
    fileURL?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SupportingDocumentUpdateFormOverridesProps = {
    SupportingDocumentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    fileURL?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SupportingDocumentUpdateFormProps = React.PropsWithChildren<{
    overrides?: SupportingDocumentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    supportingDocument?: SupportingDocument;
    onSubmit?: (fields: SupportingDocumentUpdateFormInputValues) => SupportingDocumentUpdateFormInputValues;
    onSuccess?: (fields: SupportingDocumentUpdateFormInputValues) => void;
    onError?: (fields: SupportingDocumentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SupportingDocumentUpdateFormInputValues) => SupportingDocumentUpdateFormInputValues;
    onValidate?: SupportingDocumentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SupportingDocumentUpdateForm(props: SupportingDocumentUpdateFormProps): React.ReactElement;
