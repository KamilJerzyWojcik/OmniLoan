function NewGeneral(dataModel) {

    DeletePage();
    var newPage = CreateNewPage();
    newPage = AddText(newPage);
    newPage = AddBackButton(newPage);
    newPage = AddResetButton(newPage);
    AddJsonButton(newPage)
    AddNewPage(newPage);


    function DeletePage() {
        var page = document.querySelector("div.page");
        var startPage = document.querySelector("div.page div.start");
        if (startPage != undefined) {
            page.removeChild(startPage);
        }
    }

    function CreateNewPage() {

        var page = document.createElement("div");
        page.classList.add("start");

        return page;
    }

    function AddText(page) {

        var h2 = document.createElement("h2");

        if (dataModel.isDeptorCompany) {
            h2.innerText = "Deptor is Company";
        }
        else {
            h2.innerText = "Deptor is Person";
        }

        page.appendChild(h2);

        return page;
    }

    function AddBackButton(newPage) {

        var backButton = document.createElement("a");
        backButton.classList.add("btn");
        backButton.classList.add("btn-danger");
        backButton.setAttribute("href", "#");
        backButton.innerText = "change deptor";

        backButton.addEventListener("click", function () {

            dataModel.isDeptorCompany = null;
            General(dataModel)

        });

        newPage.appendChild(backButton);
        return newPage;
    }

    function AddResetButton(newPage) {

        var resetButton = document.createElement("a");
        resetButton.classList.add("btn");
        resetButton.classList.add("btn-info");
        resetButton.setAttribute("href", "#");
        resetButton.innerText = "Reset form";
        newPage.appendChild(resetButton);

        resetButton.addEventListener("click", function () {
            location.reload();
        });

        return newPage;
    }

    function AddJsonButton(newPage) {

        var backButton = document.createElement("a");
        backButton.classList.add("btn");
        backButton.classList.add("btn-primary");
        backButton.setAttribute("href", "#");
        backButton.innerText = "get Json";

        backButton.addEventListener("click", function () {
            SendJson("kamil");

            

        });

        newPage.appendChild(backButton);
        return newPage;
    }


    function AddNewPage(newPage) {
        var page = document.querySelector("div.page");
        page.appendChild(newPage);
    }

    function SendJson(userInfos) {

        var json = JSON.stringify(userInfos);

        $.ajax({
            type: "Get",
            contentType: "application/json",
            url: "/LoanForm/SendForm?data=" + userInfos,
            dataType: "json",
            success: function (xhr) { alert("ok"); },
            error: function (xhr) { alert("error"); }
        });
    }
}