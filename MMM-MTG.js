const api = "https://api.scryfall.com";
const random = '/cards/random';
const commander = '/cards/random?q=is%3Acommander';

Module.register("MMM-MTG", {
    defaults: {
        text: "MTG",
        sizePx: '450px',
        showCommandersOnly: true,
        interval: 1,
    },
    imageUri: "",
    requiresVersion: "2.25.0",

    start: async function() {
      this.getData();
      if(this.config.interval > 0){
        setInterval(() => {
          this.getData();
        }, this.config.interval * 60000);
      }
    },
    
    getDom: async function () {
        var imgContainer = document.createElement("div");
        if(this.imageUri){
          var imgElement = document.createElement("img");
          imgElement.src = this.imageUri;
          imgElement.style.maxHeight = this.config.sizePx;
          imgContainer.appendChild(imgElement);
        }
      
        return imgContainer;
    },

    getData: async function () {
      if(this.config.showCommandersOnly){
        this.sendSocketNotification("GET_MTG_CARD", api + commander);
      }else{
        this.sendSocketNotification("GET_MTG_CARD", api + random);  
      }
    },

    socketNotificationReceived: function (notification, payload) {
      switch (notification) {
        case "UPDATE_CARD_DATA":
          this.imageUri = payload.src;
          this.updateDom();
          break;
        default:
          break;
      }
    }
});
