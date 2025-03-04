const express = require('express')
const { MongoClient } = require('mongodb')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
uri = 'mongodb://localhost:27017/'
const client = new MongoClient(uri)
const dbName = 'UserDB'
const collectionName = 'user'


app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/createuser', async (req, res) => {
    try {
        let { username, firstname, lastname, password, email } = req.body
        const is_admin = false
        const newUser = { username, firstname, lastname, password, email}
        let flag = true
        let err
        Object.keys(newUser).forEach(item => {
            if (!newUser[item]) {
                flag = false
                err = `invaild ${item} `
            }
        })
        if (flag) {
            await client.connect()
            const Db = client.db(dbName)
            const collection = Db.collection(collectionName)
            newUser.is_admin = false
            const userPresent = await collection.find({ username: newUser.username }).toArray()
            if (userPresent.length >= 1) {
                res.status(401).json({ 'msg': 'user Name is already taken' })
                return
            }
            else {
                await collection.insertOne(newUser)
                res.status(200).json({ 'msg': `user added` })
                return
            }
        }
        else {
            res.status(401).json({ 'msg': err })
        }

    } catch (error) {
        console.log('getapi', error)
        res.status(400).json({ 'msg': 'error' })
    }
})

app.get('/users', async (req, res) => {
    try {
        await client.connect()
        const Db = client.db(dbName)
        const collection = Db.collection(collectionName)
        const users = await collection.find().toArray()
        res.status(200).json(users)

    } catch (error) {
        res.status(400).json({ 'msg': 'error' })
    }
    finally{
        client.close()
    }

})

app.post('/userlogin', async (req, res) => {
    try {
        const { username, password } = req.body
        if (username && password) {
            await client.connect()
            const Db = client.db(dbName)
            const collection = Db.collection(collectionName)
            const users = await collection.find().toArray()

            let user_present = false
            let valid_pass = false
            let user_at = -1
            users.forEach((user, index) => {
                if (user.username == username) {
                    user_present = true
                    if (user.password == password) {
                        valid_pass = true
                        user_at = index
                    }
                }
            })

            if (user_present && valid_pass) {
                res.status(200).json(users[user_at])
                return
            }
            else if (user_present && !valid_pass) {
                res.status(401).json({ "msg": "wrong password" })
                return
            }
            else if (!user_present) {
                res.status(401).json({ "msg": "username is not present" })
                return
            }
        }
        else {
            res.status(401).json({ "msg": "invalid username or password" })
            return
        }
    } catch (error) {
        res.status(400).json({ "msg": "error" })
    }
    finally{
        client.close()
    }
})

app.get('/countries', async (req, res) => {
    try {
        await client.connect()
        const Db = client.db(dbName)
        const collection = Db.collection('countries')
        const countries = await collection.find().toArray()
        res.status(200).json(countries)

    } catch (error) {
        res.status(400).json({ 'msg': 'error' })
    }
    finally {
        client.close()
    }
})

app.post('/adddistrict', async (req, res) => {
    try {
        const { cname, sname, dname, img, description } = req.body
        const newdistrict = { dname, description, img }
        if (cname && sname) {
            if (dname && img && description) {

                await client.connect()
                const Db = client.db(dbName)
                const collection = Db.collection('countries')
                const country = await collection.findOne({ 'cname': cname })
                if (country) {
                    const state = await collection.findOne({ 'cname': cname, 'states.sname': sname })
                    if (state) {
                        const result = await collection.updateOne({ "cname": cname, "states.sname": sname }, { "$push": { "states.$.districts": newdistrict } })
                        if (result.modifiedCount == 1) {
                            res.status(200).json({'msg':'district added'})
                            return
                        }
                        else {
                            res.status(401).json({ 'msg': 'error' })
                            return
                        }
                    }
                    else {
                        res.status(401).json({ 'msg': 'sname is not present' })
                        return
                    }
                }
                else {
                    res.status(401).json({ 'msg': 'country is not present' })
                    return
                }
            }
            else {
                res.status(401).send(`invalid ${!dname ? 'dname' : !img ? 'img' : !description ? 'description' : ''}`)
                return
            }
        }
        else if (!cname) {
            res.status(401).send('invalid cname')
            return
        } else if (!sname) {
            res.status(401).send('invalid sname')
            return
        }
    } catch (error) {

    }
})

app.post('/deletedistrict', async (req, res) => {
    try {
        const { cname, sname, dname } = req.body
        if (cname && sname) {
            if (dname) {
                await client.connect()
                const Db = client.db(dbName)
                const collection = Db.collection('countries')
                const country = await collection.findOne({ 'cname': cname })
                if (country) {
                    const state = await collection.findOne({ 'cname': cname, 'states.sname': sname })
                    if (state) {
                        const result = await collection.updateOne({ "cname": cname, "states.sname": sname }, { "$pull": { "states.$.districts": { 'dname': dname } } })
                        if (result.modifiedCount == 1) {
                            res.status(200).json({ 'msg': 'district deleted' })
                            return
                        }
                        else {
                            res.status(401).json({ 'msg': 'dname is not present' })
                            return
                        }
                    }
                    else {
                        res.status(401).json({ 'msg': 'sname is not present' })
                        return
                    }
                }
                else {
                    res.status(401).json({ 'msg': 'country is not present' })
                    return
                }
            }
            else {
                res.status(401).send(`invalid dname`)
                return
            }
        }
        else if (!cname) {
            res.status(401).send('invalid cname')
            return
        } else if (!sname) {
            res.status(401).send('invalid sname')
            return
        }
    } catch (error) {

    }
    finally {
        client.close()
    }
})

app.post('/addstate', async (req, res) => {
    try {
        let { cname, sname } = req.body
        if (cname && sname) {
            await client.connect()
            const Db = client.db(dbName)
            const collection = Db.collection('countries')
            const country = await collection.findOne({ 'cname': cname })
            if (country) {

                if (! await collection.findOne({ 'cname': cname, 'states.sname': sname })) {
                    await collection.updateOne({ 'cname': cname }, { $push: { states: { "sname": sname, "districts": [] } } })
                    res.status(200).json({ 'msg': 'state added' })
                    return
                }
                else {
                    res.status(401).json({ 'msg': 'sname is already present' })
                    return
                }
            }
            else {
                res.status(401).json({ 'msg': 'cname is not present' })
                return
            }

        } else if (!cname) {
            res.status(401).send('invalid cname')
            return
        }
        else if (!sname) {
            res.status(401).send('invaild sname')
            return
        }

    } catch (error) {
        console.log(error)
    }
    finally {
        client.close()
    }
})

app.post('/deletestate', async (req, res) => {
    try {
        let { cname, sname } = req.body
        if (cname && sname) {
            await client.connect()
            const Db = client.db(dbName)
            const collection = Db.collection('countries')
            if (await collection.findOne({ "cname": cname })) {
                const result = await collection.updateOne({ 'cname': cname }, { $pull: { states: { 'sname': sname } } })
                if (result.modifiedCount == 1) {

                    res.status(200).json({ 'msg': 'state deleted' })
                    return
                }
                else { 
                    res.status(401).json({ 'msg': 'sname is not present' })
                    return
                }
            } else {
                res.status(401).json({ 'msg': 'cname is not present' })
                return
            }
        } else if (!cname) {
            res.status(401).send('invalid cname')
            return
        } else if (!sname) {
            res.status(401).send('inavlid sname')
            return
        }

    } catch (error) {
        console.log(error)
    }
    finally{
        client.close()
    }
})

app.post('/addcountry', async (req,res) => {
    try {
        const cname = req.body.cname
        if (cname){
            await client.connect()
            const Db = client.db(dbName)
            const collection = Db.collection('countries')
            if(! await collection.findOne({'cname':cname})){
                const result = await collection.insertOne({'cname':cname,'states':[]})
                res.status(200).json({'msg':'country added'})
            }
            else{
                res.status(401).json({'msg':'cname is aready present'})
                return
            }
        }
        else{
            res.status(401).send('invaild cname')
        }
    } catch (error) {
        
    }
    finally{
        client.close()
    }
})

app.get('/demo', async (req, res) => {
    try {
        await client.connect()
        const Db = client.db(dbName)
        const collection = Db.collection('countries')
        const countries = await collection.find().toArray()
        res.status(200).json(countries)

    } catch (error) {
        res.status(400).json({ 'msg': 'error' })
    }
    finally {
        client.close()
    }
})

app.listen(3001)

