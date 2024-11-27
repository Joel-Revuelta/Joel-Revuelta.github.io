import{d as x,r as U}from"./chunk-4UHD52QU.js";import{Aa as E,Ca as F,Fa as H,Ha as W,La as w,O as y,P as R,Y as I,Z as L,_ as O,a as T,gb as C,hb as _,i as D,la as v,na as M,ra as P,rb as N}from"./chunk-QL3XNBKH.js";var B=class a{static isArray(s,t=!0){return Array.isArray(s)&&(t||s.length!==0)}static isObject(s,t=!0){return typeof s=="object"&&!Array.isArray(s)&&s!=null&&(t||Object.keys(s).length!==0)}static equals(s,t,e){return e?this.resolveFieldData(s,e)===this.resolveFieldData(t,e):this.equalsByValue(s,t)}static equalsByValue(s,t){if(s===t)return!0;if(s&&t&&typeof s=="object"&&typeof t=="object"){var e=Array.isArray(s),i=Array.isArray(t),n,r,o;if(e&&i){if(r=s.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!this.equalsByValue(s[n],t[n]))return!1;return!0}if(e!=i)return!1;var c=this.isDate(s),d=this.isDate(t);if(c!=d)return!1;if(c&&d)return s.getTime()==t.getTime();var l=s instanceof RegExp,p=t instanceof RegExp;if(l!=p)return!1;if(l&&p)return s.toString()==t.toString();var u=Object.keys(s);if(r=u.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,u[n]))return!1;for(n=r;n--!==0;)if(o=u[n],!this.equalsByValue(s[o],t[o]))return!1;return!0}return s!==s&&t!==t}static resolveFieldData(s,t){if(s&&t){if(this.isFunction(t))return t(s);if(t.indexOf(".")==-1)return s[t];{let e=t.split("."),i=s;for(let n=0,r=e.length;n<r;++n){if(i==null)return null;i=i[e[n]]}return i}}else return null}static isFunction(s){return!!(s&&s.constructor&&s.call&&s.apply)}static reorderArray(s,t,e){let i;s&&t!==e&&(e>=s.length&&(e%=s.length,t%=s.length),s.splice(e,0,s.splice(t,1)[0]))}static insertIntoOrderedArray(s,t,e,i){if(e.length>0){let n=!1;for(let r=0;r<e.length;r++)if(this.findIndexInList(e[r],i)>t){e.splice(r,0,s),n=!0;break}n||e.push(s)}else e.push(s)}static findIndexInList(s,t){let e=-1;if(t){for(let i=0;i<t.length;i++)if(t[i]==s){e=i;break}}return e}static contains(s,t){if(s!=null&&t&&t.length){for(let e of t)if(this.equals(s,e))return!0}return!1}static removeAccents(s){return s&&(s=s.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),s}static isDate(s){return Object.prototype.toString.call(s)==="[object Date]"}static isEmpty(s){return s==null||s===""||Array.isArray(s)&&s.length===0||!this.isDate(s)&&typeof s=="object"&&Object.keys(s).length===0}static isNotEmpty(s){return!this.isEmpty(s)}static compare(s,t,e,i=1){let n=-1,r=this.isEmpty(s),o=this.isEmpty(t);return r&&o?n=0:r?n=i:o?n=-i:typeof s=="string"&&typeof t=="string"?n=s.localeCompare(t,e,{numeric:!0}):n=s<t?-1:s>t?1:0,n}static sort(s,t,e=1,i,n=1){let r=a.compare(s,t,i,e),o=e;return(a.isEmpty(s)||a.isEmpty(t))&&(o=n===1?e:n),o*r}static merge(s,t){if(!(s==null&&t==null)){{if((s==null||typeof s=="object")&&(t==null||typeof t=="object"))return T(T({},s||{}),t||{});if((s==null||typeof s=="string")&&(t==null||typeof t=="string"))return[s||"",t||""].join(" ")}return t||s}}static isPrintableCharacter(s=""){return this.isNotEmpty(s)&&s.length===1&&s.match(/\S| /)}static getItemValue(s,...t){return this.isFunction(s)?s(...t):s}static findLastIndex(s,t){let e=-1;if(this.isNotEmpty(s))try{e=s.findLastIndex(t)}catch{e=s.lastIndexOf([...s].reverse().find(t))}return e}static findLast(s,t){let e;if(this.isNotEmpty(s))try{e=s.findLast(t)}catch{e=[...s].reverse().find(t)}return e}static deepEquals(s,t){if(s===t)return!0;if(s&&t&&typeof s=="object"&&typeof t=="object"){var e=Array.isArray(s),i=Array.isArray(t),n,r,o;if(e&&i){if(r=s.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!this.deepEquals(s[n],t[n]))return!1;return!0}if(e!=i)return!1;var c=s instanceof Date,d=t instanceof Date;if(c!=d)return!1;if(c&&d)return s.getTime()==t.getTime();var l=s instanceof RegExp,p=t instanceof RegExp;if(l!=p)return!1;if(l&&p)return s.toString()==t.toString();var u=Object.keys(s);if(r=u.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,u[n]))return!1;for(n=r;n--!==0;)if(o=u[n],!this.deepEquals(s[o],t[o]))return!1;return!0}return s!==s&&t!==t}},k=0;function Q(a="pn_id_"){return k++,`${a}${k}`}function $(){let a=[],s=(n,r)=>{let o=a.length>0?a[a.length-1]:{key:n,value:r},c=o.value+(o.key===n?0:r)+2;return a.push({key:n,value:c}),c},t=n=>{a=a.filter(r=>r.value!==n)},e=()=>a.length>0?a[a.length-1].value:0,i=n=>n&&parseInt(n.style.zIndex,10)||0;return{get:i,set:(n,r,o)=>{r&&(r.style.zIndex=String(s(n,o)))},clear:n=>{n&&(t(i(n)),n.style.zIndex="")},getCurrent:()=>e()}}var Z=$();var V=["*"];var h=(()=>{class a{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return a})();var K=(()=>{class a{ripple=!1;inputStyle=w("outlined");overlayOptions={};csp=w({nonce:void 0});filterMatchModeOptions={text:[h.STARTS_WITH,h.CONTAINS,h.NOT_CONTAINS,h.ENDS_WITH,h.EQUALS,h.NOT_EQUALS],numeric:[h.EQUALS,h.NOT_EQUALS,h.LESS_THAN,h.LESS_THAN_OR_EQUAL_TO,h.GREATER_THAN,h.GREATER_THAN_OR_EQUAL_TO],date:[h.DATE_IS,h.DATE_IS_NOT,h.DATE_BEFORE,h.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new D;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=T(T({},this.translation),t),this.translationSource.next(this.translation)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=y({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),at=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=I({type:a,selectors:[["p-header"]],standalone:!0,features:[N],ngContentSelectors:V,decls:1,vars:0,template:function(e,i){e&1&&(C(),_(0))},encapsulation:2})}return a})(),ot=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=I({type:a,selectors:[["p-footer"]],standalone:!0,features:[N],ngContentSelectors:V,decls:1,vars:0,template:function(e,i){e&1&&(C(),_(0))},encapsulation:2})}return a})(),ct=(()=>{class a{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(e){return new(e||a)(E(F))};static \u0275dir=O({type:a,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return a})(),lt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=L({type:a});static \u0275inj=R({})}return a})();var ft=(()=>{let s=class s{constructor(){this.scrollToIdEvent=new M}scrollToId(e){this.scrollToIdEvent.emit(e)}};s.\u0275fac=function(i){return new(i||s)},s.\u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();var g=(()=>{class a{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let i=e.trim().split(" ");for(let n=0;n<i.length;n++)t.classList.add(i[n])}else{let i=e.split(" ");for(let n=0;n<i.length;n++)t.className+=" "+i[n]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n=>this.removeClass(t,n)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,i=0;for(var n=0;n<e.length;n++){if(e[n]==t)return i;e[n].nodeType==1&&i++}return-1}static indexWithinGroup(t,e){let i=t.parentNode?t.parentNode.childNodes:[],n=0;for(var r=0;r<i.length;r++){if(i[r]==t)return n;i[r].attributes&&i[r].attributes[e]&&i[r].nodeType==1&&n++}return-1}static appendOverlay(t,e,i="self"){i!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,i="self",n=!0){t&&e&&(n&&(t.style.minWidth=`${a.getOuterWidth(e)}px`),i==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,i=!0){let n=A=>{if(A)return getComputedStyle(A).getPropertyValue("position")==="relative"?A:n(A.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),o=e.offsetHeight??e.getBoundingClientRect().height,c=e.getBoundingClientRect(),d=this.getWindowScrollTop(),l=this.getWindowScrollLeft(),p=this.getViewport(),f=n(t)?.getBoundingClientRect()||{top:-1*d,left:-1*l},m,S;c.top+o+r.height>p.height?(m=c.top-f.top-r.height,t.style.transformOrigin="bottom",c.top+m<0&&(m=-1*c.top)):(m=o+c.top-f.top,t.style.transformOrigin="top");let b=c.left+r.width-p.width,Y=c.left-f.left;r.width>p.width?S=(c.left-f.left)*-1:b>0?S=Y-b:S=c.left-f.left,t.style.top=m+"px",t.style.left=S+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,e,i=!0){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=n.height,o=n.width,c=e.offsetHeight??e.getBoundingClientRect().height,d=e.offsetWidth??e.getBoundingClientRect().width,l=e.getBoundingClientRect(),p=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),f=this.getViewport(),m,S;l.top+c+r>f.height?(m=l.top+p-r,t.style.transformOrigin="bottom",m<0&&(m=p)):(m=c+l.top+p,t.style.transformOrigin="top"),l.left+o>f.width?S=Math.max(0,l.left+u+d-o):S=l.left+u,t.style.top=m+"px",t.style.left=S+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let i=this.getParents(t),n=/(auto|scroll)/,r=o=>{let c=window.getComputedStyle(o,null);return n.test(c.getPropertyValue("overflow"))||n.test(c.getPropertyValue("overflowX"))||n.test(c.getPropertyValue("overflowY"))};for(let o of i){let c=o.nodeType===1&&o.dataset.scrollselectors;if(c){let d=c.split(",");for(let l of d){let p=this.findSingle(o,l);p&&r(p)&&e.push(p)}}o.nodeType!==9&&r(o)&&e.push(o)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=i?parseFloat(i):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),o=r?parseFloat(r):0,c=t.getBoundingClientRect(),l=e.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-n-o,p=t.scrollTop,u=t.clientHeight,f=this.getOuterHeight(e);l<0?t.scrollTop=p+l:l+f>u&&(t.scrollTop=p+l-u+f)}static fadeIn(t,e){t.style.opacity=0;let i=+new Date,n=0,r=function(){n=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/e,t.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(t,e){var i=1,n=50,r=e,o=n/r;let c=setInterval(()=>{i=i-o,i<=0&&(i=0,clearInterval(c)),t.style.opacity=i},n)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var i=Element.prototype,n=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return n.call(t,e)}static getOuterWidth(t,e){let i=t.offsetWidth;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return i}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static width(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),e}static getOuterHeight(t,e){let i=t.offsetHeight;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return i}static getHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),e}static getViewport(){let t=window,e=document,i=e.documentElement,n=e.getElementsByTagName("body")[0],r=t.innerWidth||i.clientWidth||n.clientWidth,o=t.innerHeight||i.clientHeight||n.clientHeight;return{width:r,height:o}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var i=t.indexOf("Trident/");if(i>0){var n=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,i){t[e].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let i=this.find(t,this.getFocusableSelectorString(e)),n=[];for(let r of i){let o=getComputedStyle(r);this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden"&&n.push(r)}return n}static getFocusableElement(t,e=""){let i=this.findSingle(t,this.getFocusableSelectorString(e));if(i){let n=getComputedStyle(i);if(this.isVisible(i)&&n.display!="none"&&n.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,e=""){let i=this.getFocusableElements(t,e);return i.length>0?i[0]:null}static getLastFocusableElement(t,e){let i=this.getFocusableElements(t,e);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,e=!1){let i=a.getFocusableElements(t),n=0;if(i&&i.length>0){let r=i.indexOf(i[0].ownerDocument.activeElement);e?r==-1||r===0?n=i.length-1:n=r-1:r!=-1&&r!==i.length-1&&(n=r+1)}return i[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(o=>!!(o&&o.constructor&&o.call&&o.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let i=t.getAttribute(e);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...i){if(t){let n=document.createElement(t);return this.setAttributes(n,e),n.append(...i),n}}static setAttribute(t,e="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(e,i)}static setAttributes(t,e={}){if(this.isElement(t)){let i=(n,r)=>{let o=t?.$attrs?.[n]?[t?.$attrs?.[n]]:[];return[r].flat().reduce((c,d)=>{if(d!=null){let l=typeof d;if(l==="string"||l==="number")c.push(d);else if(l==="object"){let p=Array.isArray(d)?i(n,d):Object.entries(d).map(([u,f])=>n==="style"&&(f||f===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?u:void 0);c=p.length?c.concat(p.filter(u=>!!u)):c}}return c},o)};Object.entries(e).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="pBind"?this.setAttributes(t,r):(r=n==="class"?[...new Set(i("class",r))].join(" ").trim():n==="style"?i("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return a})(),q=class{element;listener;scrollableParents;constructor(s,t=()=>{}){this.element=s,this.listener=t}bindScrollListener(){this.scrollableParents=g.getScrollableParents(this.element);for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let s=0;s<this.scrollableParents.length;s++)this.scrollableParents[s].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Lt=(()=>{class a{document;platformId;renderer;el;zone;config;constructor(t,e,i,n,r,o){this.document=t,this.platformId=e,this.renderer=i,this.el=n,this.zone=r,this.config=o}animationListener;mouseDownListener;timeout;ngAfterViewInit(){U(this.platformId)&&this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))})}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(g.removeClass(e,"p-ink-active"),!g.getHeight(e)&&!g.getWidth(e)){let o=Math.max(g.getOuterWidth(this.el.nativeElement),g.getOuterHeight(this.el.nativeElement));e.style.height=o+"px",e.style.width=o+"px"}let i=g.getOffset(this.el.nativeElement),n=t.pageX-i.left+this.document.body.scrollTop-g.getWidth(e)/2,r=t.pageY-i.top+this.document.body.scrollLeft-g.getHeight(e)/2;this.renderer.setStyle(e,"top",r+"px"),this.renderer.setStyle(e,"left",n+"px"),g.addClass(e,"p-ink-active"),this.timeout=setTimeout(()=>{let o=this.getInk();o&&g.removeClass(o,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&g.removeClass(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),g.removeClass(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,g.removeElement(t))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}static \u0275fac=function(e){return new(e||a)(E(x),E(P),E(H),E(v),E(W),E(K,8))};static \u0275dir=O({type:a,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple","p-element"],standalone:!0})}return a})(),Ot=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=L({type:a});static \u0275inj=R({})}return a})();export{B as a,Q as b,Z as c,K as d,at as e,ot as f,ct as g,lt as h,g as i,q as j,Lt as k,Ot as l,ft as m};