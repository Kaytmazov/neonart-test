var options = {
  valueElement: null,
  width: 200,
  height: 120,
  sliderSize: 20,
  borderColor: '#52505b',
  insetColor: '#52505b',
  backgroundColor: '#2d2b36'
};

var pickers = {};

pickers.fontcolor = new jscolor('fontcolor-button', options);
pickers.fontcolor.onFineChange = "update('fontcolor')";
pickers.fontcolor.fromString('FFFFFF');

pickers.bordercolor = new jscolor('bordercolor-button', options);
pickers.bordercolor.onFineChange = "update('bordercolor')";
pickers.bordercolor.fromString('1a60be');

pickers.bgcolor = new jscolor('bgcolor-button', options);
pickers.bgcolor.onFineChange = "update('bgcolor')";
pickers.bgcolor.fromString('41376d');

function update (id) {
  document.getElementById('demo-preview').style.color =
    pickers.fontcolor.toHEXString();

  document.getElementById('demo-preview').style.borderColor =
    pickers.bordercolor.toHEXString();

  document.getElementById('demo-preview').style.backgroundColor =
    pickers.bgcolor.toHEXString();

  document.getElementById(id + '-icon').style.backgroundColor = pickers[id].toHEXString();

  document.getElementById(id + '-button').innerText = pickers[id].toHEXString();
}

update('fontcolor');
update('bordercolor');
update('bgcolor');