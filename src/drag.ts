namespace Drag {
  const w = 800;
  const h = 800;
  const svg = d3.select('#root').append('svg')
    .attr('width', w).attr('height', h);
  export const mg = svg.append('g');
  const cs = mg.selectAll('circle').data([1,2,3,4]).enter().append('circle')
    .style('cursor', 'move')
    .attr('cx', d => d * 100)
    .attr('cy', d => d * 100)
    .attr('r', 15)
    .attr('fill', 'blue');
  const drag = d3.drag()
    .on('start', function(d) {
    })
    .on('drag', function(d){
      let cx = d3.select(this).attr('cx');
      let cy = d3.select(this).attr('cy');
      d3.select(this).attr('cx', <any>cx * 1 + d3.event.dx)
      d3.select(this).attr('cy', <any>cy * 1 + d3.event.dy)
    })
    .on('end', function(d){
      console.log('end');
      d3.select(this).on('.drag', null);
    })
  cs.call(<any>drag)
}