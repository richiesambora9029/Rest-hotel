# nuxt-app

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Integrate with Tailwind CSS manual due to use the latest Tailwind css version 2.*

```bash
# install Tailwind CSS
yarn add -D @nuxtjs/tailwindcss tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

```

Custom Nuxt config on `nuxt.config.js`

```bash
// nuxt.config.js
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
```

Create your configuration file

Next, generate your tailwind.config.js file:

```bash
npx tailwindcss init
```
This will create a minimal `tailwind.config.js` file at the root of your project:

```bash
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Configure Tailwind to remove unused styles in production

In your `tailwind.config.js` file, configure the `purge` option with the paths to all of your pages and components so Tailwind can tree-shake unused styles in production builds:

```bash
 // tailwind.config.js
  module.exports = {
-   purge: [],
+   purge: [
+     // enable remove unused CSS only in production
+     enabled: process.env.NODE_ENV === 'production',
+     // any file that contain the reference of CSS styles by the class
+     content: [
+       './components/**/*.{vue,js}',
+       './layouts/**/*.vue',
+       './pages/**/*.vue',
+       './plugins/**/*.{js,ts}',
+       './nuxt.config.{js,ts}',
+     ],
+   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```


Include Tailwind in your CSS

Open the `./assets/css/tailwind.scss` file that Nuxt.js generates for you by default and use the `@tailwind` directive to include Tailwind's `base`, `components`, and `utilities` styles, replacing the original file contents:

```bash
/* purge css start ignore */
@tailwind base;
@tailwind components;
/* purge css and ignore */
@tailwind utilities;

*,
*:before,
*:after {
  @apply box-border m-0;
}

```

## Setup global accessible CSS and SCSS/SASS in Nuxt

```bash
# add SCSS or SASS dependency loader
yarn add -D node-sass sass-loader
```

Nuxt Style Resources module

```bash
# add nuxt style resources module
yarn add -D @nuxtjs/style-resources
```

Custom Nuxt config `nuxt.config.js`:

```bash
modules: [
  '@nuxtjs/style-resources'
]
```

and then add key `styleResource` to Nuxt config:

create global SCSS in `./assets/scss/global.scss` and load it to Nuxt config:

```bash
css: [
  '@/assets/scss/global.scss'
],
```

first create file SCSS in Assets Nuxt directory `./assets/scss/vars` and `./assets/scss/abstracts/`

```bash
styleResources: {
  scss: [
    '@/assets/scss/vars/*.scss',
    '@/assets/scss/abstracts/*.scss',
  ]
}
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

Do not hesitate if there are suggestions and criticisms 😃 [@asapdotid](https://github.com/asapdotid)
# Hotel-Rest
