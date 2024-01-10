import styles from "./Google.module.scss";
import { VscAccount } from "react-icons/vsc";

import GoogleForm from "../GoogleForm/GoogleForm";
import Time from "../Time/Time";

function Google() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Time />
        <h1 className={styles.title}>HomeTabe</h1>
        <VscAccount className={styles.icon} />
      </header>
      <main className={styles.main}>
        <GoogleForm />
      </main>
    </section>
  );
}

export default Google;
