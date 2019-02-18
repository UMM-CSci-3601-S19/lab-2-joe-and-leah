

function getAllToDos() {
  console.log("Getting all the ToDos.");

  var HttpThingy = new HttpClient();
  HttpThingy.get("/api/todos", function (returned_json) {
    document.getElementById('jsonToDump').innerHTML = returned_json;
  });
}

function getCompleteToDos() {

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos?status=complete", function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });

}

function getIncompleteToDos() {

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos?status=incomplete", function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });

}

function getBodyToDos() {

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos?body=" + document.getElementById("body").value, function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });
}

function getOwnerToDos() {

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos?owner=" + document.getElementById("owner").value, function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });
}

function getIDToDos() {

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos?_id=" + document.getElementById("_id").value, function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });
}

function getCategoryToDos() {

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos?category=" + document.getElementById("category").value, function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });
}

function getNTodos() {

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos?limit=" + document.getElementById("limit").value, function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });
}

function getComboTodos() {

  var rest = "?";
  if (!(document.getElementById("getCompleteCheck").checked && document.getElementById("getIncompleteCheck").checked)) {
    if (document.getElementById("getCompleteCheck").checked) {rest += "status=complete&" }
    if (document.getElementById("getIncompleteCheck").checked){rest += "status=incomplete&"}
  }

  if (!(document.getElementById("body").value === "")){rest += "body=" + document.getElementById("body").value + "&"}
  if (!(document.getElementById("owner").value ==="") ){rest += "owner=" + document.getElementById("owner").value + "&"}
  if (!(document.getElementById("_id").value ==="")){rest += "_id=" + document.getElementById("_id").value + "&"}
  if (!(document.getElementById("category").value === "")){rest += "category=" + document.getElementById("category").value + "&"}
  if (!(document.getElementById("limit").value ==="") ){rest += "limit=" + document.getElementById("limit").value}

  var HttpThiny = new HttpClient();
  HttpThiny.get("api/todos" + rest, function (returned_jason) {
    document.getElementById('jsonToDump').innerHTML = returned_jason;
  });
}

function HttpClient() {
  // We'll take a URL string, and a callback function.
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();

    // Set a callback to be called when the ready state of our request changes.
    anHttpRequest.onreadystatechange = function () {

      /**
       * Only call our 'aCallback' function if the ready state is 'DONE' and
       * the request status is 200 ('OK')
       *
       * See https://httpstatuses.com/ for HTTP status codes
       * See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
       *  for XMLHttpRequest ready state documentation.
       *
       */
      if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200)
        aCallback(anHttpRequest.responseText);
    };

    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  }
}
