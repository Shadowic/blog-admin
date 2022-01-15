'use strict';

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/albums/slug/:code",
      handler: "album.findByCode",
      config: {
        policies: [],
      }
    }
  ]
}
