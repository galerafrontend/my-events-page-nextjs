import classes from "./styles.module.css";

const CommentList = ({ items }) => {
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>
          <div>By {item.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
