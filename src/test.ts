namespace Test {
    const w = 600, h = 600;
    const svg = d3.select('#root').append('svg').attr('width', w).attr('height', h);
    export const g = svg.append('g');
    export const brush = d3.brush()
        .on('start', function() {
            brush.move(g, [[0, 0], [80, 80]])
        })
        .on('brush', function(){
            console.log('brush');
        })
        .on('end', function(){
            console.log('end');
        });
    g.call(brush);
    // setTimeout(function(){
    //     g.on('.brush', null);
    // }, 1000)
}