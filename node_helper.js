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
