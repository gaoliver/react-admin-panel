import { Button } from "reactstrap";
import "./index.scss";

import Title from "../../../components/Title";
import PageContent from "../../../components/PageContent";

function ChooseCorrectOption() {
  var countBox = 2;

  function addInput() {
    let newInput = `
      <div class="box-container">
        <h1>Sentence ${countBox.toString()}</h1>
        <input
          type="text"
          id=${"text-" + countBox}
          class="text"
          placeholder="Type the sentence here"
        />
        <div class="options">
          <input
            type="text"
            id=${"option1-" + countBox}
            class="option"
            placeholder="Option 1"
          />
          <input
            type="text"
            id=${"option2-" + countBox}
            class="option"
            placeholder="Option 2"
          />
        </div>
        <label>Which one is the correct?</label>
        <div class="form-check">
          <input
            class="form-check-input"
            name=${"checkbox" + countBox}
            type="radio"
            id=${"answer1-" + countBox}
          />
          <label for=${"answer1-" + countBox}>Option 1</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            name=${"checkbox" + countBox}
            type="radio"
            id=${"answer2-" + countBox}
          />
          <label for=${"answer2-" + countBox}>Option 2</label>
        </div>
      </div>
    `;

    let inputArea = document.getElementById("sentences");

    if (inputArea) {
      inputArea.insertAdjacentHTML("beforeend", newInput);
    }

    countBox += 1;
  }
  return (
    <div className="view-content">
      {/* Title */}
      <Title title="Add Exercise" subtitle="Choose the correct option" />
      {/* How to use it */}
      <PageContent>
        <div className="row first-line">
          <label>Create sentences</label>
          <span>Put empty {"{}"} in place where the word is hidden.</span>
        </div>
      </PageContent>
      {/* Save && Add Sentence && Cancel */}
      <div className="buttons">
        <Button color="primary" onClick={() => addInput()}>
          Add Sentence
        </Button>
        <Button color="success">Save</Button>
        <Button color="danger">Cancel</Button>
      </div>
      {/* Creating sentencesÎ */}
      <div className="row text-inputs" id="sentences">
        <div className="box-container">
          {/* Sentence title */}
          <h1>Sentence 1</h1>
          {/* the sentence input */}
          <input
            type="text"
            id="text-1"
            className="text"
            placeholder="Type the sentence here"
          />
          {/* Answer options */}
          <div className="options">
            <input
              type="text"
              id="option1-1"
              className="option"
              placeholder="Option 1"
            />
            <input
              type="text"
              id="option2-1"
              className="option"
              placeholder="Option 2"
            />
          </div>
          {/* Checkboxes */}
          <label>Which one is the correct?</label>
          <div className="form-check">
            <input
              className="form-check-input"
              name="checkbox"
              type="radio"
              id="answer1-1"
            />
            <label htmlFor="answer1-1">Option 1</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              name="checkbox"
              type="radio"
              id="answer2-1"
            />
            <label htmlFor="answer2-1">Option 2</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseCorrectOption;
