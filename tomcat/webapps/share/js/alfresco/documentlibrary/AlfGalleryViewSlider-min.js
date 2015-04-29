define(["dojo/_base/declare","dijit/form/HorizontalSlider","alfresco/core/Core","alfresco/documentlibrary/views/_AlfAdditionalViewControlMixin","alfresco/services/_PreferenceServiceTopicMixin","dojo/dom-class","dojo/dom-style"],function(f,m,c,j,e,k,h){return f([m,c,j,e],{cssRequirements:[{cssFile:"./css/AlfGalleryViewSlider.css"}],showButtons:true,minimum:0,maximum:60,discreteValues:4,postCreate:function i(){this.inherited(arguments);k.add(this.domNode,"alfresco-documentlibrary-AlfGalleryViewSlider");this.set("value",this.getSliderValueFromColumns(this.columns));this.alfPublish(this.getPreferenceTopic,{preference:"org.alfresco.share.documentList.galleryColumns",callback:this.setColumns,callbackScope:this})},columns:4,setColumns:function(n){if(n==null){n=4}this.columns=n;this.set("value",this.getSliderValueFromColumns(this.columns))},getColumnsFromSliderValue:function d(n){switch(n){case 0:return 10;case 20:return 7;case 40:return 4;case 60:return 3}},getSliderValueFromColumns:function g(n){switch(n){case 10:return 0;case 7:return 20;case 4:return 40;case 3:return 60}},onChange:function b(o){var n=this.getColumnsFromSliderValue(o);this.alfPublish("ALF_DOCLIST_SET_GALLERY_COLUMNS",{value:n});this.alfPublish(this.setPreferenceTopic,{preference:"org.alfresco.share.documentList.galleryColumns",value:n});this.columns=n},_setSelected:function l(n){k.toggle(this.domNode,"dijitMenuItemSelected",n)},onControlDisplayed:function a(){this.alfPublish("ALF_DOCLIST_SET_GALLERY_COLUMNS",{value:this.getColumnsFromSliderValue(this.value)})}})});