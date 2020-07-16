import { useEffect, useState } from "react";
import { toEditEvent } from "../../../redux/myEvents/toEditEvent/thunk/toEditEventThunk";
import {
  removeEvent,
  changeEventClearState,
} from "../../../redux/myEvents/changeEvent/thunk/changeEventThunk";
import { showNewEventForm } from "../../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import {
  joinEvent,
  unjoinEvent,
} from "../../../redux/myEvents/eventPreview/thunk/eventPreviewThunk";
import { useDispatch, useSelector } from "react-redux";
import { delayAvailablePlacesCounter } from "./delayAvailablePlacesCounter";

const useEventPreview = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.login);
  const { eventUpdated } = useSelector((state) => state.isEventChanged);
  const { eventPreviewData } = useSelector((state) => state.eventPreview);

  const [countAvailablePlaces, setCountAvailablePlaces] = useState(0);

  const handleEditClick = (data) => {
    dispatch(toEditEvent(data));
  };

  const handleTrashClick = (eventId, addressId) => {
    dispatch(removeEvent(eventId, addressId, userData._id, userData.email));
  };

  const handleJoinEvent = (eventId) => {
    dispatch(joinEvent(eventId, userData._id, userData.email));
  };

  const handleUnjoinEvent = (eventId) => {
    dispatch(unjoinEvent(eventId, userData._id, userData.email));
  };

  useEffect(() => {
    (async () => {
      if (
        eventPreviewData.availablePlaces -
          eventPreviewData.participants.length <
        50
      ) {
        for (
          let i = 0;
          i <=
          eventPreviewData.availablePlaces -
            eventPreviewData.participants.length;
          i++
        ) {
          setCountAvailablePlaces(i);
          await delayAvailablePlacesCounter(30);
        }
      } else {
        setCountAvailablePlaces(
          eventPreviewData.availablePlaces -
            eventPreviewData.participants.length
        );
      }
    })();
  }, [
    eventPreviewData._id,
    eventPreviewData.availablePlaces,
    eventPreviewData.participants.length,
  ]);

  useEffect(() => {
    if (eventUpdated) {
      dispatch(changeEventClearState());
      dispatch(showNewEventForm(false));
    }
  }, [eventUpdated, dispatch]);

  return {
    handleEditClick,
    handleTrashClick,
    countAvailablePlaces,
    handleJoinEvent,
    handleUnjoinEvent,
  };
};

export default useEventPreview;
