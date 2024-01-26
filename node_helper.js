const NodeHelper = require("node_helper");
const Log = require("logger");

module.exports = NodeHelper.create({
    start: function () {
        Log.info("Starting module " + this.name);
    },
    socketNotificationReceived: function (notification, payload) {
      Log.info("received " + notification + " : " + payload)
      switch(notification){
        case "GET_MTG_CARD":
          GetCard(payload, this);
          break;
        default:
          break;
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