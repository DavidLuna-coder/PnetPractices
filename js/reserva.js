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

setMinHours();
