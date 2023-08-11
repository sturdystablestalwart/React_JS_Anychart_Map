import React, { Component } from "react";

class ColumnChart extends Component {
  shouldComponentUpdate(nextProps) {
    // compare the relevant props to decide if re-rendering is needed
    // for example, you might want to compare chart data or other properties
    if (this.props.data !== nextProps.data) {
      return true; // re-render if data has changed
    }
    return false; // avoid re-render if data hasn't changed
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  renderChart() {
    const data = [
      { id: "AU.NT", value: 100 },
      { id: "AU.QL", value: 50 },
      { id: "AU.NS", value: 25 },
      { id: "AU.VI" },
      { id: "AU.TS" },
      { id: "AU.JB" },
      { id: "AU.CT" },
      { id: "AU.SA" },
    ];

    // set-up a map
    var map = anychart.map();
    map.geoData(anychart.maps.australia);

    // set the series
    var series = map.choropleth(data);
    series.stroke("#000 .3");

    // set-up a color range for the series
    series.colorScale(anychart.scales.linearColor("#FFEBD6", "#C40A0A"));

    // set the container
    map.container("chart-container");
    map.draw();

    this.chart = map;
  }

  render() {
    return (
      <div id="chart-container" style={{ width: "100%", height: "100%" }} />
    );
  }
}

export default ColumnChart;
