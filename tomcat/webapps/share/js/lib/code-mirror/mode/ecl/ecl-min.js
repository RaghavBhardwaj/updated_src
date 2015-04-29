(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("ecl",function(t){function j(z){var x={},y=z.split(" ");for(var w=0;w<y.length;++w){x[y[w]]=true}return x}function c(x,w){if(!w.startOfLine){return false}x.skipToEnd();return"meta"}var l=t.indentUnit;var s=j("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode");var p=j("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait");var n=j("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath");var k=j("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode");var u=j("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when");var m=j("catch class do else finally for if switch try while");var d=j("true false null");var b={"#":c};var h;var g=/[+\-*&%=<>!?|\/]/;var q;function v(C,A){var y=C.next();if(b[y]){var w=b[y](C,A);if(w!==false){return w}}if(y=='"'||y=="'"){A.tokenize=f(y);return A.tokenize(C,A)}if(/[\[\]{}\(\),;\:\.]/.test(y)){q=y;return null}if(/\d/.test(y)){C.eatWhile(/[\w\.]/);return"number"}if(y=="/"){if(C.eat("*")){A.tokenize=i;return i(C,A)}if(C.eat("/")){C.skipToEnd();return"comment"}}if(g.test(y)){C.eatWhile(g);return"operator"}C.eatWhile(/[\w\$_]/);var B=C.current().toLowerCase();if(s.propertyIsEnumerable(B)){if(m.propertyIsEnumerable(B)){q="newstatement"}return"keyword"}else{if(p.propertyIsEnumerable(B)){if(m.propertyIsEnumerable(B)){q="newstatement"}return"variable"}else{if(n.propertyIsEnumerable(B)){if(m.propertyIsEnumerable(B)){q="newstatement"}return"variable-2"}else{if(k.propertyIsEnumerable(B)){if(m.propertyIsEnumerable(B)){q="newstatement"}return"variable-3"}else{if(u.propertyIsEnumerable(B)){if(m.propertyIsEnumerable(B)){q="newstatement"}return"builtin"}else{var x=B.length-1;while(x>=0&&(!isNaN(B[x])||B[x]=="_")){--x}if(x>0){var z=B.substr(0,x+1);if(k.propertyIsEnumerable(z)){if(m.propertyIsEnumerable(z)){q="newstatement"}return"variable-3"}}}}}}}if(d.propertyIsEnumerable(B)){return"atom"}return null}function f(w){return function(B,z){var A=false,y,x=false;while((y=B.next())!=null){if(y==w&&!A){x=true;break}A=!A&&y=="\\"}if(x||!(A||h)){z.tokenize=v}return"string"}}function i(z,y){var w=false,x;while(x=z.next()){if(x=="/"&&w){y.tokenize=v;break}w=(x=="*")}return"comment"}function o(A,x,w,z,y){this.indented=A;this.column=x;this.type=w;this.align=z;this.prev=y}function e(y,w,x){return y.context=new o(y.indented,w,x,null,y.context)}function r(x){var w=x.context.type;if(w==")"||w=="]"||w=="}"){x.indented=x.context.indented}return x.context=x.context.prev}return{startState:function(w){return{tokenize:null,context:new o((w||0)-l,0,"top",false),indented:0,startOfLine:true}},token:function(z,y){var w=y.context;if(z.sol()){if(w.align==null){w.align=false}y.indented=z.indentation();y.startOfLine=true}if(z.eatSpace()){return null}q=null;var x=(y.tokenize||v)(z,y);if(x=="comment"||x=="meta"){return x}if(w.align==null){w.align=true}if((q==";"||q==":")&&w.type=="statement"){r(y)}else{if(q=="{"){e(y,z.column(),"}")}else{if(q=="["){e(y,z.column(),"]")}else{if(q=="("){e(y,z.column(),")")}else{if(q=="}"){while(w.type=="statement"){w=r(y)}if(w.type=="}"){w=r(y)}while(w.type=="statement"){w=r(y)}}else{if(q==w.type){r(y)}else{if(w.type=="}"||w.type=="top"||(w.type=="statement"&&q=="newstatement")){e(y,z.column(),"statement")}}}}}}}y.startOfLine=false;return x},indent:function(A,x){if(A.tokenize!=v&&A.tokenize!=null){return 0}var w=A.context,z=x&&x.charAt(0);if(w.type=="statement"&&z=="}"){w=w.prev}var y=z==w.type;if(w.type=="statement"){return w.indented+(z=="{"?0:l)}else{if(w.align){return w.column+(y?0:1)}else{return w.indented+(y?0:l)}}},electricChars:"{}"}});a.defineMIME("text/x-ecl","ecl")});