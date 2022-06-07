module.exports = ({ env }) => ({
  upload: {
    enabled: true,
    config: {
      provider: 'selectel',
      providerOptions: {
        endpoint: env('AWS_HOST'),
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        s3ForcePathStyle: true,
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
        replaceOptions: {
          privateHost: env('AWS_PRIVATE_HOST'),
          publicHost: env('AWS_PUBLIC_HOST')
        }
      },
    },
  },
});
