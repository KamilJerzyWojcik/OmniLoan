function Employer(employerModel) {

    var page = document.querySelector("div.page");
    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();

    formHelper.AddInputAndLabel(newPage, "name-employer", "text", employerModel.name, "Employer name: ");
    formHelper.AddInputAndLabel(newPage, "nip-employer", "text", employerModel.nip, "Employer NIP: ");
    formHelper.AddInputAndLabel(newPage, "regon-employer", "text", employerModel.regon, "Employer REGON: ");
    AddAddress(employerModel.address, newPage, "employer-address", "Employer Address");

    AddButton("Save");

    var page = document.querySelector("div.page");
    page.appendChild(newPage);

    function AddButton(text) {
        var formHelper = new FormHelper();

        var newButton = HtmlHelp.AddButton("btn-success", text);

        newButton.addEventListener("click", function () {
            employerModel.name = HtmlHelp.AddDataToModel(newPage, "name-employer");
            employerModel.nip = HtmlHelp.AddDataToModel(newPage, "nip-employer");
            employerModel.regon = HtmlHelp.AddDataToModel(newPage, "regon-employer");

            formHelper.AddAdresToModel(newPage, employerModel.address, "employer-address");
          
        });

        var form = newPage;
        form.appendChild(newButton);
    }

}