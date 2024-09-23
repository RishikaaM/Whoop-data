document.addEventListener('DOMContentLoaded', function () {
  
  // Stress Levels Chart
  const stressData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Stress Levels',
      data: [60, 50, 70, 80, 45, 55, 65],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: true,
    }]
  };
  
  const stressChartConfig = {
    type: 'line',
    data: stressData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animations: {
        tension: {
          duration: 1500,
          easing: 'easeInOutElastic',
          from: 1,
          to: 0,
          loop: true
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#333',
            font: {
              size: 14
            }
          }
        }
      }
    }
  };

  const stressChart = new Chart(
    document.getElementById('stressChart'),
    stressChartConfig
  );

  // Sleep Levels Chart
  const sleepData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Hours of Sleep',
      data: [7, 6, 8, 5, 6, 7, 9],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: true,
    }]
  };

  const sleepChartConfig = {
    type: 'bar',
    data: sleepData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animations: {
        tension: {
          duration: 2000,
          easing: 'easeInOutElastic',
          from: 1,
          to: 0,
          loop: true
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#333',
            font: {
              size: 14
            }
          }
        }
      }
    }
  };

  const sleepChart = new Chart(
    document.getElementById('sleepChart'),
    sleepChartConfig
  );

  // Recovery Rate Chart
  const recoveryData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Recovery Rate (%)',
      data: [70, 60, 80, 75, 90, 85, 95],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: true,
    }]
  };

  const recoveryChartConfig = {
    type: 'radar',
    data: recoveryData,
    options: {
      scales: {
        r: {
          beginAtZero: true
        }
      },
      animations: {
        tension: {
          duration: 1500,
          easing: 'easeInOutBack',
          from: 1,
          to: 0,
          loop: true
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#333',
            font: {
              size: 14
            }
          }
        }
      }
    }
  };

  const recoveryChart = new Chart(
    document.getElementById('recoveryChart'),
    recoveryChartConfig
  );
});
