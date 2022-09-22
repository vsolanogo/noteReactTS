import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
import {
  updateNoteOperation,
  deleteNoteOperation,
  archiveNoteOperation,
  unarchiveNoteOperation,
} from "../redux/notes/notesActions";
import { Note, NotesCategory } from "../models/NotesModels";
import { getDates } from "../redux/notes/notesCreator";
import { ENote } from "./shared";

export const NoteComponent: React.FC<Note> = ({
  id,
  createdAt,
  name,
  category,
  content,
  dates,
  isArchived,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const [displayEditFields, setDisplayEditFields] =
    React.useState<boolean>(false);

  const [tempName, setTempName] = useState<string>(name);
  const [tempCategory, setTempCategory] = useState<NotesCategory>(category);
  const [tempContent, setTempContent] = useState<string>(content);

  useEffect(() => {
    setTempName(name);
    setTempCategory(category);
    setTempContent(content);
  }, [name, category, content]);

  const handleCancelEdit = () => {
    setTempName(name);
    setTempCategory(category);
    setTempContent(content);
  };

  const handleSubmitUpdates = () => {
    if (name.length === 0) {
      alert("Name should not be empty");
      return;
    }
    dispatch(
      updateNoteOperation({
        id,
        name: tempName,
        category: tempCategory,
        content: tempContent,
        dates: getDates(tempContent),
      })
    );
  };

  const handleArchive = () => {
    dispatch(archiveNoteOperation(id));
  };

  const handleUnarchive = () => {
    dispatch(unarchiveNoteOperation(id));
  };

  const handleDelete = () => {
    dispatch(deleteNoteOperation(id));
  };

  const handleCategoryChange = (e) => {
    for (let i = 0; i < e.target.length; i++) {
      if (e.target.options[i].selected) {
        setTempCategory(e.target.options[i].value);
      }
    }
  };

  console.log([createdAt])
  return (
    <ENote data-editing={displayEditFields}>
      {displayEditFields ? (
        <input
          type="text"
          value={tempName}
          onChange={(e) => {
            setTempName(e.target.value);
          }}
        />
      ) : (
        <div>{name}</div>
      )}

      <div>
        {createdAt.toLocaleString("en-us", {
          month: "long",
          year: "numeric",
          day: "numeric",
        })}
      </div>

      {!displayEditFields && <div>{category}</div>}
      {displayEditFields && (
        <select onChange={handleCategoryChange}>
          {Object.keys(NotesCategory).map((i) => {
            return (
              <option
                value={NotesCategory[i]}
                key={`${i}${id}Option`}
                selected={NotesCategory[i] === tempCategory}
              >
                {NotesCategory[i]}
              </option>
            );
          })}
        </select>
      )}

      {displayEditFields ? (
        <input
          type="text"
          value={tempContent}
          onChange={(e) => {
            setTempContent(e.target.value);
          }}
        />
      ) : (
        <div>{content}</div>
      )}

      <div> {dates ? dates.join(", ") : ""}</div>

      {!displayEditFields && (
        <button
          onClick={() => {
            setDisplayEditFields(true);
          }}
        >
          Edit
        </button>
      )}

      {displayEditFields && (
        <button
          onClick={() => {
            setDisplayEditFields(false);
            handleCancelEdit();
          }}
        >
          Cancel
        </button>
      )}

      {displayEditFields && (
        <button
          onClick={() => {
            setDisplayEditFields(false);
            handleSubmitUpdates();
          }}
        >
          Save
        </button>
      )}

      {isArchived && (
        <button
          onClick={() => {
            handleUnarchive();
          }}
        >
          Unarchive
        </button>
      )}

      {!isArchived && (
        <button
          onClick={() => {
            handleArchive();
          }}
        >
          Archive
        </button>
      )}

      <button onClick={handleDelete}>Delete</button>
    </ENote>
  );
};
