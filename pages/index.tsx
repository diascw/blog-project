import React from 'react';
import Layout from '../components/Layout/Layout';
import List from '../components/RecipeList/List';

const recipes = [
  { title: 'FETTUCCINE AO MOLHO CREMOSO', description: 'O Fettuccine ao Molho Cremoso é um prato que combina a textura suave da massa com um molho rico e saboroso. Esta receita é perfeita para aqueles dias em que você deseja um jantar reconfortante e cheio de sabor. Simples de preparar, mas impressionante no sabor, é ideal para um jantar em família ou para surpreender seus amigos com um toque de sofisticação.' },
  { title: 'RISOTO POMODORO', description: 'O Risoto Pomodoro celebra a simplicidade e riqueza dos sabores italianos. Esta receita combina o cremoso risoto com a vivacidade dos tomates, resultando em um prato sofisticado e acolhedor. Ideal para um jantar especial ou para surpreender seus convidados, este risoto prova que ingredientes simples podem criar experiências culinárias memoráveis.' },
  { title: 'TORTA DE LIMÃO', description: 'A Torta de Limão é uma sobremesa que combina perfeitamente o doce e o azedo, criando uma experiência refrescante e irresistível. Esta receita é ideal para encerrar uma refeição com um toque leve e sofisticado, ou para qualquer ocasião em que se deseje surpreender com um sabor inesquecível.' },
];

const Home: React.FC = () => {
  return (
    <Layout>
      <List recipes={recipes} />
    </Layout>
  );
};

export default Home;
