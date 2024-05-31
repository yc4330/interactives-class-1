    

var dataSet = [
    {
      food: "Pizza",
      calories: 285,
      price: 10.99
    },
    {
      food: "Burger",
      calories: 350,
      price: 8.99
    },
    {
      food: "Salad",
      calories: 150,
      price: 6.99
    },
    {
      food: "Pasta",
      calories: 400,
      price: 12.99
    },
    {
      food: "Sandwich",
      calories: 250,
      price: 7.99
    },
    {
      food: "Sushi",
      calories: 320,
      price: 14.99
    }
  ];
  
  // console.log(dataSet)

    var radiusScale = d3.scaleSqrt().domain([0, 400]).range([0,20])
    console.log("for Sushi calories, the radius is",radiusScale(320))

    var foodArray = d3.map(dataSet, d => d.food)
    console.log(foodArray)

    var spaceCircles = d3.scaleBand().domain(foodArray).range([100,1000])
    console.log(spaceCircles('Sushi'))

    d3.select("svg").selectAll("circle")
      .data(dataSet)
      .join("circle")
      .attr('cy', 100)
      .attr('cx', function(d){return spaceCircles(d.food)})
      .attr('r', function(d){return radiusScale(d.calories)}) //modify this line to use the scale 
  