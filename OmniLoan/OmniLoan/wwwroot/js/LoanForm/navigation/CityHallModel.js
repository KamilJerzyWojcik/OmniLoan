function CityHall(cityHallModel) {

    var page = document.querySelector("div.page");
    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();

    formHelper.AddInputAndLabel(newPage, "name-city-hall", "text", cityHallModel.name, "Name of City Hall: ");
    formHelper.AddInputAndLabel(newPage, "bank-account-city-hall", "text", cityHallModel.bankAccount, "Number of bank account: ");
    AddButton("Save");

    var page = document.querySelector("div.page");
    page.appendChild(newPage);


    function AddButton(text) {

        var newButton = HtmlHelp.AddButton("btn-success", text);

        newButton.addEventListener("click", function () {

            cityHallModel.name = HtmlHelp.AddDataToModel(newPage, "name-city-hall");
            cityHallModel.bankAccount = HtmlHelp.AddDataToModel(newPage, "bank-account-city-hall");
        });

        var form = newPage;
        form.appendChild(newButton);
    }
}