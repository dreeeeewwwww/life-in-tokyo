var $grid = $('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
});
$grid.imagesLoaded().progress(function(){
  $grid.isotope('layout');
});
