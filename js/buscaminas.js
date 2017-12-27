var arrayMatrix = []
var mines = 0

function start_game(){
    jQuery.ajax({
            url: "http://localhost:8000/start_buscaminas/",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function(data) {
                arrayMatrix = data.matrix
                mines = data.mines
                drawBoard()
            },
        });
}

function drawBoard(){
    rows = arrayMatrix.length
    cols = arrayMatrix[0].length
    for(var i=0; i < rows; i++){
        for( var j = 0; j < cols; j++){
            document.getElementById("mines").innerHTML = "<h4> mines: " + mines +  "</h4>";
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
    divObj = document.getElementById(div_id); //TODO: mark cell and substract mine only if it was not checked yet 
    divObj.style.backgroundImage = "url(img/flag.jpeg)";
    mines = mines - 1
    document.getElementById("mines").innerHTML = "<h4> mines: " + mines +  "</h4>";
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
        divObj.style.backgroundImage = "url(img/bomb.png)";
        document.getElementById("boom").innerHTML = "<h1>BOOOM!</h1>";  //TODO: Block game and not keep playing (remove events listeners??)
        document.getElementById("restart").style.display="block";
    }
    
    //TODO: expand cells if you do not have numbers around 	
}

