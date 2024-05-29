import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="icon" href="/assets/images/favicon.png" type="image/gif" />
          <title>Bostorek</title>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css" />
          <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
          <link href="/assets/css/style.css" rel="stylesheet" />
          <link href="/assets/css/responsive.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
