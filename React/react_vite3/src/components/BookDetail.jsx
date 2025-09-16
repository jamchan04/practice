import styles from "./BookDetail.module.css";

const BookDetail = ({ data, onClickBack }) => {
  const imglink = data.img
    ? data.img.thumbnail
    : "https://picsum.photos/130/190";

  const backHandler = () => {
    onClickBack(""); //
  };

  return (
    <>
      <button onClick={backHandler}>⬅</button>
      <h1 className={styles.title}>상세페이지입니다.</h1>
      <article className={styles.container}>
        <img src={imglink} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <p>출판일: {data.date}</p>
        <p>총 페이지: {data.pages}</p>
      </article>
    </>
  );
};

export default BookDetail;
