import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";
import USA from "fusioncharts/maps/fusioncharts.usa";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Column2D from 'fusioncharts/fusioncharts.charts';

ReactFC.fcRoot(FusionCharts, Maps, USA, FusionTheme, Column2D);

class Chart extends ReactFC {}

const chartConfigs = {
  type: 'mscombidy2d',
  width: '100%',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Clicks',
      xAxisName: 'Day',
      pYAxisName: 'Clicks',
      sYAxisName: 'Average CPC',
      theme: 'fusion',
      labelDisplay: 'rotate',
      slantLabels: '1',
    },
    categories: [
      {
        "category": [
          {
            "label": "December 1"
          },
          {
            "label": "December 2"
          },
          {
            "label": "December 3"
          },
          {
            "label": "December 4"
          },
          {
            "label": "December 5"
          },
          {
            "label": "December 6"
          },
          {
            "label": "December 7"
          },
          {
            "label": "December 8"
          },
          {
            "label": "December 9"
          },
          {
            "label": "December 10"
          },
          {
            "label": "December 11"
          },
          {
            "label": "December 12"
          },
          {
            "label": "December 13"
          },
          {
            "label": "December 14"
          },
          {
            "label": "December 15"
          },
          {
            "label": "December 16"
          }
        ]
      }
    ],
    "dataset": [
      {
        seriesName: 'Clicks',
        color: '#F75E01',
        "data": [
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          }
        ]
      },
      {
        seriesName: 'Average CPC',
        parentYAxis: 'S',
        renderAs: 'area',
        color: '#42535E',
        "data": [
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          },
          {
            "value": 0
          }
        ]
      }
    ]
  },
};

function App() {

  return (
    <div style={{width: '100%'}}>
      <Chart {...chartConfigs} />
    </div>
  )
}

export default App
