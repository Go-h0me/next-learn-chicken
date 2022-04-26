module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '119d7e1eadf3adda0f8f566847cf364b'),
  },
});
