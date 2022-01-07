noseX = 0;
noseY = 0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/Gmj29Bqg/f.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300); 
    image(clown_nose,noseX,noseY,70,70);
}

function take_snapshot() {
    save('pic.png');
}

function modelLoaded() {
    console.log('poseNet in initialized');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y-30;
        console.log("nose x=" + noseX);
        console.log("nose y=" + noseY);
    }
}
