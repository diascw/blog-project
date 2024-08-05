import Image from "next/image"
export function Navbar() {
    return (
        <header>
            <Image
            src="/images/logo.png"
            alt='Logomarca do Caminhos do Sabor'
            width={69}
            height={56}
            />
        </header>
    )
}