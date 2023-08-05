import fs from "fs"
import path from "path"
const filePath = path.join(process.cwd(), "data","products.json")
 export  function getAll() {
    const data = fs.readFileSync(filePath);
    console.log(JSON.parse(data))

 }