import {
    useState,
    ChangeEvent,
    createContext,
    Dispatch,
    SetStateAction,
  } from "react";
  
  import Button from "components/Button/Button";
  import Card from "../Card/Card";
  
  import { BlogManagementWrapper, TextArea } from "./styles";
  
  interface BlockManagementContextProps {
    postMessage: string;  
    setPostMessage: Dispatch<SetStateAction<string>>;
  }
  
  export const BlogManagementContext = createContext({
    postMessage: "",
    setPostMessage: () => {},
  } as BlockManagementContextProps);
  
  function BlogManagement() {
    const [textAreaValue, setTextAreaValue] = useState<string>("");
    const [postMessage, setPostMessage] = useState<string>("");
  
    const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaValue(event.target.value);
    };
  
  
    return (
      <BlogManagementContext.Provider
        value={{
          postMessage: postMessage,
          setPostMessage: setPostMessage,
        }}
      >
        <BlogManagementWrapper>
          <TextArea
            placeholder="Введите ваше сообщение"
            value={textAreaValue}
            onChange={onChangeTextArea}
          />
          <Button
            name="Запостить"
            onClick={() => {
              setPostMessage(textAreaValue);
            }}
          />
          <Card />
        </BlogManagementWrapper>
      </BlogManagementContext.Provider>
    );
  }
  
  export default BlogManagement;
