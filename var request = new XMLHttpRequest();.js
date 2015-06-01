var request = new XMLHttpRequest();
request.onload = function() {
    console.log(this.responseText);
};
request.open("get", "https://google.com");
request.send();
