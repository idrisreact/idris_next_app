import React, { FC } from "react";

interface HeroProps {
  header: string;
  subHeading: string;
  ctaText: string;
}

const Hero: FC<HeroProps> = (props) => {
  const { header, subHeading, ctaText } = props;

  return <div>Hero</div>;
};

export default Hero;
