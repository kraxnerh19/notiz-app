// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(error => console.error("Error fetching notes:", error));
  }, []);

  const addNote = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: note })
      });
      const newNote = await response.json();
      setNotes([...notes, newNote]);
      setNote("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div>
      <h1>Notizen Uebung2</h1>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Notiz eingeben..."
      />
      <button onClick={addNote}>Hinzufügen</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
