import "../styles/tailwind.css";
import { Session } from "next-auth";
import { headers } from "next/headers";
import Provider from "./Provider";
import Header from "@/components/Header/Header";
export const metadata = {
  title: "Idris Web development course",
  description: "Web development course",
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html lang="en">
      <Provider session={session}>
        <body>
          <Header />
          {children}
        </body>
      </Provider>
    </html>
  );
}
