function sectionFadeIn() {
  document.getElementById("hiddenSection").style.visibility = "visible"
}

function alertMessage(){
  alert("WARNING - This is an alert!");
}


function httpReq(){

	return new Promise(function(resolve,reject){

		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
	    	if (this.readyState == 4 && this.status == 200){ /* The status of the response, xhr.status, is (generally) used to determine whether the request was
                                                            successful or not.  xhr.readyState is simply used to determine the state of the request*/
	       		resolve(req.responseText);
	       	}
	       	if(this.readyState == 4 && this.status != 200){
	       		reject("Error");
	       	}
		};

		req.open("GET", "http://api.icndb.com/jokes/random", true);

		req.send();
	});
}

function httpReq2(searchText){

	return new Promise(function(resolve,reject){

		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
	    	if (this.readyState == 4 && this.status == 200){ /* The status of the response, xhr.status, is (generally) used to determine whether the request was
                                                            successful or not.  xhr.readyState is simply used to determine the state of the request*/
	       		resolve(req.responseText);
	       	}
	       	if(this.readyState == 4 && this.status != 200){
	       		reject("Error");
	       	}
		};

		req.open("GET", "https://api.github.com/search/repositories?q=" + searchText, true);

		req.send();
	});
}

function randomJoke(){

	var promise = httpReq();

	promise.then(function(resolve2){
		document.getElementById("joke").innerHTML = JSON.parse(resolve2).value.joke;
	}, function(reject2){
		document.getElementById("joke").style.background = "red";
		document.getElementById("joke").innerHTML = reject2;
	});
}

function getRepositories(){

	var searchText = document.getElementById("searchText").value;

	var promise = httpReq2(searchText);

	promise.then(function(content){

		var list = "<ul>";

		for(var i in JSON.parse(content).items){  /* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in*/
			 list = list + "<li>" + JSON.parse(content).items[i].url + "</li>";
		}

		list = list + "</ul>";

		document.getElementById("repoList").innerHTML = list;

	}, function(error){
		document.getElementById("repoList").style.background = "red";
		document.getElementById("repoList").innerHTML = error;
	});
}

/*https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM*/

function createMatrix(){

  var i,j;
  var matrix = new Array(6);

  for (i=0; i<matrix.length; i++){
    matrix[i] = new Array(6);
  }

  for (i=0; i<matrix.length; i++)
  {
    for (j=0; j<matrix[i].length; j++)
    {
      matrix[i][j] = Math.round(Math.random() * 100);
    }
  }

  return matrix;
}


function createTable(){

    matrix=createMatrix();

    var body = document.getElementsByTagName("body")[0];

    var table= document.createElement("table");
    var tblBody= document.createElement("tbody");

    for(var i = 0; i < 6; i++)
    {
      var tableRow = document.createElement("tr");

      for(var j = 0; j < 6; j++){
        var cell= document.createElement("td");
        var cellContent = document.createTextNode(matrix[i][j]);
        cell.appendChild(cellContent);
        tableRow.appendChild(cell);
      }

      tblBody.appendChild(tableRow);
    }

    table.appendChild(tblBody);
    body.appendChild(table);
}
