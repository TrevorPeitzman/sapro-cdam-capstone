/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChecklistProps } from "./Checklist";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistCollectionOverridesProps = {
    ChecklistCollection?: PrimitiveOverrideProps<CollectionProps>;
    Checklist?: ChecklistProps;
} & EscapeHatchProps;
export declare type ChecklistCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ChecklistProps;
} & {
    overrides?: ChecklistCollectionOverridesProps | undefined | null;
}>;
export default function ChecklistCollection(props: ChecklistCollectionProps): React.ReactElement;
