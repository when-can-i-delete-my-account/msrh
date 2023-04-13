emotion1 = ""
emotion2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');


  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }


  function shoot()
  {
    img = document.getElementById(data_uri);
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("emotion1").innerHTML = results[0].label;
    document.getElementById("emotion2").innerHTML = results[1].label;
    emotion1 = results[0].label;
    emotion2 = results[1].label;
  }
}

