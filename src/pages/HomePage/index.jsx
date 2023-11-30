import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function HomePage() {
  const [angka, setAngka] = useState(0);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">HomePage</h1>
      Sekarang angkanya adalah : {angka}
      <Button
        onClick={() => setAngka(angka + 1)}
        variant="bordered"
        color="primary"
      >
        Pencet Aku!
      </Button>
    </div>
  );
}
