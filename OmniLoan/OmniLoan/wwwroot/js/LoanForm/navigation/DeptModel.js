function AddDept(deptModel, Page, name) {

    var formHelper = new FormHelper();
    var newPage = formHelper.DeleteAndCreateNewPage();
    formHelper.AddHeadToForm(newPage, "h4", "Loan", );

    formHelper.AddInputAndLabel(newPage, `amount-${name}`, "number", deptModel.amount, "Amount: ");
    formHelper.AddInputAndLabel(newPage, `capital-${name}`, "number", deptModel.capital, "Capital: ");
    formHelper.AddInputAndLabel(newPage, `interest-${name}`, "number", deptModel.interest, "Interest: ");
    formHelper.AddInputAndLabel(newPage, `interest-penalty-${name}`, "number", deptModel.interestPenalty, "Interest penalty: ");
    formHelper.AddInputAndLabel(newPage, `date-last-update-interest-penalty-${name}`, "date", deptModel.dateLastUpdateInterestPenalty, "Last update interest: ");
    formHelper.AddSelectInFormGroup(newPage, `penalty-type-${name}`, ["choose type", "Stopa Lombardowa", "Stopa Referencyjna NBP"], deptModel.interestPenaltynumber)
    formHelper.AddInputAndLabel(newPage, `fees-and-commissions-${name}`, "number", deptModel.feesAndCommissions, "Fees and commissions: ");

    Page.appendChild(newPage);

}