tinymce.PluginManager.add("layer",function(e){function f(g){do{if(g.className&&g.className.indexOf("mceItemLayer")!=-1){return g}}while((g=g.parentNode))}function a(g){var h=e.dom;tinymce.each(h.select("div,p",g),function(i){if(/^(absolute|relative|fixed)$/i.test(i.style.position)){if(i.hasVisual){h.addClass(i,"mceItemVisualAid")}else{h.removeClass(i,"mceItemVisualAid")}h.addClass(i,"mceItemLayer")}})}function c(m){var k,l=[],j=f(e.selection.getNode()),h=-1,n=-1,g;g=[];tinymce.walk(e.getBody(),function(i){if(i.nodeType==1&&/^(absolute|relative|static)$/i.test(i.style.position)){g.push(i)}},"childNodes");for(k=0;k<g.length;k++){l[k]=g[k].style.zIndex?parseInt(g[k].style.zIndex,10):0;if(h<0&&g[k]==j){h=k}}if(m<0){for(k=0;k<l.length;k++){if(l[k]<l[h]){n=k;break}}if(n>-1){g[h].style.zIndex=l[n];g[n].style.zIndex=l[h]}else{if(l[h]>0){g[h].style.zIndex=l[h]-1}}}else{for(k=0;k<l.length;k++){if(l[k]>l[h]){n=k;break}}if(n>-1){g[h].style.zIndex=l[n];g[n].style.zIndex=l[h]}else{g[h].style.zIndex=l[h]+1}}e.execCommand("mceRepaint")}function b(){var i=e.dom,h=i.getPos(i.getParent(e.selection.getNode(),"*"));var g=e.getBody();e.dom.add(g,"div",{style:{position:"absolute",left:h.x,top:(h.y>20?h.y:20),width:100,height:100},"class":"mceItemVisualAid mceItemLayer"},e.selection.getContent()||e.getLang("layer.content"));if(tinymce.Env.ie){i.setHTML(g,g.innerHTML)}}function d(){var g=f(e.selection.getNode());if(!g){g=e.dom.getParent(e.selection.getNode(),"DIV,P,IMG")}if(g){if(g.style.position.toLowerCase()=="absolute"){e.dom.setStyles(g,{position:"",left:"",top:"",width:"",height:""});e.dom.removeClass(g,"mceItemVisualAid");e.dom.removeClass(g,"mceItemLayer")}else{if(!g.style.left){g.style.left=20+"px"}if(!g.style.top){g.style.top=20+"px"}if(!g.style.width){g.style.width=g.width?(g.width+"px"):"100px"}if(!g.style.height){g.style.height=g.height?(g.height+"px"):"100px"}g.style.position="absolute";e.dom.setAttrib(g,"data-mce-style","");e.addVisual(e.getBody())}e.execCommand("mceRepaint");e.nodeChanged()}}e.addCommand("mceInsertLayer",b);e.addCommand("mceMoveForward",function(){c(1)});e.addCommand("mceMoveBackward",function(){c(-1)});e.addCommand("mceMakeAbsolute",function(){d()});e.addButton("moveforward",{title:"layer.forward_desc",cmd:"mceMoveForward"});e.addButton("movebackward",{title:"layer.backward_desc",cmd:"mceMoveBackward"});e.addButton("absolute",{title:"layer.absolute_desc",cmd:"mceMakeAbsolute"});e.addButton("insertlayer",{title:"layer.insertlayer_desc",cmd:"mceInsertLayer"});e.on("init",function(){if(tinymce.Env.ie){e.getDoc().execCommand("2D-Position",false,true)}});e.on("mouseup",function(h){var g=f(h.target);if(g){e.dom.setAttrib(g,"data-mce-style","")}});e.on("mousedown",function(j){var h=j.target,i=e.getDoc(),g;if(tinymce.Env.gecko){if(f(h)){if(i.designMode!=="on"){i.designMode="on";h=i.body;g=h.parentNode;g.removeChild(h);g.appendChild(h)}}else{if(i.designMode=="on"){i.designMode="off"}}}});e.on("NodeChange",a)});