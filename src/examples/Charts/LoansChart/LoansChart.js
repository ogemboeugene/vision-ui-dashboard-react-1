import React, { Component } from "react";
import Chart from "react-apexcharts";

class LoansChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.loansChartData || [],  // Set default data to avoid issues
      chartOptions: props.loansChartOptions || {}, // Set default options to avoid issues
    };
  }

  componentDidMount() {
    const { loansChartData, loansChartOptions } = this.props;

    if (loansChartData && loansChartOptions) {
      this.setState({
        chartData: loansChartData,
        chartOptions: loansChartOptions,
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

export default LoansChart;
