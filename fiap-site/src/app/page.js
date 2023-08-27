"use client";
import BotaoConhecaPlanos from "../../src/app/components/Button/button";
import CabecalhoPadrao from "../../src/app/components/Header/header";
import RodapePadrao from "../../src/app/components/Footer/footer";
import BodyPadrao from "./components/PageBody/pagebody";

export default function Home() {
  return (
    <main>
      <section>
        <CabecalhoPadrao/>
        <main><BodyPadrao/></main>
      </section>
      <footer><RodapePadrao/></footer>
    </main>
  );
}
