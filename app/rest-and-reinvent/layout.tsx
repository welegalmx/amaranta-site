import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rest & Reinvent | Amaranta Coach",
  description:
    "Coaching grupal para quienes están en un momento de cambio: desaprender lo que ya no necesitas, fortalecer tu confianza, crear un plan real y tomar acción hacia la vida que quieres.",
  openGraph: {
    title: "Rest & Reinvent | Amaranta Coach",
    description:
      "Coaching grupal para quienes están en un momento de cambio. Proceso guiado con claridad, estructura y acompañamiento.",
  },
};

export default function RestAndReinventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
