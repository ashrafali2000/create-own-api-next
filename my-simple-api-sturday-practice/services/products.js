import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data","products.json");

 export  function getAll() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);

 }

 export function getById(id) {
    const data = getAll();
    return data.find(p => p.id === +id);
 }

//  export function save(id) {
//     const data = getAll();
//     return data.find(p => p.id === +id);
//  }