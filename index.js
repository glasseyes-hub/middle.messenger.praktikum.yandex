const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', function (_, response) {
    response.sendFile(path.resolve(__dirname, 'dist/index.html'));
  });

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`)
})