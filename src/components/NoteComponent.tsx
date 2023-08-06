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

  const inputStyle =
    "block w-full px-4 py-2 mt-2 text-sm text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500";
    
  return (
    <div
      className="font-sans grid grid-cols-5 grid-flow-col gap-x-2 bg-blue-300 p-2 rounded-lg shadow-md items-center"
      data-editing={displayEditFields}
    >
      {displayEditFields ? (
        <input
          type="text"
          value={tempName}
          onChange={(e) => {
            setTempName(e.target.value);
          }}
          className={inputStyle}
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
        <select
          onChange={handleCategoryChange}
          className="block w-full px-4 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {Object.keys(NotesCategory).map((i) => {
            return (
              <option
                value={NotesCategory[i]}
                key={`${i}${id}Option`}
                selected={NotesCategory[i] === tempCategory}
                className="text-gray-800"
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
          className={inputStyle}
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
          className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
          className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
          className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Save
        </button>
      )}

      {isArchived && (
        <button
          onClick={() => {
            handleUnarchive();
          }}
          className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Unarchive
        </button>
      )}

      {!isArchived && (
        <button
          onClick={() => {
            handleArchive();
          }}
          className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Archive
        </button>
      )}

      <button
        onClick={handleDelete}
        className="px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Delete
      </button>
    </div>
  );
};
