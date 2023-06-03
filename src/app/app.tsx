import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/"
); // or copy stuff into public/ with a build task

import { SlButton } from "@shoelace-style/shoelace/dist/react";

import styles from "./app.module.scss";

const App = (): JSX.Element => {
  return (
    <main className={styles.main + " sl-theme-dark"}>
      <header className={styles.header}>
        <h3 className={styles.headerTopTitle}>Social Club</h3>
        <h1 className={styles.headerTitle}>Bld42</h1>
      </header>
      <section className={styles.buttons}>
        <SlButton>Click me</SlButton>
      </section>
      <section className={styles.buttons}>
        <SlButton>Click me</SlButton>
      </section>
      <footer className={styles.footer}>Made for the Box Team</footer>
    </main>
  );
};

export default App;
