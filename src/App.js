import React, { useState } from "react";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";

function App() {
  const [current, setCurrent] = useState(0);
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
  const colors = ["#ffcf7d", "#f0a177", "#b095f6", "#55cffa", "#e6ee96"];

  const addNote = () => {
    setNotes((prev) => [
      ...prev,
      {
        bgColor: colors[current],
        text: noteInput,
      },
    ]);

    setNoteInput("");
  };

  return (
    <div className="container">
      <SideBar colors={colors} current={current} setCurrent={setCurrent} />
      <MainPage
        setNoteInput={setNoteInput}
        notes={notes}
        addNote={addNote}
        noteInput={noteInput}
      />
    </div>
  );
}

export default App;
