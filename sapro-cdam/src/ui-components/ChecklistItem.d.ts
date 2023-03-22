/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ChecklistItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CheckboxFieldProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistItemOverridesProps = {
    ChecklistItem?: PrimitiveOverrideProps<FlexProps>;
    "OG ChecklistItem35702815"?: PrimitiveOverrideProps<FlexProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
    "OG ChecklistItem35502965"?: PrimitiveOverrideProps<FlexProps>;
    Button35502967?: PrimitiveOverrideProps<ButtonProps>;
    Button35692763?: PrimitiveOverrideProps<ButtonProps>;
    Details?: PrimitiveOverrideProps<FlexProps>;
    labels?: PrimitiveOverrideProps<FlexProps>;
    ownerlbl?: PrimitiveOverrideProps<TextProps>;
    tierlbl?: PrimitiveOverrideProps<TextProps>;
    referencelbl?: PrimitiveOverrideProps<TextProps>;
    "Details-data"?: PrimitiveOverrideProps<FlexProps>;
    owner?: PrimitiveOverrideProps<TextProps>;
    tier?: PrimitiveOverrideProps<TextProps>;
    reference?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ChecklistItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    checklistItem?: ChecklistItem;
} & {
    view?: "Default" | "MoreDetails";
} & {
    overrides?: ChecklistItemOverridesProps | undefined | null;
}>;
export default function ChecklistItem(props: ChecklistItemProps): React.ReactElement;
