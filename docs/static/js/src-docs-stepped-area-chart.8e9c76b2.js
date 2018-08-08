(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/docs/SteppedAreaChart.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),o=t.n(n),r=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz/dist/index.m.js"),s=t("./src/index.tsx");a.default=function(e){var a=e.components;return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"usage"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#usage"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Usage"),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"simple-example"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#simple-example"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Simple Example"),o.a.createElement(p.d,{__position:0,__code:"<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"SteppedAreaChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Director (Year)', 'Rotten Tomatoes', 'IMDB'],\n    ['Alfred Hitchcock (1935)', 8.4, 7.9],\n    ['Ralph Thomas (1959)', 6.9, 6.5],\n    ['Don Sharp (1978)', 6.5, 6.4],\n    ['James Hawes (2008)', 4.4, 6.2],\n  ]}\n  options={{\n    title: \"The decline of 'The 39 Steps'\",\n    vAxis: { title: 'Accumulated Rating' },\n    isStacked: true,\n  }}\n  rootProps={{ 'data-testid': '1' }}\n/>"},o.a.createElement(s.a,{width:"500px",height:"300px",chartType:"SteppedAreaChart",loader:o.a.createElement("div",null,"Loading Chart"),data:[["Director (Year)","Rotten Tomatoes","IMDB"],["Alfred Hitchcock (1935)",8.4,7.9],["Ralph Thomas (1959)",6.9,6.5],["Don Sharp (1978)",6.5,6.4],["James Hawes (2008)",4.4,6.2]],options:{title:"The decline of 'The 39 Steps'",vAxis:{title:"Accumulated Rating"},isStacked:!0},rootProps:{"data-testid":"1"}})),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"100-percent-stacked-stepped-area"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{"aria-hidden":!0,href:"#100-percent-stacked-stepped-area"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"100 Percent Stacked Stepped Area"),o.a.createElement(p.d,{__position:1,__code:"<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"AreaChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Style', 'Colonial', 'Victorian', 'Modern', 'Contemporary'],\n    ['2013', 5.2, 3.6, 2.8, 2],\n    ['2014', 5.6, 4.0, 2.8, 3],\n    ['2015', 7.2, 2.2, 2.2, 6.0],\n    ['2016', 8.0, 1.7, 0.8, 4.0],\n  ]}\n  options={{\n    isStacked: 'relative',\n    height: 300,\n    legend: { position: 'top', maxLines: 3 },\n    vAxis: {\n      minValue: 0,\n      ticks: [0, 0.3, 0.6, 0.9, 1],\n    },\n  }}\n  rootProps={{ 'data-testid': '2' }}\n/>"},o.a.createElement(s.a,{width:"500px",height:"300px",chartType:"AreaChart",loader:o.a.createElement("div",null,"Loading Chart"),data:[["Style","Colonial","Victorian","Modern","Contemporary"],["2013",5.2,3.6,2.8,2],["2014",5.6,4,2.8,3],["2015",7.2,2.2,2.2,6],["2016",8,1.7,.8,4]],options:{isStacked:"relative",height:300,legend:{position:"top",maxLines:3},vAxis:{minValue:0,ticks:[0,.3,.6,.9,1]}},rootProps:{"data-testid":"2"}})),o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"data-format"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#data-format"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Data Format"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developers.google.com/chart/interactive/docs/gallery/steppedareachart#data-format"}},"Complete Data Format Reference")),o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"reference"}},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h1",props:{"aria-hidden":!0,href:"#reference"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon-link"}},"#")),"Reference"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developers.google.com/chart/interactive/docs/gallery/steppedareachart"}},"Original Google Charts Docs")))}}}]);