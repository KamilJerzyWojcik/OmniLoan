function AddAddress(addressModel, Page, name, head) {

    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();

    formHelper.AddHeadToForm(newPage, "h4", head, );

    formHelper.AddInputAndLabel(newPage, `street-${name}`, "text", addressModel.street, "Street: ");

    formHelper.AddInputAndLabel(newPage, `number-building-${name}`, "text", addressModel.numberBuilding, "Number building: ");
    formHelper.AddInputAndLabel(newPage, `number-flat-${name}`, "text", addressModel.numberFlat, "Number flat: ");
    formHelper.AddInputAndLabel(newPage, `zip-code-${name}`, "text", addressModel.zipCode, "Zip code: ");
    formHelper.AddInputAndLabel(newPage, `city-${name}`, "text", addressModel.city, "City: ");

    Page.appendChild(newPage);
}