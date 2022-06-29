const fs = require("fs")
const path = require("path")

const DirName = __dirname
const dirPath = path.resolve(DirName,'../')
const root = fs.readdirSync(dirPath)

function GetFileJson(files,p, parent){

    let rz =  files.map(f => {
        if(/(?:\.git|web|scripts)/.test(f))return
        let thisPath = path.resolve(p ,f)
        try {
            var fileSat = fs.statSync(thisPath)
        } catch (error) {
            
        }
        if(fileSat && fileSat.isDirectory()){
            let files = fs.readdirSync(thisPath)
            return GetFileJson( files ,thisPath, f)
        }
        else return f
    })
    return {[parent]: rz}
}
console.log(dirPath)

fs.writeFile(path.resolve(DirName,'file.js'),'var files = ' + JSON.stringify(GetFileJson(root,dirPath,'root'),'\s',4),(err)=>{console.log(err)})