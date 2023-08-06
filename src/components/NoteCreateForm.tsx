import React, { useState } from "react";
import { useAppDispatch } from "../store/store";
import { createNoteOperation } from "../redux/notes/notesActions";
import { NotesCategory } from "../models/NotesModels";

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
        className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        onClick={handleToggleForm}
      >
        Create new note
      </button>
    );

  return (
    <div className="font-sans grid grid-cols-5 grid-flow-col gap-x-2 bg-blue-300 p-2 items-center">
      <input
        type="text"
        placeholder="Name"
        value={tempName}
        onChange={(e) => {
          setTempName(e.target.value);
        }}
        className="block w-full px-4 py-2 mt-2 text-sm text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <select
        onChange={handleCategoryChange}
        className="block w-full px-4 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        {Object.keys(NotesCategory).map((i) => {
          return (
            <option
              value={NotesCategory[i]}
              key={`${i}createform`}
              selected={NotesCategory[i] === tempCategory}
              className="text-gray-800"
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
        className="block w-full px-4 py-2 mt-2 text-sm text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <button
        onClick={() => {
          handleToggleForm();
          handleCancelEdit();
        }}
        className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          handleSubmitSave();
        }}
        className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Save
      </button>
    </div>
  );
};
