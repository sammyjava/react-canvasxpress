import React from 'react';
import CanvasXpressReact from 'canvasxpress-react';

export default function Bar() {
    
    var target = "canvas";
     
    var data =  {
        "y" : {
            "vars" : ["Variable1"],
            "smps" : ["Sample1", "Sample2", "Sample3", "Sample4"],
            "data" : [[33, 48, 55, 23]]
      }
    };

    var config = {
        "graphOrientation": "vertical",
        "graphType": "Bar",
        "theme": "CanvasXpress",
        "title": "Simple Bar graph yo!"
    };
   
    return (
      <CanvasXpressReact target={target} data={data} config={config} width={500} height={500} />
    )
     
}
