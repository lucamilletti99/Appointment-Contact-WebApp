import React from "react";
import {Tile} from '../tile/Tile.js'

export const TileList = ({tiles}) => {
  return (
    <div>
      <ul>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
      </ul>
      
    </div>
  );
};
 