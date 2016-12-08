new Tether({
  element: '.element',
  target: '.target',
  attachment: 'top left',
  targetAttachment: 'top right',
  constraints: [
    {
      to: 'window',
      pin: ['top']
    }
  ]
});
