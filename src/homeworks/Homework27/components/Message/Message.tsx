import { useContext } from "react";

import { BlogManagementContext } from "homeworks/Homework27/components/BlogManagement/BlogManagement";
import Button from "components/Button/Button";

import { PostMessage, MessageContainer } from "./styles";

function Message() {
  const { postMessage, setPostMessage } = useContext(BlogManagementContext);

  const deleteMessage = () => {
    setPostMessage("");
  };

  return (
    <MessageContainer>
      {postMessage && (
        <>
          <PostMessage>{postMessage}</PostMessage>
          <Button name="Удалить сообщение" isRed onClick={deleteMessage} />
        </>
      )}
    </MessageContainer>
  );
}

export default Message;