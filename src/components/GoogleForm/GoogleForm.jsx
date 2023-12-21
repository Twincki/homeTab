import styles from "./GoogleForm.module.scss";

function GoogleForm() {
  return (
    <form className={styles.form} action="https://www.google.com/search">
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Google"
          id="query"
          name="q"
        />
      </div>
    </form>
  );
}

export default GoogleForm;
