(function() {
  app.helpers.locations = {
    getTiles: function() {
      // If the mapbox option is enabled in the diaspora.toml, the mapbox tiles with the podmin's credentials are used.
      if (gon.appConfig.map.mapbox.enabled) {
        return L.tileLayer("https://api.mapbox.com/styles/v1/{style}/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
          accessToken: gon.appConfig.map.mapbox.access_token,
          style: gon.appConfig.map.mapbox.style,
          attribution: "Map data &copy; <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors, " +
                       "<a href='https://creativecommons.org/licenses/by-sa/2.0/''>CC-BY-SA</a>, " +
                       "Imagery © <a href='https://www.mapbox.com'>Mapbox</a>",
          maxZoom: 18
        });
      }

      // maptiles from the Heidelberg University are used by default.
      return L.tileLayer("http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}", {
        attribution: "Map data &copy; <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors, " +
                     "rendering <a href='https://www.geog.uni-heidelberg.de/gis/index_en.html'>" +
                     "GIScience Research Group @ Heidelberg University</a>",
        maxZoom: 18
      });
    }
  };
})();
