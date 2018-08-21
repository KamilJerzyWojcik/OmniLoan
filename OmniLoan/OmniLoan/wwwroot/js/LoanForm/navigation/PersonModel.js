function Person(personModel) {


    var page = document.querySelector("div.page");
    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();

    if (personModel.isOwner == false) {

        formHelper.AddInputAndLabel(newPage, "first-name", "text", personModel.firstName, "First name");
        formHelper.AddInputAndLabel(newPage, "last-name", "text", personModel.lastName, "Last name");
        formHelper.AddInputAndLabel(newPage, "pesel", "text", personModel.pesel, "Pesel");
        formHelper.AddInputAndLabel(newPage, "is-alive", "checkbox", personModel.isAlive, "Is alive?");
        formHelper.AddInputAndLabel(newPage, "phone-number1", "text", personModel.phoneNumber1, "Phone number 1:");
        formHelper.AddInputAndLabel(newPage, "phone-number2", "text", personModel.phoneNumber2, "Phone number 2:");
        formHelper.AddInputAndLabel(newPage, "phone-number3", "text", personModel.phoneNumber3, "Phone number 3:");

        AddAddress(personModel.addressRegistered, newPage, "person-address-registered", "Registered Address");
        AddAddress(personModel.addressCorrespondence, newPage, "person-address-correspondence", "Correspondence Address");
        AddAddress(personModel.addressAnother, newPage, "person-address-another", "Another Adsress");
    }
    else {
        formHelper.AddInputAndLabel(newPage, "first-name", "text", personModel.firstName, "First name");
        formHelper.AddInputAndLabel(newPage, "last-name", "text", personModel.lastName, "Last name");
        formHelper.AddInputAndLabel(newPage, "pesel", "text", personModel.pesel, "Pesel");
    }

    AddButton("Save");

    var page = document.querySelector("div.page");
    page.appendChild(newPage);

    function AddButton(text) {

        var newButton = HtmlHelp.AddButton("btn-success", text);

        newButton.addEventListener("click", function () {

            if (personModel.isOwner == false) {

                AddGeneralInfo();
                formHelper.AddAdresToModel(newPage, personModel.addressRegistered, "person-address-registered");
                formHelper.AddAdresToModel(newPage, personModel.addressCorrespondence, "person-address-correspondence");
                formHelper.AddAdresToModel(newPage, personModel.addressAnother, "person-address-another");

            }
            else {

                AddGeneralOwnerInfo()
            }
        });

        var form = newPage;
        form.appendChild(newButton);
    }

    function AddGeneralInfo() {

        personModel.firstName = HtmlHelp.AddDataToModel(newPage, "first-name");
        personModel.lastName = HtmlHelp.AddDataToModel(newPage, "last-name");
        personModel.pesel = HtmlHelp.AddDataToModel(newPage, "pesel");
        personModel.isAlive = HtmlHelp.AddDataToModel(newPage, "is-alive", "checkbox");
        personModel.phoneNumber1 = HtmlHelp.AddDataToModel(newPage, "phone-number1");
        personModel.phoneNumber2 = HtmlHelp.AddDataToModel(newPage, "phone-number2");
        personModel.phoneNumber3 = HtmlHelp.AddDataToModel(newPage, "phone-number3");
    }

    function AddGeneralOwnerInfo() {

        personModel.firstName = HtmlHelp.AddDataToModel(newPage, "first-name");
        personModel.lastName = HtmlHelp.AddDataToModel(newPage, "last-name");
        personModel.pesel = HtmlHelp.AddDataToModel(newPage, "pesel");
    }

}