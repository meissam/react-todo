import {v4 as uuid} from "uuid";
import dayjs from "dayjs";
// ADD_NOTE
// REMOVE_NOTE

export const addNote = ({
  title = "",
  tags = [],
} = {}) => ({
  type: "ADD_NOTE",
  note: {
    id: uuid(),
    title,
    completed: false,
    tags,
    lastModified : dayjs().toString(),
  },
});

export const removeNote = (id) => ({
  type: "REMOVE_NOTE",
  id,
});
