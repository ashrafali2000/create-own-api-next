import fs from "fs"
import path from "path"
const filePath = path.join(process.cwd(), "my-simple-api-sturday-practice", "data","products.json")
 export  function getAll() {
    const data = fs.readFileSync(filePath);
    // console.log()

 }