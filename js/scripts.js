$(document).ready(function() {
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("#eagle-text").show();
    $("img#eagle1").show();

  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $("#duck-text").show();
    $("img#duck1").show();
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
    $("#fish-text").show();
    $("img#fish1").show();
  });
});
