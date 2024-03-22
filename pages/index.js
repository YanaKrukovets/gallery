import HomePage from "../components/HomePage";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Online Art Gallery by Yana Krukovets. Ottawa, Canada</title>
        <meta
          name="description"
          content="Online Art Gallery by Yana Krukovets, Ottawa artist. Original Acrylic, watercolor hand painted artworks. Abstract space nature wall art, mini art, folk art, Petrykivka folk art"
        />
      </Head>
      <HomePage />
    </>
  );
}
