const width = 300;
const height = 300;

const svg = d3.select('#root')
.append('svg')
.attr('width', width).attr('height', height);

const padding = {left:30, right:30, top:20, bottom:20};
const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
var xScale = d3.scaleBand()
  // @ts-ignore 
  .domain(d3.range(dataset.length))
  .rangeRound([0, width - padding.left - padding.right])

  // xScale.rangeRound([0, width - padding.left - padding.right])

var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([height - padding.top - padding.bottom, 0]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

svg.append('g')
.attr('transform', `translate(${padding.left}, ${height - padding.bottom})`)
.call(xAxis)
svg.append('g')
.attr('transform', `translate(${padding.left}, ${padding.top})`)
.call(yAxis)

var gs = svg.selectAll('.myRect')
  .data(dataset).enter()
  .append('g')
  .attr('transform', `translate(${padding.left}, ${padding.top})`)

gs.append('rect')
  .on('mouseover', function() {
    var rect = d3.select(this)
    .transition().delay(10).duration(1000).attr('fill', 'green')
  })
  .on('mouseout', function(){
    d3.select(this)
    .transition().delay(10).duration(1000).attr('fill', 'blue')
  })
  .attr('class', 'myRect')
  .attr('x', (d, i) => xScale(i) + 2)
  .attr('y', d => height - padding.top - padding.bottom)
  .attr('width', 28)
  .attr('height', 0)
  .transition()
  .duration(1000)
  .attr('y', d => yScale(d))
  .attr('height', d => height - padding.top - padding.bottom - yScale(d))
  .attr('fill', 'blue')

gs.append('text')
  .attr('x', (d, i) => xScale(i) + 2)
  .attr('y', height - padding.top - padding.bottom)
  .transition()
  .duration(1000)
  .attr('y', d => yScale(d))
  .attr('dx', 0)
  .attr('dy', 20)
  .text(d => d)
