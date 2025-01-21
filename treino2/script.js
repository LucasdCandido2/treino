$(document).ready(function() {
    $("button.toggle-card").on("click", function(){
        $(this).closest(".card").find(".card-text").slideToggle();
        // alert(`abriu ${$(this).text()}`);
    });

    $("#openModalButton").on("click", function() {
        $("#exampleModal").modal('show');
    });

    $("#saveModalButton").on("click", function() {
        $("#exampleModal").modal('hide');
    });

    $("#addItemButton").on("click", function(){
        let id = $("#dynamicList li").length + 1;
        $("#dynamicList").append(`
            <li class="list-group-item">Item ${id}</li>
            `);
    });

    $(document).on("click", "#clearListButton", function() {
        $("#dynamicList li").remove();
    });

    $("#sliderRange").on("input", function() {
        let value = $(this).val();

        $("#sliderValue").text(value);

        if (value > 50) {
            $("#sliderValue").css("color", "green");
        } else if (value < 50) {
            $("#sliderValue").css("color", "red");
        } else {
            $("#sliderValue").css("color", "black");
        }
        
    })

})