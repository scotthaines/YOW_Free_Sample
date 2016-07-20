function winResized() {
    var contentVar = $('#content');
    var rzImgA = $('#rz_image_A');
    var rzImgB = $('#rz_image_B');
    var rzImgC = $('#rz_image_C');
    var rzImgD = $('#rz_image_D');
    var rzImgE = $('#rz_image_E');
    var rzImgF = $('#rz_image_F');
    var rzImgG = $('#rz_image_G');
    var rzImgH = $('#rz_image_H');
    var rzImgI = $('#rz_image_I');
    // 'A' through 'I' means 9 images can auto resize on the page.
    if (contentVar.size()) {
        var ww = $(window).width();
        var wh = $(window).height() - 40; // Minus 40 leaves vertical space
                                          // when the picture is vertically
                                          // bounded. It also typically
                                          // leaves enough space for caption
                                          // text to also be seen.
        var cw = contentVar.width();
        if (rzImgA.size()) {
            var iw = rzImgA.width();
            var ih = rzImgA.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgA.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgB.size()) {
            var iw = rzImgB.width();
            var ih = rzImgB.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgB.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgC.size()) {
            var iw = rzImgC.width();
            var ih = rzImgC.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgC.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgD.size()) {
            var iw = rzImgD.width();
            var ih = rzImgD.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgD.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgE.size()) {
            var iw = rzImgE.width();
            var ih = rzImgE.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgE.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgF.size()) {
            var iw = rzImgF.width();
            var ih = rzImgF.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgF.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgG.size()) {
            var iw = rzImgG.width();
            var ih = rzImgG.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgG.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgH.size()) {
            var iw = rzImgH.width();
            var ih = rzImgH.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgH.css({
                'width': iwr,
                'height': ihr,
            });
        }
        if (rzImgI.size()) {
            var iw = rzImgI.width();
            var ih = rzImgI.height();
            var f = Math.min(cw/iw,wh/ih);
            var iwr = Math.round(iw*f);
            var ihr = Math.round(ih*f);
            rzImgI.css({
                'width': iwr,
                'height': ihr,
            });
        }
    }
}
$(window).load(function() {
    winResized();
}).bind('resize',function() {
    winResized();
});
