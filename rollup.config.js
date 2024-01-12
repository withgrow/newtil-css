import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";

export default {
  input: "packages/css/style.css",
  output: {
    file: "dist/style.css",
    format: "es",
  },
  plugins: [
    postcss({
      plugins: [
        postcssImport(),
        // https://github.com/postcss/postcss-url
        url({
          url: "inline",
        }),
      ],
      extract: true,
      minimize: true,
    }),
  ],
};
