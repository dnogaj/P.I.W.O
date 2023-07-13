import React, { useState } from 'react';
import './InteractiveBlockList.css';


function InteractiveBlockList() {
  const [blocks, setBlocks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const addBlock = () => {
    if (blocks.length < 100) { 
      setBlocks([...blocks, { title: '', text: '', editing: false }]);
    }
  };

  const removeBlock = (index) => {
    const newBlocks = blocks.filter((block, i) => i !== index);
    setBlocks(newBlocks);
  };

  const nextBlock = () => {
    if (currentPage < Math.floor(blocks.length / 10)) { 
      setCurrentPage(currentPage + 1);
    }
  };

  const prevBlock = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleEditing = (index) => {
    setBlocks(
      blocks.map((b, i) =>
        i === index ? { ...b, editing: !b.editing } : b
      )
    );
  };

  return (
    <div>
      <button onClick={addBlock}>Add block</button>
      {blocks
        .slice(currentPage * 10, (currentPage * 10) + 10)
        .map((block, index) => (
          <div key={index} className="interactive-block">
            {block.editing ? (
              <div>
                <input
                  placeholder="Title"
                  value={block.title}
                  onChange={(e) =>
                    setBlocks(
                      blocks.map((b, i) =>
                        i === index ? { ...b, title: e.target.value } : b
                      )
                    )
                  }
                />
                <textarea
                  placeholder="Text"
                  value={block.text}
                  rows={block.text.split('\n').length} 
                  onChange={(e) =>
                    setBlocks(
                      blocks.map((b, i) =>
                        i === index ? { ...b, text: e.target.value } : b
                      )
                    )
                  }
                />
                <button onClick={() => toggleEditing(index)}>Done</button>
              </div>
            ) : (
              <div>
                <h2>{block.title}</h2>
                <p>{block.text}</p>
                <button onClick={() => toggleEditing(index)}>Edit</button>
              </div>
            )}
            <button onClick={() => removeBlock(index)}>Remove</button>
          </div>
        ))}
      <button onClick={prevBlock}>Previous Page</button>
      <button onClick={nextBlock}>Next Page</button>
    </div>
  );
}

export default InteractiveBlockList;

