import Layout from "@/components/layouts";
import Container from "@/components/container";
import Head from "next/head";
import Home from "./home";

export default function Index() {
  return (
    <>
      <Layout isHome={true}>
        <Head>
          <title>next.js boilerplate with javascript</title>
        </Head>
        <Container>
          <Home />
        </Container>
      </Layout>
    </>
  );
}
