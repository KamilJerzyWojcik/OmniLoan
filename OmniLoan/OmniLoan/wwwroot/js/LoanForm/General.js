function General(dataModel) {

    var formHelper = new FormHelper();
    var htmlHelper = new HtmlHelper();
    var newPage = document.querySelector("div.page");

    AddStartNav();
    divStart = htmlHelper.AddDiv(newPage, "start")
    formHelper.AddHeadToForm(divStart, "h1", "Welcome on form", "none")
    formHelper.AddHeadToForm(divStart, "h2", "Who is deptor?", "none")

    AddButtons(divStart);

    function AddStartNav() {

        var ulList = document.querySelector("div.container ul");
        var liOldChild = ulList.querySelectorAll("li");

        if (liOldChild[0] != undefined) {

            for (let i = 0; i < liOldChild.length; i++) {
                ulList.removeChild(liOldChild[i]);
            }
        }

        var page = document.querySelector("div.page");
        var pageChild = page.children;

        if (pageChild[0] != undefined) {

            for (let i = 0; i < pageChild.length; i++) {
                page.removeChild(pageChild[i]);
            }
        }

        var liChild = document.createElement("li");
        liChild.classList.add("nav-item");
        var aChild = document.createElement("a");
        aChild.classList.add("nav-link");
        aChild.classList.add("active");
        aChild.classList.add("general");
        aChild.setAttribute("href", "#");
        aChild.innerText = "General";
        liChild.appendChild(aChild);
        ulList.appendChild(liChild);

    }

    function AddButtons(divStart) {

        var personButton = htmlHelper.AddButton("btn-danger", "Person");
        var companyButton = htmlHelper.AddButton("btn-success", "Company");

        personButton.addEventListener("click", function () {
            dataModel.isDeptorCompany = false;
            NewGeneral(dataModel)
            navigation(dataModel);
        });

        companyButton.addEventListener("click", function () {
            dataModel.isDeptorCompany = true;
            NewGeneral(dataModel)
            navigation(dataModel);
        });

        divStart.appendChild(personButton);
        divStart.appendChild(companyButton);

    }

}