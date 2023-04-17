/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AccessRequestList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccessRequestListUpdateFormInputValues = {
    userID?: string;
    email?: string;
    reason?: string;
};
export declare type AccessRequestListUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    reason?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccessRequestListUpdateFormOverridesProps = {
    AccessRequestListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    reason?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccessRequestListUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccessRequestListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accessRequestList?: AccessRequestList;
    onSubmit?: (fields: AccessRequestListUpdateFormInputValues) => AccessRequestListUpdateFormInputValues;
    onSuccess?: (fields: AccessRequestListUpdateFormInputValues) => void;
    onError?: (fields: AccessRequestListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccessRequestListUpdateFormInputValues) => AccessRequestListUpdateFormInputValues;
    onValidate?: AccessRequestListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccessRequestListUpdateForm(props: AccessRequestListUpdateFormProps): React.ReactElement;
