    

//load the csv data in the data folder
d3.csv('data/data.csv').then(createGraphic);


function createGraphic(dataSet) {
    
    console.log(dataSet)

    var radiusScale = d3.scaleSqrt().domain([0, 400]).range([0,20])
    
    var foodArray = d3.map(dataSet, d => d.food)
    // console.log(foodArray)

    var spaceCircles = d3.scaleBand().domain(foodArray).range([100,1000])
    // console.log(spaceCircles('Salad'))

    d3.select("svg").selectAll("circle")
      .data(dataSet)
      .join("circle")
      .attr('cy', 100)
      .attr('cx', function(d){return spaceCircles(d.food)})
      .attr('r', function(d){return radiusScale(d.calories)}) //modify this line to use the scale 
  
   }


  