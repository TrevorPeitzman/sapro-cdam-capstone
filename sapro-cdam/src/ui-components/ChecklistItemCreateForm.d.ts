/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChecklistItemCreateFormInputValues = {
    itemName?: string;
    completion?: boolean;
    mandatory?: boolean;
    description?: string;
    reference?: string;
    tier?: number;
    responsibleParty?: string;
};
export declare type ChecklistItemCreateFormValidationValues = {
    itemName?: ValidationFunction<string>;
    completion?: ValidationFunction<boolean>;
    mandatory?: ValidationFunction<boolean>;
    description?: ValidationFunction<string>;
    reference?: ValidationFunction<string>;
    tier?: ValidationFunction<number>;
    responsibleParty?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistItemCreateFormOverridesProps = {
    ChecklistItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    itemName?: PrimitiveOverrideProps<TextFieldProps>;
    completion?: PrimitiveOverrideProps<SwitchFieldProps>;
    mandatory?: PrimitiveOverrideProps<SwitchFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    tier?: PrimitiveOverrideProps<TextFieldProps>;
    responsibleParty?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChecklistItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ChecklistItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChecklistItemCreateFormInputValues) => ChecklistItemCreateFormInputValues;
    onSuccess?: (fields: ChecklistItemCreateFormInputValues) => void;
    onError?: (fields: ChecklistItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChecklistItemCreateFormInputValues) => ChecklistItemCreateFormInputValues;
    onValidate?: ChecklistItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChecklistItemCreateForm(props: ChecklistItemCreateFormProps): React.ReactElement;
