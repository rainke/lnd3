namespace Test {
    const w = 600, h = 600;
    const svg = d3.select('#root').append('svg').attr('width', w).attr('height', h);
    const x = d3.scaleLinear()
    .domain([0, 10])
    .range([0, w]);
    console.log(x.invert(3))
    export const g = svg.append('g');
    export const brush = d3.brush()
        .on('start', function() {
            // g.transition().call(brush.move,  [[0, 0], [80, 80]])
            // brush.move(g.transition(), [[0, 0], [80, 80]])
        })
        .on('brush', function(){
            console.log('brush');
            console.log(d3.event.selection)
        })
        .on('end', function(){
            console.log('end');
        });
    g.call(brush);
    // setTimeout(function(){
    //     g.on('.brush', null);
    // }, 1000)
}