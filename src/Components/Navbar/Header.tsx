import Image from 'next/image';

export function Header() {
  return (
    <header className='w-full h-16 flex items-center' style={{ backgroundColor: '#1E1E1E' }}>
      <div className="ml-4">
        <Image
          src="/logo.svg"
          alt="logomarca caminhos do sabor"
          width={112}
          height={38}
        />
      </div>

    </header>
  );
}
