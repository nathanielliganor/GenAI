const liveTime = document.getElementById('liveTime');
const liveLocation = document.getElementById('liveLocation');

function updateTime() {
  const now = new Date();
  liveTime.textContent = `${now.toLocaleDateString()}`;
  liveLocation.textContent = ' Ann Arbor, MI, USA';
}

// Update time every second
setInterval(updateTime, 1000);
