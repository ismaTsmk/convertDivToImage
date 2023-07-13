// Créez le graphique avec Chart.js
const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        label: "Ventes",
        data: [120, 150, 200, 180, 220, 160],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function tele() {
  // Récupérez l'élément HTML contenant la carte
  const chartContainer = document.getElementById("chartContainer");
  console.log("ici1");
  html2canvas(chartContainer, { allowTaint: true }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
  // Convertissez l'élément HTML en image PNG
  // html2canvas(chartContainer).then((canvas) => {
  //   console.log("ici2");
  //   // Convertissez le canvas en données de l'image PNG
  //   const imageData = canvas.toDataURL("image/png");

  //   // Créez un élément <a> pour télécharger l'image
  //   const link = document.createElement("a");
  //   link.href = imageData;
  //   link.download = "chart.png";
  //   link.click();
  // });
  console.log("fini");
}
