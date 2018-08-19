function Employer(employerModel) {

    console.log("Employer: " + JSON.stringify(employerModel));
    console.log("employer");

    DeletePage();
    var newPage = CreateNewPage();

    newPage = AddForm(newPage);


    newPage = AddFormGroup(newPage, "name");
    AddLabel(newPage, "name", "Employer Name: ", "name");
    AddInput(newPage, "text", "name", "name", "Employer name")
    AddModelToInput("form div.name input.form-control", employerModel.name);

    newPage = AddFormGroup(newPage, "nip");
    AddLabel(newPage, "nip", "NIP: ", "nip");
    AddInput(newPage, "text", "nip", "nip", "NIP")
    AddModelToInput("form div.nip input.form-control", employerModel.nip);

    newPage = AddFormGroup(newPage, "regon");
    AddLabel(newPage, "regon", "Regon: ", "regon");
    AddInput(newPage, "text", "regon", "regon", "Regon")
    AddModelToInput("form div.regon input.form-control", employerModel.regon);
    //----

    
    AddAddress(employerModel.address, newPage.querySelector("form"), "employer-address");
    AddAddressText("employer-address", "Employer address");

    AddButton("employer");

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
            employerModel.name = AddDataToModel("form div.name input.form-control");
            employerModel.nip = AddDataToModel("form div.nip input.form-control");
            employerModel.regon = AddDataToModel("form div.regon input.form-control");

          

            employerModel.address.street = AddDataToModel("form div.adress form div.street-employer-address input.form-control");
            employerModel.address.numberBuilding = AddDataToModel("form div.adress form div.number-building-employer-address input.form-control");
            employerModel.address.numberFlat = AddDataToModel("form div.adress form div.number-flat-employer-address input.form-control");
            employerModel.address.zipCode = AddDataToModel("form div.adress form div.zip-code-employer-address input.form-control");
            employerModel.address.city = AddDataToModel("form div.adress form div.city-employer-address input.form-control");

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