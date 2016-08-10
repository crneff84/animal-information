$(document).ready(function() {
  var animal = (prompt("Would you like to learn about snakes, insects, or turtles"));

    if (animal === "snakes") {
    $("#snakes").show();
  } else if (animal === "insects") {
    $("#insects").show();
  } else if (animal === "turtles") {
    $("#turtles").show();
  } else {
    $("#spelling").show();
  }
});
