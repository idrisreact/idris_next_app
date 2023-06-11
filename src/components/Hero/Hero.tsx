"use client";
import React, { FC } from "react";
import { Button } from "../Button/Button";

interface HeroProps {
  header: string;
  subHeading: string;
  ctaText: string;
}

export const Hero: FC<HeroProps> = (props) => {
  const { header, subHeading, ctaText } = props;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:h-screen">
      <h1 className="text-4xl font-bold text-center mb-3">{header}</h1>
      <h2 className="text-lg text-center text-gray-600 mb-4">{subHeading}</h2>
      <Button isPrimary>{ctaText}</Button>
    </div>
  );
};
