var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');
var claimReservation = function () {
  const L = Object.keys(reservations).length;
  for (i = 0; i < L; i++) {
    if (reservations[name] != undefined) {
      if (reservations[name].claimed) {
        return alert("Your reservation is registered and claimed");
      }
      return alert("Welcome!, your reservation is not claimed yet!");
    }
    if (i == L - 1) {
      reservations[name] = {claimed: true};
      return alert("We have extra empty tables, so we made a reservation for you!");
    }
  }
}

const capitalizedCorrection = function (Name) {
  let Word = "";
  Word += Name[0].toUpperCase();
  Word += Name.slice(1).toLowerCase();
  return Word
}
name = capitalizedCorrection(name);
claimReservation();