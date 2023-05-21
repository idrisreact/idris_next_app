import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idris Home",
};

const page = () => {
  return <div className="container mx-auto px-4">Home</div>;
};

export default page;
