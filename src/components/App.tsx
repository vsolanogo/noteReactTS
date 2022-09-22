import React from "react";
import {
  useUnarchivedNotes,
  useArchivedNotes,
} from "../redux/selectors/selectorHooks";
import { NotesCategory } from "../models/NotesModels";
import { NoteComponent } from "./NoteComponent";
import { NoteCreateForm } from "./NoteCreateForm";
import { SummaryCategory } from "./SummaryCategory";
import { EWrapper } from "./shared";
import { NotesHatComponent } from "./NotesHatComponent";

export const App = () => {
  const list = useUnarchivedNotes();
  const archivedNotes = useArchivedNotes();

  return (
    <>
      <EWrapper>
        <NotesHatComponent />
      </EWrapper>

      <EWrapper>
        {list.map((i, index) => (
          <div key={index}>
            <NoteComponent {...i} />
          </div>
        ))}
      </EWrapper>

      <EWrapper>
        <NoteCreateForm />
      </EWrapper>

      <EWrapper>
        {Object.keys(NotesCategory).map((i, index) => (
          <div key={index}>
            <SummaryCategory category={i} />
          </div>
        ))}
      </EWrapper>

      <EWrapper>
        <NotesHatComponent archiveHat />
      </EWrapper>

      <EWrapper>
        {archivedNotes.map((i) => (
          <NoteComponent key={i.id} {...i} />
        ))}
      </EWrapper>
    </>
  );
};
