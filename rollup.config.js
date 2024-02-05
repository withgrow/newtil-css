import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import url from "postcss-url";
import copy from "rollup-plugin-copy";
import fs from "fs";

function generateIconListFromResource() {
  return {
    name: "generate-icons-list-from-resource",
    buildStart() {
      const iconListDirectory = "./packages/icon";
      const outputPath = "./docs/shared/icon-list.json";

      const fileList = fs.readdirSync(iconListDirectory);

      const iconNameList = fileList
        .filter((file) => file.endsWith(".svg"))
        .map((file) => file.replace(".svg", ""));

      const jsonContent = JSON.stringify(iconNameList, null, 2);
      fs.writeFileSync(outputPath, jsonContent, "utf8");
    },
  };
}

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
          // url("../icon/name.svg") -> url("icon/name.svg")
          url: (asset) => asset.url.replace(/\.\.\//g, ""),
        }),
      ],
      extract: true,
      minimize: true,
    }),
    generateIconListFromResource(),
    copy({
      targets: [{ src: "packages/icon/**.svg", dest: "dist/icon" }],
    }),
  ],
};
