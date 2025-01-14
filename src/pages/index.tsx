import Head from "next/head";
import { Header } from "@/Components/Navbar/Header";
import { Feed } from "@/Components/Feed/Feed";
import { Post as PostType } from "@/types";

const posts: PostType[] = [
  {
    title: "RISOTO POMODORO",
    description:
      "O Risoto Pomodoro celebra a simplicidade e riqueza dos sabores italianos. Esta receita combina o cremoso risoto com a vivacidade dos tomates, resultando em um prato sofisticado e acolhedor. Ideal para um jantar especial ou para surpreender seus convidados, este risoto prova que ingredientes simples podem criar experiências culinárias memoráveis.",
    author: "- Wanessa Dias",
    imagePost: "https://uploaddeimagens.com.br/images/004/821/461/full/risoto.png?1722889198",
    imageDescription: "Imagem de um prato de Risoto Pomodoro",
  },
  {
    title: "TORTA DE LIMÃO",
    description:
      "A Torta de Limão é uma sobremesa que combina perfeitamente o doce e o azedo, criando uma experiência refrescante e irresistível. Esta receita é ideal para encerrar uma refeição com um toque leve e sofisticado, ou para qualquer ocasião em que se deseje surpreender com um sabor inesquecível.",
    author: "- Vicente Pimenta",
    imagePost: "https://www.receiteria.com.br/wp-content/uploads/torta-de-limao-facil-capa.jpeg",
    imageDescription: "Imagem de uma Torta de Limão",
  },
  {
    title: "Fettuccine ao Molho Cremoso",
    description:
      "O Fettuccine ao Molho Cremoso é um prato que combina a textura suave da massa com um molho rico e saboroso. Esta receita é perfeita para aqueles dias em que você deseja um jantar reconfortante e cheio de sabor. Simples de preparar, mas impressionante no sabor, é ideal para um jantar em família ou para surpreender seus amigos com um toque de sofisticação.",
    author: "- Pedro Galvão",
    imagePost: "https://receitason.com/wp-content/uploads/2023/04/fettuccine-de-camarao-ao-molho-de-tomate.jpg",
    imageDescription: "Imagem de Fettuccine ao Molho de Tomate",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Caminhos do Sabor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='w-full max-w-[1220px] flex flex-col mx-auto pb-12'>
        <Header />
        <Feed posts={posts} />
      </div>
    </>
  );
}
