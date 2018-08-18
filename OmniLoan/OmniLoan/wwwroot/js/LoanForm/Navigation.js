function navigation(dataModel) {

    var isCompany = dataModel.isDeptorCompany;
    AddGeneralListener();

    var ulList = document.querySelector("div.container ul");


    for (var prop in dataModel) {

        var liChild = document.createElement("li");
        liChild.classList.add("nav-tem");

        var aChild = document.createElement("a");
        aChild.classList.add("nav-link");
        aChild.setAttribute("href", "#");

        if (prop != "isDeptorCompany" && prop != "id") {

            if (isCompany && (prop == "employer" || prop == "deptorPerson")) { continue; }
            if (!isCompany && prop == "deptorCompany") { continue; }

            if (prop == "deptorPerson") aChild = AddPerson(dataModel, aChild);

            if (prop == "cityHall") { aChild = AddCityHall(dataModel, aChild); }

            if (prop == "court") aChild = AddCourt(dataModel, aChild);

            if (prop == "employer") aChild = AddEmployer(dataModel, aChild);

            if (prop == "contract") aChild = AddContract(dataModel, aChild);

            if (prop == "deptorCompany") aChild = AddCompany(dataModel, aChild);

            liChild.appendChild(aChild);
            ulList.appendChild(liChild);
        }
    }

    function AddGeneralListener() {

        var aChild = document.querySelector("a.general");

        aChild.addEventListener("click", function () {
            var menuButtons = document.querySelectorAll("div.container ul.nav-tabs li");

            for (let j = 0; j < menuButtons.length; j++) {
                var classes = menuButtons[j].querySelector("a").classList;
                menuButtons[j].querySelector("a").classList.remove("active");
            }

            aChild.classList.add("active");
            NewGeneral(dataModel);
        });

        return aChild;
    }

    function AddCourt(dataModel, aChild) {
        aChild.innerText = "Court";
        aChild.addEventListener("click", function () {
            var menuButtons = document.querySelectorAll("div.container ul.nav-tabs li");

            for (let j = 0; j < menuButtons.length; j++) {
                var classes = menuButtons[j].querySelector("a").classList;
                menuButtons[j].querySelector("a").classList.remove("active");
            }

            aChild.classList.add("active");
            Court(dataModel.court);
        });

        return aChild;
    }

    function AddEmployer(dataModel, aChild) {
        aChild.innerText = "Employer";
        aChild.addEventListener("click", function () {
            var menuButtons = document.querySelectorAll("div.container ul.nav-tabs li");

            for (let j = 0; j < menuButtons.length; j++) {
                var classes = menuButtons[j].querySelector("a").classList;
                menuButtons[j].querySelector("a").classList.remove("active");
            }

            aChild.classList.add("active");
            Employer(dataModel.employer);
        });

        return aChild;
    }

    function AddPerson(dataModel, aChild) {
        aChild.innerText = "Person";
        aChild.addEventListener("click", function () {
            var menuButtons = document.querySelectorAll("div.container ul.nav-tabs li");

            for (let j = 0; j < menuButtons.length; j++) {
                var classes = menuButtons[j].querySelector("a").classList;
                menuButtons[j].querySelector("a").classList.remove("active");
            }

            aChild.classList.add("active");
            Person(dataModel.deptorPerson);
        });

        return aChild;
    }

    function AddCityHall(dataModel, aChild) {
        aChild.innerText = "City Hall";
        aChild.addEventListener("click", function () {
            var menuButtons = document.querySelectorAll("div.container ul.nav-tabs li");

            for (let j = 0; j < menuButtons.length; j++) {
                var classes = menuButtons[j].querySelector("a").classList;
                menuButtons[j].querySelector("a").classList.remove("active");
            }

            aChild.classList.add("active");
            CityHall(dataModel.cityHall);
        });

        return aChild;
    }

    function AddContract(dataModel, aChild) {
        aChild.innerText = "Contract";
        aChild.addEventListener("click", function () {
            var menuButtons = document.querySelectorAll("div.container ul.nav-tabs li");

            for (let j = 0; j < menuButtons.length; j++) {
                var classes = menuButtons[j].querySelector("a").classList;
                menuButtons[j].querySelector("a").classList.remove("active");
            }

            aChild.classList.add("active");
            Contract(dataModel.contract)
        });

        return aChild;
    }

    function AddCompany(dataModel, aChild) {
        aChild.innerText = "Company";
        aChild.addEventListener("click", function () {
            var menuButtons = document.querySelectorAll("div.container ul.nav-tabs li");

            for (let j = 0; j < menuButtons.length; j++) {
                var classes = menuButtons[j].querySelector("a").classList;
                menuButtons[j].querySelector("a").classList.remove("active");
            }

            aChild.classList.add("active");
            Company(dataModel.deptorCompany);
        });

        return aChild;
    }

};