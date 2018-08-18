function Contract(contractModel) {

    console.log("Contract: " + JSON.stringify(contractModel));
    console.log("contract");

    DeletePage();
    var newPage = CreateNewPage();

    newPage = AddForm(newPage);


    newPage = AddFormGroup(newPage, "name");
    AddLabel(newPage, "name", "Contract name: ", "name");
    AddInput(newPage, "text", "name", "name", "Contract name")
    AddModelToInput("form div.name input.form-control", contractModel.name);

    newPage = AddFormGroup(newPage, "number");
    AddLabel(newPage, "number", "Contract number: ", "number");
    AddInput(newPage, "text", "number", "number", "Contract number")
    AddModelToInput("form div.number input.form-control", contractModel.number);

    newPage = AddFormGroup(newPage, "date-conclusion");
    AddLabel(newPage, "date-conclusion", "Contract date conclusion: ", "date-conclusion");
    AddInput(newPage, "date", "date-conclusion", "date-conclusion", "Contract number")
    AddModelToInput("form div.date-conclusion input.form-control", contractModel.dateConclusion, "date");

    newPage = AddFormGroup(newPage, "date-contract-termination");
    AddLabel(newPage, "date-contract-termination", "Contract date termination: ", "date-contract-termination");
    AddInput(newPage, "date", "date-contract-termination", "date-contract-termination", "Contract number")
    AddModelToInput("form div.date-contract-termination input.form-control", contractModel.dateContractTermination, "date");

    AddDept(contractModel.dept, newPage.querySelector("form"), "dept")

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
            contractModel.name = AddDataToModel("form div.name input.form-control");
            contractModel.number = AddDataToModel("form div.number input.form-control");
            contractModel.dateConclusion = AddDataToModel("form div.date-conclusion input.form-control");
            contractModel.dateContractTermination = AddDataToModel("form div.date-contract-termination input.form-control");

            contractModel.dept.amount = AddDataToModel("form div.dept form div.amount-dept input.form-control")
            
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

        if (type == "date") {
            var newFormGroup = newPage.querySelector("form div." + additionalClass);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("id", id);
            newInput.classList.add("form-control");

            newFormGroup.appendChild(newInput);
        }
    }

    function AddModelToInput(selector, param, type = "text") {
        if (type == "text" ) {
            var inputName = newPage.querySelector(selector);
            inputName.value = param;
        }

        if (type == "checkbox") {
            var inputName = newPage.querySelector(selector);

            if (personModel.isAlive) {
                inputName.setAttribute("checked", "checked");
            }
        }

        if (type == "date") {
            var inputName = newPage.querySelector(selector);
            inputName.setAttribute("value", param);
        }

    }

    function AddDataToModel(selector, type = "text") {

        if (type == "text" || type == "date") {
            var data = newPage.querySelector(selector);
            return data.value;
        }

        if (type == "checkbox") {
            var data = newPage.querySelector(selector);
            return data.checked;
        }
    }


}