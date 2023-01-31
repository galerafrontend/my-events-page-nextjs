import classes from "./styles.module.css";

const LogisticsItem = ({ children, icon: Icon }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
