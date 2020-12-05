const filterTagsReducerDefaultState = [];

const filterTagsReducer = (state = filterTagsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TAG":
      let newTag = action.tag.trim();
      let tags = state.tags;
      let selectedTagIndex = tags.indexOf(newTag);

      if (selectedTagIndex === -1) {
        return [...tags, newTag];
      } else {
        return tags;
      }
    case "REMOVE_TAG":
      return tags.filter((tag) => tag !== action.tag);
    default:
      return state;
  }
};

export default filterTagsReducer;
