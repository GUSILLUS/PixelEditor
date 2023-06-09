import React from 'react';
import '../../styles/row.scss';
import { Pixel } from '../Pixel';

export const Row = ({
  width,
  selectedColor,
}) => {
  const pixels = []

  for (let i = 0; i < width; i++) {
    pixels.push(`${i}-pixelId`);
  }

  return (
    <div className="row">{pixels.map(pixel => (
      <Pixel key={pixel} selectedColor={selectedColor} />
    ))}</div>
  );
};