import React from "react";
import {
  useUnarchivedNotes,
  useArchivedNotes,
} from "../redux/selectors/selectorHooks";
import { NotesCategory } from "../models/NotesModels";
import { NoteComponent } from "./NoteComponent";
import { NoteCreateForm } from "./NoteCreateForm";
import { SummaryCategory } from "./SummaryCategory";
import { NotesHatComponent } from "./NotesHatComponent";

export const App = () => {
  const list = useUnarchivedNotes();
  const archivedNotes = useArchivedNotes();

  const tablesStyle = "max-w-screen-2xl my-4 mx-auto grid gap-y-2 font-sans";

  return (
    <>
      <div className={tablesStyle}>
        <NotesHatComponent />
      </div>

      <div className={tablesStyle}>
        {list.map((i, index) => (
          <div key={index}>
            <NoteComponent {...i} />
          </div>
        ))}
      </div>

      <div className={tablesStyle}>
        <NoteCreateForm />
      </div>

      <div className={tablesStyle}>
        {Object.keys(NotesCategory).map((i, index) => (
          <div key={index}>
            <SummaryCategory category={i} />
          </div>
        ))}
      </div>

      <div className={tablesStyle}>
        <NotesHatComponent archiveHat />
      </div>

      <div className={tablesStyle}>
        {archivedNotes.map((i) => (
          <NoteComponent key={i.id} {...i} />
        ))}
      </div>
    </>
  );
};
