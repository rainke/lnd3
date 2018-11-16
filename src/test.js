var Test;
(function (Test) {
    var w = 600, h = 600;
    var svg = d3.select('#root').append('svg').attr('width', w).attr('height', h);
    Test.g = svg.append('g');
    Test.brush = d3.brush()
        .on('start', function () {
        Test.brush.move(Test.g, [[0, 0], [80, 80]]);
    })
        .on('brush', function () {
        console.log('brush');
    })
        .on('end', function () {
        console.log('end');
    });
    Test.g.call(Test.brush);
    // setTimeout(function(){
    //     g.on('.brush', null);
    // }, 1000)
})(Test || (Test = {}));
