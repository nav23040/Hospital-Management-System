const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req,res) => { res.send('it is working') });
app.listen(3000, ()=> { console.log('app is running on port 3000') });

app.post('/signin', (req, res) => {
	const {emailid, password} = req.body;
    console.log(emailid);
    console.log(password);

    res.json('success');

})


app.post('/register', (req,res) => {
     const{name, email, password, age, gender, mobile, address, fatherName, motherName, parentMobile} = req.body;
     res.json('success');
})