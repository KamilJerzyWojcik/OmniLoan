var HtmlHelp = new HtmlHelper();

class FormHelper {

    AddHeadToForm(newPage, typeH, head, addSelector = "form") {

        var h = document.createElement(typeH);
        h.classList.add("head");
        h.innerText = head;
        if (addSelector == "form") {
            newPage.querySelector("form").appendChild(h);
        }
        if (addSelector == "none") {
            newPage.appendChild(h);
        }
    }

    AddInputAndLabel(newPage, classGroup, type, model, placeholder = "") {

        HtmlHelp.AddFormGroup(newPage, classGroup);//
        HtmlHelp.AddLabel(newPage, classGroup, placeholder);//
        HtmlHelp.AddInput(newPage, classGroup, type, placeholder)
        HtmlHelp.ShowModelParameter(newPage, classGroup, model, type);
    }

    AddSelectInFormGroup(newPage, classGroup, data, model) {

        HtmlHelp.AddFormGroup(newPage, classGroup);
        HtmlHelp.AddSelect(newPage, classGroup, data);
        HtmlHelp.ShowModelParameter(newPage, classGroup, model, "select")
    }

    DeleteAndCreateNewPage() {

        var HtmlHelp = new HtmlHelper();
        HtmlHelp.DeletePage();
        var newPage = HtmlHelp.CreateNewPage();

        return HtmlHelp.AddForm(newPage);
    }

    AddAdresToModel(newPage, model, name) {

        model.street = HtmlHelp.AddDataToModel(newPage, `street-${name}`);
        model.numberBuilding = HtmlHelp.AddDataToModel(newPage, `number-building-${name}`);
        model.numberFlat = HtmlHelp.AddDataToModel(newPage, `number-flat-${name}`);
        model.zipCode = HtmlHelp.AddDataToModel(newPage, `zip-code-${name}`);
        model.city = HtmlHelp.AddDataToModel(newPage, `city-${name}`);

    }
}