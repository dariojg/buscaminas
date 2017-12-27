var arrayMatrix = []

function start_game(){
    jQuery.ajax({
            url: "http://localhost:8000/start_buscaminas/",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
                arrayMatrix = data.matrix
                drawBoard()
            },
        });
}

function drawBoard(){
    rows = arrayMatrix.length
    cols = arrayMatrix[0].length
    for(var i=0; i < rows; i++){
        for( var j = 0; j < cols; j++){
            var div = document.createElement("div")
            board_id.appendChild(div)
        }
    }
}

