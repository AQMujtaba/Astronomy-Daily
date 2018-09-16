var request = new XMLHttpRequest();

request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=', true);
request.onload = function () {
  // Load response
  var data = JSON.parse(this.response);
  // Establish variables
  var img = document.createElement("img");
  img.src = data.hdurl;
  var title = data.title;
  var details = data.explanation;
  // Append image and change title
  document.body.appendChild(img);
  document.getElementById("Title").innerHTML = title;
  }
request.send();