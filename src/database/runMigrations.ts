import path from "path";
import fs from "fs";

import { createConnection} from './connections';

(async () =>{
  const client = await createConnection();

  const fileDatabaseDir = path.join(__dirname, "migrations")
  console.log('Start migrations', new Date())
  fs.readdir(fileDatabaseDir, (err, files) => {
    if(err){
      console.log(err)
    }
    files.forEach(file => {
      fs.readFile(path.join(fileDatabaseDir,file), async (err, content) => {
        if(err){
          console.log(err)
        }
        const runMigrationsQuery = content.toString();
        await client.query(runMigrationsQuery)
      })
    })
    console.log('Finish migrations', new Date())
  })
})();
