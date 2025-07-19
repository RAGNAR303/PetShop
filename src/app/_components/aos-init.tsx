"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Animaçao com a blibioteca https://michalsnik.github.io/aos/
export function AosInit() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return null;
}
