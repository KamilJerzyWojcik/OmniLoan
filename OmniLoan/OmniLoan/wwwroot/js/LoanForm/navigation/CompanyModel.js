function Company(companyModel) {

    console.log("Company: " + JSON.stringify(companyModel));
    console.log("company");

    DeletePage();

    var newPage = CreateNewPage();

    newPage = AddForm(newPage);


    newPage = AddFormGroup(newPage, "name");
    AddLabel(newPage, "name", "Company Name: ", "name");
    AddInput(newPage, "text", "name", "name", "Company name")
    AddModelToInput("form div.name input.form-control", companyModel.name);

    newPage = AddFormGroup(newPage, "nip");
    AddLabel(newPage, "nip", "NIP: ", "nip");
    AddInput(newPage, "text", "nip", "nip", "NIP")
    AddModelToInput("form div.nip input.form-control", companyModel.nip);

    newPage = AddFormGroup(newPage, "regon");
    AddLabel(newPage, "regon", "Regon: ", "regon");
    AddInput(newPage, "text", "regon", "regon", "Regon")
    AddModelToInput("form div.regon input.form-control", companyModel.regon);

    newPage = AddFormGroup(newPage, "krs");
    AddLabel(newPage, "krs", "Krs: ", "krs");
    AddInput(newPage, "text", "krs", "krs", "Krs")
    AddModelToInput("form div.krs input.form-control", companyModel.krs);


    AddAddress(companyModel.addressCorrespondence, newPage.querySelector("form"), "company-correspondence-address");
    AddAddressText("company-correspondence-address", "Company correspondence address");

    AddAddress(companyModel.addressCompany, newPage.querySelector("form"), "company-address");
    AddAddressText("company-address", "Company address");

    AddAddress(companyModel.addressCompanyAdditional, newPage.querySelector("form"), "company-additional-address");
    AddAddressText("company-additional-address", "Company additional address");

    AddAddress(companyModel.addressAnother, newPage.querySelector("form"), "company-another-address");
    AddAddressText("company-another-address", "Company another address");

    AddButton("company");

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
            companyModel.name = AddDataToModel("form div.name input.form-control");
            companyModel.nip = AddDataToModel("form div.nip input.form-control");
            companyModel.krs = AddDataToModel("form div.regon input.form-control");
            companyModel.regon = AddDataToModel("form div.krs input.form-control");

            companyModel.addressCorrespondence.street = AddDataToModel("form div.adress form div.street-company-correspondence-address input.form-control");
            companyModel.addressCorrespondence.numberBuilding = AddDataToModel("form div.adress form div.number-building-company-correspondence-address input.form-control");
            companyModel.addressCorrespondence.numberFlat = AddDataToModel("form div.adress form div.number-flat-company-correspondence-address input.form-control");
            companyModel.addressCorrespondence.zipCode = AddDataToModel("form div.adress form div.zip-code-company-correspondence-address input.form-control");
            companyModel.addressCorrespondence.city = AddDataToModel("form div.adress form div.city-company-correspondence-address input.form-control");

            companyModel.addressCompany.street = AddDataToModel("form div.adress form div.street-company-address input.form-control");
            companyModel.addressCompany.numberBuilding = AddDataToModel("form div.adress form div.number-building-company-address input.form-control");
            companyModel.addressCompany.numberFlat = AddDataToModel("form div.adress form div.number-flat-company-address input.form-control");
            companyModel.addressCompany.zipCode = AddDataToModel("form div.adress form div.zip-code-company-address input.form-control");
            companyModel.addressCompany.city = AddDataToModel("form div.adress form div.city-company-address input.form-control");

            companyModel.addressCompanyAdditional.street = AddDataToModel("form div.adress form div.street-company-additional-address input.form-control");
            companyModel.addressCompanyAdditional.numberBuilding = AddDataToModel("form div.adress form div.number-building-company-additional-address input.form-control");
            companyModel.addressCompanyAdditional.numberFlat = AddDataToModel("form div.adress form div.number-flat-company-additional-address input.form-control");
            companyModel.addressCompanyAdditional.zipCode = AddDataToModel("form div.adress form div.zip-code-company-additional-address input.form-control");
            companyModel.addressCompanyAdditional.city = AddDataToModel("form div.adress form div.city-company-additional-address input.form-control");

            companyModel.addressAnother.street = AddDataToModel("form div.adress form div.street-company-another-address input.form-control");
            companyModel.addressAnother.numberBuilding = AddDataToModel("form div.adress form div.number-building-company-another-address input.form-control");
            companyModel.addressAnother.numberFlat = AddDataToModel("form div.adress form div.number-flat-company-another-address input.form-control");
            companyModel.addressAnother.zipCode = AddDataToModel("form div.adress form div.zip-code-company-another-address input.form-control");
            companyModel.addressAnother.city = AddDataToModel("form div.adress form div.city-company-another-address input.form-control");

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