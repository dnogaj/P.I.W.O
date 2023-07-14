import React, { useState } from 'react';
import './InteractiveBlock.css';

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
          <input className="input-field" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
          <input className="input-field" value={newContent} onChange={e => setNewContent(e.target.value)} />
          <button className="save-button" onClick={handleSave}>Zapisz</button>
        </>
      ) : (
        <>
          <h2 className="title">{newTitle}</h2>
          <p className="content">{newContent}</p>
          <button className="edit-button" onClick={handleEdit}>Edytuj</button>
        </>
      )}
      <button className="delete-button" onClick={() => onDelete(id)}>Usuń</button>
    </div>
  );
}

export default InteractiveBlock;

