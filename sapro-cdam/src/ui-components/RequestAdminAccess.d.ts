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
export declare type RequestAdminAccessInputValues = {
    userID?: string;
    email?: string;
    reason?: string;
};
export declare type RequestAdminAccessValidationValues = {
    userID?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    reason?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestAdminAccessOverridesProps = {
    RequestAdminAccessGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    reason?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestAdminAccessProps = React.PropsWithChildren<{
    overrides?: RequestAdminAccessOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestAdminAccessInputValues) => RequestAdminAccessInputValues;
    onSuccess?: (fields: RequestAdminAccessInputValues) => void;
    onError?: (fields: RequestAdminAccessInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestAdminAccessInputValues) => RequestAdminAccessInputValues;
    onValidate?: RequestAdminAccessValidationValues;
} & React.CSSProperties>;
export default function RequestAdminAccess(props: RequestAdminAccessProps): React.ReactElement;
