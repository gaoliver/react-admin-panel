import { Link } from "react-router-dom";
import "./index.scss";

interface Props {
  title?: string;
  children?: React.ReactNode;
  link?: string;
  onClick?: () => void
}

function BoxCard({ title, children, link, onClick }: Props) {
  return (
    <div className="box_container">
      <h1>{title}</h1>
      <div className="content">{children}</div>
      {link ? (
        <Link to={link}>
          <input type="button" value="Start" />
        </Link>
      ) : (
        <input type="button" value="Start" onClick={onClick} />
      )}
    </div>
  );
}

export default BoxCard;
