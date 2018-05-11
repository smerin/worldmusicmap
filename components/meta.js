import Head from "next/head";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
        background: #bbb;
        font: 14px menlo;
        color: #fff;
      }
    `}</style>
  </div>
);
