// src/InteractiveChart.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';

function InteractiveChart() {
  useEffect(() => {
    const data = [10, 20, 30, 40, 50];
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select("#interactive-chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width - margin.left - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height - margin.top - margin.bottom, 0]);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => i + 1));

    svg.append("g")
      .call(d3.axisLeft(y));

    const bars = svg.selectAll("rect")
      .data(data)
      .enter().append("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", height - margin.top - margin.bottom)
      .attr("width", x.bandwidth())
      .attr("height", 0)
      .attr("fill", "steelblue")
      .transition()
      .duration(1000)
      .attr("y", d => y(d))
      .attr("height", d => y(0) - y(d));

    svg.selectAll("rect")
      .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", "orange");
        d3.select("#tooltip")
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 28}px`)
          .transition()
          .duration(200)
          .style("opacity", 0.9)
          .text(`Value: ${d}`);
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "steelblue");
        d3.select("#tooltip")
          .transition()
          .duration(500)
          .style("opacity", 0);
      });

  }, []);

  return (
    <div>
      <div id="interactive-chart">
        <h3>Интерактивный график с анимациями</h3>
      </div>
      <div id="tooltip" style={{
        position: 'absolute',
        textAlign: 'center',
        width: '60px',
        height: '28px',
        padding: '2px',
        font: '12px sans-serif',
        background: 'lightsteelblue',
        border: '0px',
        borderRadius: '8px',
        pointerEvents: 'none',
        opacity: 0
      }}></div>
    </div>
  );
}

export default InteractiveChart;
