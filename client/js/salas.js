const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const rooms = [
  {
    name: "Sala 1",
    mics: 2,
    sofa: false,
    barService: false,
    description:
      "Sala 1 es una sala de karaoke con capacidad de hasta 3 personas. Dispone de 2 micrófonos y una pantalla de 50 pulgadas. Excelente para disfrutar del karaoke con un grupo reducido de personas. ",
  },
  {
    name: "Sala 2",
    mics: 4,
    sofa: false,
    barService: false,
    description:
      "Sala 2 es una sala de karaoke con capacidad de hasta 5 personas. Dispone de 4 micrófonos y una pantalla de 50 pulgadas. Excelente para disfrutar del karaoke por un precio reducido. ",
  },
  {
    name: "Sala 3",
    mics: 5,
    sofa: true,
    barService: false,
    description:
      "Sala 3 es una sala de karaoke con capacidad de hasta 6 personas. Dispone de 6 micrófonos y una pantalla de 50 pulgadas. Excelente para disfrutar del karaoke con un grupo de personas que quiera disfrutar de una experiencia única sentados en el sofá.",
  },
  {
    name: "Sala 4",
    mics: 6,
    sofa: true,
    barService: false,
    description:
      "Sala 4 es una sala de karaoke con capacidad de hasta 6 personas. Dispone de 6 micrófonos y una pantalla de 50 pulgadas. Excelente para disfrutar del karaoke con un grupo de personas que quiera disfrutar del karaoke con la máxima comodidad.",
  },
  {
    name: "Sala 5",
    mics: 6,
    sofa: true,
    barService: true,
    description:
      "Sala 5 es una sala de karaoke con capacidad de hasta 7 personas. Dispone de 6 micrófonos y una pantalla de 50 pulgadas. Excelente para disfrutar del karaoke con un grupo de personas que quiera disfrutar de una experiencia única sentados en el sofá y con servicio de bar.",
  },
  {
    name: "Sala 6",
    mics: 7,
    sofa: true,
    barService: true,
    description:
      "Sala 6 es una sala de karaoke con capacidad de hasta 7 personas. Dispone de 7 micrófonos y una pantalla de 50 pulgadas. Excelente para disfrutar del karaoke con un grupo de personas que quiera disfrutar de una experiencia única sentados en el sofá y con servicio de bar. Ideal para celebrar fiestas",
  },
];

const bigCard = $(".big-card"); 
console.log(bigCard.hidden);
const cards = $$(".card");


$(".close-btn").addEventListener("click", () => {
    bigCard.hidden = true;
});

cards.forEach((card, index) => {
  let title = $(".big-card-title");
  let mics = $(".big-card-table-mic");
  let sofa = $(".big-card-table-chair");
  let bar = $(".big-card-table-bar");
  let description = $(".big-card-description");
  card.addEventListener("click", () => {
    const room = rooms[index];

    title.innerHTML = room.name;
    mics.innerHTML = room.mics;
    sofa.innerHTML = room.sofa ? "Si" : "No";
    bar.innerHTML = room.barService ? "Si" : "No";
    description.innerHTML = room.description;
    if (bigCard.hidden) {
      bigCard.hidden = false;
    }
  });
});
