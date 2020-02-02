const itemNode = $('#alternative-template');
var alternatives = [1, 2, 3, 4, 5, 6];
var numAlt = alternatives.length;
var mylist = $("#options-container");
var myFootprint = 0;
var c02 = 0;
var pkg = 0;
var waste = 0;

$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$('#test-btn').click(function () {
  $.get('http://localhost:8080/receipt', function (data) {})
    .done(function (response) {
      console.log(response);
    })
  mylist.removeClass('d-none');
});

$('.btn-outline-dark').click(function() {
  let avg = parseInt($(this).parent().siblings('i').find('span').html().slice(0, -1));
  co2 = avg + 18;
  pkg = avg - 7;
  waste = avg - 11;
  myFootprint = ((co2 + pkg + waste) / 3).toFixed(0);
  console.log(avg);
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