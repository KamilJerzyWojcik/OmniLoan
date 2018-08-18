$(function () {

    //obiekty
    var dataModel = "";

    $.ajax({ url: "/LoanForm/GetForm" }).done(function (results) {
        console.log(results);
        dataModel = results;
        General(dataModel)

    }
    ).fail(function (err) {
        console.log("error: " + err);
    }
    );

});