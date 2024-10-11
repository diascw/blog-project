import React, { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = () => {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
