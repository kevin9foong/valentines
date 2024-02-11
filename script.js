let clickCount = 1;
document.getElementById('no').addEventListener('click', function() {
    // const newPadding = clickCount;
    clickCount++;
    document.getElementById('yes').style.padding =
        (0.8 * clickCount).toString() + "em " + (2 * clickCount).toString() + "em";

    document.getElementById('no').style.padding =
        (0.8 * (1/clickCount)).toString() + "em " + (2 * (1/clickCount)).toString() + "em";
});