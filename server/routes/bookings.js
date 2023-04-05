"use strict";

const express = require("express");
const router = express.Router();
const bookingsService = require("./bookings-service");
let nextId = 2;

router.get("/", (req, res) => {
    bookingsService.getAll((err, bookings) => {
        if (err) {
            res.status(500).send({
                msg: err,
            });
        } else if (bookings.length == 0) {
            res.status(500).send({
                msg: "bookings null",
            });
        } else {
            res.status(200).send(bookings);
        }
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    bookingsService.get(id, (err, booking) => {
        if (err) {
            res.status(500).send({
                msg: err,
            });
        } else if (booking.length === 0) {
            res.status(404).send({ msg: "Movie Not Found" });
        } else {
            res.status(200).send(booking);
        }
    });
});

router.post("/", (req, res) => {
    const booking = req.body;

    bookingsService.add(booking, (err, booking) => {
        if (err) {
            res.status(500).send({
                msg: err,
            });
        } else if (booking.length != 0) {
            res.status(201).send({ msg: "Booking Created!" });
        }
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedBooking = req.body;

    bookingsService.update(id, booking, (err, numUpdates) => {
        if (err) {
            res.status(500).msg({ msg: err });
        } else if (numUpdates.modifiedCount === 0) {
            res.status(500).send({
                msg: "Not updated"
            })
        } else {
            res.status(200).send({
                msg: "Booking updated"
            });
        }
    });
});

router.delete("/", (req, res) => {
    bookingsService.removeAll((err) => {
        if (err) {
            res.status(500).send({
                msg: err,
            });
        } else {
            res.status(200).send({
                msg: "Removed All"
            })
        }
    })
});

router.delete("/:id", (req, res) => {
    const _id = req.params.id;
    bookingsService.remove(_id, (err) => {
        if (err) {
            res.status(500).send({
                msg: err,
            });
        } else {
            res.status(200).send({
                msg: "Removed Booking"
            })
        }
    })
});

module.exports = router;
