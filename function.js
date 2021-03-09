noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPose);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function getPose(results){
    if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;

    console.log("X coordinates of nose are - " + results[0].pose.nose.x);
    console.log("Y coordinates of nose are - " + results[0].pose.nose.y);

  
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 80, 35);
}

function take_snap(){
    save('potter.jpg');
}