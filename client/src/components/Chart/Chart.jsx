import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths } }) => {

  const barChart = (
    confirmed ? (
      <Doughnut
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255)', 'rgba(0, 255, 0)', 'rgba(255, 0, 0)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        interactions={{
          hoverBackgroundColor: ['rgba(0, 0, 255, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(255, 0, 0, 0.7)'],
          hoverBorderWidth: 2,
          hoverBorderColor: 'rgb(0, 0, 0)'
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in India` },
          aspectRatio: 1
        }}
      />
    ) : null
  );


  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );
};

export default Chart;
