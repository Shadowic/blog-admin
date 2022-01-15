module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '816e9600ab644be5b93f4e899526952e'),
  },
});
