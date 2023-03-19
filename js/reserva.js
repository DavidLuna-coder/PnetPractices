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
const roomImage = document.getElementById("room-image");

function setMinHours() {
  let startHour = document.forms[0].horaInicio;
  let endHour = document.forms[0].horaFin;
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes > 1) {
    startHour.min = (hour + 1).toString() + ":00";
    endHour.min = (hour + 2).toString() + ":00";
  } else {
    startHour.min = hour.toString() + ":00";
    endHour.min = (hour + 1).toString() + ":00";
  }
}

function validacion() {
  let name = document.forms[0].nombre;
  let lastName = document.forms[0].apellidos;

  let startHour = document.forms[0].horaInicio;
  let endHour = document.forms[0].horaFin;

  let room = document.forms[0].sala.selectedIndex;

  if (!validateName(name.value)) {
    alert("El nombre no es válido");
    return false;
  }

  if (!validateName(lastName.value)) {
    alert("El apellido no es válido");
    return false;
  }

  if (!validateDate) {
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
}

function validateName(name) {
  let nameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  return nameRegex.test(name);
}

function validateDate(date) {
  return date < new Date.toISOString().split("T")[0];
}

function validateHours(startHour, endHour) {
  let start = new Date("1970-01-01T" + startHour + ":00");
  let end = new Date("1970-01-01T" + endHour + ":00");

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
      roomImage.hidden = false;
      break;
    case roomList.room2:
      roomImage.src = roomImages.room2;
      roomImage.hidden = false;
      break;
    case roomList.room3:
      roomImage.src = roomImages.room3;

      roomImage.hidden = false;
      break;
    case roomList.room4:
      roomImage.src = roomImages.room4;

      roomImage.hidden = false;
      break;
    case roomList.room5:
      roomImage.src = roomImages.room5;

      roomImage.hidden = false;
      break;
    case roomList.room6:
      roomImage.src = roomImages.room6;
      roomImage.hidden = false;
      break;
  }
}

setMinHours();
changeRoom();