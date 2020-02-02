const itemNode = $('#alternative-template');
let alternatives = [1, 2, 3];
let numAlt = alternatives.length;

for (let i = 0; i < numAlt; ++i) {
  console.log('w')
  $("#options-container").append(itemNode);
  $("#options-container")[i].removeClass('p-none');
}