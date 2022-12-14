import React from "react";
import Data from './Data';
import Card from './Card';

export default function Content() {
    const cardData = Data.map(ele => {
        return <Card 
          key = {ele.id}
          ele = {ele}
        />
      })
    return (
        <div className="content">
            {cardData}
        </div>
    )
}