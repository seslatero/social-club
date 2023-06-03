import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
); // or copy stuff into public/ with a build task

import { SlButton, SlCard } from "@shoelace-style/shoelace/dist/react";

import styles from "./app.module.scss";

interface MenuItem {
  name: string;
  cost: number;
}

const MENU: MenuItem[] = [
  { name: "Grind Coffee", cost: 0.5 },
  { name: "Pod Coffee", cost: 1 },
  { name: "Milk Week", cost: 1 },
  { name: "Milk Shot", cost: 0.2 },
  { name: "Chocolate", cost: 1.5 },
  { name: "Can", cost: 1 },
];

function currency(value: number) {
  return "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const App = (): JSX.Element => {
  return (
    <main className={styles.main + " sl-theme-dark"}>
      <header className={styles.header}>
        <h3 className={styles.headerTopTitle}>Social Club</h3>
        <h1 className={styles.headerTitle}>Bld42</h1>
      </header>
      <section className={styles.buttons}>
        {MENU.map((menuItem, i) => (
          <SlButton key={i} onClick={() => console.log(menuItem)}>
            {menuItem.name} - {currency(menuItem.cost)}
          </SlButton>
        ))}
      </section>
      <section className={styles.total + " sl-theme-dark"}>
        <SlCard>
          <div slot="header">Total</div>
          {currency(140.5)}
        </SlCard>
      </section>
      <footer className={styles.footer}>Made for the Box Team</footer>
    </main>
  );
};

export default App;
