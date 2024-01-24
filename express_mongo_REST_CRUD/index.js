import express from 'express';
import mongoose from 'mongoose';
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 5001
const DB_URL = "mongodb+srv://petruhinmaxim:smo4311ke@backend-courses.pffbu41.mongodb.net/?retryWrites=true&w=majority"

const app  = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Server started on port:" + PORT))
    }
    catch (e) {
        console.log(e)
    }
}

await startApp()
