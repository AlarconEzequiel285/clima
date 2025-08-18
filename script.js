const weatherCard = document.getElementById('weatherCard');
const weatherIcon = document.getElementById('weatherIcon');
const weatherDesc = document.getElementById('weatherDesc');
const tempValue = document.getElementById('tempValue');
const humidityFill = document.getElementById('humidityFill');
const windFill = document.getElementById('windFill');
const rainFill = document.getElementById('rainFill');
const humidityValue = document.getElementById('humidityValue');
const windValue = document.getElementById('windValue');
const rainValue = document.getElementById('rainValue');
const dateEl = document.getElementById('date');

const bgVideo1 = document.getElementById('bgVideo1');
const bgVideo2 = document.getElementById('bgVideo2');
let activeVideo = bgVideo1;

const weatherData = {
  sunny: { temp: 24, desc: 'Soleado', icon: 'fas fa-sun', humidity: 60, wind: 15, rain: 10, video: 'videos/sunny.mp4' },
  cloudy: { temp: 20, desc: 'Nublado', icon: 'fas fa-cloud', humidity: 70, wind: 10, rain: 20, video: 'videos/cloudy.mp4' },
  rainy: { temp: 18, desc: 'Lluvia', icon: 'fas fa-cloud-showers-heavy', humidity: 85, wind: 20, rain: 80, video: 'videos/rainy.mp4' },
  night: { temp: 16, desc: 'Noche', icon: 'fas fa-moon', humidity: 65, wind: 5, rain: 5, video: 'videos/night.mp4' }
};

function changeWeather(type) {
  const data = weatherData[type];

  // Actualizar tarjeta
  weatherIcon.innerHTML = `<i class="${data.icon} fa-3x"></i>`;
  weatherDesc.textContent = data.desc;
  tempValue.textContent = data.temp;
  humidityFill.style.width = data.humidity + '%';
  windFill.style.width = data.wind * 3 + '%';
  rainFill.style.width = data.rain + '%';
  humidityValue.textContent = data.humidity + '%';
  windValue.textContent = data.wind + ' km/h';
  rainValue.textContent = data.rain + '%';

  // Crossfade video
  const nextVideo = activeVideo === bgVideo1 ? bgVideo2 : bgVideo1;
  nextVideo.src = data.video;
  nextVideo.play();
  nextVideo.style.opacity = 1;
  activeVideo.style.opacity = 0;

  activeVideo = nextVideo;
}

// Actualizar fecha
function updateDate() {
  const now = new Date();
  const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const dayName = days[now.getDay()];
  const dayNum = now.getDate();
  const month = now.toLocaleString('es-ES', { month: 'short' });
  dateEl.textContent = `${dayName}, ${dayNum} ${month}`;
}

// Inicializar
updateDate();
setInterval(updateDate, 3600000); // actualiza cada hora

// Iniciar con clima soleado
changeWeather('sunny');
