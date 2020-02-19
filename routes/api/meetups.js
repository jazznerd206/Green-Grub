const router = require("express").Router();
const axios = require("axios");

router.get('/:zipCode', (req, res) => {
    console.log(req.params.zipCode);
    axios.get('https://api.meetup.com/find/groups?&sign=true&photo-host=public&zip=98115&category=10&page=20').then(response => {
        console.log(response.data);
        res.json(response.data);
    }).catch(err => console.log('meetups api route ' + JSON.stringify(err).pretty()))
})



module.exports = router;

