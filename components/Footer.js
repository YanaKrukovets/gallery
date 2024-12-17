import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <footer className="max-w-inner xxxl:px-0">
      <div className="footer-wrapper">
        <div className="max-w-wrapper px-5 mx-auto">
          <div className="flex items-center justify-between md:flex-col">
            <div className="flex md:mb-[10px]">
              <a
                role="button"
                className=" "
                href="https://www.instagram.com/sunny_art87/"
                target="_blank"
                aria-label="link"
              >
                <Image
                  src="/images/icons/square-instagram.svg"
                  alt="instagram icon"
                  width={40}
                  height={40}
                  priority={true}
                  className="object-cover transition-transform duration-300 transform hover:scale-110 md:max-w-[30px]"
                />
              </a>
              <a
                role="button"
                className="ml-[10px] mt-[10px]"
                href="https://www.instagram.com/sunny_art87/"
                target="_blank"
                aria-label="sunny_art87"
              >
                sunny_art87
              </a>
            </div>
            <p className="text-center">{t.footer.text}</p>
            <div className="">
              <Link href="/" passHref className="md:hidden">
                <Image
                  src="/images/logos/logo-en.png"
                  className="w-full max-w-[200px] mt-[10px] object-cover transition-transform duration-300 transform hover:scale-110"
                  alt="Online Art Gallery by Yana Krukovets"
                  priority={true}
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
