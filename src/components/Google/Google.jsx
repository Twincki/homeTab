import styles from "./Google.module.scss";

import GoogleForm from "../GoogleForm/GoogleForm";
import Time from "../Time/Time";

function Google() {
  return (
    <section className={styles.main}>
      <div>
        <GoogleForm />
      </div>
    </section>
  );
}

export default Google;
