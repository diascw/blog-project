import React, { FC } from 'react';
import Image from 'next/image';

export const Header: FC = () => {
  return (
    <header className="w-full h-16 flex items-center bg-[#1E1E1E]">
      <div className="ml-4">
        <Image
          src="/logo.svg"
          alt="logomarca caminhos do sabor"
          width={112}
          height={38}
          layout="fixed"
        />
      </div>
    </header>
  );
};
