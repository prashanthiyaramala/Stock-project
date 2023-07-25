import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Stockxg2.css";
class Stockxg2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series1: [
        { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
        { name: "series2", data: [11, 32, 45, 32, 34, 52, 41] }
      ],
      options1: {
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      },
      series2: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33, 6650.5]
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11, 6610.68]
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65, 6627]
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24, 6608.01]
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47, 6612]
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31, 6608.01]
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02, 6614.4]
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02, 6650.5]
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01, 6643.59]
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02, 6638.24]
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91, 6629.67]
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612, 6650.5]
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612, 6620]
            }
          ]
        }
      ],
      options2: {
        chart: {
          type: "candlestick",
          height: 350
        },
        title: {
          text: "CandleStick Chart",
          align: "left"
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div class="maincontain">
          <div class="firstcolumn1">
            <div id="chart2">
              <ReactApexChart
                options={this.state.options2}
                series={this.state.series2}
                type="candlestick"
                height={this.state.chart2Height}
              />
            </div>
            <div id="chart1">
              <h2 class="tradet10">Trading Parameters</h2>
              <ReactApexChart
                options={this.state.options1}
                series={this.state.series1}
                type="area"
                height={this.state.chart1Height}
              />
            </div>
          </div>

          <div class="secondcolumn2">
            <span>
              {" "}
              <button class="connectwallet" id="conwallet">
                <div class="wallett23">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/361/001/small/wallet-icon-free-vector.jpg"
                    alt="Image 1"
                    class="wallett24"
                  ></img>
                  <span class="wallett25">Connect Wallet</span>
                </div>
              </button>
              <button class="btc1" id="conbtc">
                <div class="wallett23">
                  <img
                    src="https://th.bing.com/th/id/OIP.2-BH-isbGQmbx7HcLzssVwHaHa?pid=ImgDet&rs=1"
                    alt="Image 1"
                    class="wallett24"
                  ></img>
                  <span class="wallett25">BTC/USDTC</span>
                </div>
              </button>
            </span>
            <br></br>
            <div class="wallettrans">
              <div class="ww23">
                <table>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                  </tr>

                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>

                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>

                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                </table>
              </div>
              <div class="ww24">
                <b>240000</b>
                <table>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                  </tr>

                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>

                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                </table>
              </div>
              <div class="ww25">
                <p>Trading Parameters</p>
                <table>
                  <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                  </tr>

                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>

                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                  <tr>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="endtrans">
              <button className="seetrans">SeeTransactions</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // Calculate the chart heights based on the container's width
    const firstcolumnWidth = document.querySelector(".firstcolumn1")
      .clientWidth;
    const chart2Height = Math.min(500, firstcolumnWidth * 0.5); // Set a maximum height of 400px
    const chart1Height = Math.min(500, firstcolumnWidth * 0.5); // Set a maximum height of 400px

    // Update the state with the calculated chart heights
    this.setState({
      chart2Height,
      chart1Height
    });
  }
}

export default Stockxg2;
