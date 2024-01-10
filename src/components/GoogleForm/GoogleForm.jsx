import styles from "./GoogleForm.module.scss";

function GoogleForm() {
  return (
    <form className={styles.form} action="https://www.google.com/search">
      <input
        className={styles.input}
        type="text"
        placeholder="Google"
        id="query"
        name="q"
      />
    </form>
  );
}

export default GoogleForm;
