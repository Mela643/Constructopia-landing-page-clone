//Scale Generator
const chart = document.getElementById('energyChart').getContext('2d');
const data = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['#4caf50', '#e0e0e0'],
      borderWidth: 0,
      hoverOffset: 0,
    },
  ],
};

new Chart(chart, {
  type: 'doughnut',
  data: data,
  options: {
    cutout: '80%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: -90,
    circumference: 180,
  },
});

//Accordion
let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    // Close all other panels
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove('active');
        let otherPanel = acc[j].nextElementSibling;
        if (otherPanel.style.display === 'block') {
          otherPanel.style.display = 'none';
        }
      }
    }

    // Toggle the current panel
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
