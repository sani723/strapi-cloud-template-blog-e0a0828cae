module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: [
      '107a812767205ed80b5c2e3132eec5713c2b45cc05b38d0f3fdcfe9a892fd7c5',
      '7248e1322266299db13e46e0014af25a69d63b134895f967afcc14224bae9900'
    ]
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
