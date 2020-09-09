import React from "react";
import { Row, Col } from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import useEmoji from "../../hooks/screen/emoji/useEmoji";
import { useSelector, useDispatch } from "react-redux";
import "./emoji.css";

const Emoji = () => {
  const dispatch = useDispatch();
  const {
    categories,
    categoryIndex,
    emojiFilteredBySubGroup,
    selectedEmoji,
    handleSelectCategory,
    handleEmoji,
  } = useEmoji();

  const { emojiLoading } = useSelector((state) => state.emojis);

  return (
    <div className="emoji-box">
      <Row>
        <Col xs={12}>
          <div className="emoji-category-names">
            {categories.length > 0 &&
              categories.map((category, index) => (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectCategory(index);
                  }}
                  className={
                    categoryIndex === index
                      ? "emoji-category-active"
                      : "emoji-category"
                  }
                  key={index}
                >
                  {category}
                </div>
              ))}
          </div>
        </Col>
      </Row>
      <Row className="mb-2" />
      <Row>
        <Col xs={12}>
          <ScrollArea
            className="emoji-scroll-area"
            smoothScrolling={true}
            horizontal={false}
          >
            {emojiFilteredBySubGroup &&
              Object.values(emojiFilteredBySubGroup).length > 0 &&
              Object.values(emojiFilteredBySubGroup).map(
                (emojiSubGroup, index) => (
                  <div className="emoji-list-container" key={index}>
                    {emojiSubGroup.map((emoji, index) => (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          handleEmoji(emoji);
                        }}
                        className={
                          selectedEmoji === emoji.character
                            ? "emoji-list-item-selected"
                            : "emoji-list-item"
                        }
                        key={index}
                      >
                        {emoji.character}
                      </div>
                    ))}
                  </div>
                )
              )}
          </ScrollArea>
        </Col>
      </Row>
    </div>
  );
};

export default Emoji;
