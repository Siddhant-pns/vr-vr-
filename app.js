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
            intersectedElement.emit('gaze-click');
            this.isGazing = false;
          }
        } else {
          this.startTime = time;
          this.isGazing = true;
        }
      } else {
        this.isGazing = false;
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
  }
  
  function openYouTube() {
    // Implement YouTube access functionality
    console.log('YouTube option selected');
  }
  