import "./index.scss"

interface Props {
    title?: string
    children?: React.ReactNode
}

function BoxCard({title, children}: Props) {
  return (
    <div className="box_container">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default BoxCard;
