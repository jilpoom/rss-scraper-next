"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { fontFamily } from "tailwindcss/defaultTheme";
import Link from "next/link";

const Navbar = ({
  isLoggedIn,
  handleLogout,
}: {
  isLoggedIn: boolean;
  handleLogout: () => void;
}) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className={`${fontFamily.sans} text-white text-lg font-semibold`}>
          RSS Scraper
        </div>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <Button variant="default" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button variant="default">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button variant="outline">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
