const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

const port = 5000;

const users = [
    {
        "id": 0,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "id": 1,
        "name": "Ervin kollins",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 3,
        "name": " Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    }
]


app.get('/', (req, res) => {
    res.send('wow i am exited i am from node express. I am fail');
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

})

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    // users.push(newUser);
    // console.log('hitting the post', req.body);
    // res.send();
    res.json(newUser)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('listening app', port);
})