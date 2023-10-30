import { connect } from "mongoose";
import { glob } from 'glob';
import path from 'path';


async function dbConnect() {
  const { MONGOURL } = process.env;
  return await connect(MONGOURL);
}

async function initDb() {
  await dbConnect();
  const models = await glob('./models/*.js');
  models.map(model => {
    require(path.join(__dirname, model));
    console.log(model, '加载成功');
  })
}

export default initDb;