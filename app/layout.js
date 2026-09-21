import "./globals.css";

export const metadata = {
  title: "Jeyas Kitchen",
  description: "Premium Masalas and Health Drink Powders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
