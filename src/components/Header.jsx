import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contact App</h1>
        <p>
          <a href="https://botostart.ir">Botostart</a> | React.js Full Course
        </p>
      </div>
    </div>
  );
}

export default Header;
