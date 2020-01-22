const port = process.env.NUXT_PORT || 3100;
const host = process.env.NUXT_HOST || '0.0.0.0';

export default {
  server: { host, port },
  srcDir: 'src',
  modules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
    '@nuxtjs/vuetify',
  ],
};
