import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import {
  addRateAndComment,
  editRecipeRateAndComment
} from "../../../redux/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { toEditRateCommentClearState } from "../../../redux/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { rateCommentRecipeUpdated } from "../../../redux/editRateCommentForm/thunk/editRateCommentFormThunk";
import { addRateComment } from "../../../redux/addRateComment/thunk/addRateCommentThunk";
import { useDispatch, useSelector } from "react-redux";

const useRateAndComment = () => {
  const [rate, setRate] = useState("");
  const [rateHover, setRateHover] = useState("");
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.login);
  const { googleUserData } = useSelector(state => state.loginGoogle);
  const { rateAndComment } = useSelector(state => state.toEditRateComment);
  const { recipeListItemChanged } = useSelector(
    state => state.hideRateCommentForm
  );

  const handleMouseEnter = e => {
    setRateHover(e.currentTarget.dataset.value);
  };

  const handleMouseLeave = () => {
    setRateHover("");
  };

  const handleClick = e => {
    e.preventDefault();
    setRate(e.currentTarget.dataset.value);
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: capitalizeFirst(e.target.value)
    }));
  };

  const handleOnSubmit = recipeId => {
    if (rateAndComment.commentValue) {
      if (userData.email) {
        dispatch(rateCommentRecipeUpdated());
        dispatch(
          editRecipeRateAndComment(
            recipeId,
            rateAndComment.rateId,
            rate,
            rateAndComment.commentId,
            inputs.comment,
            userData.email
          )
        );
        setInputs({});
        setRate("");
        dispatch(toEditRateCommentClearState());
      } else if (googleUserData.email) {
        dispatch(rateCommentRecipeUpdated());
        dispatch(
          editRecipeRateAndComment(
            recipeId,
            rateAndComment.rateId,
            rate,
            rateAndComment.commentId,
            inputs.comment,
            googleUserData.email
          )
        );
        setInputs({});
        setRate("");
        dispatch(toEditRateCommentClearState());
      }
    } else {
      if (userData.email) {
        dispatch(addRateComment(true));
        dispatch(
          addRateAndComment(recipeId, rate, inputs.comment, userData.email)
        );
        setInputs({});
        setRate("");
      } else if (googleUserData.email) {
        dispatch(addRateComment(true));
        dispatch(
          addRateAndComment(
            recipeId,
            rate,
            inputs.comment,
            googleUserData.email
          )
        );
        setInputs({});
        setRate("");
      }
    }
  };

  useEffect(() => {
    if (rateAndComment.rateValue) setRate(rateAndComment.rateValue);
    if (rateAndComment.commentValue)
      setInputs(inputs => ({
        ...inputs,
        comment: rateAndComment.commentValue
      }));
    if (recipeListItemChanged) dispatch(toEditRateCommentClearState());
  }, [
    rateAndComment.rateValue,
    rateAndComment.commentValue,
    recipeListItemChanged,
    dispatch
  ]);

  return {
    rate,
    rateHover,
    inputs,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    handleInputChange,
    handleOnSubmit
  };
};

export default useRateAndComment;
