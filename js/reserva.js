const roomList = {
  none: 0,
  room1: 1,
  room2: 2,
  room3: 3,
  room4: 4,
  room5: 5,
  room6: 6,
};

const roomImages = {
  room1: "images/sala1.jpg",
  room2: "images/sala2.jpg",
  room3: "images/sala3.jpg",
  room4: "images/sala4.jpg",
  room5: "images/sala5.jpg",
  room6: "images/sala6.jpg",
};

const roomAlts = {
  room1: "Imagen de tres chicas cantando juntas con un micrófono en la mano",
  room2:
    "Imagen que muestra un micrófono enfocado y al fondo varias personas desenfocadas",
  room3:
    "Imagen que muestran a 5, 3 mujeres y dos hombres, cantando juntos en un karaoke",
  room4: "Imagen que muestra un micrófono en primer plano",
  room5:
    "Imagen que muestra a una chica cantando con un micrófono y a 4 personas bailando detrás",
  room6:
    "Imagen que muestra un micrófono en un escenario y muchas personas desenfocadas de público.",
};
const roomImage = document.getElementById("room-image");
roomImage.alt = "Imagen de la sala";
function setMinHours() {
  let fecha = document.forms[0].fecha;
  fecha.min = new Date().toISOString().split("T")[0];
}

function validacion() {
  let name = document.forms[0].nombre;
  let lastName = document.forms[0].apellidos;

  let startHour = document.forms[0].horaInicio;
  let endHour = document.forms[0].horaFin;
  let date = document.forms[0].fecha;

  let room = document.forms[0].sala.selectedIndex;

  if (!validateName(name.value)) {
    alert("El nombre no es válido");
    return false;
  }

  if (!validateName(lastName.value)) {
    alert("El apellido no es válido");
    return false;
  }

  if (!validateDate(fecha.value)) {
    alert("La fecha no es válida");
    return false;
  }

  if (!validateHours(startHour.value, endHour.value)) {
    alert("Las horas no son válidas");
    return false;
  }

  if (room.value == -1) {
    alert("Debe seleccionar una sala");
    return false;
  }

  return true;
}

function validateName(name) {
  let nameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  return nameRegex.test(name);
}
function validateDate(date) {
  let now = new Date();
  return new Date(date) >= new Date(now.getDate());
}
function validateHours(startHour, endHour) {
  let today = new Date();
  let date = document.forms[0].fecha.value;
  let start = new Date("1970-01-01T" + startHour + ":00");
  let end = new Date("1970-01-01T" + endHour + ":00");
  if (date === today.toISOString().split("T")[0]) {
    let hour = today.getHours();
    let minutes = today.getMinutes();
    if (minutes > 1) {
      hour += 1;
    }
    console.log(startHour);
    console.log(hour);
    if (start.getHours() < hour) {
      return false;
    }
  }
  return start.getTime() < end.getTime();
}

function changeRoom() {
  document.addEventListener("change", function () {
    let room = document.forms[0].sala.selectedIndex;
    displaySelectedRoom(room);
  });
}

function displaySelectedRoom(room) {
  switch (room) {
    case roomList.none:
      roomImage.hidden = true;
      break;
    case roomList.room1:
      roomImage.src = roomImages.room1;
      roomImage.alt = roomAlts.room1;
      roomImage.hidden = false;
      break;
    case roomList.room2:
      roomImage.src = roomImages.room2;
      roomImage.alt = roomAlts.room2;
      roomImage.hidden = false;
      break;
    case roomList.room3:
      roomImage.src = roomImages.room3;
      roomImage.alt = roomAlts.room3;
      roomImage.hidden = false;
      break;
    case roomList.room4:
      roomImage.src = roomImages.room4;
      roomImage.alt = roomAlts.room4;
      roomImage.hidden = false;
      break;
    case roomList.room5:
      roomImage.src = roomImages.room5;
      roomImage.alt = roomAlts.room5;
      roomImage.hidden = false;
      break;
    case roomList.room6:
      roomImage.src = roomImages.room6;
      roomImage.alt = roomAlts.room6;
      roomImage.hidden = false;
      break;
  }
}

setMinHours();
changeRoom();
