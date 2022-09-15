const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, WPM) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  const duration = parseInt(timeTaken);

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${parseInt(duration)}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Your speed is <span class="bold red">${WPM}</span> words per minute</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, duration, errorCount, WPM});
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    console.log(test);
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
      <h3 class="pb-15">${test.questionText}</h3>
      <p>You took <span class="bold warning">${test.duration}</span> seconds</p>
      <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
      <p class="Word-per-minute">Type speed: <span class="bold Yellow">${test.WPM}</span> words per minute</p>
    `;

    histories.appendChild(newRow);
  });
}
