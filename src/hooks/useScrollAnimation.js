// src/hooks/useScrollAnimation.js
import { useEffect } from "react";

export const useScrollAnimation = (selector = ".animar") => {
  useEffect(() => {
    const elementos = document.querySelectorAll(selector);
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
};
