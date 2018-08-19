function AddDept(deptModel, Page, name) {

    var newPage = CreateNewPage();
    newPage = AddForm(newPage);

    newPage = AddFormGroup(newPage, `amount-${name}`);
    AddLabel(newPage, "amount", "Amount: ", `amount-${name}`);
    AddInput(newPage, "number", "amount", `amount-${name}`, `amount-${name}`)
    AddModelToInput(`form div.amount-${name} input.form-control`, deptModel.amount);

    newPage = AddFormGroup(newPage, `capital-${name}`);
    AddLabel(newPage, "capital", "Capital: ", `capital-${name}`);
    AddInput(newPage, "number", "capital", `capital-${name}`, `capital-${name}`)
    AddModelToInput(`form div.capital-${name} input.form-control`, deptModel.capital);

    newPage = AddFormGroup(newPage, `interest-${name}`);
    AddLabel(newPage, "interest", "Interest: ", `interest-${name}`);
    AddInput(newPage, "number", "interest", `interest-${name}`, `interest-${name}`)
    AddModelToInput(`form div.interest-${name} input.form-control`, deptModel.interest);

    newPage = AddFormGroup(newPage, `interest-penalty-${name}`);
    AddLabel(newPage, "interest-penalty", "Interest penalty: ", `interest-penalty-${name}`);
    AddInput(newPage, "number", "interest-penalty", `interest-penalty-${name}`, `interest-penalty-${name}`)
    AddModelToInput(`form div.interest-penalty-${name} input.form-control`, deptModel.interestPenalty);

    newPage = AddFormGroup(newPage, "date-last-update-interest-penalty");
    AddLabel(newPage, "date-last-update-interest-penalty", "Last Update interest penalty: ", "date-last-update-interest-penalty");
    AddInput(newPage, "date", "date-datelast-update-interest-penalty", "date-last-update-interest-penalty", "")
    AddModelToInput("form div.date-last-update-interest-penalty input.form-control", deptModel.dateLastUpdateInterestPenalty, "date");

    newPage = AddFormGroup(newPage, `penalty-type-${name}`);
    AddSelect(newPage, "interest-penalty-type", `penalty-type-${name}`, ["choose type", "Stopa Lombardowa", "Stopa Referencyjna NBP"])

    newPage = AddFormGroup(newPage, `fees-and-commissions-${name}`);
    AddLabel(newPage, "fees-and-commissions", "Fees and commissions: ", `fees-and-commissions-${name}`);
    AddInput(newPage, "number", "interest-fees-and-commissions", `fees-and-commissions-${name}`, `fees-and-commissions-${name}`)
    AddModelToInput(`form div.fees-and-commissions-${name} input.form-control`, deptModel.interestPenalty);

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
            newInput.setAttribute("min", "0.00");
            newInput.classList.add("form-control");

            newFormGroup.appendChild(newInput);
        }
    }

    function AddSelect(newPage, id, additionalClass, data) {

        var newFormGroup = newPage.querySelector("form div." + additionalClass);
        var newSelect = document.createElement("select");

        newSelect.classList.add("custom-select");
        newSelect.setAttribute("id", id);

        for (let i = 0; i < data.length; i++) {
            let newOption = document.createElement("option");
            newOption.value = i;
            newOption.innerText = data[i];
            newSelect.appendChild(newOption);
        }

        newFormGroup.appendChild(newSelect);

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