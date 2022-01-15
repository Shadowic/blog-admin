const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::photo-item.photo-item', ({ strapi }) =>  ({

  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, populate: '*' }

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now()

    return { data, meta };
  },

  // Method 3: Replacing a core action
  // async findOne(ctx) {
  //   const { id } = ctx.params;
  //   const { query } = ctx;
  //
  //   const entity = await strapi.service('api:::album.album').findOne(id, query);
  //   const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  //
  //   return this.transformResponse(sanitizedEntity);
  // }
}));
