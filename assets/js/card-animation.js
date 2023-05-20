function toggleDiv() {
  var videoDiv = document.getElementById("video-D5_1");
  
  if (videoDiv.style.display === "none" || videoDiv.style.display === "") {
    videoDiv.style.display = "block";
  } else {
    videoDiv.style.display = "none";
  }
}

function closeDiv() {
  var videoDiv = document.getElementById("video-D5_1");
  videoDiv.style.display = "none";
}
