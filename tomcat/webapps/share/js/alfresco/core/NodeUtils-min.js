define(["dojo/_base/lang","dojo/_base/array"],function(e,f){return{processNodeRef:function c(m){try{var g=m.replace(":/","").split("/"),j=g[0],h=g[1],n=g[2],k=j+"/"+h+"/"+n,i=j+"://"+h+"/"+n;return({nodeRef:i,storeType:j,storeId:h,id:n,uri:k,toString:function(){return i}})}catch(l){l.message="Invalid nodeRef: "+i;throw l}},nodeRefArray:function b(g){if(!e.isArray(g)){this.alfLog("error","expected an array of nodes, but didn't receive one")}var h=f.map(g,function(i){if(i.nodeRef){return i.nodeRef}});return h},nodeRefsString:function a(g){return this.nodeRefArray(g).join(",")},getParentNodeRef:function d(h){var m=null;if(e.isArray(h)){try{m=this.doclistMetadata.parent.nodeRef}catch(n){m=null}if(m===null){for(var l=1,k=h.length,g=true;l<k&&g;l++){g=(h[l].parent.nodeRef==h[l-1].parent.nodeRef)}m=g?h[0].parent.nodeRef:this.doclistMetadata.container}}else{m=e.getObject("record.parent.nodeRef",false,this)}return m}}});