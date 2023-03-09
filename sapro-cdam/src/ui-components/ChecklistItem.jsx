/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, CheckboxField, Flex, Text } from "@aws-amplify/ui-react";
export default function ChecklistItem(props) {
  const {
    itemDetails = "Default Checklist Item",
    test,
    checklistItem,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: {
        CheckboxField: {},
        Button35502967: {},
        Button35692763: {},
        "OG ChecklistItem35502965": {},
        "OG ChecklistItem35702815": {},
        ownerlbl: {},
        tierlbl: {},
        referencelbl: {},
        labels: {},
        owner: {},
        tier: {},
        reference: {},
        "Details-data": {},
        Details: {},
        ChecklistItem: {},
      },
      variantValues: { view: "MoreDetails" },
    },
    {
      overrides: {
        CheckboxField: {},
        Button35502967: {},
        Button35692763: {},
        "OG ChecklistItem35502965": { display: "none" },
        "OG ChecklistItem35702815": {},
        ownerlbl: {},
        tierlbl: {},
        referencelbl: {},
        labels: {},
        owner: {},
        tier: {},
        reference: {},
        "Details-data": { justifyContent: "flex-start" },
        Details: { display: "none" },
        ChecklistItem: {},
      },
      variantValues: { view: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "ChecklistItem")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 20px 10px 20px"
        display="flex"
        {...getOverrideProps(overrides, "OG ChecklistItem35702815")}
      >
        <CheckboxField
          width="unset"
          height="unset"
          label="Checklist item is the title"
          justifyContent="flex-start"
          padding="5px 5px 5px 5px"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 20px 10px 20px"
          display="flex"
          {...getOverrideProps(overrides, "OG ChecklistItem35502965")}
        >
          <Button
            width="unset"
            height="unset"
            justifyContent="flex-end"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="Upload File"
            {...getOverrideProps(overrides, "Button35502967")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            justifyContent="flex-end"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="Download Current File"
            {...getOverrideProps(overrides, "Button35692763")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Details")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="10px 7px 10px 52px"
          display="flex"
          {...getOverrideProps(overrides, "labels")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Owner:"
            {...getOverrideProps(overrides, "ownerlbl")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Tier:"
            {...getOverrideProps(overrides, "tierlbl")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Reference:"
            {...getOverrideProps(overrides, "referencelbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 20px 10px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Details-data")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="This is the Owner/Subcategory of the checklist item"
            {...getOverrideProps(overrides, "owner")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="This is the tier of the checklist item"
            {...getOverrideProps(overrides, "tier")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="This is the Reference & Paragraph"
            {...getOverrideProps(overrides, "reference")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
