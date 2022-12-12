import './App.css';

import CanvasXpressReact from 'canvasxpress-react';

import data from './genomic.json';

export default function App() {

    const target = "canvas";
    
    const config = {
        "graphType": "Genome",
        "backgroundType": "solid",
        "showShadow": false,
        "featureStaggered": true,
        "background": "white",
        "fontName": "Arial",
        "featureNameFontSize": 10,
        "featureNameFontColor": "darkgreen",
        "featureHeightDefault": 5,
        "xAxisTickColor": "black",
        "wireColor": "darkgray",
        "setMinX": 0,
        "xAxisExact": false
    }
    
    const events = {
        mousemove: function(o, e, t) {
            if (o) {
                if (o[0].data[0].offset) {
                    t.showInfoSpan(e, "This is a marker");
                } else if (o[0].data[0].start == 0) {
                    t.showInfoSpan(e, "This is a linkage group");
                } else {
                    t.showInfoSpan(e, "This is a QTL");
                }
            }
        }
    }

    return (
        <CanvasXpressReact target={target} data={data} config={config} events={events} width={1500} height={800} />
    );

}
