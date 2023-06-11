import SignIn from "@/components/SignIn/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idris Home",
};

const home = () => {
  return (
    <div className="container mx-auto px-4">
      <p>Home</p>
      <SignIn />
    </div>
  );
};

export default home;
