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
            div.id = i + "" + j 
            div.addEventListener("contextmenu", markCell, false)
            div.addEventListener("click", showCell, true)
            board_id.appendChild(div)
        }
    }
}

function markCell(ev){
    ev.preventDefault();
    var div_id = this.id
    divObj = document.getElementById(div_id);
    divObj.style.backgroundColor = "blue";
    return false;
}

function showCell(ev){
    var number_mines = this.id.split("");	
	var div_id = this.id			
	divObj = document.getElementById(div_id);

	if(arrayMatrix[parseInt(number_mines[0],10)][parseInt(number_mines[1],10)] != -1){
		document.getElementById(div_id).innerHTML = "<p style='margin-top:5px;'>" + arrayMatrix[parseInt(number_mines[0],10)][parseInt(number_mines[1],10)] + "</p>";
		divObj.style.backgroundColor = "white";
    }
    if(arrayMatrix[parseInt(number_mines[0],10)][parseInt(number_mines[1],10)] == -1){
        divObj.style.backgroundColor = "red";
        document.getElementById("boom").innerHTML = "<h1>BOOOM!</h1>";
        document.getElementById("restart").style.display="block";
    }
}

