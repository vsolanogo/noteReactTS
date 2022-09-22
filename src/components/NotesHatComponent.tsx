import React from "react";
import { useAppDispatch } from "../store/store";
import {
  archiveAll,
  unarchiveAll,
  deleteAllArchivedNotes,
  deleteAllUnarchivedNotes,
} from "../redux/notes/notesActions";
import { ENote } from "./shared";

interface NotesHatComponentProps {
  archiveHat?: Boolean;
}

export const NotesHatComponent: React.FC<NotesHatComponentProps> = ({
  archiveHat,
}) => {
  const dispatch = useAppDispatch();

  return (
    <ENote>
      <div>Name</div>
      <div>Created</div>
      <div>Category</div>
      <div>Content</div>
      <div>Dates</div>
      <div />
      <button
        onClick={() => {
          archiveHat ? dispatch(unarchiveAll()) : dispatch(archiveAll());
        }}
      >
        {archiveHat ? <>Unarchive all</> : <>Archive all</>}
      </button>
      <button
        onClick={() => {
          archiveHat
            ? dispatch(deleteAllArchivedNotes())
            : dispatch(deleteAllUnarchivedNotes());
        }}
      >
        Delete all
      </button>
    </ENote>
  );
};
