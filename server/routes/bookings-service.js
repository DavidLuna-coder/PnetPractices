"use strict";

const MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;
const dotenv = require("dotenv");

dotenv.config();
let db;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@singitlouddb.gnfcxiu.mongodb.net/?retryWrites=true&w=majority`;

const Bookings = function () { };

Bookings.prototype.connectDb = function (callback) {
    MongoClient.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, database) => {
            if (err) {
                console.log(err);
                callback(err);
            }

            db = database.db(`singitlouddb`).collection("bookings");
            console.log("Successful connection");
            callback(err, database);
        }
    );
};

Bookings.prototype.add = (booking, callback) => {
    return db.insertOne(booking, callback);
};

Bookings.prototype.get = (_id, callback) => {
    return db.find({ _id: ObjectId(_id) }).toArray(callback);
};

Bookings.prototype.getAll = (callback) => db.find({}).toArray(callback);

Bookings.prototype.update = (_id, updatedBooking, callback) => {
    delete updatedMovie._id;
    return db.updateOne(
        { id: ObjectId(_id) },
        { $set: updatedBooking },
        callback
    );
};

Bookings.prototype.remove = (_id, callback) =>
    db.deleteOne({ _id: ObjectId(_id) }, callback);

Bookings.prototype.removeAll = (callback) => db.deleteMany({}, callback);

module.exports = new Bookings();
