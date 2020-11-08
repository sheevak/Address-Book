function AddingContact (form) {
  counter += 1;

  //Creating a new object of the new contact's details
  const newc = {
    fullname: `${form.name.value}${form.surname.value}`,
    name: form.name.value,
    surname: form.surname.value,
    phone: form.phone.value,
    address: form.address.value,
    city: form.city.value,
    postcode: form.postcode.value
  };

  //Creating a new div to display the new contact's details
  const newdiv = $("<div>");
  newdiv.attr('id', `${newc.fullname}`).addClass("acontact");
  $(".grid").append(newdiv);

  //Creating new elements to display the new contact's details
  let fullname = $("<p>");
  fullname.text(`${newc.name} ${newc.surname}`).addClass("full");
  let details = $("<p>");
  details.html(`<strong>Address:</strong><br>${newc.address}<br>${newc.city}, ${newc.postcode}<br><strong>Phone Number:</strong><br>${newc.phone}`);
  $(`#${newc.fullname}`).append(fullname);
  $(`#${newc.fullname}`).append(details);

  let del = $("<button>");
  del.addClass("fas").addClass("fa-trash").attr("type", "button").attr("onClick", `deleteContact("#${newc.fullname}")`);  //.attr("value", `${newc.fullname}`)
  $(`#${newc.fullname}`).append(del);

  //Alerting the user that the contact had been added
  let alert = $("<h5>");
  alert.text(`${newc.name} ${newc.surname} has been added to your contacts.`);
  alert.addClass("alert");
  $("#submit").after(alert);

  //Clearing the input fields
  form.name.value = ("");
  form.surname.value = ("");
  form.phone.value = ("");
  form.address.value = ("");
  form.city.value = ("");
  form.postcode.value = ("");
}

function view(hide, show, front, back) {
  $(hide).css("display", "none");
  $(show).css("display", "block");
  $(front).css("background-color", "#ffffff");
  $(back).css("background-color", "#dae4e4");
};

function deleteContact(delbutton){
  $(delbutton).css("display", "none");
}


let counter = 0;
