import './App.css';

import CanvasXpressReact from 'canvasxpress-react';

import data from './scatter.json';

export default function App() {

    const target = "canvas";
    
    const config = {
        "graphType": "Scatter2D",
        "title": "GWAS Manhattan Plot",
        "decorations": {
            "line": [
                { "color": "rgb(0,0,255)", "width": 1, "y": 1.3 }
            ]
        },
        "manhattanMarkerChromosomeNumber": "Chr",
        "manhattanMarkerLogPValue": "-log10(p)",
        "manhattanMarkerPosition": "Pos",
        "scatterType": "manhattan",
        "titleScaleFontFactor": 0.3,
        "subtitleScaleFontFactor": 0.2,
        "axisTitleScaleFontFactor": 2.0,
        "disableToolbar": true,
        "colorBy": "Trait",
        "colorByShowLegend": true,
        "canvasBox": true,
        "setMinY": 0.0,
        "dataPointSize": 35,
        "legendBox": false,
        "legendScaleFontFactor": 2,
        "legendTitleScaleFontFactor": 3,
        "legendInside": false,
        "legendPositionAuto": false,
        "legendPosition": "right",
    }

    const events = {
        mousemove: function(o, e, t) {
            const markerIdentifier = o.y.vars[0];
            // const sample = o.y.smps;
            // const genotype = String(genotypesJSON${index}[sample]);
            // const tissue = String(tissuesJSON${index}[sample]);
            // const treatment = String(treatmentsJSON${index}[sample]);
            // const description = String(descriptionsJSON${index}[sample]);
            // let s = sample;
            // if (genotype!="undefined") s += ":" + genotype;
            // if (tissue!="undefined") s += ":" + tissue;
            // if (treatment!="undefined") s += ":" + treatment;
            // if (description!="undefined") s += ":" + description;
            t.showInfoSpan(e, "Here is the blurb about "+markerIdentifier);
        }
    }

    return (
        <CanvasXpressReact target={target} data={data} config={config} events={events} width={1500} height={800} />
    );

}
