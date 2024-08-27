"use client";

import { useState, useEffect } from "react";

const AgeDisplay = ({ birthDate }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();
      const diff = now - birthDate;
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(9));
    };

    updateAge();
    const interval = setInterval(updateAge, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, [birthDate]);

  return <p>{age} yrs old</p>;
};

export default AgeDisplay;
