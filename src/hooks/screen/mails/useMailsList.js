import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMessages,
  setMessagesClearState,
} from "../../../redux/mails/setMessages/thunk/setMessagesThunk";

const useMailsList = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);
  const { messages } = useSelector((state) => state.userMessages);
  const { newMessageSelected } = useSelector(
    (state) => state.isNewMessageSelected
  );
  const { windowOpen } = useSelector((state) => state.isConversationWindowOpen);

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  useEffect(() => {
    if (socket.connected && !newMessageSelected && !windowOpen && isActive) {
      setLoading(true);
      socket.emit("getMessages", userData._id);
      socket.on("messagesRetrieved", (data) => {
        if (data) {
          if (error.getMessagesError) {
            setError({});
          }
          setLoading(false);
          dispatch(setMessages(data));
        }
      });
      socket.on("getMessagesError", (err) => {
        if (err) {
          setError((error) => ({
            ...error,
            getMessagesError: err,
          }));
          setLoading(false);
          dispatch(setMessagesClearState());
        }
      });
    }
  }, [
    socket,
    isActive,
    userData._id,
    error.getMessagesError,
    windowOpen,
    newMessageSelected,
    dispatch,
  ]);

  useEffect(() => {
    if (socket.connected && messages.length > 0 && isActive) {
      socket.on("userActiveListInfo", (res) => {
        if (res || !res) {
          socket.emit("getMessages", userData._id);
          socket.on("messagesRetrieved", (data) => {
            if (data) {
              if (error.getMessagesError) {
                setError({});
              }
              dispatch(setMessages(data));
            }
          });
          socket.on("getMessagesError", (err) => {
            if (err) {
              setError((error) => ({
                ...error,
                getMessagesError: err,
              }));
              dispatch(setMessagesClearState());
            }
          });
        }
      });
    }
  }, [socket, isActive, messages, dispatch]);

  useEffect(() => {
    if (socket.connected && isActive) {
      socket
        .off("newMessageSentListInfo")
        .on("newMessageSentListInfo", (result) => {
          if (result) {
            setLoading(true);
            socket.emit("getMessages", userData._id);
            socket.on("messagesRetrieved", (data) => {
              if (data) {
                if (error.getMessagesError) {
                  setError({});
                }
                setLoading(false);
                dispatch(setMessages(data));
              }
            });
          }
        });
      socket
        .off("messageReadSetListInfo")
        .on("messageReadSetListInfo", (result) => {
          if (result) {
            setLoading(true);
            socket.emit("getMessages", userData._id);
            socket.on("messagesRetrieved", (data) => {
              if (data) {
                if (error.getMessagesError) {
                  setError({});
                }
                setLoading(false);
                dispatch(setMessages(data));
              }
            });
          }
        });
    }
  }, [socket, userData._id, error.getMessagesError, isActive, dispatch]);

  useEffect(() => {
    return () => {
      if (socket.connected && isActive) {
        socket.removeAllListeners("messagesRetrieved");
        socket.removeAllListeners("getMessagesError");
        socket.removeAllListeners("userActiveListInfo");
        socket.removeAllListeners("newMessageSentListInfo");
        socket.removeAllListeners("messageReadSetListInfo");
      }
    };
  }, [socket, isActive]);

  return { loading, error };
};

export default useMailsList;
