import React, { Component, Fragment } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#626262",
          foreColor: "yellow"
        },
        xaxis: {
          categories: [
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Philadelphia",
            "Phoenix",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"
          ]
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ["#f44336"]
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: "Largest Cities in U. S.",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25",
            color: "yellow"
          }
        }
      },
      series: [
        {
          name: "Population",
          data: [
            8550405,
            3971883,
            2720546,
            2296224,
            1567442,
            1563025,
            1469845,
            1394928,
            1300092,
            1026908
          ]
        }
      ]
    };
  }

  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>Axis Toggle</button>
      </Fragment>
    );
  }
}

export default Charts;
