import type { Metadata, Viewport } from "next";
import { Anton, Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

// More readable body/UI font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaranta | Life Coach",
  description:
    "Acompañamiento personal y coaching consciente para reconectar contigo, tomar decisiones con claridad y sostener cambios de vida con calma y presencia.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${anton.variable} ${inter.variable} ${sourceCodePro.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
