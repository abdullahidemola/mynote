import React from "react";

const MainPage = ({ setNoteInput, notes, addNote, noteInput }) => {
  return (
    <div className="mainpage-container">
      <div className="note-input">
        <i className="ph-note note-icon"></i>
        <input
          placeholder="Type your note here..."
          value={noteInput}
          type="text"
          onChange={(event) => setNoteInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addNote();
            }
          }}
        ></input>
        <button onClick={addNote}>Add note</button>
      </div>
      <div className="mainpage-content ">
        <div className="mainpage-header">Notes</div>

        <div className="note_list_cover">
          <div className="note-list">
            {notes?.map((note, index) => {
              return (
                <div
                  className="note-item"
                  key={index}
                  style={{ background: note?.bgColor }}
                >
                  {note?.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
