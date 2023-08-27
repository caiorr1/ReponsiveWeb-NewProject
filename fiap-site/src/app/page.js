"use client";
import BotaoConhecaPlanos from "../../src/app/components/Button/button";
import CabecalhoPadrao from "../../src/app/components/Header/header";
import RodapePadrao from "../../src/app/components/Footer/footer";
import BodyPadrao from "./components/PageBody/pagebody";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#1E1B4B' }}>
      <header><CabecalhoPadrao/></header>
      <section style={{ flex: 1, margin: '70px', justifyContent: 'center', alignItems: 'center' }}>
        <main><BodyPadrao/></main>
      </section>
      <footer><RodapePadrao/></footer>
    </div>
  );
}
