var Pie;
(function (Pie) {
    var w = 400;
    var h = 400;
    var dataset = [30, 10, 43, 55, 13];
    Pie.svg = d3.select('#root').append('svg').attr('width', w).attr('height', h);
    //@ts-ignore d3.d.ts错误
    var colorScale = d3.scaleOrdinal().domain(d3.range(dataset.length)).range(d3.schemeCategory10);
    var pie = d3.pie();
    Pie.arcGenerator = d3.arc().innerRadius(10).outerRadius(100);
    var pieData = pie(dataset);
    console.log(pieData);
    Pie.gs = Pie.svg.selectAll('g').data(pieData).enter().append('g').attr('transform', "translate(200,200)");
    Pie.gs.append('path').attr('d', function (d) {
        console.log(d);
        return Pie.arcGenerator(d);
    }).attr('fill', function (d, i) { return colorScale(i); });
})(Pie || (Pie = {}));
