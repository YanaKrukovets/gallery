import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import en from "../locales/en";
import fr from "../locales/fr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSquareInstagram,
  faInstagram,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <Image
        src="/images/banner.png"
        alt="An orange abstract art work"
        width={2000}
        height={240}
        className="min-h-[150px]"
      />
      <div className="bg-lightGray pb-[10px]">
        <div className="max-w-wrapper mx-auto px-5 py-[50px] sm:py-[40px]">
          <h1 className="text-[24px] sm:text-[20px] mb-[20px] border-b-[3px] border-green uppercase max-w-[350px] font-inka">
            Yana Krukovets
          </h1>
          <div className="mt-[40px] sm:mt-[30px] max-w-[700px] mx-auto">
            <div className="flex justify-between">
              <div className="my-auto">
                <div className="mb-[20px]">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a
                    className="underline ml-[10px]"
                    href="mailto:krukovets.yana@gmail.com"
                  >
                    krukovets.yana@gmail.com
                  </a>
                </div>
                <div className="flex">
                  <a
                    className=""
                    href="https://www.instagram.com/sunny_art87/"
                    target="_blank"
                  >
                    <Image
                      src="/images/icons/square-instagram.svg"
                      alt="instagram icon"
                      width={20}
                      height={40}
                    />
                  </a>
                  <a
                    className="underline ml-[10px]"
                    href="https://www.instagram.com/sunny_art87/"
                    target="_blank"
                  >
                    sunny_art87
                  </a>
                </div>
              </div>

              <Image
                src="/images/components/contact/art.webp"
                alt="round art"
                width={400}
                height={450}
                className="md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
