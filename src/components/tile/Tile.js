import React from "react";

const styles= {
  fontWeight: 18,
}
export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
    {
      Object.values(tile).map((tileElement, index) => {
        if(index === 0){
          return <p className="tile-title" style={styles} key={index}><strong><em>{tileElement}</em></strong></p>
        }else return <p className='tile' key={index}>{tileElement}</p>
      })
    }
    
    </div>
  );
};
