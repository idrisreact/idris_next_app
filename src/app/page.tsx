import SignIn from "@/components/SignIn/SignIn";
import { Hero } from "../components/Hero/Hero";
import { Container } from "../components/Container/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idris Home",
};

const home = () => {
  return (
    <Container>
      <Hero
        header="Idris dev school"
        subHeading="I am a software engineer with over 5 years of experience building responsive applications with best practices"
        ctaText="Sign up"
      />
    </Container>
  );
};

export default home;
