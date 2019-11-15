
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/css/reset.css',
    '@/assets/css/font/iconfont.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'http://api.feblog.cn/api/v1' : 'http://127.0.0.1:3001/api/v1',
    // prefix: process.env.NODE_ENV === 'production' ? 'http://api.feblog.cn/api/v1' : '/api/v1',
    proxy: true    
  },
  // proxy: {
  //   '/api/v1/': {
  //     target: 'http://127.0.0.1:3001',
  //     pathRewrite: {               
  //        '^/api/v1/': '/api/v1/'            
  //     }        
  //   }    
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
console.log(process.env.NODE_ENV)
