// Initialize countdown
let countdownValue = 3;
const countdownElement = document.getElementById('countdown');

function startCountdown() {
  countdownValue = 3;
  countdownElement.textContent = countdownValue;
  const countdownInterval = setInterval(() => {
    countdownValue -= 1;
    countdownElement.textContent = countdownValue;
    if (countdownValue <= 0) {
      clearInterval(countdownInterval);
      countdownElement.style.display = 'none';
    }
  }, 1000);
}



// Gaze Detection Component
AFRAME.registerComponent('gaze-detection', {
    init: function () {
      this.startTime = 0;
      this.isGazing = false;
      this.gazeTime = 3000; // 3 seconds
    },
  
    tick: function (time, deltaTime) {
        const gazePoint = document.getElementById('gaze-point');
        const intersectedElement = document.querySelector('[gaze-interactive]');
    
        if (intersectedElement) {
          if (this.isGazing) {
            if (time - this.startTime >= this.gazeTime) {
              const action = intersectedElement.getAttribute('gaze-interactive').action;
              if (action) {
                window[action]();
              }
              this.isGazing = false;
            }
          } else {
            this.startTime = time;
            this.isGazing = true;
            countdownElement.style.display = 'block'; // Show countdown when gaze starts
          }
        } else {
          this.isGazing = false;
          countdownElement.style.display = 'none'; // Hide countdown if not gazing
        }
      }
    });
  
  // Gaze Interaction Functions
  function requestStorageAccess() {
    // Implement your storage access request here
    document.getElementById('storage-prompt').setAttribute('visible', 'false');
  }
  
  function openFiles() {
    // Implement file access functionality
    console.log('Files option selected');
  }
  
  function openBrowser() {
    // Implement browser access functionality
    console.log('Browser option selected');
    document.getElementById('browser-popup').setAttribute('visible', 'true')
    startCountdown();
  }
  
  function openYouTube() {
    // Implement YouTube access functionality
    console.log('YouTube option selected');
  }

  // Show the virtual keyboard
function showKeyboard() {
    document.getElementById('virtual-keyboard').setAttribute('visible', 'true');
  }

  // Handle URL input and open in a new tab
function openURL() {
    const url = document.getElementById('url-input').value;
    if (url) {
      window.open(url, '_blank');
    }
    closePopup();
  }

  // Close the browser popup
function closePopup() {
    document.getElementById('browser-popup').setAttribute('visible', 'false');
    document.getElementById('virtual-keyboard').setAttribute('visible', 'false')
    countdownElement.style.display = 'none';
  }