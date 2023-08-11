import React, { Component } from "react";

class ColumnChart extends Component {
  shouldComponentUpdate(nextProps) {
    // Compare the relevant props to decide if re-rendering is needed
    // For example, you might want to compare chart data or other properties
    if (this.props.data !== nextProps.data) {
      return true; // Re-render if data has changed
    }
    return false; // Avoid re-render if data hasn't changed
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
      { id: "AU.WA", value: 310 },
      { id: "AU.JB" },
      { id: "AU.NS", value: 240 },
      { id: "AU.VI", value: 75 },
      { id: "AU.NT", value: 130 },
      { id: "AU.TS", value: 190 },
      { id: "AU.CT" },
      { id: "AU.SA" },
      { id: "AU.QL" },
    ];

    var map = anychart.map();
    map.geoData(anychart.maps.australia);

    // set the series
    var series = map.choropleth(data);
    series.stroke("#000 .3");
    series.colorScale(anychart.scales.linearColor("#FFEBD6", "#C40A0A"));
    series.labels().fontColor("black");

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
