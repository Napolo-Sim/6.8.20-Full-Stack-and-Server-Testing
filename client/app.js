$(document).ready(function () {

    $("#btnSubmit").on("click", () => {
        $.ajax({
            type: "GET",
            url: "/api2",
            dataType: "json",
        }).then((result) => {
            console.log(result);
        })
    })

    $("#btnAPIcall").on("click", () => {
        $.ajax({
            type: "GET",
            url: "/api",
            dataType: "json",
        }).then((result) => {
            console.log(result);
            //Make it show the text onto the page (append????)
            // var e = document.getElementById('APIShow');
            // e.innerHTML = text(result);
        })
    })
})

