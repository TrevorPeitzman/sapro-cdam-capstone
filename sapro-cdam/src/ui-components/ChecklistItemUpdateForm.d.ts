/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChecklistItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChecklistItemUpdateFormInputValues = {
    itemName?: string;
    completion?: boolean;
    mandatory?: boolean;
    description?: string;
    reference?: string;
    tier?: number;
    responsibleParty?: string;
};
export declare type ChecklistItemUpdateFormValidationValues = {
    itemName?: ValidationFunction<string>;
    completion?: ValidationFunction<boolean>;
    mandatory?: ValidationFunction<boolean>;
    description?: ValidationFunction<string>;
    reference?: ValidationFunction<string>;
    tier?: ValidationFunction<number>;
    responsibleParty?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistItemUpdateFormOverridesProps = {
    ChecklistItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    itemName?: PrimitiveOverrideProps<TextFieldProps>;
    completion?: PrimitiveOverrideProps<SwitchFieldProps>;
    mandatory?: PrimitiveOverrideProps<SwitchFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    tier?: PrimitiveOverrideProps<TextFieldProps>;
    responsibleParty?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChecklistItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChecklistItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    checklistItem?: ChecklistItem;
    onSubmit?: (fields: ChecklistItemUpdateFormInputValues) => ChecklistItemUpdateFormInputValues;
    onSuccess?: (fields: ChecklistItemUpdateFormInputValues) => void;
    onError?: (fields: ChecklistItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChecklistItemUpdateFormInputValues) => ChecklistItemUpdateFormInputValues;
    onValidate?: ChecklistItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChecklistItemUpdateForm(props: ChecklistItemUpdateFormProps): React.ReactElement;
