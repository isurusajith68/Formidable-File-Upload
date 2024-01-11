const { IncomingForm } = require("formidable")
const { createServer } = require("http")
const { HtmlPage, GetHtmlPage } = require("./page/HtmlPage.js")
const { log } = require("console")
const { copyFile, rm } = require("fs")

createServer((req, res) => {
    if (req.method === "POST") {
        // Create a new form data object 
        const userData = new IncomingForm()

        // Parse the form data
        userData.parse(req, (err, fields, files) => {
            if (err) {
                log(err)
                res.end(HtmlPage("Error"))
            }

            log(fields)
            log(files.file[0].filepath)
            log(files.file[0].originalFilename)

            // Copy the file from the temp folder to the uploads folder
            copyFile(files.file[0].filepath, `./uploads/${files.file[0].originalFilename}`, (err) => {
                if (err) {
                    log(err)
                    res.end(HtmlPage("Error"))
                }else{
                    log("File copied successfully")
                }
            })

            // Delete the file from the temp folder
            rm(files.file[0].filepath, (err) => {
                if (err) {
                    log(err)
                    res.end(HtmlPage("Error"))
                }else{
                    log("Temp File deleted successfully")
                }
            })

            res.end(HtmlPage("Success"))

        })
    } else if (req.method === "GET") {
        res.end(GetHtmlPage)
    }
}).listen(3000, () => console.log("Server is running on port 3000"))