$(document).ready(function() {

  tether = new Tether({
      element: '.pin-element',
      target: '.pin-target',
      attachment: 'top left',
      targetAttachment: 'top right',
      constraints: [
        {
          to: 'window',
          pin: true
        }
      ]
  });
  tether.position();

});
