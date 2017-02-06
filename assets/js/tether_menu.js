$(document).ready(function() {

  new Tether({
      element: '.pin-element',
      target: '.pin-target',
      attachment: 'top left',
      targetAttachment: 'top right',
      offset: '0 20px',
      enabled: true,
      constraints: [
        {
          to: 'window',
          attachment: 'together',
          pin: true
        }
      ]
  });

});
