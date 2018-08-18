function CityHall(cityHallModel) {

    console.log("CityHall: " + JSON.stringify(cityHallModel));
    

    DeletePage();
    var newPage = CreateNewPage();
    
    newPage = AddForm(newPage);
    
    
    newPage = AddFormGroup(newPage, "name-city-hall");
    AddLabel(newPage, "name", "Name of City Hall: ", "name-city-hall");
    AddInput(newPage, "text", "name", "name-city-hall", "Name of City Hall")
    AddModelToInput("form div.name-city-hall input.form-control", cityHallModel.name);

    newPage = AddFormGroup(newPage, "bank-account-city-hall");
    AddLabel(newPage, "account", "Number of bank account: ", "bank-account-city-hall");
    AddInput(newPage, "text", "account", "bank-account-city-hall", "Number of bank account")
    AddModelToInput("form div.bank-account-city-hall input.form-control", cityHallModel.bankAccount);

    

    AddButton("city-hall");

    var page = document.querySelector("div.page");
    page.appendChild(newPage);


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