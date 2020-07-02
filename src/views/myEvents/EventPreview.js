import React from "react";
import { Row, Col, Spinner, Button } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst, capitalize } from "../../util/Util";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ScrollArea from "react-scrollbar";
import Img from "react-image";
import Map from "../../components/map/map/Map";
import { eventPreviewClearState } from "../../redux/myEvents/eventPreview/thunk/eventPreviewThunk";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import { userGooglePhoto } from "../../shared/testWordsArray";
import "./myEvents.css";

const EventPreview = () => {
  const dispatch = useDispatch();
  const props = useSpring({
    opacity: 1,
    config: { duration: 300 },
    from: { opacity: 0 },
  });
  //const { handleEditClick, handleTrashClick } = useMyRecipePreview();
  const { eventPreviewData } = useSelector((state) => state.eventPreview);
  const eventDate = new Date(eventPreviewData.eventDate);
  //const { loading } = useSelector((state) => state.isMyRecipeChanged);

  return (
    <animated.div style={props}>
      <Row>
        <Col xs={1} />
        <Col xs={6}>
          <h1 className="eventpreview-title">{eventPreviewData.title}</h1>
        </Col>
        <Col xs={1}>
          <Img
            className="eventpreview-author-photo"
            src={
              userGooglePhoto.some(
                (element) =>
                  eventPreviewData.author.photo &&
                  eventPreviewData.author.photo.includes(element)
              )
                ? eventPreviewData.author.photo
                : !userGooglePhoto.some(
                    (element) =>
                      eventPreviewData.author.photo &&
                      eventPreviewData.author.photo.includes(element)
                  ) && eventPreviewData.author.photo
                ? strings.path.IMAGE_REQUEST + eventPreviewData.author.photo
                : require("../../assets/imgs/cookerret.png")
            }
            loader={<Spinner animation="border" variant="dark" />}
          />
        </Col>
        <Col xs={2}>
          <div className="eventpreview-available-places">
            <div className="eventpreview-available-places-text">
              {strings.myEvents.AVAILABLE_PLACES_PREVIEW}
            </div>
            <div className="eventpreview-available-places-text number">
              {eventPreviewData.availablePlaces -
                eventPreviewData.participants.length}
            </div>
          </div>
        </Col>
        <Col xs={1}>
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(eventPreviewClearState());
            }}
            className="eventpreview-close-icon"
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        </Col>
        <Col xs={1} />
      </Row>
      <Row className="mb-2" />
      <ScrollArea smoothScrolling={true} className="eventpreview-main">
        <div>
          <Row>
            <Col xs={1} />
            <Col xs={7}>
              <Img
                className="eventpreview-picture"
                src={
                  eventPreviewData.eventImage
                    ? strings.path.IMAGE_REQUEST + eventPreviewData.eventImage
                    : require("../../assets/imgs/eventret.jpg")
                }
                loader={<Spinner animation="border" variant="dark" />}
              />
            </Col>
            <Col xs={4} />
          </Row>
          <Row className="mb-3" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <div className="eventpreview-description-text">
                {capitalizeFirst(strings.recipeBookDetails.DESCRIBE)}
              </div>
              <div style={{ height: 10 }} />
              <div className="eventpreview-description">
                {eventPreviewData.description}
              </div>
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <div className="eventpreview-address-box">
                <Col xs={6}>
                  <div className="eventpreview-description-text">
                    {capitalizeFirst(strings.myEvents.ADDRESS_PREVIEW)}
                  </div>
                  <Row className="mb-5" />
                  <Row className="mb-5" />
                  <Row className="mb-5" />
                  <Row className="mb-5" />
                  <div className="eventpreview-address">
                    <div className="eventpreview-address-text">
                      {eventPreviewData.eventAddress.streetName}{" "}
                      {eventPreviewData.eventAddress.streetNumber}
                    </div>
                    <div className="eventpreview-address-text">
                      {eventPreviewData.eventAddress.postCode}
                    </div>
                    <div className="eventpreview-address-text">
                      {eventPreviewData.eventAddress.city}
                    </div>
                    <div style={{ height: 10 }} />
                    <div className="eventpreview-address-text data">
                      {eventDate.getDate() < 10
                        ? `0${eventDate.getDate()}`
                        : eventDate.getDate()}
                      /
                      {eventDate.getMonth() < 10
                        ? `0${eventDate.getMonth()}`
                        : eventDate.getMonth()}
                      /{eventDate.getFullYear()}, godz.{" "}
                      {eventDate.getHours() < 10
                        ? `0${eventDate.getHours()}`
                        : eventDate.getHours()}
                      :
                      {eventDate.getMinutes() < 10
                        ? `0${eventDate.getMinutes()}`
                        : eventDate.getMinutes()}
                    </div>
                    <div style={{ height: 25 }} />
                    <div className="eventpreview-address-text tel">
                      tel. {eventPreviewData.tel}
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <Row className="mb-5" />
                  <Map
                    latitude={eventPreviewData.eventAddress.latitude}
                    longitude={eventPreviewData.eventAddress.longitude}
                    zoom={eventPreviewData.eventAddress.zoom}
                  />
                  <Row className="mb-5" />
                </Col>
              </div>
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <div className="eventpreview-description-text">
                {capitalizeFirst(strings.myEvents.PARTICIPANTS_PREVIEW)}
              </div>
              <div style={{ height: 10 }} />
              {eventPreviewData.participants.length > 0 ? (
                eventPreviewData.participants.map((participant, index) => (
                  <div
                    key={index}
                    className="eventpreview-participant-photo-box"
                  >
                    <Img
                      className="eventpreview-participant-photo"
                      src={
                        userGooglePhoto.some(
                          (element) =>
                            participant.photo && participant.includes(element)
                        )
                          ? participant.photo
                          : !userGooglePhoto.some(
                              (element) =>
                                participant.photo &&
                                participant.photo.includes(element)
                            ) && participant.photo
                          ? strings.path.IMAGE_REQUEST + participant.photo
                          : require("../../assets/imgs/cookerret.png")
                      }
                      loader={<Spinner animation="border" variant="dark" />}
                    />
                    <div className="eventpreview-participant-name">
                      {participant.name}
                    </div>
                  </div>
                ))
              ) : (
                <div className="eventpreview-description">
                  {strings.myEvents.error.NO_PARTICIPANTS}
                </div>
              )}
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={6}>
              <div className="eventpreview-button-preview-box">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    // handleEditClick({
                    //   recipeId: myRecipePreviewData._id,
                    //   recipeTitle: myRecipePreviewData.title,
                    //   recipeImage: myRecipePreviewData.picture,
                    //   recipeVideo: myRecipePreviewData.video,
                    //   recipeCategory: myRecipePreviewData.category,
                    //   recipeCookTime: myRecipePreviewData.cookTime,
                    //   recipeIngredients: myRecipePreviewData.ingredients,
                    //   recipeDescription: myRecipePreviewData.description,
                    // });
                  }}
                  className="eventpreview-preview-button"
                  variant="dark"
                >
                  <FontAwesomeIcon
                    className="eventpreview-preview-button-icon"
                    icon={faEdit}
                  />
                  <div className="myevents-button-preview-action">
                    {capitalize(strings.myRecipes.BUTTON_CORRECTION)}
                  </div>
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    //handleTrashClick(myRecipePreviewData._id);
                  }}
                  className="eventpreview-preview-button-delete"
                  variant="dark"
                >
                  <div className="myrecipes-form-spinner">
                    {false && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {false ? (
                    <div className="myrecipes-form-button-loading">
                      {capitalizeFirst(strings.myRecipes.BUTTON_REMOVE_LOADING)}
                    </div>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        className="myrecipes-preview-button-icon"
                        icon={faTrash}
                      />
                      <div className="myevents-button-preview-action">
                        {capitalize(strings.myRecipes.BUTTON_REMOVE)}
                      </div>
                    </>
                  )}
                </Button>
              </div>
            </Col>
            <Col xs={5} />
          </Row>
        </div>
      </ScrollArea>
    </animated.div>
  );
};

export default EventPreview;
