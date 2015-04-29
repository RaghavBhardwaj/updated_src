define("tinymce/ui/DomUtils",["tinymce/util/Tools","tinymce/dom/DOMUtils"],function(a,b){return{id:function(){return b.DOM.uniqueId()},createFragment:function(c){return b.DOM.createFragment(c)},getWindowSize:function(){return b.DOM.getViewPort()},getSize:function(f){var d,c;if(f.getBoundingClientRect){var e=f.getBoundingClientRect();d=Math.max(e.width||(e.right-e.left),f.offsetWidth);c=Math.max(e.height||(e.bottom-e.bottom),f.offsetHeight)}else{d=f.offsetWidth;c=f.offsetHeight}return{width:d,height:c}},getPos:function(d,c){return b.DOM.getPos(d,c)},getViewPort:function(c){return b.DOM.getViewPort(c)},get:function(c){return document.getElementById(c)},addClass:function(d,c){return b.DOM.addClass(d,c)},removeClass:function(d,c){return b.DOM.removeClass(d,c)},hasClass:function(d,c){return b.DOM.hasClass(d,c)},toggleClass:function(e,c,d){return b.DOM.toggleClass(e,c,d)},css:function(e,c,d){return b.DOM.setStyle(e,c,d)},on:function(e,c,f,d){return b.DOM.bind(e,c,f,d)},off:function(d,c,e){return b.DOM.unbind(d,c,e)},fire:function(e,d,c){return b.DOM.fire(e,d,c)},innerHtml:function(d,c){b.DOM.setHTML(d,c)}}});