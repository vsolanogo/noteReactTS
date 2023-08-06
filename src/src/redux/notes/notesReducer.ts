import { AnyAction } from "redux";
import { NotesActions } from "./notesActions";
import { Note, NotesCategory } from "../../models/NotesModels";
import { createNote } from "./notesCreator";

export interface NotesState {
  notesList: Array<Note>;
}

const initialData = [
  {
    name: "test name",
    createdAt: new Date(1643618202000),
    category: NotesCategory.RANDOM_THOUGHT,
    content: "test content 5/5/2002",
    isArchived: true,
  },
  {
    name: "test name2",
    createdAt: new Date(1643684526000),
    category: NotesCategory.RANDOM_THOUGHT,
    content: "test content2 5/12/2022 10/10/2002 10/10/2009",
    isArchived: false,
  },
  {
    name: "test name4",
    createdAt: new Date(1603681095000),
    category: NotesCategory.TASK,
    content: "test content4",
    isArchived: false,
  },
  {
    name: "test name3",
    createdAt: new Date(1643681095000),
    category: NotesCategory.IDEA,
    content: "test content3",
    isArchived: false,
  },
  {
    name: "test name5",
    createdAt: new Date(1649681095000),
    category: NotesCategory.RANDOM_THOUGHT,
    content: " asdfas 3/3/2020 asdfa 3/3/2020 asdfa ",
    isArchived: false,
  },
  {
    name: "test name6",
    createdAt: new Date(1649683095000),
    category: NotesCategory.RANDOM_THOUGHT,
    content: "test content6",
    isArchived: true,
  },
];

export const initialState: NotesState = {
  notesList: initialData.map((i) => createNote(i)),
};

export function notesReducer(
  state: NotesState = initialState,
  action: AnyAction = { type: null, payload: null }
) {
  switch (action.type) {
    case NotesActions.UPDATE_NOTE:
      return {
        ...state,
        notesList: state.notesList.map((i) =>
          i.id === action.payload.id
            ? {
                ...i,
                name: action.payload.name,
                category: action.payload.category,
                content: action.payload.content,
                dates: action.payload.dates,
              }
            : i
        ),
      };

    case NotesActions.DELETE_NOTE:
      return {
        ...state,
        notesList: state.notesList.filter((i) => i.id !== action.payload),
      };

    case NotesActions.ARCHIVE_NOTE:
      return {
        ...state,
        notesList: state.notesList.map((i) =>
          i.id === action.payload
            ? {
                ...i,
                isArchived: true,
              }
            : i
        ),
      };

    case NotesActions.UNARCHIVE_NOTE:
      return {
        ...state,
        notesList: state.notesList.map((i) =>
          i.id === action.payload
            ? {
                ...i,
                isArchived: false,
              }
            : i
        ),
      };

    case NotesActions.ADD_NOTE:
      return {
        ...state,
        notesList: [...state.notesList, action.payload],
      };

    case NotesActions.DELETE_ALL_ARCHIVED_NOTES:
      return {
        ...state,
        notesList: state.notesList.filter((i) => !i.isArchived),
      };

    case NotesActions.DELETE_ALL_UNARCHIVED_NOTES:
      return {
        ...state,
        notesList: state.notesList.filter((i) => i.isArchived),
      };

    case NotesActions.ARCHIVE_ALL:
      return {
        ...state,
        notesList: state.notesList.map((i) => ({ ...i, isArchived: true })),
      };

    case NotesActions.UNARCHIVE_ALL:
      return {
        ...state,
        notesList: state.notesList.map((i) => ({ ...i, isArchived: false })),
      };

    default:
      return state;
  }
}
