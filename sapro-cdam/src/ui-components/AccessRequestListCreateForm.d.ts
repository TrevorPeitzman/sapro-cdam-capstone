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
export declare type AccessRequestListCreateFormInputValues = {
    email?: string;
    reason?: string;
};
export declare type AccessRequestListCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    reason?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccessRequestListCreateFormOverridesProps = {
    AccessRequestListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    reason?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccessRequestListCreateFormProps = React.PropsWithChildren<{
    overrides?: AccessRequestListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccessRequestListCreateFormInputValues) => AccessRequestListCreateFormInputValues;
    onSuccess?: (fields: AccessRequestListCreateFormInputValues) => void;
    onError?: (fields: AccessRequestListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccessRequestListCreateFormInputValues) => AccessRequestListCreateFormInputValues;
    onValidate?: AccessRequestListCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccessRequestListCreateForm(props: AccessRequestListCreateFormProps): React.ReactElement;
