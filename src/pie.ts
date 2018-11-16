namespace Pie {
    const w = 400;
    const h = 400;
    const dataset = [30, 10, 43, 55, 13];

    export const svg = d3.select('#root').append('svg').attr('width', w).attr('height', h);
    //@ts-ignore d3.d.ts错误
    const colorScale = d3.scaleOrdinal().domain(d3.range(dataset.length)).range(d3.schemeCategory10);

    const pie = d3.pie();

    export const arcGenerator = d3.arc().innerRadius(10).outerRadius(100)
    const pieData = pie(dataset);
    console.log(pieData);

    export const gs = svg.selectAll('g').data(pieData).enter().append('g').attr('transform', `translate(200,200)`)
    gs.append('path').attr('d', d => {
        console.log(d);
        return arcGenerator(d)
    }).attr('fill', (d, i) => colorScale(i))
}