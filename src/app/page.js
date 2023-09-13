"use client";
import CabecalhoPadrao from "../../src/app/components/Header/header";
import RodapePadrao from "../../src/app/components/Footer/footer";
import BodyPadrao from "./components/PageBody/pagebody";
import GlobalStyles from "./styles/globalStyles";

export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <header>
        <CabecalhoPadrao/>
      </header>
      <section>
        <main>
          <BodyPadrao/>
        </main>
      </section>
      <footer>
        <RodapePadrao/>
      </footer>
    </div>
  );
}
