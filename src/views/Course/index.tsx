import BoxCard from "../../components/BoxCard";
import Title from "../../components/Title";

function Course() {
  return (
    <div className="view-content">
      <Title title="Create New Exercise" subtitle="Choose the exercise type" />
      <BoxCard title="Choose the correct option">
        <p>
          You give the sentense with the options to complete it, and the student
          pick the correct one.
        </p>
        <p>e.g.: yes, I [am]/[are]</p>
      </BoxCard>
    </div>
  );
}

export default Course;
