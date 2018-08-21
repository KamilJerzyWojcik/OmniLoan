function Court(CourtModel) {

    var page = document.querySelector("div.page");
    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();

    formHelper.AddInputAndLabel(newPage, "name-court", "text", CourtModel.name, "Name of Court: ");
    formHelper.AddInputAndLabel(newPage, "phone-court", "text", CourtModel.phoneNumber, "Phone number: ");
    formHelper.AddInputAndLabel(newPage, "account-court", "text", CourtModel.bankAccount, "Number of bank account: ");
    AddAddress(CourtModel.address, newPage, "court-address", "Court Address");

    AddButton("Save");

    var page = document.querySelector("div.page");
    page.appendChild(newPage);


    function AddButton(text) {

        var newButton = HtmlHelp.AddButton("btn-success", text);

        newButton.addEventListener("click", function () {

            CourtModel.name = HtmlHelp.AddDataToModel(newPage, "name-court");
            CourtModel.phoneNumber = HtmlHelp.AddDataToModel(newPage, "phone-court");
            CourtModel.bankAccount = HtmlHelp.AddDataToModel(newPage, "account-court");

            formHelper.AddAdresToModel(newPage, CourtModel.address, "court-address");
        });

        var form = newPage;
        form.appendChild(newButton);
    }
}