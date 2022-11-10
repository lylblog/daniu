define("disk-share:widget/pageModule/list/listInit.js",function(e,t,i){var r=e("base:widget/libs/underscore.js"),a=e("base:widget/historyManager/historyManager.js"),n=e("base:widget/tools/tools.js"),o=e("base:widget/libs/jquerypacket.js"),s=e("system-core:context/context.js"),l=e("disk-share:widget/pageModule/list/list-view/list-view-builder.js"),c=e("disk-share:widget/pageModule/list/grid-view/grid-view-builder.js"),d=e("disk-share:widget/pageModule/list/list-view-empty/list-view-empty.js"),h=e("disk-share:widget/system/util/getCookies.js"),u=s.instanceForSystem,g=u.ui.cacheManage,m=u.message,f="list",v="dir",y="category",p=".KPDwCE",w="JS-module-list-multselected",C={listViewContainer:".vdAfKMb",gridViewContainer:".JKvHJMb",listViewItem:".AuPKyz",gridViewItem:".cEefyz"},k=o(p),S=Math.max(o(window).height(),600)-190-60;k.css({height:S+"px"});var b=function(){var e={defaultViewModle:f};e.historyConfig=B(),e.listConfig=L(),e.listViewBuilder=_(),e.gridConfig=H(),e.gridViewBuilder=I(),e.listToolsConfig=M();var t=u.ui.list(p,e);s.setList(t);var i=e.listToolsConfig;return i.config.container=t.listHeader.getOperateContainer(),u.Broker.initButtonBroker(i),t.setListTools(u.Broker.getButtonBroker(i.name)),window.currentSekey=h("BDCLND"),t},P={3:"全部图片",2:"全部音乐",4:"全部文档",1:"全部视频",7:"全部种子",6:"其他文件"},B=function(){return{}},L=function(){var e={defaultScroll:!0,listItemClass:"AuPKyz",itemActiveClass:"JS-item-active"};return e},_=function(){return l},H=function(){return{defaultScroll:!0,columnWidth:124,gridItemClass:"cEefyz",itemActiveClass:"JS-item-active"}},I=function(){return c},M=function(){return{name:"shareListTools",config:{cachePaddingLeft:!1,limit:8,outSize:36,resize:!0}}},j=b();j.onListOrderChange=function(e,t){if(localStorage){var i="localshareorder_"+(window.locals.get("uk")||"");if(e)return void localStorage.setItem(i,e+"_"+t);var r=a.getCurrentParams();if(r&&"3"===r.type)return null;var n=localStorage.getItem(i)||"",o=n.split("_");return n&&2===o.length?{item:o[0],desc:parseInt(o[1],10)}:null}};var O=function(e){e&&-1===e.errno?u.ui.tip({msg:'由于您的帐号存在违规行为，帐号已被封禁。<a href="http://help.baidu.com/add?prod_id=48">申诉</a>',mode:"caution",autoClose:!1,hasClose:!0}):e&&e.errno&&u.ui.tip({msg:e.show_msg||u.errorMsg(e.errno)||"网络错误，请稍候重试",mode:"caution",autoClose:!1,hasClose:!0}),j.updateLoadingTips(2,0),j.listEmptyTip(j.$emptyTips)},x=function(){var e,t,i=j.onListOrderChange(),r="";return r=decodeURIComponent(r?r:""),i&&(e=i.item,t="number"==typeof i.desc?i.desc:1),{api:"/share/list",params:{uk:window.locals.get("share_uk"),shareid:window.locals.get("shareid"),order:e||"time",desc:void 0!==t?t:1,showempty:0,web:1},limit:100,currentPage:0,listKey:"list",parentPath:r,getParamsBykey:function(e){return{dir:e}},getPageParams:function(e,t){return{page:e+1,num:t}},getKeyByParams:function(e){return e.dir},failCallBack:function(e,t){O(e,t)}}},V=function(){var e,t,i=j.onListOrderChange();return i&&(e=i.item,t="number"==typeof i.desc?i.desc:1),{api:"/api/categorylist",params:{order:e||"time",desc:void 0!==t?t:1,showempty:0,web:1},limit:100,currentPage:0,listKey:"info",getParamsBykey:function(e){return{category:e}},getPageParams:function(e,t){return{page:e+1,num:t}},getKeyByParams:function(e){return e.category},failCallBack:function(e,t){O(e,t)}}},T=a.getDefault();j.onListOrderChange("other",1);var J=new g("list",x(),""),$=new g("category",V(),""),D=window.locals.get("file_list")||[];J.selfAddDataToCache("list","/",D,!1,0),window.locals.get("sharetype","shareid","isPcShareIdWhiteList",function(e,t,i){D&&D.length>0&&"4"===String(e)&&u.log.send({type:"web_list_limitShare",value:"密享外链页面-有内容"}),1===i&&u.log.send({type:"web_white_list_sharelist_show",value:"pc软件站外链-展现",from:t})}),D&&D.length>0&&!window.locals.get("self")&&u.log.send({type:"web_shareRetailGuideShow",value:"转存按钮带红包展现"}),m.listen("system-show-view-mode",function(e){return j.isLocked()?void(e.returnValue=!1):(m.trigger("system-change-view-mode-loadingtip"),void Z(e.type))}),j.onViewModuleChange=function(e){m.trigger("system-update-view-mode",{type:e}),j.listHeader.changeVmode({type:e})};var F=function(e){var t,i=e&&e.path;"undefined"!=typeof e&&e.all===!0?it.removeCacheAll():e&&e.flagChangeSuffix||("undefined"!=typeof i&&(i=i||"/",it.removeCache(i)),K===f?(t=a.getCurrentParams(),i=t.path||"/",i&&it.removeCache(i)):K===y&&it.removeCategoryCache()),j.refreshList()};m.listen("system-refresh",function(e){F(e)}),j.onCheckeChanged=function(e){e>1?k.addClass(w):k.removeClass(w)},j.onLockChanged=function(){},j.onLoadedCallBack=function(){m.trigger("after-list-loaded")},j.mapFirstFileByCategory=function(e,t){var i=null;if(e.length<=0)return i;i={};var r=j.getFirstPosition();if(0>r)return i;for(var a,s,l=j.getDomByPosition(r),c=null;null!==l&&e.length>0;){if(c=j.getElementDataByPosition(r),c&&!c.isdir&&c.server_filename&&(a=n.getFileCategory(c.server_filename))&&a&&(a="."+a,!i[a]&&(s=o.inArray(a,e))>=0&&(e.splice(s,1),t.call(null,a,o(l)))))return;l=j.getDomByPosition(++r)}},j.getIndexsByFiles=function(e){return j.cache.getIndexsByFiles(e)},j.remove=function(){},j.removeCacheByPath=function(e){it.removeCache(e)};var A=function(){_().clear(),I().clear()},K=f,z=function(e,t){var i=a.buildHistory(e,t);T.addHistory(i)},E=function(e,t){var i=e.vmode;j.setViewModule("grid"===i?"grid":"list",t)},N=function(e,t){return m.trigger("system-change-toolbar",{module:j.cache.cacheName}),"category"===e&&3===t?void u.toolbar.showTimelineDom():void u.toolbar.showDefault()},R=function(){var e,t,i=j.onListOrderChange();i&&(e=i.item,t="number"==typeof i.desc?i.desc:1);var r=[{order:e||"server_filename",desc:void 0!==t?t:1,operateOrderKey:function(){},columns:[{name:"文件名",key:"server_filename",checkbox:!0,width:60},{name:"大小",key:"size",width:16},{name:"修改日期",key:"time",width:23}],module:["list","category"]}],a=location.pathname.indexOf("/link/")>-1;return a&&(r[0].columns=[{name:"文件名",key:"server_filename",checkbox:!0,width:75},{name:"大小",key:"size",width:16}]),r},W=function(e){for(var t=R(),i=j.cache&&j.cache.cacheName,r=e.cacheName,a=null,n=[],s=0;s<t.length;s++){if(a=t[s],n=a.module,-1!==o.inArray(i,n)&&-1!==o.inArray(r,n)&&"category"!==r)return;if(-1!=o.inArray(r,n))return j.changeHeaderConfig(a),e.config.params.order=a.order,void(e.config.params.desc=a.desc)}},U=function(e){_().clear();var t=e.path,i=e.parentPath;"undefined"==typeof t&&(t=""),E(e),j.$listHeader.show(),Q(t,i),N("list",t),A()},q=function(e){z(f,e)},G=function(e){var t=e.type,i=parseInt(t,10);E(e),X(i),N("category",i),A()},Q=function(e,t){K=f,W(J),j.changeCache(J),"/"===e&&(e=""),/\S\/+$/.test(e)&&(e=e.replace(/\/+$/,""));var i=e.split("/"),r=i.slice(),t=t||"";t||(t=a.getCurrentParams().parentPath||"");var n=t.split("/");n[0]="/",i[0]="/",r[0]="全部文件",j.changeHistory(i,r,n)},X=function(e){K=y,W($),j.changeCache($);var t=P[e];if(t){var i=[e],r=[t];j.changeHistory(i,r)}else Y(["/"])};j.extend({getCheckMsg:function(e){return"已选中"+e+"个文件/文件夹"},resizeScrollBar:function(e){var t=this.$container;if("number"==typeof e||"string"==typeof e?t.height(e):e=t.height(),0===e)throw"[Error] list container's height is 0, need to set";t.height(e);var i=this.listHeader.hasInit===!1?0:55;"none"===t.find(".JDeHdxb").css("display")?(t.find(".NHcGw").height(e-i).find(".scrollbar-tracker").height(e-i-2-26),t.find(".BNfIyPb").height(e-i).find(".scrollbar-tracker").height(e-i-2-26)):(t.find(".NHcGw").height(e-75).find(".scrollbar-tracker").height(e-75-2),t.find(".BNfIyPb").height(e-75).find(".scrollbar-tracker").height(e-75-2))},checkLocalSort:function(){return!0},localSort:function(e,t,i){var r=e.key,a=e.getCache().list.data[r].list;"time"===t&&(t="server_mtime"),a.sort(function(e,i){return e[t]>i[t]?1:-1}),i&&a.reverse()}}),j.addHistory=function(e,t,i){var r=j.getHistoryIds();r=r?r.slice():[],r.push(e);var i=i||"";i||(i=a.getCurrentParams().parentPath||""),Y(r,i)},j.goHistory=function(e,t){var i=a.getCurrentParams(),r={};i.vmode&&(r.vmode=i.vmode),t?/\S\/+$/.test(t)&&(t=t.replace(/\/+$/,"")):t="/",r.path=t,z(e,r)};var Y=function(e,t){K=f,1!==e.length&&(e[0]="");var i=a.getCurrentParams(),r={};i.vmode&&(r.vmode=i.vmode);var n=e.join("/");/\S\/+$/.test(n)&&(n=n.replace(/\/+$/,"")),r.path=n,t&&(r.parentPath=t),z(K,r)},Z=function(e){var t=a.getCurrentParams();t.vmode="grid"===e?"grid":"list",z(K,t)};j.getHistoryList().goToHistory=function(e,t){if(!(e>=this.historyList.length||0>e)){var i=this.historyList.slice(),r=this.historyListParents.join("/");r=r.replace(/\/\//,"/");var a=this.historyListParents.length-1;t&&e-1===a&&(e=1,a=0),(1===e||e===this.historyList.length-1)&&(a=0),i.splice(e+a,this.historyList.length),Y(i,r)}},T.listen(f,U),T.listen(v,q),T.listen(y,G);var et=function(){var e=a.getCurrentHash();return e&&e.length>1&&e[1]&&(e[0]===f&&e[1]&&e[1].path||e[0]===y&&e[1]&&e[1].type||e[0]===v&&e[1]&&e[1].path)?(K=e[0],!0):!1};et()?a.interpretCurrentWindow():j.addHistory("/","全部文件");var tt=r.throttle(function(){var e=Math.max(o(window).height(),600)-190;j.resize(e-60)},300);o(window).resize(tt),j.listHeader.canTriggerOrder=function(){return!0},j.cancelEidtingDir=function(){},j.cancelFilesSelect=function(){k.find(".AuPKyz").removeClass("JS-item-active"),k.find(".cEefyz").removeClass("JS-item-active"),j.setItemsChecked(!1,!0)};var it={getCache:function(){return g.getCache()},deleteCacheByMode:function(e,t,i){var r=t.getDataByKey();this.removeCacheAll();for(var a=r&&r.list,n=!1,o="",s="",l=a.length,c=l-1;c>=0;c--){for(var d=i.length,h=d-1;h>=0;h--)o=i[h],s=o.path||o,a[c].path==s&&(i.splice(h,1),n=!0);n&&(a.splice(c,1),n=!1)}return r.list=a,it.getCache()[t.cacheName].data[t.getKey()]=r,r},removeCacheByPath:function(e){var t=this.getCache(),i={};t&&t.list&&t.list.data&&(i=t.list.data),i[e]&&delete i[e]},removeCacheAll:function(){var e=this.getCache();if("[object Object]"===Object.prototype.toString.call(e))for(var t in e)e.hasOwnProperty(t)&&e[t]&&e[t].data&&(e[t].data={})},removeCache:function(e,t,i){var r=this.getCache(),a={};r&&r.list&&r.list.data&&(a=r.list.data),this.removeSubFiles(a,e),"move"===t&&this.removeSubFiles(a,i),this.removeOtherListCache()},removeSubFiles:function(e,t){t="/"===t?t:t+"/";for(var i in e)e.hasOwnProperty(i)&&0===(i+"/").indexOf(t)&&delete e[i]},removeOtherListCache:function(){this.removeCategoryCache(),this.removeTreeCache()},removeCategoryCache:function(){this.removeCacheByKey("category")},removeTreeCache:function(){this.removeCacheByKey("tree")},removeCacheByKey:function(e){var t=this.getCache();t&&t[e]&&t[e].data&&(t[e].data={})}};e.async("disk-share:widget/pageModule/list/mouse-utils/mouse-select.js",function(e){new e({$dom:o(C.listViewContainer),item:C.listViewItem,viewMod:"list",selectClass:"JS-item-active",list:j,canSelect:function(){return j.isLocked()?!1:void 0}}),new e({$dom:o(C.gridViewContainer),item:C.gridViewItem,vieMod:"grid",selectClass:"JS-item-active",list:j,canSelect:function(){return j.isLocked()?!1:void 0}})}),j.listEmptyTip=function(e){j.$listHeader.hide(),e.html(d.emptyView).show()};var rt=function(){var e=document.referrer,t="fm_self",i=/(http|https)\:\/\/(tieba|hao123)\.baidu\.com/gi,r=/(http|https)\:\/\/www\.hao123\.com/gi;return"string"==typeof e&&e.length>0&&(t=i.test(e)?"fm_"+RegExp.$2:r.test(e)?"fm_hao123":-1!==e.indexOf("http://www.baidu.com/s?wd=")?"fm_baidups":"fm_not_proved"),t};u.log.sendUserReport(rt()),i.exports=j});
;define("disk-share:widget/system/util/lazyLoadImage.js",function(o,a,i){function t(){function o(){t.isReady=!0,r.isFunction(t.callback)&&t.callback()}o()}function e(o){if(o&&"2"===String(h.HTTPVersion))return"thumbnail10.baidupcs";var a=o?p:f;return h[a][g++%10]}function s(o){if(!o)return!1;if(o.src)return!1;var a=o.getAttribute("_src"),i=a.indexOf(u)>-1,t=a.indexOf(d)>-1;if(!i&&!t)return!1;var s=i?u:d,n=u;i&&m&&(n=e()),t&&(n=e(!0)),s!==n&&(a=a.replace(s,n)),o._src=a}function n(){l.call(this),this.images=[]}for(var r=o("base:widget/libs/underscore.js"),l=o("base:widget/tools/service/tools.event.js").EventEmitter,c=o("base:widget/tools/service/tools.util.js"),m="http:"===document.location.protocol,u="d.pcs.baidu.com",d="thumbnail0.baidupcs",h={HTTPVersion:"1.1",normalDomains:[],thumbsDomains:[]},g=0,f="normalDomains",p="thumbsDomains",b=0;10>b;b++)h.normalDomains.push("d"+b+".pcs.baidu.com"),h.thumbsDomains.push("thumbnail"+b+".baidupcs");t.isReady=!1,t(),c.inherits(n,l),n.prototype.changeImages=function(o){if([].push.apply(this.images,o||[]),t.isReady)this._loadImage();else{var a=this;t.callback=function(){a._loadImage()}}},n.prototype._loadImage=function(){if(0!==this.images.length){var o=this.images.shift(),a=s(o);a!==!1&&(this._installImage(o),this._loadImage())}},n.prototype._installImage=function(o){var a=r.now(),i=this;o.hasError||(o.src=o._src),o.complete?i._loadImageSucc(o):(o.onload=function(){i._loadImageSucc(this,r.now()-a)},o.onerror=function(){o.hasError=!0,i._loadImageFail(this)})},n.prototype._loadImageSucc=function(o){this.emit("done",o),this._commonLoadImageCall(o)},n.prototype._loadImageFail=function(o){this.emit("fail",o),this._commonLoadImageCall(o)},n.prototype._commonLoadImageCall=function(o){o.onload=o.onerror=null,this._loadImage()},i.exports=n});
;define("disk-share:widget/pageModule/list/list-view-empty/list-view-empty.js",function(e,o,t){var i=e("base:widget/libs/jquerypacket.js"),d=e("base:widget/hash/hash.js"),n={dom:{module:".KPDwCE",searchEmptyModule:".empty-search-container",viewEmptyModule:".module-list-view-empty",noResultTcode:'a[node-type~="ckuQZ4y"]',noResultTcodePic:'div[node-type~="ypdpw30V"]',noResultTcodeClose:'a[node-type~="eaQ8ZP"]',newDirBox:'input[node-type~="lzJXaR"]',newDir:'div[node-type~="quwdyx"]'},bindEvent:function(){var e=!1,o=i(n.dom.module);o.delegate(n.dom.noResultTcode,"mouseover",function(){i(n.dom.noResultTcodePic).show()}),o.delegate(n.dom.noResultTcodePic,"mouseover",function(){e=!0}),o.delegate(n.dom.noResultTcodePic,"mouseleave",function(){i(n.dom.noResultTcodePic).hide()}),o.delegate(n.dom.noResultTcode,"mouseout",function(){setTimeout(function(){e||(i(n.dom.noResultTcodePic).hide(),e=!1)},200)}),o.delegate(n.dom.noResultTcodeClose,"click",function(){i(n.dom.noResultTcodePic).hide()})},tmpl:{emptyViewContainer:'<div class="clearfix module-list-view-empty" style="" node-type="epaoJzZK"><div class="list-view-empty-header"><div class="bar global-clearfix"><span class="chk"></span></div></div><div class="no-data"><div class="img"></div><p>没有数据...</p></div></div>',emptySearchContainer:'<div class="empty-search-container"><div class="search-empty-box"></div></div>'},util:{render:function(){i(n.tmpl.emptyViewContainer).appendTo(n.dom.module),i(n.tmpl.emptySearchContainer).appendTo(n.dom.module)}},init:function(){n.bindEvent()}};i(document).ready(function(){n.init()});var s={emptyView:function(){var e=d.get("search/key");return e?n.tmpl.emptySearchContainer:n.tmpl.emptyViewContainer}};t.exports=s});
;define("disk-share:widget/pageModule/list/grid-view/grid-view-builder.js",function(e,t,i){function a(e){C.gridViewContainer||(C.gridViewContainer=e.$gridViewContainer.find(".BNfIyPb")),C.itemHeight||(C.itemHeight=e.getCurrentView().itemHeight);var t=0;if(C.itemHeight>0){var i=C.gridViewContainer.scrollTop();t=Math.max(parseInt(i/C.itemHeight,10)-2,0)}C.load(t)}var s=e("base:widget/libs/jquerypacket.js"),n=e("base:widget/libs/underscore.js"),r=e("base:widget/historyManager/historyManager.js"),l=e("disk-share:widget/system/util/util.js"),o=e("system-core:context/context.js").instanceForSystem,c=e("disk-share:widget/system/fileOperate/fileOperate.js"),d=e("disk-share:widget/system/util/lazyLoadImage.js"),m=o.message,h={LIST:"list",CATEGORY:"category",SEARCHPATH:"searchPath",SEARCHGLOBAL:"searchGlobal",SEARCH:"search"},u=function(){var e=document.createElement("dd");e.className="g-clearfix";var t=[];t.push('<div class="cEefyz">'),t.push('<span node-type="EOGexf" class="EOGexf"></span>'),t.push('<div class="JS-fileicon" title="">'),t.push('<img class="thumb"/>'),t.push('<span class="playIcon"></span>'),t.push("</div>"),t.push('<div class="file-name">'),t.push('<a node-type="pvchQK6M" class="filename" href="javascript:void(0);" title=""></a>'),t.push("</div>"),t.push("</div>");for(var i=[],a=C.columnsCount=this.getColumnsCount(),s=0;a>s;s++)i.push(t.join(""));return e.innerHTML=i.join(""),e},g=null,p=null,v=function(){g=null,p=null},f=function(e,t,i){var a,n,d=t;null==d&&(d=this.buildView(e,t,i));for(var u,v=this.getGroupElementsData(),f=v[i],w=s(d),b=this,y=this.getColumnsCount(),k=w.find(".cEefyz"),I=0;I<f.length;I++){if(u=f[I],a=k[I],n=s(a),a.style.display="block",a.setAttribute("_position",i),this.isAllItemChecked()||this.isItemChecked(i*y+I)?n.addClass("JS-item-active"):n.removeClass("JS-item-active hover-item"),!a.getAttribute("_installed")){var S,L;n.mouseover(function(){if(S=(new Date).getTime(),b.parent.isLocked())return!1;var e=s(this);return e.addClass("hover-item"),!1}).mouseout(function(){if(b.parent.isLocked())return!1;var e=s(this);return e.removeClass("hover-item"),L=(new Date).getTime(),o.log.send({name:"gridListHover",value:L-S}),!1}),n.bind("click dblclick",function(e){var t=(new Date).getTime();if(b.parent.isLocked())return!1;var i,a=s(this),n=parseInt(a.attr("_position"),10),c=a.index(),d=n*y+c,u=b.getElementsData()[d],v=b.isItemChecked(d),f=!1;if(e.shiftKey){var C=b.getCheckedIndexs(),w=C[0];0===w||w||(w=d),b.setItemsChecked(!1);var k=w,I=d;if(I>k)for(;I>=k;)b.setItemChecked(k,!0),k++;else if(k>I)for(k=C[C.length-1];k>=I;)b.setItemChecked(k,!0),k--;else b.setItemChecked(k,!0);b.requestLayout()}else{if(!e.ctrlKey){if(1!==window.locals.get("loginstate")&&2===u.category&&u.size<52428800)return l.makePreviewMusicLogin(),!1;if(u.isdir)return b.setItemsChecked(!1),filename=u.server_filename,"string"==typeof u.path&&0===u.path.indexOf("/")&&(u.path=u.path.substr(1,u.path.length)),b.parent.cache.cacheName===h.SEARCH||b.parent.cache.cacheName===h.SEARCHGLOBAL||b.parent.cache.cacheName===h.SEARCHPATH?r.assignUrlHash("list/path="+encodeURIComponent(u.path)+"&vmode="+r.getCurrentParams().vmode):u.parent_path?b.parent.addHistory(u.path,u.server_filename,decodeURIComponent(u.parent_path)):b.parent.addHistory(u.server_filename,u.server_filename),!1;var S=a.data("plugin");if(S&&S.length)return m.trigger("plugin:"+S,{filesList:[u]}),!1;i=b.getCheckedIndexs(),i.length>0&&(v===!1||v&&i.length>1)&&(b.setItemsChecked(!1),f=!0),v&&i.length>1&&(v=!1)}g=d,p=null,b.setItemChecked(d,!v),f?b.requestLayout():v?a.removeClass("JS-item-active"):a.addClass("JS-item-active")}var L=(new Date).getTime();return o.log.send({name:"gridListSingleSel",value:L-t}),!1}).delegate(".EOGexf","click",function(e){var t=(new Date).getTime();if(b.parent.isLocked())return!1;e.stopPropagation();var i=s(this).closest(".cEefyz"),a=parseInt(i.attr("_position"),10),n=i.index(),r=a*y+n,l=b.isItemChecked(r);b.setItemChecked(r,!l),l?i.removeClass("JS-item-active"):i.addClass("JS-item-active");var c=(new Date).getTime();o.log.send({name:"gridListMultiSel",value:c-t})}).delegate(".EOGexf","dblclick",function(e){e.stopPropagation()}),a.setAttribute("_installed",1)}var A=c.getInfo(u.path,u.isdir,!1,!1,!1,u.wpfile);n.find(".playIcon").remove(),"fileicon-large-video"===A.largeIcon&&(n.find(".JS-fileicon").append('<span class="playIcon"></span>'),n.mouseenter(function(){s(this).find(".playIcon").show()}).mouseleave(function(){s(this).find(".playIcon").hide()})),n.find(".JS-fileicon").attr('class', 'JS-fileicon '+A.largeIcon),u.isdir||A.plugin?(n.addClass("open-enable"),n.data("plugin",A.plugin)):(n.removeClass("open-enable"),n.data("plugin",""));var _,H,J=n.find(".JS-fileicon img");J.removeAttr("src"),4!==u.category&&u.thumbs&&u.thumbs.url1?(H=u.thumbs.url1.replace("size=c140_u90","size=c180_u194"),(_=C.loadedImgMap[H])?(J.removeAttr("_src").attr("src",_.src).css({left:_.left,top:_.top,visibility:"visible"}),J.parent().attr('class', 'JS-fileicon')):J.removeAttr("src").attr("_src",H).css("visibility","hidden")):J.removeAttr("_src").removeAttr("src").css("visibility","hidden"),1===+u.wpfile&&(A.name=A.name.replace(/\.(\w*?)$/i,"")),n.find(".filename").html(A.name).attr("title",A.fileName).data("filename",u.server_name)}if(f.length!=y)for(var T=f.length;y>T;++T)k[T].style.display="none";return d},C={columnsCount:0,gridViewContainer:null,itemHeight:0,lazyLoadImagePlugin:new d,loadedImgMap:{},init:function(){this.lazyLoadImagePlugin.on("done",n.bind(this.imgLoadedSuccessFunc,this)),this.lazyLoadImagePlugin.on("fail",n.bind(this.imgLoadedFailFunc,this))},imgLoadedSuccessFunc:function(e,t){e=s(e);var i,a=0,n=0,r=e.width(),l=e.height();r>0&&l>0&&(a=(90-r)/2,n=(92-l)/2),i={left:a,top:n,visibility:"visible"},e.css(i).removeAttr("_src");var c=e.attr("src");if(!c)return!1;var d=c.replace(/http:\/\/d[0-9]\./,"http://d.");i.src=c,this.loadedImgMap[d]=i,e.parent().attr('class', 'JS-fileicon'),o.log.send({name:"s_imgLoad",value:t})},imgLoadedFailFunc:function(e){e=s(e),e.removeAttr("src"),e.removeAttr("_src")},checkCanLoad:function(e){for(var t=0,i=C.gridViewContainer,a=i.scrollTop(),s=i.height();e&&-1===e.className.indexOf("cEefyz");)e=e.parentNode,t+=e.offsetTop;return a-100>t?-1:t>a+s?0:1},load:function(e){for(var t=C.gridViewContainer,i=e?t.find("dd:gt("+e+")").find(".thumb[_src]"):t.find(".thumb[_src]"),a=[],s=0,n=i.length;n>s;s++){var r=i[s];if(!r)break;var l=this.checkCanLoad(r);if(0===l)break;-1!==l?1===l&&([].push.apply(a,[].slice.call(i,s,s+this.columnsCount)),s=s+this.columnsCount-1):s=s+this.columnsCount-1}this.lazyLoadImagePlugin.changeImages(a)}};C.init();var w=-1,b=0,y=1e3,k=/vmode=grid/.test(location.hash);i.exports={getView:f,buildView:u,onScroll:n.debounce(function(){if(k)return void(k=!1);var e=this.parent,t=n.now(),i=b;clearTimeout(w),b=t,t-i>y?a(e):w=setTimeout(a,y,e)},350),clear:v}});
;define("disk-share:widget/pageModule/list/list-view/list-view-builder.js",function(e,t,i){function a(){return h.Broker.getButtonBroker("shareList")}var s=e("base:widget/libs/jquerypacket.js"),n=e("base:widget/historyManager/historyManager.js"),r=e("base:widget/tools/service/tools.date.js"),l=e("base:widget/tools/service/tools.format.js"),o=e("base:widget/tools/service/tools.path.js"),c=e("disk-share:widget/system/util/util.js"),h=e("system-core:context/context.js").instanceForSystem,d=e("disk-share:widget/system/fileOperate/fileOperate.js"),g=e("disk-share:widget/system/util/elinkThemeRender.js"),m=h.message;h.Broker.initButtonBroker({name:"shareList",config:{limit:2,container:s("<div>")}});var p={LIST:"list",CATEGORY:"category",SEARCHPATH:"searchPath",SEARCHGLOBAL:"searchGlobal",SEARCH:"search"},v=function(){var e=this.parent.listHeader.config.columns||[{width:60},{width:16},{width:23}],t=document.createElement("dd");return t.className="g-clearfix AuPKyz",t.innerHTML='<span node-type="EOGexf" class="EOGexf"></span><div class="JS-fileicon"></div><div class="file-name" style="width:'+e[0].width+'%"><div class="text"><a href="javascript:void(0);" class="filename"></a></div><div class="sybxeNb"></div></div><div class="file-size" style="width:'+e[1].width+'%">-</div>'+(e[2]?'<div class="ctime" style="width:'+e[2].width+'%"></div>':"")+'<div class="path-info" style="width:'+(e[3]?e[3].width-1:0)+'%"><span class="search-feild" node-type="eyoJ9VE"></span></div>',t},f=null,u=null,w=function(){f=null,u=null},b=function(e,t){if(e&&0!==e.length)for(var i=0;i<e.length;i++){var a=s(e[i]),n=a.data("excludedir");if(n){var r=t.path.substring(1);-1!==n.indexOf(r)?a.addClass("g-disabled"):a.removeClass("g-disabled")}var l=a.data("includetype");if(l){var c=o.getFileCategory(t.path);-1===l.indexOf(c)?a.hide():a.show()}}},C=function(e){var t=/^[.,?\]})'";:`~!%&*|>，﹐。？、】）·！……’”；：]*/;if(e.highlighting&&e.highlighting.abstract){e.highlighting.abstractFixed=e.highlighting.abstract,e.highlighting.abstract=e.highlighting.abstract.replace(/\n+\s*\n/g,"\n"),e.highlighting.abstract=e.highlighting.abstract.replace(t,"");var i=e.highlighting.abstract;if(pos=i.search(/<em>/),pos>36){var a=pos-12;i=i.slice(a,i.length),e.highlighting.abstractFixed=i}e.highlighting.abstractFixed=e.highlighting.abstractFixed.replace(t,"")}return e},k=function(e,t,i){var o=t;null==o&&(o=this.buildView(e,t,i));var v=this.getElementDataByPosition(i),w=s(o),k=this.parent.cache.cacheName===p.SEARCHGLOBAL,S=this;if(k&&(w.addClass("list-view-vip-search"),v=C(v)),o.setAttribute("_position",i),o.setAttribute("_cmd_installed",1),this.isAllItemChecked()||this.isItemChecked(i)?w.addClass("JS-item-active"):w.removeClass("JS-item-active hover-item"),!o.getAttribute("_installed")){var _,y;w.mouseenter(function(){if(_=(new Date).getTime(),S.parent.isLocked())return!1;var e=s(this),t=e.find(".sybxeNb");return g.getTransferAndDownloadStatus(function(t){t.cantTransfer||t.cantDownload||e.addClass("hover-item")}),""===t.html()&&(t.html(a().getContent()),h.addIconFont&&h.message.trigger("addIcon",t[0])),!1}).mouseleave(function(){if(S.parent.isLocked())return!1;var e=s(this);return e.removeClass("hover-item"),e.find(".g-dropdown-button").removeClass("button-open"),y=(new Date).getTime(),h.log.send({name:"listListHover",value:y-_}),!1}),w.click(function(e){var t=(new Date).getTime();if(S.parent.isLocked())return!1;var i=parseInt(this.getAttribute("_position"),10),a=S.isItemChecked(i),n=S.getCheckedIndexs(),r=e.ctrlKey,l=s(this);if(e.shiftKey){var o=Math.min(i,f),c=Math.max(i,f),d=l,g=!1;if("number"==typeof u){var m=Math.min(i,u),p=Math.max(i,u);for(g=m===i;p>=m;)S.setItemChecked(m,!1),d.length>0&&d.removeClass("JS-item-active"),d=g?d.next(".AuPKyz"):d.prev(".AuPKyz"),m++}for(d=l,g=o===i;c>=o;)S.setItemChecked(o,!0),d.length>0&&d.addClass("JS-item-active"),d=g?d.next(".AuPKyz"):d.prev(".AuPKyz"),o++;u=i}else f=i,u=null,r||(n.length>0&&(a===!1||a&&n.length>1)&&(S.setItemsChecked(!1),l.siblings(".AuPKyz").removeClass("JS-item-active")),a&&n.length>1&&(a=!1)),S.setItemChecked(i,!a),a?l.removeClass("JS-item-active"):l.addClass("JS-item-active");var v=(new Date).getTime();h.log.send({name:"listListSingleSel",value:v-t})}),w.delegate(".filename","click",function(){if(S.parent.isLocked())return!1;var e=parseInt(s(this).closest(".AuPKyz")[0].getAttribute("_position"),10),t=S.getElementDataByPosition(e);if(t.isdir)h.log.send({name:"web_share_click_list_dir",value:"外链列表页点击文件夹"}),"string"==typeof t.path&&0===t.path.indexOf("/")&&(t.path=t.path.substr(1,t.path.length)),S.parent.cache.cacheName===p.SEARCH||S.parent.cache.cacheName===p.SEARCHGLOBAL||S.parent.cache.cacheName===p.SEARCHPATH?n.assignUrlHash("list/path="+encodeURIComponent(t.path)+"&vmode="+n.getCurrentParams().vmode):t.parent_path?S.parent.addHistory(t.path,t.server_filename,decodeURIComponent(t.parent_path)):S.parent.addHistory(t.server_filename,t.server_filename);else{h.log.send({name:"web_share_click_list_file",value:{value:"外链列表页点击文件",category:t.category}});var i=t.path?t.path.match(/\.[a-zA-Z0-9]+$/):["unkown"],a=i?i[0]:"unkown";if(h.log.send({name:"web_share_list_preview_content",value:{value:"外链列表预览内容",from:a}}),window.locals.get("sharetype",function(e){"4"===String(e)&&h.log.send({type:"web_list_click_limitShare",value:"密享外链列表页预览内容总数"})}),1!==window.locals.get("loginstate")&&2===t.category&&t.size<52428800)return c.makePreviewMusicLogin(),!1;var r=w.data("plugin");if(!r||!r.length)return!0;m.trigger("plugin:"+r,{filesList:[t]})}return!1}).delegate(".g-button","click",function(){if(S.parent.isLocked())return!1;var e=parseInt(s(this).closest(".AuPKyz")[0].getAttribute("_position"),10),t=S.getElementDataByPosition(e),i=s(this).next(".menu");if(i.length){var n=i.find(".g-button-menu");return b(n,t),s(this).closest(".g-dropdown-button").toggleClass("button-open"),void(i.offset().top>s(window).height()-i.outerHeight()?i.addClass("more-list-up"):i.removeClass("more-list-up"))}var r=s(this).index()-1;a().triggerClick(r,{filesList:[t],position:[e]})}).delegate(".g-button-menu","click",function(){if(S.parent.isLocked())return!1;var e=parseInt(s(this).closest(".AuPKyz")[0].getAttribute("_position"),10),t=S.getElementDataByPosition(e),i=s(this).index();a().triggerClick(i,{filesList:[t],position:[e]}),s(this).closest(".g-dropdown-button").removeClass("button-open")}).delegate(".sybxeNb","click",function(e){return S.parent.isLocked()?!1:void e.stopPropagation()}).delegate(".EOGexf","click",function(e){var t=(new Date).getTime();if(S.parent.isLocked())return!1;h.log.send({name:"web_share_click_list_select",value:"外链列表页点击选择"}),e.stopPropagation();var i=s(this).closest(".AuPKyz"),a=parseInt(i.attr("_position"),10),n=S.isItemChecked(a);S.setItemChecked(a,!n),n?i.removeClass("JS-item-active"):i.addClass("JS-item-active");var r=(new Date).getTime();h.log.send({name:"listListMultiSel",value:r-t})}).delegate(".EOGexf","dblclick",function(e){e.stopPropagation()}).delegate(".search-feild","click",function(e){e.stopPropagation(),n.assignUrlHash("list/path="+encodeURIComponent(s(e.target).data("path"))+"&vmode="+n.getCurrentParams().vmode)}),w.bind("dblclick",function(){if(S.parent.isLocked())return!1;var e=parseInt(s(this)[0].getAttribute("_position"),10),t=S.getElementDataByPosition(e);if(t.isdir)"string"==typeof t.path&&0===t.path.indexOf("/")&&(t.path=t.path.substr(1,t.path.length)),S.parent.cache.cacheName===p.SEARCH||S.parent.cache.cacheName===p.SEARCHGLOBAL||S.parent.cache.cacheName===p.SEARCHPATH?n.assignUrlHash("list/path="+encodeURIComponent(t.path)+"&vmode="+n.getCurrentParams().vmode):t.parent_path?S.parent.addHistory(t.path,t.server_filename,decodeURIComponent(t.parent_path)):S.parent.addHistory(t.server_filename,t.server_filename);else{var i=w.data("plugin");if(!i||!i.length)return!0;m.trigger("plugin:"+i,{filesList:[t]})}return!1}),o.setAttribute("_installed",1)}var x=d.getInfo(v.path,v.isdir,!0,!1,!1,v.wpfile);if(k){if(1==v.category||3==v.category){var A=v.thumbs.url1.replace(/size=.*&/,"size=c50_u50&").replace(/&quality=100/,"&quality=80");w.find(".JS-fileicon").css("background","url("+A+") 50% 50% no-repeat")}else w.find(".JS-fileicon").removeAttr("style");w.find(".JS-fileicon").attr('class', 'JS-fileicon '+x.middleIcon)}else w.find(".JS-fileicon").attr('class', 'JS-fileicon '+x.smallIcon);if(v.isdir||x.plugin?(w.addClass("open-enable"),w.data("plugin",x.plugin)):(w.removeClass("open-enable"),w.data("plugin","")),k&&v.highlighting.filename?(1===+v.wpfile&&(v.highlighting.name=v.highlighting.replace(/\.(\w*?)$/i,"")),w.find(".filename").html(v.highlighting.filename).attr("title",x.fileName).data("filename",v.server_filename)):(1===+v.wpfile&&(x.name=x.name.replace(/\.(\w*?)$/i,"")),w.find(".filename").html(x.name).attr("title",x.fileName).data("filename",v.server_filename)),k){var L="";L+=v.highlighting&&v.highlighting.abstract?'<div node-type="hjujwM8Z" class="name name-desc" title=" '+v.highlighting.abstract.replace(/\<em\>/g,"").replace(/\<\/em\>/g,"")+'">':'<div node-type="hjujwM8Z" class="name name-desc" title="">',L+='<span class="name-text-wrapper">',L+=v.highlighting.abstractFixed?'<span node-type="yzOBbsb" class="yzOBbsb">'+v.highlighting.abstractFixed+"</span>":'<span node-type="yzOBbsb" class="yzOBbsb">'+(v.highlighting.abstract||"")+"</span>",L+="</span></div>",0===w.find(".name-desc").length?w.find(".file-name").append(L):w.find(".name-desc").html(L)}if(w.find(".file-size").text(v.isdir?"-":1===+v.wpfile?"-":l.toFriendlyFileSize(v.size)),v.server_mtime||(v.server_mtime="-"),w.find(".ctime").text("-"===v.server_mtime?v.server_mtime:r.parseDate(v.server_mtime)),this.parent.cache.cacheName===p.SEARCH||this.parent.cache.cacheName===p.SEARCHGLOBAL||this.parent.cache.cacheName===p.SEARCHPATH){var H=v.path.split("/"),I="",J="";2===H.length?(I="/",J="全部文件"):(I=H.slice(0,H.length-1).join("/"),J=H[H.length-2]),w.find(".search-feild").data("path",I).attr("title",J).text(J)}return o};i.exports={getView:k,buildView:v,clear:w}});
;define("disk-share:widget/pageModule/list/share-multi.js",function(e){var s=e("system-core:context/context.js").instanceForSystem;s.message.trigger("share-person-info","show-intro"),e("disk-share:widget/system/util/adPlatform/adPlatform.js").getAdResoucre({list:[{id:"web-sharelinkpic",w:200,h:200},{id:"web-sharemultibanner",w:960,h:60},{id:"web-sharelinkrepeat",w:1,h:1}]})});
;define("disk-share:widget/pageModule/list/listMenu.js",function(e){var i=e("base:widget/libs/jquerypacket.js"),t=e("system-core:context/context.js").instanceForSystem,s=e("disk-share:widget/pageModule/list/listInit.js"),n=void 0,r={listTarget:".zJMtAEb",gridTarget:".fyQgAEb"},o={top:[{title:"打开",action:function(){s.isGridMode()?i(this).closest(".cEefyz").find(".filename").trigger("click"):i(this).closest(".AuPKyz").find(".filename").trigger("click")},display:function(){if(s.getCheckedIndexs().length>1)return"disable";var e=i(this).closest(".AuPKyz");return s.isGridMode()&&(e=i(this).closest(".cEefyz")),e.length&&!e.hasClass("open-enable")?"disable":void 0},keyboard:"o"}],middle:[],bottom:[]};t.Broker.initMenuBroker({target:i(r.listTarget)[0],type:"share",config:o,events:{beforeMenu:function(){var e=i(this).closest(".AuPKyz")[0];if(!e)return!1;s.cancelEidtingDir();var t=parseInt(e.getAttribute("_position"));n=t,s.isItemChecked(t)||(s.setSingleItemChecked(t,!0),i(this).closest(".zJMtAEb").is(":visible")?i(this).closest(".NHcGw").find(".AuPKyz").removeClass("JS-item-active"):i(this).closest(".BNfIyPb").find(".cEefyz").removeClass("JS-item-active"),i(e).addClass("JS-item-active")),i(e).removeClass("hover-item")},afterMenu:function(){s.lock(!0)},menuHide:function(){s.lock(!1)}}}),t.Broker.initMenuBroker({target:i(r.gridTarget)[0],type:"share",config:o,events:{beforeMenu:function(){var e=i(this).closest(".cEefyz")[0];if(!e)return!1;s.cancelEidtingDir();var t=parseInt(e.getAttribute("_position")),r=i(e).index();n=s.getGridPostiion(t,r),s.isItemChecked(n)||(s.setSingleItemChecked(n,!0),i(this).closest(".BNfIyPb").find(".cEefyz").removeClass("JS-item-active"),i(e).addClass("JS-item-active")),i(e).removeClass("hover-item")},afterMenu:function(){s.lock(!0)},menuHide:function(){s.lock(!1)}}})});
;define("disk-share:widget/pageModule/toolbar/toolbar.js",function(i){var e=i("base:widget/libs/jquerypacket.js"),t=i("system-core:context/context.js").instanceForSystem,o=t.message,d=e(".module-toolbar"),s={listGridSwitch:".list-grid-switch",listSwitch:".list-switch",gridSwitch:".grid-switch",prevDom:"div.prev-dom",afterDom:"div.after-dom",defaultDom:"div.default-dom",userDom:"div.user-dom",timeLineDom:"div.yun-pic-bar"};t.Broker.initButtonBroker({name:"shareTools",config:{container:d.find(".bar"),limit:4}});var n=function(i){null!==localStorage&&localStorage.setItem("chooseviewtype",i)};d.on("click",s.listSwitch,function(){if(!e(this).parent().hasClass("list-switched-on")){var i={type:"list"};n("list"),o.trigger("system-show-view-mode",i)}}),d.on("click",s.gridSwitch,function(){if(!e(this).parent().hasClass("grid-switched-on")){var i={type:"grid"};n("grid"),o.trigger("system-show-view-mode",i)}}),o.listen("system-update-view-mode",function(i){var e=d.find(s.listGridSwitch);"list"===i.type?(e.addClass("list-switched-on").removeClass("grid-switched-on"),e.find("a[node-type=gydfNPvo]").hide(),e.find("a[node-type=slQlVG]").show()):(e.removeClass("list-switched-on").addClass("grid-switched-on"),e.find("a[node-type=gydfNPvo]").show(),e.find("a[node-type=slQlVG]").hide())});var r=!1,a=!1;t.extend({toolbar:{afterDom:function(i,t){if(i){if(a)return;t===!0&&(a=!0),d.find(s.afterDom).html("").append(i).show()}else i===!1?(d.find(s.afterDom).html(""),a=!1):d.find(s.afterDom).hide();e(window).trigger("resize")},prevDom:function(i,t){if(i){if(r)return;t===!0&&(r=!0),d.find(s.prevDom).html("").append(i).show()}else i===!1?(d.find(s.prevDom).html(""),r=!1):d.find(s.prevDom).hide();e(window).trigger("resize")},showDefault:function(){d.find(s.userDom).hide(),d.find(s.defaultDom).show(),d.find(s.prevDom).children().length&&d.find(s.prevDom).show(),d.find(s.afterDom).children().length&&d.find(s.afterDom).show(),d.find(s.timeLineDom).hide(),d.removeClass("module-toolbar-hackbg")},setDom:function(i){d.find(s.defaultDom).hide(),d.find(s.prevDom).hide(),d.find(s.afterDom).hide(),d.find(s.timeLineDom).hide(),d.find(s.userDom).html("").append(i).show(),d.removeClass("module-toolbar-hackbg"),e(window).trigger("resize")},showTimelineDom:function(){d.find(s.defaultDom).hide(),d.find(s.prevDom).hide(),d.find(s.afterDom).hide(),d.find(s.userDom).hide(),d.find(s.timeLineDom).show(),d.addClass("module-toolbar-hackbg"),e(window).trigger("resize")}}})});
;define("disk-share:widget/pageModule/start/multi.js",function(e){e("disk-share:widget/system/util/contextExtend.js"),e("disk-share:widget/pageModule/share-header/share-header.js"),e("disk-share:widget/pageModule/share-header/share-top-bar/share-top-bar.js"),e("disk-share:widget/pageModule/share-person-info/share-person-info.js"),e("disk-share:widget/pageModule/toolbar/toolbar.js"),e("disk-share:widget/pageModule/list/listInit.js"),e("disk-share:widget/pageModule/list/listMenu.js"),e("disk-share:widget/pageModule/list/share-multi.js"),e("disk-share:widget/pageModule/start/preFetchData.js");var s=e("system-core:context/context.js").instanceForSystem.spy;s.performance("multi_page","web-share"),s.getSpyInstance(function(){var e=window.locals.get("ufcTime");e&&s.sendTimePerf("shareList",e,{group:"share_perf",project:"web-share",pageName:"multi_page",clientType:"web"}).end({whiteScreen:Math.round(window.__perf_white_screen),firstScreen:Math.round(window.__perf_first_screen),completeScreen:Math.round(performance.now())})})});