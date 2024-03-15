import Button from "../../components/Button/Button";

import { CounterWrapper, ButtonControl, Count } from "./styles";

import { CounterProps } from "./types";

function Counter({ count, onMinus, onPlus }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
