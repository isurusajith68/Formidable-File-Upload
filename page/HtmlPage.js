const HtmlPage = (status) => {
    const message = status === "Success" ? "Success" : "Error"
    return (
        `<html>
            <head>
                <title>My Page</title>
            </head>
            <body>
                <h1>My Page</h1>
                <p>${message}</p>
                <a href="/">Back</a>
            </body>
        </html>
        `
    )
}
const GetHtmlPage = `
    <html>
        <head>
            <title>My Page</title>
        </head>
        <body>
            <h1>My Page</h1>
            <form action="/" method="post" 
                enctype="multipart/form-data"
            >
                <input type="text" name="username" placeholder="Username" />
                <input type="file" name="file"  />
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>
`

module.exports = { HtmlPage, GetHtmlPage }
// export default HtmlPage
