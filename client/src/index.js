var myFootprint = 0.50;
var mylist = $("#options-container");
var myFootprint = 0;
var c02 = 0;
var pkg = 0;
var waste = 0;

// Make get request
$('#upload-btn').click(function () {
  $.get('http://localhost:8080/receipt', function (data) {})
    .done(function (response) {
      console.log(response);
    })
  mylist.removeClass('d-none');
});

function countryResize() {
  var countryName, footprint;
  countryName = $("#country").val();
  footprint = $(".average-footprint");
  console.log(countryName);
  console.log(footprint);
  footprint.removeClass();
  if (countryName === "Canada") {
    // 16.1
    footprint.addClass("canada-size");
  } else if (countryName === "China") {
    // 8.0
    footprint.addClass("china-size");
  } else if (countryName === "India") {
    // 1.9
    footprint.addClass("india-size");
  } else if (countryName === "Norway") {
    // 9.4
    footprint.addClass("norway-size");
  } else if (countryName === "Russia") {
    // 12.1
    footprint.addClass("russia-size");
  } else if (countryName === "United Kingdom") {
    // 5.6 
    footprint.addClass("uk-size");
  } else if (countryName === "United States of America") {
    // 17.0
    footprint.addClass("usa-size");
  }
  footprint.addClass("average-footprint");
}

$(".slider .round").click(function myFootprint() {
  console.log(myFootprint);
  $(".my-footprint").css('transform', 'scale(' + myFootprint + ')');
});

$("div").click(function () {
  var color = $(this).css("background-color");
  $("#result").html("That div is <span style='color:" +
    color + ";'>" + color + "</span>.");
});

$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$('.btn-outline-dark').click(function () {
  let avg = parseInt($(this).parent().siblings('i').find('span').html().slice(0, -1));
  co2 = avg + 18;
  pkg = avg - 7;
  waste = avg - 11;
  myFootprint = 0.5 - (((co2 + pkg + waste) / 3).toFixed(0) / 100);
  console.log(myFootprint);
  $('#co2-val-after').html(co2.toFixed(0) + "%");
  $('#co2-val-after').removeClass('d-none');
  $('#co2-val-after').siblings('i').removeClass('d-none');
  $('#pkg-val-after').html(pkg.toFixed(0) + "%");
  $('#pkg-val-after').removeClass('d-none');
  $('#pkg-val-after').siblings('i').removeClass('d-none');
  $('#waste-val-after').html(waste.toFixed(0) + "%");
  $('#waste-val-after').removeClass('d-none');
  $('#waste-val-after').siblings('i').removeClass('d-none');
})