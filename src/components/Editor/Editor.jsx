import React, { useState } from 'react';
import '../../styles/editor.scss'
import '../../styles/button.scss'
import { CompactPicker } from 'react-color';
import { DrawingPanel } from '../DrawingPanel';


export const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('start drawing');
  const [selectedColor, setSelectedColor] = useState('#f44336');

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing');
  }

  function changeColor(color) {
    setSelectedColor(color.hex)
  };


  return (
    <div className="editor">
      <h1 className="editor__title">Pixel Editor</h1>
      {hideDrawingPanel && (
        <>
          <h2 className="editor__subtitle">Enter Panel Dimensions</h2>
          <div className="editor__options">
            <div className="editor__options_group">
              <input 
                type="number"
                className="editor__options_group_panelInput"
                defaultValue={panelWidth}
                onChange={(e) => {
                  setPanelWidth(e.target.value);
                }}
              />

              <span className="editor__options_group_span">Width</span>
            </div>
            <div className="editor__options_group">
              <input 
                type="number"
                className="editor__options_group_panelInput"
                defaultValue={panelHeight}
                onChange={(e) => {
                  setPanelHeight(e.target.value);
                }}
              />

              <span className="editor__options_group_span">Height</span>
            </div>
          </div>
        </>
      )}

      <button 
        onClick={initializeDrawingPanel} 
        className="button"
      >
        {buttonText}
      </button>

      {hideOptions && (
        <>
          <CompactPicker
            color={selectedColor} 
            onChangeComplete={changeColor}
          />

          <DrawingPanel 
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        </>
      )}
    </div>
  );
};
