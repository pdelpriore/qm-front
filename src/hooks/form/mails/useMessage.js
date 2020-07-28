import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNewMessageForm } from "../../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";

const useMessage = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(showNewMessageForm(false));
    setInputs({});
  };

  console.log(inputs);

  return {
    inputs,
    loading,
    messages,
    conversations,
    error,
    handleInputChange,
    handleCancel,
  };
};

export default useMessage;
