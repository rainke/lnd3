var selection;
(function (selection) {
    d3.selectAll('p').on('touchmove', function () {
        console.log(d3.mouse(document.body));
        console.log(d3.touch(document.body, 1));
    });
})(selection || (selection = {}));
