import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeBannerNew from "../components/HomeBannerNew";

import en from "../locales/en";
import fr from "../locales/fr";

import HTMLFlipBook from "react-pageflip";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page honey-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function MyBook(props) {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <HTMLFlipBook width={370} height={420} showCover={true}>
      <PageCover></PageCover>
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="5">Page text</Page>
      <Page number="6">Page text</Page>
      <PageCover>THE END</PageCover>
    </HTMLFlipBook>
  );
}

export default function HoneycombLand() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="max-w-inner my-[50px] mt-[128px]">
        <div className="max-w-wrapper px-5 mx-auto">
          <p>Click on the book to open it.</p>
          <div className="ml-[245px]">
            <MyBook />
          </div>
        </div>
      </div>
    </>
  );
}
