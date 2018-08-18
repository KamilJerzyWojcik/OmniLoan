function Employer(employerModel) {

    //console.log("Employer: " + JSON.stringify(employerModel));
    console.log("employer");

    DeletePage();

    function DeletePage() {
        var page = document.querySelector("div.page");
        var startPage = document.querySelector("div.page div.start");
        if (startPage != undefined) {
            page.removeChild(startPage);
        }
    }

}