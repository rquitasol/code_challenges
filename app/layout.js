import "./globals.css";

export const metadata = {
  title: "Code Challenges - JavaScript Practice Problems",
  description:
    "A collection of JavaScript challenges covering arrays, objects, and fundamentals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
