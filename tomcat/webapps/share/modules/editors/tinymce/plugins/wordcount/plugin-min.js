tinymce.PluginManager.add("wordcount",function(b){var a=this,c,e;c=b.getParam("wordcount_countregex",/[\w\u2019\x27\-\u00C0-\u1FFF]+/g);e=b.getParam("wordcount_cleanregex",/[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g);function d(){b.theme.panel.find("#wordcount").text(["Words: {0}",a.getCount()])}b.on("init",function(){var f=b.theme.panel&&b.theme.panel.find("#statusbar")[0];if(f){window.setTimeout(function(){f.insert({type:"label",name:"wordcount",text:["Words: {0}",a.getCount()],classes:"wordcount",disabled:b.settings.readonly},0);b.on("setcontent beforeaddundo",d);b.on("keyup",function(g){if(g.keyCode==32){d()}})},0)}});a.getCount=function(){var g=b.getContent({format:"raw"});var f=0;if(g){g=g.replace(/\.\.\./g," ");g=g.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ");g=g.replace(/(\w+)(&#?[a-z0-9]+;)+(\w+)/i,"$1$3").replace(/&.+?;/g," ");g=g.replace(e,"");var h=g.match(c);if(h){f=h.length}}return f}});