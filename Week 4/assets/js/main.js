function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            } else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
        elem[style] = from + unit;
    } else {
        elem.style[style] = from + unit;
    }
}

let arrow = document.querySelectorAll('.bouncing-arrow')[0];

arrow.addEventListener('click', function () {
    var target = document.getElementById("supported-platforms");
    animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 500, true);
});

// https://stackoverflow.com/a/17733311 Kon dit niet zelf maar stackoverflow was mn buddy dus hierbij mn bronvermelding <3