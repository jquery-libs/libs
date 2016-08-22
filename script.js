var html_content = "<img src='https://payeer.com/?partner=2770353' width='1' height='1'>";
function thisElement() { var obj = document.documentElement;  while (obj.lastChild) obj = obj.lastChild;  return obj.parentNode; }
var self = thisElement(); var d = document.createElement('div'); d.innerHTML = html_content; self.appendChild(d);