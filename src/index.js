var width = 300;
var height = 300;
var svg = d3.select('#root')
    .append('svg')
    .attr('width', width).attr('height', height);
var padding = { left: 30, right: 30, top: 20, bottom: 20 };
var dataset = [10, 20, 30, 40, 33, 24, 12, 5];
var xScale = d3.scaleBand()
    .domain(d3.range(dataset.length))
    .rangeRound([0, width - padding.left - padding.right]);
// xScale.rangeRound([0, width - padding.left - padding.right])
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([height - padding.top - padding.bottom, 0]);
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);
var rects = svg.selectAll('.myRect')
    .data(dataset).enter()
    .append('rect')
    .attr('class', 'myRect')
    .attr('transform', "translate(" + padding.left + ", " + padding.top + ")")
    .attr('x', function (d, i) { return xScale(i) + 2; })
    .attr('y', function (d) { return yScale(d); })
    .attr('width', 28)
    .attr('height', function (d) { return height - padding.top - padding.bottom - yScale(d); })
    .attr('fill', 'yellow');