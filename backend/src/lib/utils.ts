const fsExtra = require('fs-extra');
import path from "path";
import moment from "moment";

const formatDate = (date: any, format: string = "YYYY-MM-DD") => {
  return moment(date).format(format);
};

const readJsonFile = async (fileName: string) => {
  try {
    const fullPathName = path.resolve(path.join("src", "assets", fileName + ".json"));
    const jsonData = await fsExtra.readJson(fullPathName);
    return jsonData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { formatDate, readJsonFile };
