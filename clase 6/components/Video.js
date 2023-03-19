export default class Video {
        constructor(url, width, height) {
          this.url = url, 
          this.width = width,
          this.height = height
        }
        render() {
          const app = document.getElementById("app");
          const video = `<video width=${this.width} height=${this.height} controls autoplay><source src=${this.url}</video>`;
          app.innerHTML = video;
        }
      
      
}

