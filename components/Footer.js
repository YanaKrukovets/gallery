import React from "react";

import { useRouter } from "next/router";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Footer() {
  const router = useRouter();
  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <footer className="max-w-inner xxxl:px-0">
      <div className="footer-wrapper">
        <div className="max-w-wrapper px-5 mx-auto">
          <div className="flex items-center justify-center">
            <p className="text-center">{t.footer.text}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
