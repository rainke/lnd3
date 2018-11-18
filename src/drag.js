var Drag;
(function (Drag) {
    var w = 800;
    var h = 800;
    var svg = d3.select('#root').append('svg')
        .attr('width', w).attr('height', h);
    Drag.mg = svg.append('g');
    var cs = Drag.mg.selectAll('circle').data([1, 2, 3, 4]).enter().append('circle')
        .style('cursor', 'move')
        .attr('cx', function (d) { return d * 100; })
        .attr('cy', function (d) { return d * 100; })
        .attr('r', 15)
        .attr('fill', 'blue');
    var drag = d3.drag()
        .on('start', function (d) {
    })
        .on('drag', function (d) {
        var cx = d3.select(this).attr('cx');
        var cy = d3.select(this).attr('cy');
        d3.select(this).attr('cx', cx * 1 + d3.event.dx);
        d3.select(this).attr('cy', cy * 1 + d3.event.dy);
    })
        .on('end', function (d) {
        console.log('end');
        d3.select(this).on('.drag', null);
    });
    cs.call(drag);
})(Drag || (Drag = {}));
