import React from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import Image from "next/image";
import Link from "next/link";

import HomeBannerNew from "./HomeBannerNew";
import fr from "../locales/fr";

export default function HomePage() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <HomeBannerNew />
      <div className="max-w-wrapper mx-auto px-5 my-[50px]">
        <h1 className="text-[24px] mb-[20px] border-b-[3px] border-green uppercase max-w-[350px] font-inka">
          Most recent
        </h1>
        <div></div>
      </div>
    </>
  );
}
