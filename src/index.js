var width = 300;
var height = 300;
var svg = d3.select('#root')
    .append('svg')
    .attr('width', width).attr('height', height);
var padding = { left: 30, right: 30, top: 20, bottom: 20 };
var dataset = [10, 20, 30, 40, 33, 24, 12, 5];
var xScale = d3.scaleBand()
    // @ts-ignore 
    .domain(d3.range(dataset.length))
    .rangeRound([0, width - padding.left - padding.right]);
// xScale.rangeRound([0, width - padding.left - padding.right])
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([height - padding.top - padding.bottom, 0]);
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);
svg.append('g')
    .attr('transform', "translate(" + padding.left + ", " + (height - padding.bottom) + ")")
    .call(xAxis);
svg.append('g')
    .attr('transform', "translate(" + padding.left + ", " + padding.top + ")")
    .call(yAxis);
var gs = svg.selectAll('.myRect')
    .data(dataset).enter()
    .append('g')
    .attr('transform', "translate(" + padding.left + ", " + padding.top + ")");
gs.append('rect')
    .on('mouseover', function () {
    var rect = d3.select(this)
        .transition().delay(10).duration(1000).attr('fill', 'green');
})
    .on('mouseout', function () {
    d3.select(this)
        .transition().delay(10).duration(1000).attr('fill', 'blue');
})
    .attr('class', 'myRect')
    .attr('x', function (d, i) { return xScale(i) + 2; })
    .attr('y', function (d) { return height - padding.top - padding.bottom; })
    .attr('width', 28)
    .attr('height', 0)
    .transition()
    .duration(1000)
    .attr('y', function (d) { return yScale(d); })
    .attr('height', function (d) { return height - padding.top - padding.bottom - yScale(d); })
    .attr('fill', 'blue');
gs.append('text')
    .attr('x', function (d, i) { return xScale(i) + 2; })
    .attr('y', height - padding.top - padding.bottom)
    .transition()
    .duration(1000)
    .attr('y', function (d) { return yScale(d); })
    .attr('dx', 0)
    .attr('dy', 20)
    .text(function (d) { return d; });
