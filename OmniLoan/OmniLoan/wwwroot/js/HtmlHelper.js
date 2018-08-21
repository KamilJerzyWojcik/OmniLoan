class HtmlHelper {

    //modyfikowanie 

    DeletePage() {
        var page = document.querySelector("div.page");
        var startPage = document.querySelector("div.page div.start");
        if (startPage != undefined) {
            page.removeChild(startPage);
        }
    }

    CreateNewPage() {

        var page = document.createElement("div");
        page.classList.add("start");

        return page;
    }


    //Model

    ShowModelParameter(newPage, classGroup, modelParameter, type = "text") {
        if (type == "text" || type == "number") {

            var inputName = newPage.querySelector(`form div.${classGroup} input.form-control`);
            if (modelParameter != null) {
                inputName.value = modelParameter;
            }
        }

        if (type == "checkbox") {
            var inputName = newPage.querySelector(`form div.${classGroup} input.form-check-input`);

            if (modelParameter) {

                inputName.setAttribute("checked", "checked");
            }
        }

        if (type == "date") {

            var inputName = newPage.querySelector(`form div.${classGroup} input.form-control`);
            if (modelParameter != null) {
                inputName.setAttribute("value", modelParameter);
            }
        }

        if (type == "select") {

            var dataSelect = newPage.querySelector(`form div.${classGroup} select.custom-select`).children;
            dataSelect[modelParameter].setAttribute("selected", "selected");

        }


    }//addModeltoinput

    AddDataToModel(newPage, selector, type = "text") {

        var data = newPage.querySelector(`form div.${selector} input.form-control`);
        if (type == "text" || type == "date") {
            return data.value;
        }

        if (type == "checkbox") {
            var dataCheckbox = newPage.querySelector(`form div.${selector} input.form-check-input`);
            return dataCheckbox.checked;
        }

        if (type == "select") {
            var dataSelect = newPage.querySelector(`form div.${selector} select.custom-select`);
            return dataSelect.options[dataSelect.selectedIndex].value;
        }
    }

    //tagi

    AddDiv(newPage, classDiv) {

    //var divPage = document.querySelector("div.page");
    var div = document.createElement("div");
    div.classList.add(classDiv);
    newPage.appendChild(div);

    return div;
}

    AddForm(newPage) {
        var newForm = document.createElement("form");
        newForm.classList.add("deptor");
        newPage.appendChild(newForm);

        return newPage;
    }

    AddFormGroup(newPage, additionalClass, type = "text") {

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

    AddLabel(newPage, classGroup, innerText, classInput = "") {

        var newFormGroup = newPage.querySelector(`div.${classGroup}`);
        var newLabel = document.createElement("label");
        newLabel.setAttribute("for", classGroup + "-input");

        if (classInput != "") {
            newLabel.classList.add(classInput);
        }

        newLabel.innerText = innerText;
        newFormGroup.appendChild(newLabel);
    }

    AddInput(newPage, classGroup, type, placeholder = "") {

        if (type == "text") {
            var newFormGroup = newPage.querySelector(`div.${classGroup}`);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("id", classGroup + "-input");
            newInput.setAttribute("placeholder", placeholder);
            newInput.classList.add("form-control");

            newFormGroup.appendChild(newInput);
        }

        if (type == "checkbox") {
            var newFormGroup = newPage.querySelector(`div.${classGroup}`);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("id", classGroup + "-input");
            newInput.classList.add("form-check-input");

            newFormGroup.appendChild(newInput);
        }

        if (type == "date") {
            var newFormGroup = newPage.querySelector(`div.${classGroup}`);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("id", classGroup + "-input");
            newInput.classList.add("form-control");

            newFormGroup.appendChild(newInput);
        }

        if (type == "number") {
            var newFormGroup = newPage.querySelector(`div.${classGroup}`);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", type);
            newInput.setAttribute("step", 0.01);
            newInput.setAttribute("id", classGroup + "-input");
            newInput.setAttribute("min", "0.00");
            newInput.classList.add("form-control");

            newFormGroup.appendChild(newInput);
        }
    }

    AddSelect(newPage, classGroup, data) {

        var newFormGroup = newPage.querySelector(`div.${classGroup}`);
        var newSelect = document.createElement("select");

        newSelect.classList.add("custom-select");
        newSelect.setAttribute("id", classGroup + "-input");

        for (let i = 0; i < data.length; i++) {
            let newOption = document.createElement("option");
            newOption.value = i;
            newOption.innerText = data[i];
            newSelect.appendChild(newOption);
        }

        newFormGroup.appendChild(newSelect);

    }

    //eventy

    AddButton(classButton, text) {

        var newButton = document.createElement("button");
        newButton.classList.add("btn");
        newButton.classList.add(classButton);
        newButton.innerText = text;

        return newButton;
    }

}

