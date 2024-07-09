"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "",
      }}
    />
  );
}
