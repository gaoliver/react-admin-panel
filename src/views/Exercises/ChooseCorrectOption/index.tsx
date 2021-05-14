import "./index.scss";

import Title from "../../../components/Title";
import PageContent from "../../../components/PageContent";

function ChooseCorrectOption() {
  return (
    <div className="view-content">
      <Title title="Add Exercise" subtitle="Choose the correct option" />
      <PageContent>
        <form onSubmit={() => {}}>
            <label>Teste</label>
        </form>
      </PageContent>
    </div>
  );
}

export default ChooseCorrectOption;
