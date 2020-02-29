import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRemindPassForm = () => {
  const dispatch = useDispatch();
  //   const { userSignedup } = useSelector(state => state.signup);

  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   signupUser(
    //     inputs.name,
    //     inputs.email,
    //     inputs.confirmEmail,
    //     inputs.password
    //   )
    // );
  };

  const remindPassVisible = useCallback(
    bool => {
      if (bool) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    [setShow]
  );

  return {
    inputs,
    handleInputChange,
    handleSubmit,
    show,
    remindPassVisible
  };
};

export default useRemindPassForm;
