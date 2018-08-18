function Company(companyModel) {

    //console.log("Company: " + JSON.stringify(companyModel));
    console.log("company");

    DeletePage();

    function DeletePage() {
        var page = document.querySelector("div.page");
        var startPage = document.querySelector("div.page div.start");
        if (startPage != undefined) {
            page.removeChild(startPage);
        }
    }

}