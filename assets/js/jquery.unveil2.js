// unveil2.js - 2.0.5 - https://nabble.github.io/unveil2/
!function(a){"use strict";var b="unveil",c="src",d="placeholder",e=a(),f=!1;a.fn.unveil=function(g){function h(a){a.addClass(b+"-loading")}function i(a){a.removeClass(b+"-"+d+" "+b+"-loading"),a.addClass(b+"-loaded")}function j(){var b=a(this);if(!b.is(":hidden")){var c=n.scrollTop(),d=c+o,e=q.container[0]!==n[0]?c-q.container.offset().top:0,f=b.offset().top+e,g=f+b.height();return g>=c-q.offset&&f<=d+q.offset}}function k(){o=n.height(),m()}function l(a){var b=!1;return function(){b||(b=!0,setTimeout(function(){a(),b=!1},q.throttle))}}function m(){q.debug;var a=e.filter(j);a.trigger(b+"."+b),e=e.not(a),a.length&&q.debug}g=g||{};var n=a(window),o=n.height(),p={placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",offset:0,breakpoints:[],throttle:250,debug:!1,container:n,retina:window.devicePixelRatio>1,loading:null,loaded:null},q=a.extend(!0,{},p,g);return q.debug,q.breakpoints.sort(function(a,b){return b.minWidth-a.minWidth}),this.one(b+"."+b,function(){var b,d,e,f,g=a(this),j=n.width(),k=c;for(b=0;b<q.breakpoints.length;b++){var l=q.breakpoints[b].attribute.replace(/^data-/,"");if(j>=q.breakpoints[b].minWidth&&g.data(l)){k=l;break}}e=f=g.data(k),e&&-1!==e.indexOf("|")&&(f=e.split("|")[1],e=e.split("|")[0]),e&&(d=q.retina&&f?f:e,q.debug,h(g),"function"==typeof q.loading&&q.loading.call(this),g.trigger("loading.unveil"),g.one("load",function(){i(g),"function"==typeof q.loaded&&q.loaded.call(this),g.trigger("loaded.unveil"),m()}),"IMG"===this.nodeName?g.prop(c,d):a("<img/>").attr(c,d).one("load",function(){a(this).remove(),g.css("backgroundImage","url("+d+")").trigger("load")}),this.complete&&i(g))}),this.each(function(){var f=a(this),g=f.data(c+"-"+d)||q.placeholder;e=a(e).add(this),f.data(b)||(f.data(b,!0),f.data(c)||f.data(c,f.prop(c)),f.one("load",function(){var c=a(this);c.hasClass(b+"-loaded")||(c.addClass(b+"-"+d),m())}).prop(c,"").prop(c,g))}),q.debug,f||(q.container.on({"resize.unveil":l(k),"scroll.unveil":l(m),"lookup.unveil":m}),f=!0),setTimeout(m,0),this}}(window.jQuery);

$('img').unveil({
      offset: 100,
      throttle: 200,
      placeholder: 'http://placehold.it/500x300',
      breakpoints: [
          {
              minWidth: 768,
              attribute: 'data-src-md'
          },
          {
              minWidth: 1200,
              attribute: 'data-src-lg'
          }
      ],
      debug: true
  }).on('loading.unveil', function () {
      console.log('Unveiling', this);
  }).on('loaded.unveil', function () {
      console.log('Unveiled', this);
  });
