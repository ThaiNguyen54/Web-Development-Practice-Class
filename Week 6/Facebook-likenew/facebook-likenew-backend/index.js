import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from "pusher"
import Posts from './model/postsModel.js'


Grid.mongo = mongoose.mongo
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://thai:thai123@cluster0.l5pwkhm.mongodb.net/Facebook-Likenew'

const pusher = new Pusher({
    appId: "1529016",
    key: "4acf2bd550f015ccb95c",
    secret: "a1c8787c567abc4039e2",
    cluster: "ap1",
    useTLS: true
})

app.use(bodyParser.json())
app.use(cors())

const connection = mongoose.createConnection(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let gfs

connection.once('open', () => {
    console.log('DB connected')
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: connection_url,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`
            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            }
            resolve(fileInfo)
        })
    }
})

const upload = multer({storage})

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB connected for pusher')
    const changeStream = mongoose.connection.collection('post').watch()
    changeStream.on('change', change => {
        console.log(change)
        if(change.operationType === 'inserted') {
            console.log('Trigerring Pusher')
            pusher.trigger('posts', 'inserted', {
                change: change
            })
        } else {
            console.log('Error trigerring Pusher')
        }
    })
})

app.get('/', (req, res) => res.status(200).send('Hello Thai'))

app.post('/upload/image', upload.single('file'),(req, res) => {
    res.status(201).send(req.file)
})

app.get('/images/single', (req, res) => {
    gfs.files.findOne({filename: req.query.name}, (err, file) => {
        if(err) {
            res.status(500).send(err)
        } else {
            if(!file || file.length === 0) {
                res.status(404).json({err: 'file not found'})
            } else {
                const readstream = gfs.createReadStream(file.filename)
                readstream.pipe(res)
            }
        }
    })
})

app.post('/upload/post', (req,res) => {
    const dbPost = req.body
    Posts.create(dbPost, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/posts', (req, res) => {
    Posts.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            data.sort((b,a) => a.timestamp - b.timestamp)
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => console.log(`Listening on localhost: ${port}`))
