function Contract(contractModel) {

    var page = document.querySelector("div.page");
    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();

    formHelper.AddInputAndLabel(newPage, "name", "text", contractModel.name, "Contract name");
    formHelper.AddInputAndLabel(newPage, "number", "text", contractModel.number, "Contract number");
    formHelper.AddInputAndLabel(newPage, "date-conclusion", "date", contractModel.dateConclusion, "Date conclusion");
    formHelper.AddInputAndLabel(newPage, "date-termination", "date", contractModel.dateContractTermination, "Date termination");
    AddDept(contractModel.dept, newPage, "dept")
    AddSaveButton("Save");

    
    page.appendChild(newPage);


    function AddSaveButton(text) {

        var newButton = HtmlHelp.AddButton("btn-success", text);

        newButton.addEventListener("click", function () {

            AddGeneralInfo();

            contractModel.dept.amount = HtmlHelp.AddDataToModel(newPage, "amount-dept");
            contractModel.dept.capital = HtmlHelp.AddDataToModel(newPage, "capital-dept");
            contractModel.dept.interest = HtmlHelp.AddDataToModel(newPage, "interest-dept");
            contractModel.dept.interestPenalty = HtmlHelp.AddDataToModel(newPage, "interest-penalty-dept");
            contractModel.dept.dateLastUpdateInterestPenalty = HtmlHelp.AddDataToModel(newPage, "date-last-update-interest-penalty-dept");
            contractModel.dept.feesAndCommissions = HtmlHelp.AddDataToModel(newPage, "fees-and-commissions-dept");
            contractModel.dept.interestPenaltynumber = HtmlHelp.AddDataToModel(newPage, "penalty-type-dept", "select");
        });

        var form = newPage;
        form.appendChild(newButton);

        

    }

    function AddGeneralInfo() {

        contractModel.name = HtmlHelp.AddDataToModel(newPage, "name");
        contractModel.number = HtmlHelp.AddDataToModel(newPage, "number");
        contractModel.dateConclusion = HtmlHelp.AddDataToModel(newPage, "date-conclusion");
        contractModel.dateContractTermination = HtmlHelp.AddDataToModel(newPage, "date-termination");
    }
}