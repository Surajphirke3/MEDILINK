"use client"
import { useRive } from "@rive-app/react-canvas";

export default function RiveHero() {
  const { RiveComponent } = useRive({
    src: "/doctor.riv", // ✅ use slash for public
    autoplay: true,
  });

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <RiveComponent />
    </div>
  );
}
