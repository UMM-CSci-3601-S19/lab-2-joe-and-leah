

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
