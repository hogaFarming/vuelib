var total = 24;
var i = 1;
var result = '';
var css = '';
while (i <= 24) {
  let width = i / 24 * 100 + '%';
  css = `.x-col-${i} { width: ${width}; }`;
  result += css + '\n';
  i++;
}
i = 1;
while (i <= 24) {
  let mgleft = i / 24 * 100 + '%';
  css = `.x-col-offset-${i} { margin-left: ${mgleft}; }`;
  result += css + '\n';
  i++;
}
i = 1;
while (i <= 24) {
  let mgleft = i / 24 * 100 + '%';
  css = `.x-col-push-${i} { left: ${mgleft}; }`;
  result += css + '\n';
  i++;
}
i = 1;
while (i <= 24) {
  let mgleft = i / 24 * 100 + '%';
  css = `.x-col-pull-${i} { right: ${mgleft}; }`;
  result += css + '\n';
  i++;
}
console.log(result);

