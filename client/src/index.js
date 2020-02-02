function countryResize() {
    var countryName, footprint;
    countryName = $("#country").val();
    footprint = $(".average-footprint");
    console.log(countryName);
    console.log(footprint);
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
}

$(".switch").on("input", function myFootprint() {
    $(".my-footprint").css("transform, scale('myFootprint');")
});

$( "div" ).click(function() {
    var color = $( this ).css( "background-color" );
    $( "#result" ).html( "That div is <span style='color:" +
      color + ";'>" + color + "</span>." );
  });
const itemNode = $('#alternative-template');
var myFootprint = 0.50;
var alternatives = [1, 2, 3];
var numAlt = alternatives.length;
var mylist = $("#options-container");

console.log(mylist)
for (i = 0; i < numAlt; i++) {
  let li = mylist.find('li')[i];
  console.log(li);
  mylist.find(li).clone().appendTo(mylist);

  // $('#options-container > li').addClass('d-none');
}

// Populate file upload text
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$('#test-btn').click(function () {
  $.get('http://localhost:8080/receipt', function (data) {})
    .done(function (response) {
      console.log(response);
    })
});