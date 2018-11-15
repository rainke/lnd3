const width = 300;
const height = 300;

const svg = d3.select('#root')
.append('svg')
.attr('width', width).attr('height', height);

const padding = {left:30, right:30, top:20, bottom:20};
const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
var xScale = d3.scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, width - padding.left - padding.right])

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
  .attr('transform', `translate(${padding.left}, ${padding.top})`)
  .attr('x', (d, i) => xScale(i) + 2)
  .attr('y', d => yScale(d))
  .attr('width', 28)
  .attr('height', d => height - padding.top - padding.bottom - yScale(d))
  .attr('fill', 'yellow')
