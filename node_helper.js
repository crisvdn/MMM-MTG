const NodeHelper = require("node_helper");
const Log = require("logger");

module.exports = NodeHelper.create({

    start: function startModule () {
        Log.info("Starting module " + this.name);
    },

    socketNotificationReceived: async function (notification, payload) {
        const self = this;
        switch (notification) {
          case "GET_MTG_CARD":

            break;
          default:
            Log.error("Switch item {} is missing", notification);
        }
    },
});

async function GetCard(uri, sender){
  var imgUrl;
  await fetch(uri).then((response) => response.json())
  .then(data => {
      imgUrl = data;
  })
  .then(() => {
    try{
      imgUrl.src = imgUrl.image_uris.border_crop;
      sender.sendSocketNotification("UPDATE_CARD_DATA", imgUrl);
    }
    catch(error){
      Log.error(error);
    }
  }
  );
}