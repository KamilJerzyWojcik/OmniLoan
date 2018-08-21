$(function () {

    var dataModel = "";

    $.ajax({ url: "/LoanForm/GetForm" }).done(function (results) {
        dataModel = results;
        General(dataModel)
    }
    ).fail(function (err) {
        console.log("error: " + err);
    }
    );

});
