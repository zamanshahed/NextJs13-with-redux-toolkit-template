import './globals.css'
import { ReduxProvider } from "./redux/provider";

export const metadata = {
  title: "Next 13 with Redux and tailwind",
  description: "Crafted zamanshahed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
