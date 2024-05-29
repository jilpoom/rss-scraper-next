"use client";
import Navbar from "@/components/dashboard/navbar";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);
    if (access_token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </>
  );
}
