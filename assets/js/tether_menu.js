$(document).ready(function() {
  new Tether({
    element: '.element',
    target: '.target',
    attachment: 'top left',
    targetAttachment: 'top right',
    constraints: [
      {
        to: 'window',
        attachment: 'together',
        pin: true
      }
    ],
    optimizations: {
      moveElement: false
    }
  });
});
