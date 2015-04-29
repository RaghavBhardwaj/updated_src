define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","alfresco/documentlibrary/views/layouts/_MultiItemRendererMixin","dojo/text!./templates/AlfDocument.html","alfresco/core/Core","alfresco/core/CoreWidgetProcessing","dojo/_base/lang","dojo/_base/array","dijit/registry","dojo/dom-construct"],function(j,l,p,b,o,e,c,d,k,a,i){return j([l,p,b,e,c],{cssRequirements:[{cssFile:"./css/AlfDocument.css"}],templateString:o,widgets:null,postMixInProperties:function n(){this.alfSubscribe("ALF_RETRIEVE_SINGLE_DOCUMENT_REQUEST_SUCCESS",d.hitch(this,"onDocumentLoaded"))},postCreate:function h(){if(this.currentItem==null&&this.nodeRef!=null){this.alfPublish("ALF_RETRIEVE_SINGLE_DOCUMENT_REQUEST",{nodeRef:this.nodeRef})}},onDocumentLoaded:function m(q){if(d.exists("response.item",q)){this.currentItem=q.response.item;this.renderDocument()}else{this.alfLog("warn","Document data was provided but the 'response.item' attribute was not found",q,this)}},renderDocument:function g(){if(this.containerNode!=null){k.forEach(a.findWidgets(this.containerNode),d.hitch(this,"destroyWidget"));i.empty(this.containerNode)}if(this.currentItem!=null&&this.containerNode!=null){this.processWidgets(this.widgets,this.containerNode)}else{this.alfLog("warn","It was not possible to render an item because the item either doesn't exist or there is no DOM node for it",this)}},destroyWidget:function f(r,q){if(typeof r.destroyRecursive==="function"){r.destroyRecursive()}}})});