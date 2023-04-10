/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TallCardProps } from "./TallCard";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SupportingDocumentOverridesProps = {
    SupportingDocument?: PrimitiveOverrideProps<FlexProps>;
    TallCard?: TallCardProps;
} & EscapeHatchProps;
export declare type SupportingDocumentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SupportingDocumentOverridesProps | undefined | null;
}>;
export default function SupportingDocument(props: SupportingDocumentProps): React.ReactElement;
