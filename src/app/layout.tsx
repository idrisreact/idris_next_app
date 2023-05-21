import "../styles/tailwind.css";
export const metadata = {
  title: "Idris Web development course",
  description: "Web development course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
