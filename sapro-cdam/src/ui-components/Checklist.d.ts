/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Checklist } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistOverridesProps = {
    Checklist?: PrimitiveOverrideProps<FlexProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Content35562745?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Paragraph?: PrimitiveOverrideProps<TextProps>;
    Content35742720?: PrimitiveOverrideProps<FlexProps>;
    Button36512717?: PrimitiveOverrideProps<ButtonProps>;
    Button35742723?: PrimitiveOverrideProps<ButtonProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type ChecklistProps = React.PropsWithChildren<Partial<FlexProps> & {
    checklist?: Checklist;
} & {
    overrides?: ChecklistOverridesProps | undefined | null;
}>;
export default function Checklist(props: ChecklistProps): React.ReactElement;
