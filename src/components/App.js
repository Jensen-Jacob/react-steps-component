import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const step = 1;

  function handlePrev() {
    // The commented line of code below is one way to update state based on the current state,
    // but in other situations, it might not work correctly. The best way to update state based
    // on the current state is shown in the uncommented line of code.
    // step > 1 && setStep(step - 1);
    // An example of why the above method can be problematic can be seen when wanting to update
    // state twice, so if I wrote said line of code twice, it would still only decrement the
    // step value once. This is because when the handlePrev() function is called, it obtains
    // the value of step at the time of calling and stores it locally within the function.
    // So when you run setStep(), only the step variable outside the function changes, the
    // local value of step remains the same. Therefore, considering step = 2 at time of
    // function call, calling setStep twice this way would set the value of step to `2 - 1`
    // twice.
    step > 1 && setStep((s) => s - 1);
  }

  function handleNext() {
    step < messages.length && setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            <p>{messages[step - 1]}</p>
          </StepMessage>

          <div className="buttons">
            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrev}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              text={"Next"}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
