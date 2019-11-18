import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";

HighchartsNetworkgraph(Highcharts);

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"]
})
export class ChartsComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() containerId: string;
  @Input() height: number;
  @Input() chartType: string;

  chart: any;
  series: any;

  constructor() {
    //debugger;
  }

  ngAfterViewInit() {
    const options: any = {
      chart: {
        type: "networkgraph",
        backgroundColor: "#303030",
        marginTop: 80
        //height: "50%"
        //width: "100%"

        //height: "90%"
      },

      legend: {
        enabled: true
      },
      title: {
        text: "Locations & Commodities",
        style: { color: "#FFF", fontSize: "30px" }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        networkgraph: {
          keys: ["from", "to"],
          layoutAlgorithm: {
            //linkLength: 35,
            enableSimulation: true,
            friction: -0.9
          }
        }
      },
      series: [
        {
          marker: {
            // radius: 35
          },
          dataLabels: {
            enabled: true,
            style: { color: "#FFF" },
            textPath: {
              enabled: true
            },
            linkFormat: "",
            allowOverlap: false
          },
          nodes: [
            {
              id: "Emerging Markets",
              color: "red",
              marker: {
                //symbol: 'triangle',
                radius: 80
              }
            },
            {
              id: "Asia",
              color: "red",
              marker: {
                //symbol: 'triangle',
                radius: 80
              }
            },
            {
              id: "Japan",
              color: "orange",
              marker: {
                //symbol: 'triangle',
                radius: 50
              }
            },
            {
              id: "Tokyo",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Kyoto",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Osaka",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Yokohama",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Hiroshima",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Sapporo",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Fukuoka",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Seto",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Handa",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            {
              id: "Nishio",
              color: "#673ab7",
              marker: {
                //symbol: 'triangle',
                radius: 35
              }
            },
            //---------------

            {
              id: "ferrous",
              color: "red",
              marker: {
                //symbol: 'triangle',
                radius: 80
              }
            },
            {
              id: "ferrous alloys",
              color: "yellow",
              marker: {
                //symbol: 'triangle',
                radius: 50
              }
              //radius: 30
            },
            {
              id: "ferrochrome",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "vanadium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "silicon",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "magnesium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "arsenic",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "bismuth",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "Hafnium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "mercury",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "rhenium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "Titanium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "ferro-nickel",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "Zircon",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "Iridium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "Rhodium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "ruthenium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "nickel ore",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "lithium",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "ferro-molybdenum",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            },
            {
              id: "iron",
              color: "#673ab7",
              marker: {
                radius: 35
              }
              //radius: 30
            }
            //
          ],
          // color: "#673ab7",
          id: "lang-tree",
          data: [
            ["ferrous", "ferrous alloys"],
            ["ferrous alloys", "ferrochrome"],

            //
            ["ferrous alloys", "vanadium"],
            ["ferrous alloys", "silicon"],
            ["ferrous alloys", "magnesium"],
            ["ferrous alloys", "arsenic"],
            ["ferrous alloys", "bismuth"],
            ["ferrous alloys", "Hafnium"],
            ["ferrous alloys", "mercury"],
            ["ferrous alloys", "rhenium"],
            ["ferrous alloys", "Titanium"],
            ["ferrous alloys", "ferro-nickel"],
            ["ferrous alloys", "Zircon"],
            ["ferrous alloys", "Iridium"],
            ["ferrous alloys", "Rhodium"],
            ["ferrous alloys", "ruthenium"],

            ["ferrous alloys", "nickel ore"],
            ["ferrous alloys", "lithium"],
            ["ferrous alloys", "ferro-molybdenum"],
            ["ferrous alloys", "iron"],

            ["ferrous alloys", "Emerging Markets"],

            //------------------

            ["ferrous", "Japan"],
            ["Asia", "Japan"],
            ["Japan", "Tokyo"],
            ["Japan", "Kyoto"],
            ["Japan", "Osaka"],
            ["Japan", "Yokohama"],
            ["Japan", "Hiroshima"],
            ["Japan", "Sapporo"],
            ["Japan", "Fukuoka"],
            ["Japan", "Seto"],
            ["Japan", "Nishio"],
            ["Japan", "Handa"]
          ]
        }
      ]
    };

    this.chart = Highcharts.chart(this.containerId, options);

    //this.chart.setTitle({ text: this.title });
  }

  ngOnInit() {}

  // public updateSeries(series : any[])
  // {
  // this.chart.series[0].setData(series[0]);
  // }
}
