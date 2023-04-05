/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChecklistItemProps } from "./ChecklistItem";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistItemCollectionOverridesProps = {
    ChecklistItemCollection?: PrimitiveOverrideProps<CollectionProps>;
    ChecklistItem?: ChecklistItemProps;
} & EscapeHatchProps;
export declare type ChecklistItemCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ChecklistItemProps;
} & {
    overrides?: ChecklistItemCollectionOverridesProps | undefined | null;
}>;
export default function ChecklistItemCollection(props: ChecklistItemCollectionProps): React.ReactElement;
