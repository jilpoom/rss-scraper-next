"use client";

import React from "react";
import { Button } from "../ui/button";
import { fontFamily } from "tailwindcss/defaultTheme";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            <>
              <Avatar>
                <AvatarImage src="#default"></AvatarImage>
                <AvatarFallback>JJY</AvatarFallback>
              </Avatar>
              <Dialog>
                <DialogTrigger>
                  <Button variant="default">Logout</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Logout</DialogTitle>
                  <DialogDescription>Are you sure to Logout?</DialogDescription>
                  <DialogFooter>
                    <Button
                      type="button"
                      onClick={handleLogout}
                      variant="outline"
                    >
                      Sure
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
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
