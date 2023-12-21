import styles from "./YoutubeForm.module.scss";

function YoutubeForm() {
  return (
    <form className={styles.form} action="https://www.youtube.com/results">
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="YouTube"
          id="query"
          name="search_query"
        />
      </div>
    </form>
  );
}

export default YoutubeForm;
