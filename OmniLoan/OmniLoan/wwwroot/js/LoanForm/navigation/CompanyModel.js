function Company(companyModel) {

    var page = document.querySelector("div.page");
    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();

    formHelper.AddInputAndLabel(newPage, "name", "text", companyModel.name, "Company name");
    formHelper.AddInputAndLabel(newPage, "nip", "text", companyModel.nip, "Company NIP");
    formHelper.AddInputAndLabel(newPage, "regon", "text", companyModel.regon, "Company REGON");
    formHelper.AddInputAndLabel(newPage, "krs", "text", companyModel.krs, "Company KRS");

    AddAddress(companyModel.addressCorrespondence, newPage, "company-address-correspondence", "Company correspondence address");
    AddAddress(companyModel.addressCompany, newPage, "company-address-company", "Company address");
    AddAddress(companyModel.addressCompanyAdditional, newPage, "company-address-additional", "Company additional addresss");
    AddAddress(companyModel.addressAnother, newPage, "company-address-another", "Company another address");

    AddButton("Save");

    var page = document.querySelector("div.page");
    page.appendChild(newPage);


    function AddButton(text) {

        var newButton = HtmlHelp.AddButton("btn-success", text);

        newButton.addEventListener("click", function () {

            companyModel.name = HtmlHelp.AddDataToModel(newPage, "name");
            companyModel.nip = HtmlHelp.AddDataToModel(newPage, "nip");
            companyModel.krs = HtmlHelp.AddDataToModel(newPage, "krs");
            companyModel.regon = HtmlHelp.AddDataToModel(newPage, "regon");

            formHelper.AddAdresToModel(newPage, companyModel.addressCorrespondence, "company-address-correspondence");
            formHelper.AddAdresToModel(newPage, companyModel.addressCompany, "company-address-company");
            formHelper.AddAdresToModel(newPage, companyModel.addressCompanyAdditional, "company-address-additional");
            formHelper.AddAdresToModel(newPage, companyModel.addressAnother, "company-address-another");
        });

        var form = newPage;
        form.appendChild(newButton);
    }
}