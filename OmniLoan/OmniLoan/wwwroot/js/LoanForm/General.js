function General(dataModel) {

    AddStartNav();
    divStart = AddDivStart();
    AddText(divStart);
    AddButtons(divStart);


    function AddText(divStart) {
        var h1 = document.createElement("h1");
        h1.innerText = "Welcome on form";
        var h2 = document.createElement("h2");
        h2.innerText = "Who is deptor?";

        divStart.appendChild(h1);
        divStart.appendChild(h2);
    }

    function AddButtonPerson(divStart) {

        var buttonPerson = document.createElement("a");
        buttonPerson.classList.add("btn");
        buttonPerson.classList.add("btn-danger");
        buttonPerson.classList.add("person");
        buttonPerson.setAttribute("href", "?#");
        buttonPerson.innerText = "Person";

        divStart.appendChild(buttonPerson);
        return buttonPerson;
    }

    function AddButtonCompany(divStart) {

        var buttonCompany = document.createElement("a");
        buttonCompany.classList.add("btn");
        buttonCompany.classList.add("btn-success");
        buttonCompany.classList.add("company");
        buttonCompany.setAttribute("href", "#");
        buttonCompany.innerText = "Company";

        divStart.appendChild(buttonCompany);
        return buttonCompany;
    }

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

    function AddDivStart() {
        var divPage = document.querySelector("div.page");
        var divStart = document.createElement("div");
        divStart.classList.add("start");
        divPage.appendChild(divStart);

        return divStart;
    }

    function AddButtons(divStart) {

        var buttonPerson = AddButtonPerson(divStart);
        var buttonCompany = AddButtonCompany(divStart);

        buttonPerson.addEventListener("click", function () {
            dataModel.isDeptorCompany = false;
            NewGeneral(dataModel)
            navigation(dataModel);
        });

        buttonCompany.addEventListener("click", function () {
            dataModel.isDeptorCompany = true;
            NewGeneral(dataModel)
            navigation(dataModel);
        });
    }

}