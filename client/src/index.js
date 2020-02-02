var file = 'receipt.png'
module.exports.file = file;

function countryResize() {
    var dropdown, country, txtValue, footprint;
    dropdown = document.getElementById("country").classList.toggle("select");
    country = dropdown.getElementsByTagName("option").toArray();
    footprint = document.getElementById("average-footprint");
    for (i = 0; i < country.length; i++) {
        countryName = country[i].getAttribute("value")[0];
        txtValue = countryName.textContent || countryName.innerText;
        if (txtValue === "Canada") {
            // 16.1
            footprint.style.width = "100%";
            footprint.style.height = "100%";
        } else if (txtValue === "China") {
            // 8.0
            footprint.style.width = "49%";
            footprint.style.height = "49%";
        } else if (txtValue === "India") {
            // 1.9
            footprint.style.width = "12%";
            footprint.style.height = "12%";
        } else if (txtValue === "Norway") {
            // 9.4
            footprint.style.width = "58%";
            footprint.style.height = "58%";
        } else if (txtValue === "Russia") {
            // 12.1
            footprint.style.width = "78%";
            footprint.style.height = "78%";
        } else if (txtValue === "United Kingdom") {
            // 5.6 
            footprint.style.width = "35%";
            footprint.style.height = "35%";
        } else if (txtValue === "United States of America") {
            // 17.0
            footprint.style.width = "105%";
            footprint.style.height = "105%";
        } else {
            footprint.style.width = "100%";
            footprint.style.height = "100%";
        }
    }
}