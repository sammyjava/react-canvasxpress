import './App.css';

import CanvasXpressReact from 'canvasxpress-react';

export default function App() {

    const target = "canvas";

    const data = {
        "y": {
            "data": [[1827.21,1651.27,2240.68,2728.8,1707.87,1963.18,1973.38,1402.35,1748.3,1551.37,4456.7]],
            "smps": ["Flower 1","Flower 2","Flower 3","Flower 4","Flower bud 1","Flower bud 2","Flower bud 3","Flower bud 4","Germinating seedling","Shoot apical meristem","Young leaves"],
            "vars": ["gene"]
        },
        "x": {
            "repgroup": ["Flower","Flower","Flower","Flower","Flower bud","Flower bud","Flower bud","Flower bud","Germinating seedling","Shoot apical meristem","Young leaves"]
        }
    }

    const config = {
        "graphType": "Bar",
        "title": "Chickpea Transcriptome Atlas - I",
        "axisAlgorithm": "wilkinson",
        "graphOrientation": "vertical",
        "marginTop": 100,
        "axisMinMaxTickTickWidth": false,
        "axisTickScaleFontFactor": 1,
        "axisTitleScaleFontFactor": 1.0,
        "smpLabelRotate": 45,
        "smpTitleFontStyle": "italic",
        "smpTitleScaleFontFactor": 0.5,
        "smpTitle": "Mouse over bar for full sample description",
        "legendPosition": "right",
        "colorScheme": "CanvasXpress",
        "colorBy": "repgroup",
        "xAxisTitle": "TPM"
    }

    const events = {
        mousemove: function(o, e, t) {
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
            t.showInfoSpan(e, "Here is the full sample description.");
        }
    }

    return (
        <CanvasXpressReact target={target} data={data} config={config} events={events} width={1150} height={800} />
    );

}

// export default App;
