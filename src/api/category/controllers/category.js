const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({strapi}) => ({

  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    const {query} = ctx;
    // Calling the default core action
    const entity = await strapi.entityService.findMany('api::category.category', {
      ...query,
      populate: {
        albums: {
          populate: {
            photos: true,
            cover: true
          }
        },
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },

  // Method 3: Replacing a core action
  // async findOne(ctx) {
  //   const { id } = ctx.params;
  //   const { query } = ctx;
  //
  //   const entity = await strapi.service('api::restaurant.restaurant').findOne(id, query);
  //   const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  //
  //   return this.transformResponse(sanitizedEntity);
  // }
}));
