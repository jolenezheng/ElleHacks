function countryResize() {
    var countryName, footprint;
    countryName = $("#country").val();
    footprint = $(".average-footprint");
    console.log(countryName);
    if (countryName === "Canada") {
        // 16.1
        footprint.style.width = "100%";
        footprint.style.height = "100%";
    } else if (countryName === "China") {
        // 8.0
        footprint.style.width = "49%";
        footprint.style.height = "49%";
    } else if (countryName === "India") {
        // 1.9
        footprint.style.width = "12%";
        footprint.style.height = "12%";
    } else if (countryName === "Norway") {
        // 9.4
        footprint.style.width = "58%";
        footprint.style.height = "58%";
    } else if (countryName === "Russia") {
        // 12.1
        footprint.style.width = "78%";
        footprint.style.height = "78%";
    } else if (countryName === "United Kingdom") {
        // 5.6 
        footprint.style.width = "35%";
        footprint.style.height = "35%";
    } else if (countryName === "United States of America") {
        // 17.0
        footprint.style.width = "105%";
        footprint.style.height = "105%";
    } else {
        footprint.style.width = "100%";
        footprint.style.height = "100%";
    }
}

function myFootprint() {
    var avgC02, avgPKG, avgWASTE;
    
}
const itemNode = $('#alternative-template');
var alternatives = [1, 2, 3];
var numAlt = alternatives.length;
var mylist = $("#options-container");

console.log(mylist)
for ( i = 0; i < numAlt; i++){
  let li = mylist.find('li')[i];
  console.log(li);
  mylist.find(li).clone().appendTo(mylist);

  // $('#options-container > li').addClass('d-none');
}

// Populate file upload text
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
