import React from "react";
import {
  useUnarchivedNotes,
  useArchivedNotes,
} from "../redux/selectors/selectorHooks";
import { NotesCategory } from "../models/NotesModels";

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
    <div className="font-sans grid grid-cols-5 grid-flow-col gap-x-2 bg-blue-300 p-2 rounded-lg shadow-md items-center">
      <div>{NotesCategory[category]} </div>
      <div>{unarchivedCount.toString()}</div>
      <div>{archivedCount.toString()}</div>
    </div>
  );
};
