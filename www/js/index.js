function takePicture(){
    navigator.camera.getPicture(successCallback, FailCallBack, { 
        destinationType: Camera.DestinationType.DATA_URL });
}
function successCallback(imageData) {
    document.getElementById("img").remove();
    var x = document.createElement("img");
    x.setAttribute("width","280");
    x.setAttribute("height","180");
    x.setAttribute("id","img");
    x.setAttribute("src","data:image/jpeg;base64, " + imageData);
    document.getElementById('pic').appendChild(x);
}

function takeVideo() {
    navigator.device.capture.captureVideo(captureSuccess, FailCallBack, { limit: 1 });
}
function captureSuccess(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;
      document.getElementById("VIDEO").remove();
      var x = document.createElement("VIDEO");

      if (x.canPlayType("video/mp4")) {
        x.setAttribute("src", path);
      } else {
        x.setAttribute("src", "https://video.twimg.com/ext_tw_video/1244003140183060485/pu/vid/1280x720/nyR7xJnXM6sBC_6L.mp4");
      }

      x.setAttribute("width", "280");
      x.setAttribute("height", "180");
      x.setAttribute("controls", "controls");
      x.setAttribute("autoplay","autoplay");
      x.setAttribute("id","VIDEO");
      document.getElementById('wea').appendChild(x);
    }
};

function FailCallBack (message){
    console.log("Error: ",message);
}