import './App.css';

import CanvasXpressReact from 'canvasxpress-react';

import data from './heatmap.json';

export default function App() {

    const target = "canvas";

    const config = {
        'graphType': 'Heatmap',
        'smpTitle': 'Mouse over sample for description.',
        'varTitle': 'Mouse over gene for description; click to go to gene page.',
        'canvasBox': true,
        'showHeatMapIndicator': true,
        'heatmapCellBox': true,
        'heatmapIndicatorPosition': 'top',
        'heatmapIndicatorHistogram': false,
        'heatmapIndicatorHeight': 50,
        'heatmapIndicatorWidth': 500,
        'varLabelScaleFontFactor': 1.2,
        'varLabelFontColor': "black",
        'varLabelFontStyle': "plain",
        'varLabelRotate': 45,
        'varTitleScaleFontFactor': 1.0,
        'smpLabelScaleFontFactor': 1.2,
        'smpLabelFontColor': "black",
        'smpLabelFontStyle': "plain",
        'smpLabelRotate': -45,
        'smpTitleScaleFontFactor': 0.5,
        'samplesKmeaned': true,
        'variablesKmeaned': true,
        'kmeansSmpClusters': 2,
        'kmeansVarClusters': 2,
        'linkage': 'complete',
    }

    const events = {
        mousemove: function(o, e, t) {
            // const markerIdentifier = o.y.vars[0];
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
            if (o.y.vars.length===1 && o.y.smps.length===1) {
                t.showInfoSpan(e, "This is sample "+o.y.smps[0]+" and gene "+o.y.vars[0]);
            } else if (o.y.vars.length === 1) {
                t.showInfoSpan(e, "This is gene "+o.y.vars[0]);
            } else if (o.y.smps.length === 1) {
                t.showInfoSpan(e, "This is sample "+o.y.smps[0]);
            }
        }
    }

    return (
        <CanvasXpressReact target={target} data={data} config={config} events={events} width={1500} height={800} />
    );

}
