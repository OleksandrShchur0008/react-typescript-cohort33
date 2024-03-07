import Button from "components/Button/Button";
import { useState, useEffect } from "react";
import {
  Homework24Wrapper,
  RandomJokeCard,
  JokeContainer,
  RandomJoke,
  TextCardTitle,
} from "./styles";
import { JokeInfo } from "./types";

function Homework24() {
  const [jokeInfo, setJokeInfo] = useState<JokeInfo | undefined>(undefined);
  const [jokeError, setJokeError] = useState<string | undefined>(undefined);

  const getRandomJoke = async (isCalledForUpdate?: boolean) => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const result = await response.json();
      if (!response.ok) {
        throw Object.assign(new Error("API Error"), {
          response: result,
        });
      } else {
        setJokeError(undefined);
        setJokeInfo({ question: result.setup, answer: result.punchline });

        if (isCalledForUpdate) {
          alert("You've recieved a new joke");
        }
      }
    } catch (error) {
      setJokeInfo(undefined);
      setJokeError("Error while receiving data");

      if (isCalledForUpdate) {
        alert("Error while receiving data");
      }
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <Homework24Wrapper>
      <TextCardTitle>Random Joke Generator</TextCardTitle>
      <RandomJokeCard>
        <JokeContainer>
          {jokeInfo && (
            <>
              <RandomJoke>"{jokeInfo?.question}"</RandomJoke>
              <RandomJoke>- {jokeInfo?.answer}</RandomJoke>
            </>
          )}
          {jokeError && <RandomJoke>{jokeError}</RandomJoke>}
        </JokeContainer>
        <Button name="Get New Joke" onClick={() => getRandomJoke(true)} />
      </RandomJokeCard>
    </Homework24Wrapper>
  );
}

export default Homework24;
