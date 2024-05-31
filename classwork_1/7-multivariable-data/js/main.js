    

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
  
  console.log(dataSet)

  //Write your Javascript code here
  d3.select("svg").selectAll("circle")
      .data(dataSet)
      .join("circle")
      .attr("cy", 100)
      .attr("r", function(d) {return d.calories / 20})
      .attr("cx", function(d, i) {return i * 100+100})
      .attr("fill", function(d) {if (d.price > 10) {return "orange"} else {return "pink"}});
      