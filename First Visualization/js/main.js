/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
d3.json("data/buildings.json").then(data => {
    data.forEach(d => {
        d.height = Number(d.height);
    })

    console.log(data)
    const svg = d3.select("#chart-area").append("svg")
                        .attr("width", 500)
                        .attr("height", 500)

    const chart = svg.selectAll("rect").data(data)
    
    chart.enter().append("rect")
        .attr("x", (d, i) => (i * 50) + 50 )
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", (d) => d.height)
        .attr("fill", "red")
    console.log(chart)
})