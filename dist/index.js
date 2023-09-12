"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fast_xml_parser_1 = require("fast-xml-parser");
const parser = new fast_xml_parser_1.XMLParser();
const fileXML = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../urls.xml"), {
    encoding: "utf-8",
});
const urlObj = parser.parse(fileXML);
const urls = urlObj.urls.loc;
// https://www.arcgallery.org/exhibitions-archive/30th-anniversary-exhibition
const URL_PATTERN = new RegExp("^https:\\/\\/(.+)\\/(exhibitions-archive)\\/(.+)$");
urls.forEach((url) => {
    const matcher = url.match(URL_PATTERN);
    console.log(`/${matcher[3]}/ -> /${matcher[2]}/${matcher[3]}/ 301`);
    fs_1.default.writeFileSync(path_1.default.resolve(__dirname, "../301.txt"), `/${matcher[3]}/ -> /${matcher[2]}/${matcher[3]}/ 301\n`, { flag: "a" });
});
//# sourceMappingURL=index.js.map