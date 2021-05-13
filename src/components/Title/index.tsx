import "./index.scss"

interface Props {
  title: string;
  subtitle?: string;
}

function Title({ title, subtitle }: Props) {
  return (
    <div className="title_container">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
}

export default Title;
