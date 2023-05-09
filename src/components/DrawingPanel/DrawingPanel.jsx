import React, { useRef } from 'react';
import '../../styles/drawingPanel.scss';
import { Row } from '../Row';
import { exportComponentAsPNG } from 'react-component-export-image';

export const DrawingPanel = ({
  width,
  height,
  selectedColor,
}) => {
  const panelRef = useRef();

  const rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(i + Date.now());
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows.map(key => (
        <Row key={key} width={width} selectedColor={selectedColor} />
        ))}
      </div>

      <button 
        className="button"
        onClick={() => exportComponentAsPNG(panelRef)}
      >
        Export as PNG
      </button>
    </div>
  );
};