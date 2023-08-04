let users = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

exports.existUser = (req,res) =>{
    for (let user of users){
        if(user.username === req.body.username && user.password === req.body.password){
            return res.send('Login successful');
        }
    }
    res.status(404);
    res.send("Login failed");
}

exports.getAllusers = (req, res) => {
    res.json(users);
}

exports.getSingleUser = (req, res) => {
    for (let user of users) {
        console.log(req.params.id);
        if (user.id == req.params.id) {
          res.status(200);
          return res.send(user);
        }
    }
    res.status(404);
    res.send("Fruit not found");
}

exports.addNewUser = (req, res) => {
    if (users.length > 0 && users.some((f) => f.username === req.body.username)) {
        res.status(409);
        return res.send("Fruit already exists");
    }
    let index = users[users.length - 1].id + 1;
    const newUser = {
        id : index,
        username: req.body.username,
        password: req.body.password,
    }
    users.push(newUser);
    res.json(newUser);
}