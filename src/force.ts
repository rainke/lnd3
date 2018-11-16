namespace Force {
    const w = 800, h = 800;
    const svg = d3.select('#root').append('svg').attr('width', w).attr('height', h);
    export const nodes = [
        { name:'华为'},
        {name: '小米'},
        {name: '雷军'},
        {name: '手机'}
    ];
    export const edges = [
        {source:0,target:1,relation:"竞争",value:1},
        {source:1,target:2,relation:"CEO",value:1},
        {source:1,target:3,relation:"业务",value:1},
        {source:3,target:0,relation:"业务",value:1},
        
    ];
    const colorScale = d3.scaleOrdinal()
        //@ts-ignore
        .domain(d3.range(nodes.length))
        .range(d3.schemeCategory10);

    export const forceSimulation = d3
        .forceSimulation()
        .force('link', d3.forceLink())
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter());
    
        (forceSimulation.force('link') as d3.ForceLink<any, any>).links(edges).strength(1).distance(d => d.value * 150);
        (forceSimulation.force('center') as d3.ForceCenter<any>).x(w/2).y(h/2);
        forceSimulation.nodes(nodes).on('tick', ticked);

    console.log(edges)

    const links = svg
        .append('g')
        .selectAll('line')
        .data(edges)
        .enter()
        .append('line')
        .attr('stroke', (d, i) => colorScale(i))
        .attr('stroke-width', 1);
    const linksText = svg.append('g')
        .selectAll('text')
        .data(edges)
        .enter()
        .append('text')
        .text(d => d.relation);
    const gs = svg.selectAll('.circleText')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', (d, i) => `translate(${d.x}, ${d.y})`)
        .call(
            d3
                .drag()
                .on('start',started)
                .on('drag', dragged)
                .on('end', ended) as 
                (selection: d3.Selection<any, any, any, any>, ...args: any[]) => void
        );
    gs
        .append('circle')
        .attr('r', 10)
        .attr('fill', (d, i) => colorScale(i));
    gs
        .append('text')
        .attr('x', -10)
        .attr('y', -20)
        .text(d => d.name)

    function ticked(){
        links.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
        linksText.attr('x', d => d.source.x / 2 + d.target.x / 2)
            .attr('y', d => d.source.y / 2 + d.target.y / 2);
        gs.attr('transform', d => `translate(${d.x}, ${d.y})`)
    }

    function started(d){
        if(!d3.event.active) {
            forceSimulation.alphaTarget(0.8).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(d){
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    function ended(d){
        if(!d3.event.active) {
            forceSimulation.alphaTarget(0)
        }
        d.fx = null;
        d.fx = null;
    }
}