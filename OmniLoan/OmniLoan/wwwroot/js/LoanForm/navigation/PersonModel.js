function Person(personModel) {

    console.log("person: " + JSON.stringify(personModel));
    console.log("person");

    console.log(personModel.isDeptorCompany);

    DeletePage();
    var newPage = CreateNewPage();

    newPage = AddForm(newPage);

    if (personModel.isOwner == false) {

        newPage = AddFormGroup(newPage, "first-name");
        AddLabel(newPage, "first-name", "First Name: ", "first-name");
        AddInput(newPage, "text", "first-name", "first-name", "First name")
        AddModelToInput("form div.first-name input.form-control", personModel.firstName);

        newPage = AddFormGroup(newPage, "last-name");
        AddLabel(newPage, "last-name", "Last Name: ", "last-name");
        AddInput(newPage, "text", "last-name", "last-name", "Last name")
        AddModelToInput("form div.last-name input.form-control", personModel.lastName);

        newPage = AddFormGroup(newPage, "pesel");
        AddLabel(newPage, "pesel", "Pesel: ", "pesel");
        AddInput(newPage, "text", "pesel", "pesel", "Pesel")
        AddModelToInput("form div.pesel input.form-control", personModel.pesel);

        newPage = AddFormGroup(newPage, "is-alive", "checkbox");
        AddLabel(newPage, "is-alive", "Is alive?: ", "is-alive", "form-check-label");
        AddInput(newPage, "checkbox", "is-alive", "is-alive", "")
        AddModelToInput("form div.is-alive input.form-check-input", personModel.isAlive, "checkbox");

        newPage = AddFormGroup(newPage, "phone-number1");
        AddLabel(newPage, "phone-number1", "Phone number 1: ", "phone-number1");
        AddInput(newPage, "text", "phone-number1", "phone-number1", "Phone number 1")
        AddModelToInput("form div.phone-number1 input.form-control", personModel.phoneNumber1);

        newPage = AddFormGroup(newPage, "phone-number2");
        AddLabel(newPage, "phone-number2", "Phone number 2: ", "phone-number2");
        AddInput(newPage, "text", "phone-number2", "phone-number2", "Phone number 2")
        AddModelToInput("form div.phone-number2 input.form-control", personModel.phoneNumber2);

        newPage = AddFormGroup(newPage, "phone-number3");
        AddLabel(newPage, "phone-number3", "Phone number 3: ", "phone-number3");
        AddInput(newPage, "text", "phone-number3", "phone-number3", "Phone number 3")
        AddModelToInput("form div.phone-number3 input.form-control", personModel.phoneNumber3);

        AddAddress(personModel.addressRegistered, newPage.querySelector("form"), "person-address-registered");
        AddAddressText("person-address-registered", "Registered Address");

        AddAddress(personModel.addressCorrespondence, newPage.querySelector("form"), "person-address-correspondence");
        AddAddressText("person-address-correspondence", "Correspondence Address");

        AddAddress(personModel.addressAnother, newPage.querySelector("form"), "person-address-another");
        AddAddressText("person-address-another", "Another Address");
    }
    else {

        newPage = AddFormGroup(newPage, "first-name");
        AddLabel(newPage, "first-name", "First Name: ", "first-name");
        AddInput(newPage, "text", "first-name", "first-name", "First name")
        AddModelToInput("form div.first-name input.form-control", personModel.firstName);

        newPage = AddFormGroup(newPage, "last-name");
        AddLabel(newPage, "last-name", "Last Name: ", "last-name");
        AddInput(newPage, "text", "last-name", "last-name", "Last name")
        AddModelToInput("form div.last-name input.form-control", personModel.lastName);

        newPage = AddFormGroup(newPage, "pesel");
        AddLabel(newPage, "pesel", "Pesel: ", "pesel");
        AddInput(newPage, "text", "pesel", "pesel", "Pesel")
        AddModelToInput("form div.pesel input.form-control", personModel.pesel);

    }
    AddButton("person");

    var page = document.querySelector("div.page");
    page.appendChild(newPage);

    function AddAddressText(addressName, text) {
        var regAddress = newPage.querySelector(`form div.adress form div.street-${addressName}`).parentElement;

        var h = document.createElement("h4");
        h.classList.add(addressName);
        h.innerText = text;
        regAddress.insertBefore(h, regAddress.firstChild);
    }


    function DeletePage() {
        var page = document.querySelector("div.page");
        var startPage = document.querySelector("div.page div.start");
        if (startPage != undefined) {
            page.removeChild(startPage);
        }
    }

    function CreateNewPage() {

        var page = document.createElement("div");
        page.classList.add("start");

        return page;
    }

    function AddForm(newPage) {
        var newForm = document.createElement("form");
        newPage.appendChild(newForm);

        return newPage;
    }

    function AddButton(additionalClass) {

        var newButton = document.createElement("button");
        newButton.classList.add("btn");
        newButton.classList.add("btn-success");
        newButton.classList.add(additionalClass)
        newButton.innerText = "Save";

        newButton.addEventListener("click", function () {
            personModel.firstName = AddDataToModel("form div.first-name input.form-control");
            personModel.lastName = AddDataToModel("form div.last-name input.form-control");
            personModel.pesel = AddDataToModel("form div.pesel input.form-control");
            personModel.isAlive = AddDataToModel("form div.is-alive input.form-check-input", "checkbox");
            personModel.phoneNumber1 = AddDataToModel("form div.phone-number1 input.form-control");
            personModel.phoneNumber2 = AddDataToModel("form div.phone-number2 input.form-control");
            personModel.phoneNumber3 = AddDataToModel("form div.phone-number3 input.form-control");


            personModel.addressRegistered.street = AddDataToModel("form div.adress form div.street-person-address-registered input.form-control");
            personModel.addressRegistered.numberBuilding = AddDataToModel("form div.adress form div.number-building-person-address-registered input.form-control");
            personModel.addressRegistered.numberFlat = AddDataToModel("form div.adress form div.number-flat-person-address-registered input.form-control");
            personModel.addressRegistered.zipCode = AddDataToModel("form div.adress form div.zip-code-person-address-registered input.form-control");
            personModel.addressRegistered.city = AddDataToModel("form div.adress form div.city-person-address-registered input.form-control");

            personModel.addressCorrespondence.street = AddDataToModel("form div.adress form div.street-person-address-correspondence input.form-control");
            personModel.addressCorrespondence.numberBuilding = AddDataToModel("form div.adress form div.number-building-person-address-correspondence input.form-control");
            personModel.addressCorrespondence.numberFlat = AddDataToModel("form div.adress form div.number-flat-person-address-correspondence input.form-control");
            personModel.addressCorrespondence.zipCode = AddDataToModel("form div.adress form div.zip-code-person-address-correspondence input.form-control");
            personModel.addressCorrespondence.city = AddDataToModel("form div.adress form div.city-person-address-correspondence input.form-control");

            personModel.addressAnother.street = AddDataToModel("form div.adress form div.street-person-address-another input.form-control");
            personModel.addressAnother.numberBuilding = AddDataToModel("form div.adress form div.number-building-person-address-another input.form-control");
            personModel.addressAnother.numberFlat = AddDataToModel("form div.adress form div.number-flat-person-address-another input.form-control");
            personModel.addressAnother.zipCode = AddDataToModel("form div.adress form div.zip-code-person-address-another input.form-control");
            personModel.addressAnother.city = AddDataToModel("form div.adress form div.city-person-address-another input.form-control");

        });

        var form = newPage.querySelector("form");
        form.appendChild(newButton);
    }

    function AddFormGroup(newPage, additionalClass, type = "text") {
        
        var newDiv = document.createElement("div");
        var form = newPage.querySelector("form");
        if (type == "text") {
            newDiv.classList.add("form-group");
        }
        if (type == "checkbox") {
            newDiv.classList.add("form-check");
        }
        newDiv.classList.add(additionalClass);
        form.appendChild(newDiv);

        return newPage;
    }

    function AddLabel(newPage, id, innerText, additionalClass, classInput = "") {
        
        var newFormGroup = newPage.querySelector("form div." + additionalClass);
        var newLabel = document.createElement("label");
        newLabel.setAttribute("for", id);
        if (classInput != "") newLabel.classList.add(classInput);
        newLabel.innerText = innerText;

        newFormGroup.appendChild(newLabel);
    }

    function AddInput(newPage, type, id, additionalClass, placeholder) {

        if (type == "text") {
            var newFormGroup = newPage.querySelector("form div." + additionalClass);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("id", id);
            newInput.setAttribute("placeholder", placeholder);
            newInput.classList.add("form-control");

            newFormGroup.appendChild(newInput);
        }

        if (type == "checkbox") {
            var newFormGroup = newPage.querySelector("form div." + additionalClass);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("id", id);
            newInput.classList.add("form-check-input");

            newFormGroup.appendChild(newInput);
        }
    }

    function AddModelToInput(selector, param, type = "text") {
        if (type == "text") {
            var inputName = newPage.querySelector(selector);
            inputName.value = param;
        }

        if (type == "checkbox") {
            var inputName = newPage.querySelector(selector);

            if (personModel.isAlive) {
                inputName.setAttribute("checked", "checked");
            }
        }
    }

    function AddDataToModel(selector, type = "text") {

        if (type == "text") {
            var data = newPage.querySelector(selector);
            return data.value;
        }

        if (type == "checkbox") {
            var data = newPage.querySelector(selector);
            return data.checked;
        }
    }

}