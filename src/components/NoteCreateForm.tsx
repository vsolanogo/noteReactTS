import React, { useState } from "react";
import { css } from "@emotion/react";
import { useAppDispatch } from "../store/store";
import { createNoteOperation } from "../redux/notes/notesActions";
import { NotesCategory } from "../models/NotesModels";
import { ENote } from "./shared";

export const NoteCreateForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [tempName, setTempName] = useState<string>("");
  const [tempCategory, setTempCategory] = useState<NotesCategory>(
    NotesCategory[Object.keys(NotesCategory)[0]]
  );
  const [tempContent, setTempContent] = useState<string>("");

  const handleCancelEdit = () => {
    setTempName("");
    setTempCategory(NotesCategory[Object.keys(NotesCategory)[0]]);
    setTempContent("");
  };

  const handleSubmitSave = () => {
    if (tempName.length === 0) {
      alert("Name should not be empty");
      return;
    }
    handleCancelEdit();
    handleToggleForm();
    dispatch(
      createNoteOperation({
        name: tempName,
        category: tempCategory,
        content: tempContent,
      })
    );
  };

  const handleCategoryChange = (e) => {
    for (let i = 0; i < e.target.length; i++) {
      if (e.target.options[i].selected) {
        setTempCategory(e.target.options[i].value);
      }
    }
  };

  const handleToggleForm = () => {
    setOpen(!isOpen);
  };

  if (!isOpen)
    return (
      <button
        css={css`
          justify-self: flex-start;
        `}
        onClick={handleToggleForm}
      >
        Create new note
      </button>
    );

  return (
    <ENote data-creator>
      <input
        type="text"
        placeholder="Name"
        value={tempName}
        onChange={(e) => {
          setTempName(e.target.value);
        }}
      />

      <select onChange={handleCategoryChange}>
        {Object.keys(NotesCategory).map((i) => {
          return (
            <option
              value={NotesCategory[i]}
              key={`${i}createform`}
              selected={NotesCategory[i] === tempCategory}
            >
              {NotesCategory[i]}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        value={tempContent}
        placeholder="Content"
        onChange={(e) => {
          setTempContent(e.target.value);
        }}
      />

      <button
        onClick={() => {
          handleToggleForm();
          handleCancelEdit();
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          handleSubmitSave();
        }}
      >
        Save
      </button>
    </ENote>
  );
};
