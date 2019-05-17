const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '길라임',
            'birthday': '011211',
            'gender': '여',
            'job': '직장인'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any',
            'name': '강동원',
            'birthday': '840212',
            'gender': '남',
            'job': '직장인'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '이하늬',
            'birthday': '881213',
            'gender': '여',
            'job': '배우'
        },
        {
            'id': 4,
            'image': 'https://placeimg.com/64/64/any',
            'name': '조보아',
            'birthday': '920131',
            'gender': '여',
            'job': '유치원교사'
        },
        {
            'id': 5,
            'image': 'https://placeimg.com/64/64/any',
            'name': '전현무',
            'birthday': '750203',
            'gender': '남',
            'job': '간호장교'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));