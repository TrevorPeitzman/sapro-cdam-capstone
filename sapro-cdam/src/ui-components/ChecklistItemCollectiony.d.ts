/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ChecklistItemProps } from "./ChecklistItem";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChecklistItemCollectionyOverridesProps = {
    ChecklistItemCollectiony?: PrimitiveOverrideProps<CollectionProps>;
    ChecklistItem?: ChecklistItemProps;
} & EscapeHatchProps;
export declare type ChecklistItemCollectionyProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ChecklistItemProps;
} & {
    overrides?: ChecklistItemCollectionyOverridesProps | undefined | null;
}>;
export default function ChecklistItemCollectiony(props: ChecklistItemCollectionyProps): React.ReactElement;
