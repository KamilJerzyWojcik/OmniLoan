function AddDept(deptModel, Page, name) {

    var newPage = CreateNewPage();
    newPage = AddForm(newPage);

    newPage = AddFormGroup(newPage, `amount-${name}`); //city-hall
    AddLabel(newPage, "amount", "Amount: ", `amount-${name}`);
    AddInput(newPage, "number", "amount", `amount-${name}`, `amount-${name}`)
    AddModelToInput(`form div.amount-${name} input.form-control`, deptModel.amount);

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
        page.classList.add("dept");

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

        if (type == "number") {
            var newFormGroup = newPage.querySelector("form div." + additionalClass);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("step", 0.01);
            newInput.setAttribute("id", id);
            newInput.classList.add("form-control");

            newFormGroup.appendChild(newInput);
        }
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