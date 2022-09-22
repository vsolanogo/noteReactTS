import React from "react";
import {
  useUnarchivedNotes,
  useArchivedNotes,
} from "../redux/selectors/selectorHooks";
import { NotesCategory } from "../models/NotesModels";
import { ENote } from "./shared";

export const SummaryCategory = ({ category }: { category: string }) => {
  const unarchivedNotes = useUnarchivedNotes();
  const archivedNotes = useArchivedNotes();

  const unarchivedCount: Number = unarchivedNotes.filter(
    (i) => i.category === NotesCategory[category]
  ).length;
  const archivedCount: Number = archivedNotes.filter(
    (i) => i.category === NotesCategory[category]
  ).length;

  return (
    <ENote data-summary>
      <div>{NotesCategory[category]} </div>
      <div>{unarchivedCount.toString()}</div>
      <div>{archivedCount.toString()}</div>
    </ENote>
  );
};
