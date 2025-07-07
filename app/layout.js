import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Personal Finance Visualizer",
  description: "Track your income and expenses easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

