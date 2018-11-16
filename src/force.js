var Force;
(function (Force) {
    var w = 800, h = 800;
    var svg = d3.select('#root').append('svg').attr('width', w).attr('height', h);
    Force.nodes = [
        { name: '华为' },
        { name: '小米' },
        { name: '雷军' },
        { name: '手机' }
    ];
    Force.edges = [
        { source: 0, target: 1, relation: "竞争", value: 1 },
        { source: 1, target: 2, relation: "CEO", value: 1 },
        { source: 1, target: 3, relation: "业务", value: 1 },
        { source: 3, target: 0, relation: "业务", value: 1 },
    ];
    var colorScale = d3.scaleOrdinal()
        //@ts-ignore
        .domain(d3.range(Force.nodes.length))
        .range(d3.schemeCategory10);
    Force.forceSimulation = d3
        .forceSimulation()
        .force('link', d3.forceLink())
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter());
    Force.forceSimulation.force('link').links(Force.edges).strength(1).distance(function (d) { return d.value * 150; });
    Force.forceSimulation.force('center').x(w / 2).y(h / 2);
    Force.forceSimulation.nodes(Force.nodes).on('tick', ticked);
    console.log(Force.edges);
    var links = svg
        .append('g')
        .selectAll('line')
        .data(Force.edges)
        .enter()
        .append('line')
        .attr('stroke', function (d, i) { return colorScale(i); })
        .attr('stroke-width', 1);
    var linksText = svg.append('g')
        .selectAll('text')
        .data(Force.edges)
        .enter()
        .append('text')
        .text(function (d) { return d.relation; });
    var gs = svg.selectAll('.circleText')
        .data(Force.nodes)
        .enter()
        .append('g')
        .attr('transform', function (d, i) { return "translate(" + d.x + ", " + d.y + ")"; })
        .call(d3
        .drag()
        .on('start', started)
        .on('drag', dragged)
        .on('end', ended));
    gs
        .append('circle')
        .attr('r', 10)
        .attr('fill', function (d, i) { return colorScale(i); });
    gs
        .append('text')
        .attr('x', -10)
        .attr('y', -20)
        .text(function (d) { return d.name; });
    function ticked() {
        links.attr('x1', function (d) { return d.source.x; }).attr('y1', function (d) { return d.source.y; }).attr('x2', function (d) { return d.target.x; }).attr('y2', function (d) { return d.target.y; });
        linksText.attr('x', function (d) { return d.source.x / 2 + d.target.x / 2; })
            .attr('y', function (d) { return d.source.y / 2 + d.target.y / 2; });
        gs.attr('transform', function (d) { return "translate(" + d.x + ", " + d.y + ")"; });
    }
    function started(d) {
        if (!d3.event.active) {
            Force.forceSimulation.alphaTarget(0.8).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    function ended(d) {
        if (!d3.event.active) {
            Force.forceSimulation.alphaTarget(0);
        }
        d.fx = null;
        d.fx = null;
    }
})(Force || (Force = {}));
