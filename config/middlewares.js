module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'blob:', 'cdn.jsdelivr.net', 'strapi.io', '33308.selcdn.ru', 's3.storage.selcloud.ru', `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.${env('AWS_HOST')}`],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
