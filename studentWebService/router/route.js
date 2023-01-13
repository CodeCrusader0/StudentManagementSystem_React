var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var schema = mongoose.Schema;

var StudSchema = new schema({
    roll: String,
    name: String,
    marks: String
});

var Data = mongoose.model("studdata", StudSchema, "studentData");

router.get("/stud", (req, res) => {
    Data.find().exec((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
});


router.get("/stud/:roll", (req, res) => {
    Data.find({ roll: req.params.roll }).exec((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
});


router.delete("/stud/:roll", (req, res) => {
    Data.remove({ roll: req.params.roll }, (err, doc) => {
        if (err) {
            console.log("Error occured");
        }
        else {
            res.send(doc);
        }
    })
});


router.post("/stud", (req, res) => {
    var ob = new Data({ roll: req.body.roll, name: req.body.name, marks: req.body.marks });
    ob.save((err, doc) => {
        if (err) {
            console.log("err occured");
        }
        else {
            res.send(doc);
        }
    });
});

router.put("/stud/:roll", (req, res) => {
    Data.findOne({ roll: req.body.roll }, (err, doc) => {
        if (err) {
            console.log("Error occured");
        }
        else {
            doc.name = req.body.name;
            doc.marks = req.body.marks;
            doc.roll = req.body.roll;
            doc.save((err, doc) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(doc);
                }
            });
        }
    });
});
module.exports = router;