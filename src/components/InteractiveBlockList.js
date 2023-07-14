import React, { useState, useEffect, useContext } from 'react';
import Linkify from 'react-linkify';
import { AuthContext } from '../components/AuthContext';
import './InteractiveBlockList.css';

function InteractiveBlockList() {
  const [blocks, setBlocks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      fetch('http://127.0.0.1:5000/alerts')
        .then(response => response.json())
        .then(data => setBlocks(data.reverse())) // Odwrócenie kolejności bloków
        .catch(err => console.log(err));
    }
  }, [isLoggedIn]);

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

  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer" className="link-style">
      {text}
    </a>
  );

  return (
    isLoggedIn ? (
      <div className="interactive-block-list">
        {blocks
          .slice(currentPage * 10, (currentPage * 10) + 10)
          .map((block, index) => (
            <div key={index} className="interactive-block">
              <div>
                <h2 className="block-title">{block.title}</h2>
                <p className="block-text">
                  <Linkify componentDecorator={componentDecorator}>
                    {block.text}
                  </Linkify>
                </p>
              </div>
            </div>
          ))}
        <div className="pagination-buttons">
          <button className="pagination-button" onClick={prevBlock}>Poprzednia strona</button>
          <button className="pagination-button" onClick={nextBlock}>Następna strona</button>
        </div>
      </div>
    )
      : <div className="login-message">Musisz być zalogowany aby widzieć komunikaty.</div>
  );
}

export default InteractiveBlockList;


