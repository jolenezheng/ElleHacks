const itemNode = $('#alternative-template');
var myFootprint = 0;
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