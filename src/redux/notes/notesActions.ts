import { AppThunkAction } from "../../store/store";
import {
  NoteUpdaterParams,
  NoteCreatorParams,
  Note,
} from "../../models/NotesModels";
import { createNote } from "./notesCreator";
import { createAction } from "@reduxjs/toolkit";
export enum NotesActions {
  ADD_NOTE = "notes/Add",
  DELETE_NOTE = "notes/Delete",
  UPDATE_NOTE = "notes/Update",
  UNARCHIVE_NOTE = "notes/Unarchive",
  ARCHIVE_NOTE = "notes/Archive",
  DELETE_ALL_ARCHIVED_NOTES = "notes/DeleteAllArchived",
  DELETE_ALL_UNARCHIVED_NOTES = "notes/DeleteAllUnarchived",
  ARCHIVE_ALL = "notes/archiveALl",
  UNARCHIVE_ALL = "notes/unarchiveAll",
}

const createPlainAction = (type) => (payload?) => ({ type, payload });

const addNoteAction = createAction<Note>(NotesActions.ADD_NOTE);

export const updateNoteAction = createPlainAction(NotesActions.UPDATE_NOTE);
export const deleteNoteAction = createPlainAction(NotesActions.DELETE_NOTE);
export const archiveNoteAction = createPlainAction(NotesActions.ARCHIVE_NOTE);
export const unarchiveNoteAction = createPlainAction(
  NotesActions.UNARCHIVE_NOTE
);
export const deleteAllArchivedNotes = createPlainAction(
  NotesActions.DELETE_ALL_ARCHIVED_NOTES
);
export const deleteAllUnarchivedNotes = createPlainAction(
  NotesActions.DELETE_ALL_UNARCHIVED_NOTES
);

export const archiveAll = createPlainAction(NotesActions.ARCHIVE_ALL);

export const unarchiveAll = createPlainAction(NotesActions.UNARCHIVE_ALL);

export const updateNoteOperation =
  (noteUpdate: NoteUpdaterParams): AppThunkAction<Promise<void>> =>
  async (dispatch) => {
    dispatch(updateNoteAction(noteUpdate));
  };

export const deleteNoteOperation =
  (id: string): AppThunkAction<Promise<void>> =>
  async (dispatch) => {
    dispatch(deleteNoteAction(id));
  };

export const archiveNoteOperation =
  (id: string): AppThunkAction<Promise<void>> =>
  async (dispatch) => {
    dispatch(archiveNoteAction(id));
  };

export const unarchiveNoteOperation =
  (id: string): AppThunkAction<Promise<void>> =>
  async (dispatch) => {
    dispatch(unarchiveNoteAction(id));
  };

export const createNoteOperation =
  (newNote: NoteCreatorParams): AppThunkAction<Promise<void>> =>
  async (dispatch) => {
    dispatch(addNoteAction(createNote(newNote)));
  };
