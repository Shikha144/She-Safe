document.getElementById('alertBtn').addEventListener('click', () => {
  alert('Emergency alert sent to trusted contacts!');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, handleError);
  } else {
    document.getElementById('locationOutput').textContent = "Geolocation not supported.";
  }
});

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.getElementById('locationOutput').textContent =
    `📍 Location: ${lat.toFixed(4)}, ${lon.toFixed(4)} (shared with contacts)`;
}

function handleError(error) {
  document.getElementById('locationOutput').textContent =
    "Unable to retrieve location. Please check your settings.";
}