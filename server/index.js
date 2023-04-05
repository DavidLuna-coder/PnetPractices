const express = require("express");
const cors = require("cors")
const bookingsService = require("./routes/bookings-service")
const bookings = require("./routes/bookings");
const app = express();

app.use(cors())
app.use(express.json());
app.use('/bookings', bookings);




bookingsService.connectDb((err) => {
    if (err) {
        console.log("Could not connect with MongoDB");
        process.exit(1);
    }
    
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });

})
