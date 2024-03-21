import HomePage from "../components/HomePage";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Online Art Gallery by Yana Krukovets</title>
        <meta
          name="description"
          content="Online Art Gallery by Yana Krukovets. Acrylic, watercolor hand painted artworks. Abstract space nature wall art, mini art"
        />
      </Head>
      <HomePage />
    </>
  );
}
