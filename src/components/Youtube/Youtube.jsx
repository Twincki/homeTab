import styles from "./Youtube.module.scss";

import YoutubeForm from "../YoutubeForm/YoutubeForm";

function Youtube() {
  return (
    <section className={styles.main}>
      <YoutubeForm />
    </section>
  );
}

export default Youtube;
