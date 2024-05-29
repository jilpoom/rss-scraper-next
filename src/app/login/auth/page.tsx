"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  const code = useSearchParams().get("code");

  useEffect(() => {
    axios
      .get(`http://localhost:10010/auths/kakao/authorize?code=${code}`)
      .then((r) => {
        localStorage.setItem("access_token", r.data.access_token);
        location.href = "/";
      });
  });

  return <div>Redirect...</div>;
};

export default Page;
