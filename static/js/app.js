var inst = new mdui.Drawer('#drawer');

// method

document.getElementById('toggle').addEventListener('click', function () {
  inst.toggle();
});

// event
var drawer = document.getElementById('drawer');
drawer.addEventListener('open.mdui.drawer', function () {
  console.log('open');
});
drawer.addEventListener('opened.mdui.drawer', function () {
  console.log('opened');
});
drawer.addEventListener('close.mdui.drawer', function () {
  console.log('close');
});
drawer.addEventListener('closed.mdui.drawer', function () {
  console.log('closed');
});
