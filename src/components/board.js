import React, { useState, useEffect } from 'react';
import Cell from './cell';
import './board.css';

function Board(props) {
  const { width } = props;
  const height = width;
  const cellCount = width * height;

  const [mineGrid, setMineGrid] = useState(null);
  const [hideGrid, setHideGrid] = useState(null);

  const cells = Array(cellCount).fill().map((_,i) =>
    <Cell />
  );
  return (
    <div className="board">
      {cells}
    </div>
  )

}

export default Board;