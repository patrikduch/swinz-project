
// Data from database convert into representation one
export const TransformhDataToGraph = (graphInput:any, columns: Array<string>, graphTitle: string) => {

    let graphData = [0,0,0,0,0,0,0,0,0,0,0,0]

    const data = {
      labels: columns,
      datasets: [
        {
          label: graphTitle,
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: graphData
        }
      ]
    };

    

    if (graphInput.length != 0) {
      

      for(let i =0; i<= graphData.length; i++) {
        
        const entry : any = graphInput[i];

        if (entry != null) {
          graphData[entry.monthId-1] = entry.totalSum

        }
      }
    }
    return data;
}