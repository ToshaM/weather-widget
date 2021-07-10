import React from "react";
import Widget from './Widget';

const Widgets = ({data}) => {
  console.log('widget work');
  return (
    <div>
      <Widget data={data}/>
    </div>
  )
}

export default Widgets;