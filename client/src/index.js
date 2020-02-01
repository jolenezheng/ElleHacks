$(function(){
  console.log('ready');
  window.addEventListener("devicelight", function (event) {
    // Read out the lux value
  
    var luminosity = event.value;
  
    alert(luminosity);
  
  });
});
