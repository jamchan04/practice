import styles from "./BookList.module.css";

const BookList = ({ data, onClickList }) => {
  const imglink = data.img
    ? data.img.thumbnail
    : "https://picsum.photos/130/190";

  const toggleHandler = () => {
    onClickList(data.id);
  };

  return (
    <article className={styles.container} onClick={toggleHandler}>
      <img src={imglink} alt={data.title} />
      <div className={styles.contents}>
        <h1>{data.title}</h1>
        <p>출간일: {data.date}</p>
      </div>
    </article>
  );
};

export default BookList;
