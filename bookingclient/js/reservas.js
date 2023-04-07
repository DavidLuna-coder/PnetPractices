const uri = "http://localhost:3000/bookings/";
const $$ = selector => document.querySelectorAll(selector);

const addEventsToButton = () => {
    $$(".delete-btn").forEach(button => {
        button.addEventListener('click', () => {
            $.ajax({
                type: "DELETE",
                url: uri + button.value,
                success: function (response) {
                    window.location.reload();
                }
            });
        })
    })
}

function getAll() {
    $.get(uri,
        (data) => {
            data.forEach(booking => {
                if(booking.user != undefined)
                {
                    $("#listOfBookings").append(`  
                    <tr>
                        <td>${booking._id}</td>
                        <td>${booking.user.name} ${booking.user.lastName}</td>
                        <td>${booking.room}</td>
                        <td>${booking.date}</td>
                        <td>${booking.startTime}</td>
                        <td>${booking.endTime}</td>
                        <td>${booking.numberOfPeople}</td>
                        <td><button class="delete-btn" value =${booking._id}>Borrar</button></td>
                    </tr>
                        `
                    )
                    
                }
                else
                console.log(booking);
            })
            addEventsToButton();
        }
    )
}

const form = document.forms[0];
sendData = () => {
    const { nombre, apellidos, fecha, horaInicio, horaFin, numeroPersonas, sala } = form;
    const dataToSend = {
        "user": {
            "name": nombre.value,
            "lastName": apellidos.value
        },
        "startTime": horaInicio.value,
        "endTime": horaFin.value,
        "date": fecha.value,
        "numberOfPeople": numeroPersonas.value,
        "room": sala.value
    }
    console.log(dataToSend);
    $.ajax({
        type: "POST",
        url: uri,
        data: JSON.stringify(dataToSend),
        contentType: 'application/json',
        success: function (response) {
            window.location.reload();
        }
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
});
getAll()

