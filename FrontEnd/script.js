document.addEventListener("DOMContentLoaded", () => {
  const led = document.getElementById("led");
  const toggleButton = document.getElementById("toggleButton");
  let isOn = false;

  toggleButton.addEventListener("click", () => {
    isOn = !isOn;
    led.style.backgroundColor = isOn ? "green" : "red";
    toggleButton.textContent = isOn ? "Turn Off" : "Turn On";
  });
});
