function AddAddress(addressModel, Page, name) {

    var newPage = CreateNewPage();
    newPage = AddForm(newPage);

    newPage = AddFormGroup(newPage, `street-${name}`); //city-hall
    AddLabel(newPage, "street", "Street: ", `street-${name}`);
    AddInput(newPage, "text", "street", `street-${name}`, `street-${name}`)
    AddModelToInput(`form div.street-${name} input.form-control`, addressModel.street);

    newPage = AddFormGroup(newPage, `number-building-${name}`); //city-hall
    AddLabel(newPage, "number-building", "Number building: ", `number-building-${name}`);
    AddInput(newPage, "text", "number-building", `number-building-${name}`, `number-building-${name}`)
    AddModelToInput(`form div.number-building-${name} input.form-control`, addressModel.numberBuilding);

    newPage = AddFormGroup(newPage, `number-flat-${name}`); //city-hall
    AddLabel(newPage, "number-flat", "Number flat: ", `number-flat-${name}`);
    AddInput(newPage, "text", "number-flat", `number-flat-${name}`, `number-flat-${name}`)
    AddModelToInput(`form div.number-flat-${name} input.form-control`, addressModel.numberFlat);

    newPage = AddFormGroup(newPage, `zip-code-${name}`); //city-hall
    AddLabel(newPage, "zip-code", "Zip code: ", `zip-code-${name}`);
    AddInput(newPage, "text", "zip-code", `zip-code-${name}`, `zip-code-${name}`)
    AddModelToInput(`form div.zip-code-${name} input.form-control`, addressModel.zipCode);

    newPage = AddFormGroup(newPage, `city-${name}`); //city-hall
    AddLabel(newPage, "city", "City: ", `city-${name}`);
    AddInput(newPage, "text", "city", `city-${name}`, `city-${name}`)
    AddModelToInput(`form div.city-${name} input.form-control`, addressModel.city);

    Page.appendChild(newPage);


    function DeletePage() {
        var page = document.querySelector("div.page");
        var startPage = document.querySelector("div.page div.start");
        if (startPage != undefined) {
            page.removeChild(startPage);
        }
    }

    function CreateNewPage() {

        var page = document.createElement("div");
        page.classList.add("adress");

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
            cityHallModel.bankAccount = AddDataToModel("form div.bank-account-city-hall input.form-control");
            cityHallModel.name = AddDataToModel("form div.name-city-hall input.form-control");
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