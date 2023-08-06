import React from "react";
import { useAppDispatch } from "../store/store";
import {
  archiveAll,
  unarchiveAll,
  deleteAllArchivedNotes,
  deleteAllUnarchivedNotes,
} from "../redux/notes/notesActions";

interface NotesHatComponentProps {
  archiveHat?: Boolean;
}

export const NotesHatComponent: React.FC<NotesHatComponentProps> = ({
  archiveHat,
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="font-sans grid grid-cols-5 grid-flow-col gap-x-2 bg-blue-300 p-2 rounded-lg shadow-md items-center">
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
          className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {archiveHat ? <>Unarchive all</> : <>Archive all</>}
        </button>
        <button
          onClick={() => {
            archiveHat
              ? dispatch(deleteAllArchivedNotes())
              : dispatch(deleteAllUnarchivedNotes());
          }}
          className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Delete all
        </button>
      </div>
    </>
  );
};
