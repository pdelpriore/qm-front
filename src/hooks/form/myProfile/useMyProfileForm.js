import { useState, useEffect } from "react";
import { makeImageBinary } from "../../../shared/makeImageBinary";
import { getImage } from "../../../shared/getImage";
import { updateUserProfile } from "../../../redux/login/thunk/loginThunk";
import { updateMyProfile } from "../../../redux/login/updateMyProfile/thunk/updateMyProfileThunk";
import { useSelector, useDispatch } from "react-redux";
import { userGooglePhoto } from "../../../shared/testWordsArray";

const useMyProfileForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});
  const [showOverlay, setShowOverlay] = useState(true);
  const [showEdit, setShowEdit] = useState(true);

  const { userData } = useSelector((state) => state.login);
  const { profileUpdated } = useSelector((state) => state.updateMyProfile);

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePicture = async (picture) => {
    try {
      const result = await makeImageBinary(picture);
      if (result) {
        setInputs((inputs) => ({
          ...inputs,
          profileImage: result,
        }));
        if (error.imageError) {
          setError((error) =>
            (({ imageError, ...others }) => ({
              ...others,
            }))(error)
          );
        }
      }
    } catch (err) {
      if (err) {
        setError((error) => ({
          ...error,
          imageError: err,
        }));
      }
    }
  };
  const handleRemoveImage = () => {
    setInputs((inputs) =>
      (({ profileImage, ...others }) => ({
        ...others,
      }))(inputs)
    );
    if (error.imageError) {
      setError((error) =>
        (({ imageError, ...others }) => ({
          ...others,
        }))(error)
      );
    }
  };

  const handleEdit = async () => {
    setShowOverlay(false);
    setShowEdit(false);
    setInputs((inputs) => ({
      ...inputs,
      name: userData.name,
    }));
    if (
      userGooglePhoto.some(
        (element) => userData.photo && userData.photo.includes(element)
      )
    ) {
      setInputs((inputs) => ({
        ...inputs,
        profileImage: {
          image: userData.photo,
        },
      }));
    } else if (
      !userGooglePhoto.some(
        (element) => userData.photo && userData.photo.includes(element)
      )
    ) {
      const result = userData.photo && (await getImage(userData.photo));
      if (result) {
        setInputs((inputs) => ({
          ...inputs,
          profileImage: {
            image: result.imageBinary,
            imageName: result.pictureName,
          },
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile(inputs.name, inputs.profileImage, userData.email)
    );
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setInputs({});
    if (error.imageError) setError({});
    setShowOverlay(true);
    setShowEdit(true);
  };

  useEffect(() => {
    setInputs({});
    if (error.imageError) setError({});
    setShowOverlay(true);
    setShowEdit(true);
    if (inputs.name === undefined) dispatch(updateMyProfile(false));
  }, [profileUpdated]);

  return {
    inputs,
    error,
    showOverlay,
    showEdit,
    handleInputChange,
    handlePicture,
    handleRemoveImage,
    handleEdit,
    handleSubmit,
    handleCancel,
  };
};

export default useMyProfileForm;
