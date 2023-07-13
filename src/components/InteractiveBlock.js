import React, { useState } from 'react';
import './InteractiveBlockList.css';

function InteractiveBlock({ id, title, content, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="interactive-block">
      {isEditing ? (
        <>
          <input value={newTitle} onChange={e => setNewTitle(e.target.value)} />
          <input value={newContent} onChange={e => setNewContent(e.target.value)} />
          <button onClick={handleSave}>Zapisz</button>
        </>
      ) : (
        <>
          <h2>{newTitle}</h2>
          <p>{newContent}</p>
          <button onClick={handleEdit}>Edytuj</button>
        </>
      )}
      <button onClick={() => onDelete(id)}>Usuń</button>
    </div>
  );
}

export default InteractiveBlock;
