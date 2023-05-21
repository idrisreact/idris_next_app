import React, { FC } from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import VerticalSpace from "../VerticalSpace/VerticalSpace";

interface HeroProps {
  header: string;
  subHeading: string;
  ctaText: string;
}

export const Hero: FC<HeroProps> = (props) => {
  const { header, subHeading, ctaText } = props;

  return (
    <div>
      <Text type="h1">{header}</Text>
      <Text type="default">{subHeading}</Text>
      <VerticalSpace size="16px" />
      <Button isPrimary>{ctaText}</Button>
    </div>
  );
};
