import {readFile, writeFile, appendFile, mkdir} from 'fs/promises'
//readFile
// const read_filr = async (fileName) =>{
//     const data = await readFile(fileName,'utf-8')
//     console.log(data)
// }

// read_filr('sample.txt')


// Create File

// const create_file = async (fileName,content) =>{
//     await writeFile(fileName,content)
//     console.log("File created successfully..!")
// }
// create_file('ai.py','this is a Python file')

// Add content to file

// const append_file = async (fileName, content)=>{
// await appendFile(fileName,content)
// console.log('content appended')
// }
// append_file('ai.py',' This is python file')

// create folder - directory
const create_dir = async (dir) =>{
await mkdir(dir,{recursive:true})
}
// create_dir('public') 
create_dir('src/py') 

// src/components/java