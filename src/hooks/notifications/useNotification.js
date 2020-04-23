import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSignUpState } from "../../redux/signup/thunk/SignupThunk";
import { clearCustomerContactState } from "../../redux/customerContact/thunk/customerContactThunk";
import { clearRemindPasswordState } from "../../redux/remindPassword/thunk/remindPasswordThunk";
import { clearLoginState } from "../../redux/login/thunk/loginThunk";
import { myRecipesClearErrorState } from "../../redux/myRecipes/retrieveMyRecipes/thunk/retrieveMyRecipesThunk";
import { clearSignUpGoogleUserState } from "../../redux/googleSignup/thunk/googleSignupThunk";

const useNotification = (notificationMessage) => {
  const [notifications, setNotification] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setNotification((notifications) => ({
      ...notifications,
      notification: notificationMessage,
    }));
  }, [notificationMessage]);

  let { notification } = notifications;
  const { userSignedup, error } = useSelector((state) => state.signup);
  const { passwordSent, remindPassError } = useSelector(
    (state) => state.remindPass
  );
  const { loginError } = useSelector((state) => state.login);
  const { userGoogleSignedup, errorGoogleSignup } = useSelector(
    (state) => state.signGoogle
  );
  const { emailSent } = useSelector((state) => state.customerContact);
  const { myRecipesError } = useSelector((state) => state.myRecipes);

  const dispatch = useDispatch();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      if (error || userSignedup) dispatch(clearSignUpState());
      if (emailSent) dispatch(clearCustomerContactState());
      if (passwordSent || remindPassError) dispatch(clearRemindPasswordState());
      if (loginError) dispatch(clearLoginState());
      if (errorGoogleSignup || userGoogleSignedup)
        dispatch(clearSignUpGoogleUserState());
      if (myRecipesError) dispatch(myRecipesClearErrorState());
      setShow(false);
      setNotification({});
    }, 3500);
    return () => clearTimeout(timer);
  }, [
    notification,
    error,
    userSignedup,
    emailSent,
    passwordSent,
    remindPassError,
    loginError,
    userGoogleSignedup,
    errorGoogleSignup,
    myRecipesError,
    dispatch,
  ]);

  return {
    notification,
    show,
  };
};

export default useNotification;
