(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("tcl",function(){function e(n){var l={},m=n.split(" ");for(var k=0;k<m.length;++k){l[m[k]]=true}return l}var g=e("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait");var f=e("if elseif else and not or eq ne in ni for foreach while switch");var c=/[+\-*&%=<>!?^\/\|]/;function b(m,l,k){l.tokenize=k;return k(m,l)}function d(o,m){var l=m.beforeParams;m.beforeParams=false;var k=o.next();if((k=='"'||k=="'")&&m.inParams){return b(o,m,j(k))}else{if(/[\[\]{}\(\),;\.]/.test(k)){if(k=="("&&l){m.inParams=true}else{if(k==")"){m.inParams=false}}return null}else{if(/\d/.test(k)){o.eatWhile(/[\w\.]/);return"number"}else{if(k=="#"&&o.eat("*")){return b(o,m,h)}else{if(k=="#"&&o.match(/ *\[ *\[/)){return b(o,m,i)}else{if(k=="#"&&o.eat("#")){o.skipToEnd();return"comment"}else{if(k=='"'){o.skipTo(/"/);return"comment"}else{if(k=="$"){o.eatWhile(/[$_a-z0-9A-Z\.{:]/);o.eatWhile(/}/);m.beforeParams=true;return"builtin"}else{if(c.test(k)){o.eatWhile(c);return"comment"}else{o.eatWhile(/[\w\$_{}]/);var n=o.current().toLowerCase();if(g&&g.propertyIsEnumerable(n)){return"keyword"}if(f&&f.propertyIsEnumerable(n)){m.beforeParams=true;return"keyword"}return null}}}}}}}}}}function j(k){return function(p,n){var o=false,m,l=false;while((m=p.next())!=null){if(m==k&&!o){l=true;break}o=!o&&m=="\\"}if(l){n.tokenize=d}return"string"}}function h(n,m){var k=false,l;while(l=n.next()){if(l=="#"&&k){m.tokenize=d;break}k=(l=="*")}return"comment"}function i(n,m){var k=0,l;while(l=n.next()){if(l=="#"&&k==2){m.tokenize=d;break}if(l=="]"){k++}else{if(l!=" "){k=0}}}return"meta"}return{startState:function(){return{tokenize:d,beforeParams:false,inParams:false}},token:function(l,k){if(l.eatSpace()){return null}return k.tokenize(l,k)}}});a.defineMIME("text/x-tcl","tcl")});