
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
   module: {
      rules: [
         {
            test: /\.scss$/,
            loader: 'postcss-loader',
            options: {
               ident: 'postcss',
               plugins: () => [
                  postcssPresetEnv({
                     // disable all support by default
                     stage: false,
                     features: {
                        // Convert logical properties to hard coded direction equivalents
                        'logical-properties-and-values': {
                           dir: 'ltr',
                        },
                     },
                  }),
               ],
               // allow // comments
               syntax: 'postcss-scss',
               sourceMap: true
            }
         }
      ]
   }
   /*
   plugins: [
      /*
      new WebpackNotifierPlugin({
         alwaysNotify: true,
         title: 'App Name',
         contentImage: path.join(__dirname, 'image.png')
      }),
   ]
   */
};
