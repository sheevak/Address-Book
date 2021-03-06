function AddingContact (form) {

  let counter = 0;
  //Highlighting fields which have been left blank
  $('.add').each(function(){
    if($(this).val() == "" ){
      $(this).addClass("error");
      counter += 1;
    } else {
      $(this).removeClass("error");
    }
  });

  /*Testing if any fields have been left blank. If they have been the contact is not added
    to the address book and an error message is returned.
  */
  if (counter === 0){
    //Creating a new object of the new contact's details
    let contactName = `${form.name.value}${form.surname.value}`.toUpperCase();
    const newContact = {
      name: form.name.value,
      surname: form.surname.value,
      phone: form.phone.value,
      address: form.address.value,
      city: form.city.value,
      postcode: form.postcode.value
    };

    //Creating a new div to display the new contact's details
    const newDiv = $("<div>");
    newDiv.attr('id', `${contactName}`).addClass("contact");
    $(".grid").append(newDiv);

    //Creating new elements to display the new contact's details
    let fullName = $("<p>");
    fullName.text(`${newContact.name} ${newContact.surname}`).addClass("full");
    let details = $("<p>");
    details.html(`<strong>Address:</strong><br>${newContact.address}<br>${newContact.city}, ${newContact.postcode}<br><strong>Phone Number:</strong><br>${newContact.phone}`);
    $(`#${contactName}`).append(fullName);
    $(`#${contactName}`).append(details);

    //Creating a button element for deleting the contact
    let deleteButton = $("<button>");
    deleteButton.addClass("fas").addClass("fa-trash").attr("type", "button").attr("onClick", `deleteContact("#${contactName}")`);
    $(`#${contactName}`).append(deleteButton);

    //Alerting the user that the contact had been added
    let alert = $("<h5>");
    alert.text(`${newContact.name} ${newContact.surname} has been added to your contacts.`).addClass("alert");
    $("#submit").after(alert);

    //Clearing the input fields
    form.name.value = ("");
    form.surname.value = ("");
    form.phone.value = ("");
    form.address.value = ("");
    form.city.value = ("");
    form.postcode.value = ("");
  } else {

    //Alert the user that the contact info is not correct
    let errorAlert = $("<h5>");
    errorAlert.text(`Contact not added! Please fill in all fields.`).addClass("error-alert");
    $("#submit").after(errorAlert);
  }
}

function view(hide, show, front, back) {
  //hiding and showing the different tabs
  $(hide).css("display", "none");
  $(show).css("display", "block");
  $(front).css("background-color", "#ffffff");
  $(back).css("background-color", "#dae4e4");
};

function deleteContact(contactId){
  $(contactId).remove();
}

function search(form){
  let phrase = form.searchbox.value.toUpperCase();

    $(".contact").each(function() {
      if ( !$(this).attr("id").includes(phrase) ) {
        $(this).addClass("hide")};
    });
}

function exitsearch(form){
  $(".contact").each(function() {
      $(this).removeClass("hide");
      form.searchbox.value = ("");
  });
}
