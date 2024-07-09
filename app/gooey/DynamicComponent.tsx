"use client";
import { useState, useEffect } from "react";

export default function DynamicComponent({ html }: { html: string }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
