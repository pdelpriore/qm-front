import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmojis,
  getEmojiCategories,
} from "../../../redux/emoji/getEmojis/thunk/getEmojisThunk";
import { strings } from "../../../strings/Strings";

const useEmoji = () => {
  const dispatch = useDispatch();

  const categories = [
    strings.emojis.categories.EMOTIONS,
    strings.emojis.categories.BODY,
    strings.emojis.categories.ANIMALS,
    strings.emojis.categories.FOOD,
    strings.emojis.categories.TRAVEL,
    strings.emojis.categories.ACTIVITIES,
    strings.emojis.categories.OBJECTS,
    strings.emojis.categories.SYMBOLS,
    strings.emojis.categories.FLAGS,
  ];

  const categories_eng = [
    strings.emojis.categories_eng.EMOTIONS,
    strings.emojis.categories_eng.BODY,
    strings.emojis.categories_eng.ANIMALS,
    strings.emojis.categories_eng.FOOD,
    strings.emojis.categories_eng.TRAVEL,
    strings.emojis.categories_eng.ACTIVITIES,
    strings.emojis.categories_eng.OBJECTS,
    strings.emojis.categories_eng.SYMBOLS,
    strings.emojis.categories_eng.FLAGS,
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [emojisFiltered, setEmojisFiltered] = useState([]);
  const [emojiFilteredBySubGroup, setEmojiFilteredBySubGroup] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const { emojisAll, emojiCategories } = useSelector((state) => state.emojis);

  const handleSelectCategory = (catIndex) => {
    setCategoryIndex(catIndex);
  };
  const handleEmoji = (emoji) => {
    setSelectedEmoji(emoji.character);
  };

  useEffect(() => {
    dispatch(getEmojis());
    dispatch(getEmojiCategories());
  }, [dispatch]);

  useEffect(() => {
    setEmojiFilteredBySubGroup({});
    setEmojisFiltered(
      emojisAll.filter((emoji) => emoji.group === categories_eng[categoryIndex])
    );
  }, [categoryIndex]);

  useEffect(() => {
    if (emojisFiltered.length > 0) {
      const emojiCategoriesFiltered = emojiCategories.filter(
        (emoji) => emoji.slug !== "component"
      );
      emojiCategoriesFiltered[categoryIndex].subCategories.forEach((subCat) => {
        let subCatFiltered = emojisFiltered.filter(
          (emoji) => emoji.subGroup === subCat
        );
        setEmojiFilteredBySubGroup((emojiFilteredBySubGroup) => ({
          ...emojiFilteredBySubGroup,
          [subCat]: subCatFiltered,
        }));
      });
    }
  }, [emojisFiltered, emojiCategories, categoryIndex]);

  return {
    categories,
    categoryIndex,
    emojiFilteredBySubGroup,
    selectedEmoji,
    handleSelectCategory,
    handleEmoji,
  };
};

export default useEmoji;
