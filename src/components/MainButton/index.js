const MainButton = ({ type, link, text }) => {
  return (
    <a href={link} style={{ textDecoration: "none" }}>
      <button className={type}>{text}</button>
    </a>
  );
};

export default MainButton;
