import fs from "fs";
import path from "path";
import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";

type TypeParsedUrlsObject = {
  urls: {
    loc: Array<string>;
  };
};

const parser = new XMLParser();
const fileXML = fs.readFileSync(path.resolve(__dirname, "../urls.xml"), {
  encoding: "utf-8",
});

const urlObj: TypeParsedUrlsObject = parser.parse(fileXML);
const urls = urlObj.urls.loc;

// https://www.arcgallery.org/exhibitions-archive/30th-anniversary-exhibition
const URL_PATTERN = new RegExp(
  "^https:\\/\\/(.+)\\/(exhibitions-archive)\\/(.+)$"
);

urls.forEach((url) => {
  const matcher = url.match(URL_PATTERN);
  console.log(`/${matcher[3]}/ -> /${matcher[2]}/${matcher[3]}/ 301`);
  fs.writeFileSync(
    path.resolve(__dirname, "../301.txt"),
    `/${matcher[3]}/ -> /${matcher[2]}/${matcher[3]}/ 301\n`,
    { flag: "a" }
  );
});
