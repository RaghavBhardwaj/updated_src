(function(){var h=YAHOO.lang,r=YAHOO.env.ua,o=YAHOO.widget.Button.prototype,c=o.initAttributes,m=YAHOO.widget.ButtonGroup.prototype,s=m.initAttributes,g=m.addButton,v=(r.gecko&&r.gecko>=1.9)||(r.ie&&r.ie>=8),n="aria-",w="usearia",k="checked",e="type",H="menu",A="split",i="haspopup",B="render",t="radio",z="checkbox",E="role",C="checkedChange",x="presentation",f="element",q="radiogroup",u="checkedButtonChange",l="appendTo",d="labelledby",G="describedby",F="id";if(v){o.RADIO_DEFAULT_TITLE="";o.RADIO_CHECKED_TITLE="";o.CHECKBOX_DEFAULT_TITLE="";o.CHECKBOX_CHECKED_TITLE=""}var D=function(I,J){I.setAttribute(E,J)};var y=function(I,K,J){I.setAttribute((n+K),J)};var a=function(K,I,J){this.cfg.setProperty(w,true);this.cfg.setProperty(d,J.get(F))};var b=function(){this._menu.subscribe(B,a,this)};var p=function(I){y(this._button,k,I.newValue)};h.augmentObject(o,{_setUseARIA:function(J){var K=this.get(e),I=this._button;if(J){switch(K){case H:case A:y(I,i,true);this.on(l,b);break;case t:case z:D(I,K);y(I,k,this.get(k));this.on(C,p);break}}},initAttributes:function(I){this.setAttributeConfig(w,{value:I.usearia||v,validator:h.isBoolean,writeOnce:true,method:this._setUseARIA});c.apply(this,arguments);if(v){this.set(w,true)}}},"initAttributes","_setUseARIA");var j=function(J){var I=J.prevValue;if(I){I._button.tabIndex=-1}J.newValue._button.tabIndex=0};h.augmentObject(m,{addButton:function(K){var L=g.call(this,K),J,I;if(this.get(w)){L.set(w,true);J=L._button;I=J.parentNode;D(I,x);D(I.parentNode,x);J.tabIndex=L.get(k)?0:-1}return L},_setUseARIA:function(I){if(I){D(this.get(f),q);this.on(u,j)}},_setLabelledBy:function(I){if(this.get(w)){y(this.get(f),d,I)}},_setDescribedBy:function(I){if(this.get(w)){y(this.get(f),G,I)}},initAttributes:function(I){this.setAttributeConfig(w,{value:I.usearia||v,validator:h.isBoolean,writeOnce:true,method:this._setUseARIA});this.setAttributeConfig(d,{value:I.labelledby,validator:h.isString,method:this._setLabelledBy});this.setAttributeConfig(G,{value:I.describedby,validator:h.isString,method:this._setDescribedBy});s.apply(this,arguments);if(v){this.set(w,true)}}},"initAttributes","_setUseARIA","_setLabelledBy","_setDescribedBy","addButton")}());YAHOO.register("buttonariaplugin",YAHOO.widget.Button,{version:"@VERSION@",build:"@BUILD@"});