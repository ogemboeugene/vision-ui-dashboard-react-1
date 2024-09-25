import React, { Component } from "react";
import Chart from "react-apexcharts";

class SavingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.savingChartData || [],  // Set default data to avoid issues
      chartOptions: props.savingChartOptions || {}, // Set default options to avoid issues
    };
  }

  componentDidMount() {
    const { savingChartData, savingChartOptions } = this.props;

    if (savingChartData && savingChartOptions) {
      this.setState({
        chartData: savingChartData,
        chartOptions: savingChartOptions,
      });
    }
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default SavingChart;
