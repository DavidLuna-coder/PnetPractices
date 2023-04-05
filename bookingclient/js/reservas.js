

function getAll(){
    $.get("http://localhost:3000/bookings/",
    (data) => {
        data.forEach(booking => {$("#listOfBookings").append(`  
        <tr>
            <td>${booking._id}</td>
            <td>${booking.user.name} ${booking.user.lastName}</td>
            <td>${booking.room}</td>
            <td>${booking.date}</td>
            <td>${booking.startTime}</td>
            <td>${booking.endTime}</td>
            <td>${booking.numberOfPeople}</td>
        </tr>`
        )})
       // console.log(user);
    }
    )
}

getAll()