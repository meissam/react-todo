

const filteredNotes = (notes, filterTags) => {

     const filterdItems = notes.filter((note) =>
     filterTags.every((i) => note.tags.includes(i))
    );

    return filterdItems;
 }

 export default filteredNotes;