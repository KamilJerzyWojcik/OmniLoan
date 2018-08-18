function Court(CourtModel) {

    console.log("Court: " + JSON.stringify(CourtModel));
    //console.log("court");

    DeletePage();
    var newPage = CreateNewPage();

    newPage = AddForm(newPage);


    newPage = AddFormGroup(newPage, "name-court");
    AddLabel(newPage, "name", "Name of Court: ", "name-court");
    AddInput(newPage, "text", "name", "name-court", "Name of Court")
    AddModelToInput("form div.name-court input.form-control", CourtModel.name);

    newPage = AddFormGroup(newPage, "bank-phone-court");
    AddLabel(newPage, "phone", "Phone number of Court: ", "bank-phone-court");
    AddInput(newPage, "text", "phone", "bank-phone-court", "Phone number")
    AddModelToInput("form div.bank-phone-court input.form-control", CourtModel.phoneNumber);

    newPage = AddFormGroup(newPage, "bank-account-court");
    AddLabel(newPage, "account", "Number of bank account: ", "bank-account-court");
    AddInput(newPage, "text", "account", "bank-account-court", "Number of bank account")
    AddModelToInput("form div.bank-account-court input.form-control", CourtModel.bankAccount);

    AddAddress(CourtModel.address, newPage.querySelector("form"), "court");
    AddAddressText("court", "Court Address");

    AddButton("court");

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
            CourtModel.name = AddDataToModel("form div.name-court input.form-control");
            CourtModel.phoneNumber = AddDataToModel("form div.bank-phone-court input.form-control");
            CourtModel.bankAccount = AddDataToModel("form div.bank-account-court input.form-control");

            CourtModel.address.street = AddDataToModel("form div.adress form div.street-court input.form-control");
            CourtModel.address.numberBuilding = AddDataToModel("form div.adress form div.number-building-court input.form-control");
            CourtModel.address.numberFlat = AddDataToModel("form div.adress form div.number-flat-court input.form-control");
            CourtModel.address.zipCode = AddDataToModel("form div.adress form div.zip-code-court input.form-control");
            CourtModel.address.city = AddDataToModel("form div.adress form div.city-court input.form-control");

        });

        var form = newPage.querySelector("form");
        form.appendChild(newButton);
    }

    function AddFormGroup(newPage, additionalClass) {
        var newDiv = document.createElement("div");
        var form = newPage.querySelector("form");

        newDiv.classList.add("form-group");
        newDiv.classList.add(additionalClass);
        form.appendChild(newDiv);

        return newPage;
    }

    function AddLabel(newPage, id, innerText, additionalClass) {

        var newFormGroup = newPage.querySelector("form div." + additionalClass);
        var newLabel = document.createElement("label");
        newLabel.setAttribute("for", id);
        newLabel.innerText = innerText;

        newFormGroup.appendChild(newLabel);
    }

    function AddInput(newPage, type, id, additionalClass, placeholder) {

        var newFormGroup = newPage.querySelector("form div." + additionalClass);
        var newInput = document.createElement("input");
        newInput.setAttribute("type", type);
        newInput.setAttribute("id", id);
        newInput.setAttribute("placeholder", placeholder);
        newInput.classList.add("form-control");

        newFormGroup.appendChild(newInput);
    }

    function AddModelToInput(selector, param) {
        var inputName = newPage.querySelector(selector);
        inputName.value = param;
    }

    function AddDataToModel(selector) {
        var data = newPage.querySelector(selector);

        return data.value;
    }
}