module.exports = ({ env }) => ({
  auth: {
    secret: '1695d066e64b9790a512adb9aa91a468fca3daf52d507fb85e5c149875cee047',
  },
  apiToken: {
    salt: 'REZtufMuQCLwXptgDf1BYA==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
