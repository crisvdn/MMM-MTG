const api = "https://api.scryfall.com";
const random = '/cards/random';
const commander = '/cards/random?q=is%3Acommander';

Module.register("MMM-MTG", {
    default: {
        commander: true,
        interval: 0,
    },
    
    getDom: async function () {
        var imgContainer = document.createElement("div");
        if(this.imageUri){
          if(this.debugLog){
            console.log("imageUri: " + this.imageUri);
          }
          var imgElement = document.createElement("img");
          imgElement.src = this.imageUri;
          imgElement.style.maxHeight = this.config.sizePx;
          imgContainer.appendChild(imgElement);
        }
      
        return imgContainer;
    },

    getData: function () {
        this.sendSocketNotification("GET_MTG_CARD", this.config);
        setInterval(() => {
          this.sendSocketNotification("GET_MTG_CARD", this.config);
        }, this.config.interval);
      },

      socketNotificationReceived: function (notification, payload) {
        switch (notification) {
          case "UPDATE_CARD_DATA":
            break;
          default:
        }
        this.updateDom();
      },
});

async function GetCard(uri){
    var imgUrl;

    await fetch(api + uri).then((response) => response.json())
    .then(data => {
        imgUrl = data;
    })
    .then(() => {
        item.src = imgUrl.image_uris.normal;
        document.body.appendChild(imgElement);
    }
    );
    return item.src;
}
