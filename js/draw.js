function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(600/x);
    $(".grid").height(600/x);
};

function clearGrid(){
    $(".grid").remove();
};  

function refreshGrid(){
    var z = prompt("How many boxes would you like for your new grid?");
    clearGrid();
    createGrid(z);
};

$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "#A3311D");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "#A3311D");
        });
    });
});