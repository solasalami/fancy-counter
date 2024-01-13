import Counter from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  return (
    <div>
      <Title />
      <Counter />
      <ResetButton />
      <CountButtons />
    </div>
  );
}
