// file: slideshow.js
// created: 2015 09 12, Scott Haines
// edit: 01 Scott Haines
// date: 2015 09 12
// description: Present a slideshow.
//              The initial edit is based on what I learned from the example at
//              http://www.proglogic.com/learn/javascript/lesson10.php
//              as well as other study.
//<![CDATA[
// Update imgArray and var img* when image files change in count or name(s).
    var imgArray = new Array(
        "./data/Golden-mantled_ground_squirrel.JPG",
        "./data/Yellow-bellied_marmot.JPG",
        "./data/Yellow-bellied_marmot_and_Golden-mantled_ground_squirrel.JPG")
    var imgIndex = 0
    var totalImgs = imgArray.length

// If one image already exists in the HTML file then initialize images
if(document.images) {
    var img0 = new Image()
    var img1 = new Image()
    var img2 = new Image()
    
    img0.src = imgArray[0]
    img1.src = imgArray[1]
    img2.src = imgArray[2]
}

// --------
// Advance to the next image.
function nextImg() {
    // Advance the index.
    imgIndex++
    if(imgIndex >= totalImgs) {
        imgIndex = 0
    }
    // Set the new image.
    setImg()
}

// Go to the previous image.
function prevImg() {
    // Move to previous index.
    if(imgIndex <= 0) {
        imgIndex = totalImgs - 1
    }
    else {
        imgIndex--
    }
    // Set the new image.
    setImg()
}

// Set the image per the current index.
function setImg() {
    document.slideImage.src = imgArray[imgIndex]
    document.slideImage.width = "800"
}
//]]>
