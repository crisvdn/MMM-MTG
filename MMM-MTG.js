const api = "https://api.scryfall.com";
const random = '/cards/random';
const commander = '/cards/random?q=is%3Acommander';

Module.register("MMM-MTG", {
    default: {
        commander: true,
        interval: 0,
    },
    
    getDom: function () {
        var imgElement = document.createElement('img');
        if(this.commander){
            imgElement.innerHTML = this.GetCard(commander);
        }else{
            imgElement.innerHTML = this.GetCard(random);
        }
        return imgElement;
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
