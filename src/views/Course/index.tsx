import "./index.scss";

import BoxCard from "../../components/BoxCard";
import Title from "../../components/Title";

function Course() {
  return (
    <div className="view-content">
      <Title title="Create New Exercise" subtitle="Choose the exercise type" />
      {/* First line */}
      <div className="row boxes-line">
        {/* Box 1 */}
        <BoxCard title="Choose the correct option">
          <p>
            You give the sentense with the options to complete it, and the
            student pick the correct one.
          </p>
          <span>e.g.: yes, I [am] / [are]</span>
        </BoxCard>
        {/* Box 2 */}
        <BoxCard title="Complete with the words in brackets">
          <p>
            The student uses the word given in brackets to complete the sentense
            with the correct verb flex.
          </p>
          <span>e.g.: yes, I _____ (to be)</span>
        </BoxCard>
        {/* Box 3 */}
        <BoxCard title="Match the words">
          <p>
            The student matches the words given to form the right compound
            words.
          </p>
        </BoxCard>
      </div>
    </div>
  );
}

export default Course;
