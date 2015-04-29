define("tinymce/dom/Range",["tinymce/util/Tools"],function(a){function b(c){var g=this,e=c.doc,S=0,E=1,k=2,D=true,Q=false,U="startOffset",i="startContainer",O="endContainer",z="endOffset",l=a.extend,o=c.nodeIndex;function w(){return e.createDocumentFragment()}function r(W,V){B(D,W,V)}function t(W,V){B(Q,W,V)}function h(V){r(V.parentNode,o(V))}function I(V){r(V.parentNode,o(V)+1)}function J(V){t(V.parentNode,o(V))}function u(V){t(V.parentNode,o(V)+1)}function A(V){if(V){g[O]=g[i];g[z]=g[U]}else{g[i]=g[O];g[U]=g[z]}g.collapsed=D}function x(V){h(V);u(V)}function F(V){r(V,0);t(V,V.nodeType===1?V.childNodes.length:V.nodeValue.length)}function v(Z,V){var ac=g[i],X=g[U],ab=g[O],W=g[z],aa=V.startContainer,ae=V.startOffset,Y=V.endContainer,ad=V.endOffset;if(Z===0){return G(ac,X,aa,ae)}if(Z===1){return G(ab,W,aa,ae)}if(Z===2){return G(ab,W,Y,ad)}if(Z===3){return G(ac,X,Y,ad)}}function q(){m(k)}function H(){return m(S)}function d(){return m(E)}function C(Z){var W=this[i],V=this[U],Y,X;if((W.nodeType===3||W.nodeType===4)&&W.nodeValue){if(!V){W.parentNode.insertBefore(Z,W)}else{if(V>=W.nodeValue.length){c.insertAfter(Z,W)}else{Y=W.splitText(V);W.parentNode.insertBefore(Z,Y)}}}else{if(W.childNodes.length>0){X=W.childNodes[V]}if(X){W.insertBefore(Z,X)}else{if(W.nodeType==3){c.insertAfter(Z,W)}else{W.appendChild(Z)}}}}function M(W){var V=g.extractContents();g.insertNode(W);W.appendChild(V);g.selectNode(W)}function K(){return l(new b(c),{startContainer:g[i],startOffset:g[U],endContainer:g[O],endOffset:g[z],collapsed:g.collapsed,commonAncestorContainer:g.commonAncestorContainer})}function N(V,W){var X;if(V.nodeType==3){return V}if(W<0){return V}X=V.firstChild;while(X&&W>0){--W;X=X.nextSibling}if(X){return X}return V}function n(){return(g[i]==g[O]&&g[U]==g[z])}function G(Y,aa,W,Z){var ab,X,V,ac,ae,ad;if(Y==W){if(aa==Z){return 0}if(aa<Z){return -1}return 1}ab=W;while(ab&&ab.parentNode!=Y){ab=ab.parentNode}if(ab){X=0;V=Y.firstChild;while(V!=ab&&X<aa){X++;V=V.nextSibling}if(aa<=X){return -1}return 1}ab=Y;while(ab&&ab.parentNode!=W){ab=ab.parentNode}if(ab){X=0;V=W.firstChild;while(V!=ab&&X<Z){X++;V=V.nextSibling}if(X<Z){return -1}return 1}ac=c.findCommonAncestor(Y,W);ae=Y;while(ae&&ae.parentNode!=ac){ae=ae.parentNode}if(!ae){ae=ac}ad=W;while(ad&&ad.parentNode!=ac){ad=ad.parentNode}if(!ad){ad=ac}if(ae==ad){return 0}V=ac.firstChild;while(V){if(V==ae){return -1}if(V==ad){return 1}V=V.nextSibling}}function B(W,Z,Y){var V,X;if(W){g[i]=Z;g[U]=Y}else{g[O]=Z;g[z]=Y}V=g[O];while(V.parentNode){V=V.parentNode}X=g[i];while(X.parentNode){X=X.parentNode}if(X==V){if(G(g[i],g[U],g[O],g[z])>0){g.collapse(W)}}else{g.collapse(W)}g.collapsed=n();g.commonAncestorContainer=c.findCommonAncestor(g[i],g[O])}function m(ac){var ab,Y=0,ae=0,W,aa,X,Z,V,ad;if(g[i]==g[O]){return f(ac)}for(ab=g[O],W=ab.parentNode;W;ab=W,W=W.parentNode){if(W==g[i]){return s(ab,ac)}++Y}for(ab=g[i],W=ab.parentNode;W;ab=W,W=W.parentNode){if(W==g[O]){return T(ab,ac)}++ae}aa=ae-Y;X=g[i];while(aa>0){X=X.parentNode;aa--}Z=g[O];while(aa<0){Z=Z.parentNode;aa++}for(V=X.parentNode,ad=Z.parentNode;V!=ad;V=V.parentNode,ad=ad.parentNode){X=V;Z=ad}return p(X,Z,ac)}function f(ab){var ad,ae,V,X,Y,ac,Z,W,aa;if(ab!=k){ad=w()}if(g[U]==g[z]){return ad}if(g[i].nodeType==3){ae=g[i].nodeValue;V=ae.substring(g[U],g[z]);if(ab!=E){X=g[i];W=g[U];aa=g[z]-g[U];if(W===0&&aa>=X.nodeValue.length-1){X.parentNode.removeChild(X)}else{X.deleteData(W,aa)}g.collapse(D)}if(ab==k){return}if(V.length>0){ad.appendChild(e.createTextNode(V))}return ad}X=N(g[i],g[U]);Y=g[z]-g[U];while(X&&Y>0){ac=X.nextSibling;Z=y(X,ab);if(ad){ad.appendChild(Z)}--Y;X=ac}if(ab!=E){g.collapse(D)}return ad}function s(ac,Z){var ab,aa,W,V,Y,X;if(Z!=k){ab=w()}aa=j(ac,Z);if(ab){ab.appendChild(aa)}W=o(ac);V=W-g[U];if(V<=0){if(Z!=E){g.setEndBefore(ac);g.collapse(Q)}return ab}aa=ac.previousSibling;while(V>0){Y=aa.previousSibling;X=y(aa,Z);if(ab){ab.insertBefore(X,ab.firstChild)}--V;aa=Y}if(Z!=E){g.setEndBefore(ac);g.collapse(Q)}return ab}function T(aa,Z){var ac,W,ab,V,Y,X;if(Z!=k){ac=w()}ab=P(aa,Z);if(ac){ac.appendChild(ab)}W=o(aa);++W;V=g[z]-W;ab=aa.nextSibling;while(ab&&V>0){Y=ab.nextSibling;X=y(ab,Z);if(ac){ac.appendChild(X)}--V;ab=Y}if(Z!=E){g.setStartAfter(aa);g.collapse(D)}return ac}function p(Z,V,ac){var W,ae,aa,ab,X,ad,Y;if(ac!=k){ae=w()}W=P(Z,ac);if(ae){ae.appendChild(W)}aa=o(Z);ab=o(V);++aa;X=ab-aa;ad=Z.nextSibling;while(X>0){Y=ad.nextSibling;W=y(ad,ac);if(ae){ae.appendChild(W)}ad=Y;--X}W=j(V,ac);if(ae){ae.appendChild(W)}if(ac!=E){g.setStartAfter(Z);g.collapse(D)}return ae}function j(ab,ac){var X=N(g[O],g[z]-1),ad,aa;var Z,V,W,Y=X!=g[O];if(X==ab){return L(X,Y,Q,ac)}ad=X.parentNode;aa=L(ad,Q,Q,ac);while(ad){while(X){Z=X.previousSibling;V=L(X,Y,Q,ac);if(ac!=k){aa.insertBefore(V,aa.firstChild)}Y=D;X=Z}if(ad==ab){return aa}X=ad.previousSibling;ad=ad.parentNode;W=L(ad,Q,Q,ac);if(ac!=k){W.appendChild(aa)}aa=W}}function P(ab,ac){var Y=N(g[i],g[U]),Z=Y!=g[i];var ad,aa,X,V,W;if(Y==ab){return L(Y,Z,D,ac)}ad=Y.parentNode;aa=L(ad,Q,D,ac);while(ad){while(Y){X=Y.nextSibling;V=L(Y,Z,D,ac);if(ac!=k){aa.appendChild(V)}Z=D;Y=X}if(ad==ab){return aa}Y=ad.nextSibling;ad=ad.parentNode;W=L(ad,Q,D,ac);if(ac!=k){W.appendChild(aa)}aa=W}}function L(V,Z,ac,ad){var Y,X,aa,W,ab;if(Z){return y(V,ad)}if(V.nodeType==3){Y=V.nodeValue;if(ac){W=g[U];X=Y.substring(W);aa=Y.substring(0,W)}else{W=g[z];X=Y.substring(0,W);aa=Y.substring(W)}if(ad!=E){V.nodeValue=aa}if(ad==k){return}ab=c.clone(V,Q);ab.nodeValue=X;return ab}if(ad==k){return}return c.clone(V,Q)}function y(W,V){if(V!=k){return V==E?c.clone(W,D):W}W.parentNode.removeChild(W)}function R(){return c.create("body",null,d()).outerText}l(g,{startContainer:e,startOffset:0,endContainer:e,endOffset:0,collapsed:D,commonAncestorContainer:e,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:r,setEnd:t,setStartBefore:h,setStartAfter:I,setEndBefore:J,setEndAfter:u,collapse:A,selectNode:x,selectNodeContents:F,compareBoundaryPoints:v,deleteContents:q,extractContents:H,cloneContents:d,insertNode:C,surroundContents:M,cloneRange:K,toStringIE:R});return g}b.prototype.toString=function(){return this.toStringIE()};return b});