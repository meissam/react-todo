
const getAllTags = (notes) => {
  const allTags = [];
  notes.map((note) => allTags.push(...note.tags));
  return [...new Set(allTags)];
};


export default getAllTags;
