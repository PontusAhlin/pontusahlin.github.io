(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1994],{54314:function(e,t,i){"use strict";i.d(t,{Z:function(){return w}});var l=i(8307),a=i(67294),s=i(51057),n=i(16745),r=i(16362),o=i(13375),c=i(53226),m=i(2664),d=i(96580),u=i(3316),h=i(96995),g=i(99574),p=i(99068);let v=e=>t=>(0,p.cd)("wish-list-nudge")(t)&&!t.wishListNudge.wishListNudgeHidden&&(0,h.Qb)(t)&&!(0,g.B)(e)(t)&&(0,h.bc)(t)>=5635336;var x=i(19673),j=i(85893);function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,l)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach(function(t){(0,l.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var w=(0,a.memo)(function(e){let{className:t="",existsInWishList:i,wishListCount:l=0,onClick:a,iconOnly:h,itemId:g,isOwnItem:p}=e,{t:f}=(0,s.I4)(),w=(0,m.I0)(),y=(0,u.Z)(),b=(0,x.C)(v(null!=g?g:-1)),I=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"text-styled",children:f(i?"vip_savedInWishlist":"vip_saveInWishlist")}),i?(0,j.jsx)(n.Z,{className:"icon icon-danger icon-after"}):(0,j.jsx)(r.Z,{className:"icon icon-after"})]}),N=i?(0,j.jsx)(n.Z,{className:"icon icon-danger icon-md"}):(0,j.jsx)(r.Z,{className:"icon icon-md"}),k=()=>{w((0,d.z2)())};return(0,j.jsx)(c.J,{title:f("vip_wishlist_hint_title"),text:f("vip_wishlist_hint_text"),buttonText:f("vip_wishlist_hint_button"),onClick:()=>{a(),k()},onClose:k,defaultOpen:b,matchAnchorWidth:y,children:(0,j.jsxs)("button",_(_({},i?{"data-remove-from-wish-list":!0}:{"data-add-to-wish-list":!0}),{},{className:t,onClick:a,children:[h?N:I,l>0&&p?(0,j.jsx)("span",{className:"size-oslo",style:{marginLeft:"0.25rem"},children:(0,o.Ix)(l)}):null]}))})})},22042:function(e,t,i){"use strict";i.d(t,{P:function(){return I}});var l=i(67294),a=i(26916),s=i(37343),n=i(33222),r=i(4021),o=i.n(r),c=i(69120),m=i(81361),d=i(78381),u=i(85893);let h=e=>{let{image:{largeFit:t},defaultAltText:i,onClick:a,isOneImage:s}=e,n=(0,l.useRef)(null),r=(0,c.N)(n),h=(0,m.aS)("tgl-550-new-image-display",0);if(!t)return null;let g=1===h,p=2===h;return g||p?(0,u.jsxs)("div",{ref:n,className:(0,d.A)("cursor-pointer position-relative",s?o().aspectRatio3By2:o().aspectRatio1By1),onClick:()=>{null==a||a(null!=r?r:0)},children:[(p||s)&&(0,u.jsx)("img",{className:o().imageGalleryItemExperimentBlurred,src:t,sizes:"100vw",alt:i}),(0,u.jsx)("img",{className:(0,d.A)(o().imageGalleryItemExperiment,g&&!s?o().objectFitCover:o().objectFitContain),src:t,sizes:"100vw",alt:i})]}):(0,u.jsx)("div",{ref:n,className:o().wrapper,onClick:()=>{null==a||a(null!=r?r:0)},children:(0,u.jsx)("img",{className:o().imageGalleryItem,src:t,srcSet:t,sizes:"100vw",alt:i})})};var g=i(33935),p=i(72099),v=i.n(p),x=i(74224);let j=e=>{let{images:t,onClick:i,onThumbnailHover:a,itemInView:s}=e,n=(0,l.useRef)(null);if(!t)return null;let r=t.length>5;return(0,u.jsx)("div",{className:v().gridContainer,children:null==t?void 0:t.slice(0,5).map((e,l)=>{var o;return(0,u.jsxs)("div",{className:v().gridItem,children:[s===l&&(0,u.jsx)("button",{className:v().thumbnailImageOverlay,onClick:()=>{null==i||i(l)}}),4===l&&r&&(0,u.jsx)("button",{className:v().thumbnailImageOverlayLastItem,onClick:()=>{null==i||i(l)},children:(0,u.jsxs)(x.x,{color:"white",size:"amsterdam",fontWeight:"heavy",font:"hansen",children:["+",t.length-5]})}),(0,u.jsx)("button",{onFocus:()=>{null==a||a(l)},ref:n,autoFocus:s===l,tabIndex:s===l?0:void 0,className:v().itemWrapper,onClick:()=>{null==i||i(l)},onMouseEnter:()=>{null==a||a(l)},children:(0,u.jsx)("img",{alt:`thumbnail${l}`,src:null!==(o=e.smallFit)&&void 0!==o?o:""})})]},l)})})};var f=i(30174),_=i(8306),w=i(51057),y=i(94692),b=i(56216);let I=e=>{let{images:t,isVideoEnabled:i,isAuthenticated:l}=e;return(0,u.jsx)(a.fC,{id:"view-item-carousel",numberItemsToShow:1,numberItemsToScroll:1,gap:"0",children:(0,u.jsx)(N,{images:t,isVideoEnabled:i,isAuthenticated:l})})},N=e=>{let{images:t,isVideoEnabled:i,isAuthenticated:r}=e,[c,p]=l.useState(-1),[v,x]=l.useState(-1),I=(0,f.MO)(),{t:N}=(0,w.I4)(),k=(0,m.aS)("tgl-550-new-image-display",0),C=1===k||2===k;if(!t)return null;let O=t.length>1,E=1===t.length,z=t.length>2,P=t.length>3,W=e=>{I(e),x(e)},B=()=>{y.b.trackAction("VIP","Vip Carousel","Open click gallery")};return(0,u.jsxs)(u.Fragment,{children:[C?(0,u.jsxs)("div",{className:(0,d.A)(O&&o().imageGrid),children:[(0,u.jsxs)(a.im,{className:"pointer-events",children:[(0,u.jsx)(s.C,{size:"md",light:!0,className:o().carouselButtonExperiment}),(0,u.jsx)(n.K,{showCurrentPosition:O,elementInView:e=>{x(e)},children:null==t?void 0:t.map(e=>(0,u.jsxs)(_.d,{children:[(0,u.jsx)(h,{image:e,defaultAltText:"thumbnail",onClick:e=>{p(e),B()},isOneImage:E}),r&&(0,u.jsx)(b.f,{className:o().authenticatedItemWatermark})]},e.thumbnail))}),(0,u.jsx)(s.k,{size:"md",light:!0,className:o().carouselButton}),c>=0?(0,u.jsx)(g.k,{initialSlideIndex:c,closeModalCallback:()=>{p(-1)},images:t,isVideoEnabled:i}):null]}),O&&(0,u.jsxs)("div",{className:o().sideImageWrapper,children:[(0,u.jsx)("div",{className:o().sideImage1,onClick:()=>{p(1),B()},children:t[1].smallFit&&(0,u.jsx)("img",{className:o().sideImageImage,src:t[1].smallFit,alt:"galleryimage 2"})}),(0,u.jsxs)("div",{className:(0,d.A)(o().sideImage2,"d-flex"),children:[z&&t[2].smallFit?(0,u.jsx)("img",{className:o().sideImageImage,src:t[2].smallFit,alt:"galleryimage 3",onClick:()=>{p(2),B()}}):(0,u.jsx)("button",{onClick:()=>{p(0),B()},className:(0,d.A)(o().thirdImageOverlay,"btn d-flex align-items-center justify-content-center w-100 h-100 font-hansen size-london text-white font-weight-bold"),children:N("item-carousel-show-gallery")}),P&&(0,u.jsxs)("button",{onClick:()=>{p(2),B()},className:(0,d.A)(o().thirdImageOverlay,"btn d-flex align-items-center justify-content-center w-100 h-100 font-hansen size-london text-white font-weight-bold"),children:["+",t.length-2]})]})]})]}):(0,u.jsxs)(a.im,{className:o().carouselWrapper,children:[(0,u.jsx)(s.C,{size:"md",light:!0,className:o().carouselButton}),(0,u.jsx)(n.K,{showCurrentPosition:O,elementInView:e=>{x(e)},children:null==t?void 0:t.map(e=>(0,u.jsxs)(_.d,{children:[(0,u.jsx)(h,{image:e,defaultAltText:"thumbnail",onClick:e=>{p(e)}}),r&&(0,u.jsx)(b.f,{className:o().authenticatedItemWatermark})]},e.thumbnail))}),(0,u.jsx)(s.k,{size:"md",light:!0,className:o().carouselButton}),c>=0?(0,u.jsx)(g.k,{initialSlideIndex:c,closeModalCallback:()=>{p(-1)},images:t,isVideoEnabled:i}):null]}),O&&!C&&(0,u.jsx)(j,{images:t,onThumbnailHover:e=>{W(e)},onClick:e=>{p(e)},itemInView:v})]})}},11994:function(e,t,i){"use strict";i.d(t,{Z:function(){return O}});var l=i(67294),a=i(51057),s=i(94692),n=i(34535),r=i(18807),o=i(13694),c=i(72874),m=i(90769),d=i(19673),u=i(99574),h=i(96995),g=i(59353),p=i(27069),v=i(83923),x=i(79499),j=i(22042),f=i(74224),_=i(20105),w=i(47919),y=i(54314),b=i(26656),I=i(78381),N=i(28678),k=i.n(N),C=i(85893);let O=()=>{let{toLocalizedUrl:e}=(0,a._v)(),t=(0,d.C)(x.qD),{t:i}=(0,a.I4)(),N=(0,d.T)(),O=(0,w.U)(),{isOpen:z,item:P,openedFrom:W}=(0,d.C)(e=>e.quickView),{data:B,isFetching:V,error:A}=(0,p.L)({itemId:(null==P?void 0:P.itemId)||-1,languageCode:t},{skip:!(null!=P&&P.itemId)}),F=(0,d.C)((0,u.B)((null==P?void 0:P.itemId)||-1)),Z=(0,d.C)(h.Qb);if((0,l.useEffect)(()=>{A&&(0,v.k)(A)},[A]),(0,l.useEffect)(()=>{B&&W&&r.X2("Quick View",`Open: from ${W}`)},[B,W]),!z)return null;let{itemId:L,imageFormats:S,shortDescription:G,url:M,endDate:D,itemType:R}=B||{},T=()=>{N((0,g.z5)())};return(0,C.jsx)(c.Z,{className:(0,I.A)(k().modal,"position-relative"),mediaQuery:{minWidth:1024},onDismiss:T,children:(0,C.jsxs)("div",{className:"w-100 p-3",children:[(0,C.jsx)("div",{className:"position-absolute",style:{top:"10px",right:"10px",zIndex:1},children:(0,C.jsx)(m.z,{theme:"light",round:!0,onClick:()=>T(),children:(0,C.jsx)(n.Z,{className:"icon icon-sm"})})}),V?(0,C.jsx)("div",{className:k().placeholder}):(0,C.jsx)(j.P,{images:S}),(0,C.jsx)(E,{isLoading:V,width:"20%",children:(0,C.jsx)(f.x,{font:"hansen",size:"oslo",className:"mt-2",children:"ShopItem"===R?i("vip_shop"):(0,_.kC)(O(D,{includeWeekday:!0}))})}),(0,C.jsx)(E,{isLoading:V,children:(0,C.jsx)(b.X,{size:"london",as:"h2",branded:!0,className:"mt-1",children:V?"W":G})}),(0,C.jsx)(m.z,{fluid:!0,brandedText:!0,className:"font-weight-bold mt-3",href:e(M),onClick:()=>{s.b.trackAction("Quick View","Navigation","View full listing")},children:i("mytQuickView_viewFullListing")}),(0,C.jsx)(y.Z,{existsInWishList:F,className:"mt-2 btn btn-light btn-icon btn-fluid d-flex justify-content-center align-items-center",onClick:()=>{Z||T(),B&&N(o.d(B.itemId))},itemId:L})]})})},E=e=>{let{isLoading:t,children:i,width:a}=e,s=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(s.current&&t){let t=0,n=0;for(let a=0;a<(null!==(e=null===(i=s.current)||void 0===i||null===(i=i.children)||void 0===i?void 0:i.length)&&void 0!==e?e:0);a+=1){var e,i,l;let r=null===(l=s.current)||void 0===l?void 0:l.children[a];r&&(t+=r.clientHeight,n+=r.clientWidth)}s.current.style.height=`${t}px`,s.current.style.width=null!=a?a:`${n}px`}},[s,a,t]),(0,l.useEffect)(()=>{!t&&s.current&&(s.current.style.height="auto",s.current.style.width="auto")},[t]),(0,C.jsx)("div",{ref:s,className:(0,I.A)(t&&"animation-loading-shimmer"),children:(0,C.jsx)("div",{style:{opacity:t?0:100},children:i})})}},33935:function(e,t,i){"use strict";i.d(t,{k:function(){return W}});var l=i(67294),a=i(51057),s=i(61969),n=i(34535),r=i(47793),o=i.n(r),c=i(85893);let m=e=>{let{className:t,autoPlay:i,playsInline:a,controls:s,loop:n,muted:r,image:m,isInView:d}=e,{normal:u,video:h}=m,g=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=g.current;d?e.play():e.pause()},[d]),(0,c.jsx)("video",{ref:g,className:`${o().viewItemVideo} ${t}`,autoPlay:i,playsInline:a,muted:r,loop:n,controls:s,poster:u,children:(0,c.jsx)("source",{type:"video/mp4",src:h})})};m.defaultProps={className:"",autoPlay:!0,playsInline:!0,muted:!0,loop:!0,controls:!1};var d=i(90769),u=i(59852),h=i.n(u),g=i(78381),p=i(26916),v=i(33222),x=i(37343),j=i(36539),f=i(8306),_=i(59208),w=i(4730);let y=["styles"];function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}var I=e=>{let{styles:t={}}=e,i=(0,w.Z)(e,y);return l.createElement("svg",b({viewBox:"0 0 21 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),l.createElement("path",{d:"M21 0v3H0V0h21z",fill:"#fff"}))};let N=["styles"];function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}var C=e=>{let{styles:t={}}=e,i=(0,w.Z)(e,N);return l.createElement("svg",k({viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),l.createElement("path",{d:"M19 8.14v2.72H0V8.14h19z",fill:"#fff"}),l.createElement("path",{d:"M10.86 19H8.14V0h2.72v19z",fill:"#fff"}))},O=i(51289),E=i.n(O);let z=e=>{let{zoomLevel:t,setZoomLevel:i}=e;return(0,c.jsxs)("div",{className:(0,g.A)(E().buttonWrapper),children:[(0,c.jsx)(d.z,{className:"mr-2",title:"Zoom Out",size:"md",theme:"translucent",round:!0,disabled:t<=1,icon:(0,c.jsx)(I,{className:"icon icon-sm "}),onClick:()=>i(e=>Math.max(e/1.2,1))}),(0,c.jsx)(d.z,{title:"Zoom In",size:"md",theme:"translucent",round:!0,icon:(0,c.jsx)(C,{className:"icon icon-sm"}),onClick:()=>i(e=>1.2*e)})]})};var P=i(38671);let W=e=>{let{images:t,initialSlideIndex:i=0,closeModalCallback:r,isVideoEnabled:o}=e,{t:u}=(0,a.I4)(),{0:w,1:y}=(0,l.useState)(1),b=(0,P.Z)();(0,l.useEffect)(()=>{let e=e=>{"Escape"===e.key&&r()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[r]);let I=e=>{e.stopPropagation(),r()},N=e=>e.stopPropagation();return t?(0,c.jsx)(s.Vq,{defaultOpen:!0,onOpenChange:e=>{e||r()},children:(0,c.jsx)(s.PK,{forceMount:!0,children:(0,c.jsx)(s.t9,{className:(0,g.A)(h().overlay,"image-gallery-modal d-flex justify-content-center align-items-center w-100 h-100"),onClick:r,children:(0,c.jsx)(_.X,{children:(0,c.jsx)("div",{className:"w-100",onClick:e=>e.stopPropagation(),children:(0,c.jsxs)(p.lr,{id:"gallery-carousel",gap:"0",numberItemsToScroll:1,padX:!0,initialSlideIndex:i,children:[(0,c.jsx)(x.C,{size:"md",light:!0,className:"image-gallery-modal__button"}),(0,c.jsx)("div",{style:{transform:`scale(${w})`,transition:"transform 0.3s ease-in-out"},children:(0,c.jsx)(v.K,{children:t.map((e,t)=>(0,c.jsx)(f.d,{className:"image-gallery-modal__image-gutter",onClick:I,children:(0,c.jsx)("div",{className:`position-relative image-gallery-modal-item ${o&&e.video?"w-100 h-100 d-flex":""}`,onClick:N,children:o&&e.video?(0,c.jsx)(m,{className:"py-7",controls:!0,muted:!1,image:e,isInView:t===i},t):(0,c.jsx)("img",{src:e.normal||"//static.tradera.net/internal/site/auction/noImage_344x258.gif",className:"image-gallery-modal-img",alt:`img${t}`})})},t))})}),(0,c.jsx)(x.k,{size:"md",light:!0,className:"image-gallery-modal__button"}),(0,c.jsx)(z,{zoomLevel:w,setZoomLevel:y}),(0,c.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[(0,c.jsx)(d.z,{title:u("vip_image_gallery_modal_close"),size:b?"sm":"md",theme:"translucent",round:!0,className:"image-gallery-close",onClick:I,children:(0,c.jsx)(n.Z,{className:b?"icon icon-sm":"icon icon-md"})}),(0,c.jsx)(j.h,{className:"image-gallery-scroll",autoFocus:!0})]})]})})})})})}):null}},4021:function(e){e.exports={wrapper:"view-item-carousel_wrapper__gyMZy",imageGalleryItem:"view-item-carousel_imageGalleryItem__m6L0J",carouselButton:"view-item-carousel_carouselButton__DljjX",carouselWrapper:"view-item-carousel_carouselWrapper__qdWN1",carouselButtonExperiment:"view-item-carousel_carouselButtonExperiment__28Pn4",aspectRatio1By1:"view-item-carousel_aspectRatio1By1__z0xDN",aspectRatio3By2:"view-item-carousel_aspectRatio3By2__n124s",imageGalleryItemExperiment:"view-item-carousel_imageGalleryItemExperiment__LppSG",objectFitCover:"view-item-carousel_objectFitCover__vwzFo",objectFitContain:"view-item-carousel_objectFitContain__Mdkrb",imageGalleryItemExperimentBlurred:"view-item-carousel_imageGalleryItemExperimentBlurred__5EHFM",imageGrid:"view-item-carousel_imageGrid__E8c4S",sideImageWrapper:"view-item-carousel_sideImageWrapper___h_IV",sideImage1:"view-item-carousel_sideImage1__yOBHG",sideImage2:"view-item-carousel_sideImage2__T_nAc",sideImageImage:"view-item-carousel_sideImageImage__t4Pow",thirdImageOverlay:"view-item-carousel_thirdImageOverlay__qDN65",authenticatedItemWatermark:"view-item-carousel_authenticatedItemWatermark__1m6ZT"}},72099:function(e){e.exports={gridContainer:"image-thumbnails_gridContainer__8fUmQ",gridItem:"image-thumbnails_gridItem__kcQCd",itemWrapper:"image-thumbnails_itemWrapper__2DRcq",thumbnailImageOverlay:"image-thumbnails_thumbnailImageOverlay__ktIIv",thumbnailImageOverlayLastItem:"image-thumbnails_thumbnailImageOverlayLastItem__VsD5P"}},28678:function(e){e.exports={modal:"quick-view-modal_modal__WMa3o",placeholder:"quick-view-modal_placeholder__AtlPn"}},47793:function(e){e.exports={"view-item-video":"view-item-video_view-item-video__APXjN",viewItemVideo:"view-item-video_view-item-video__APXjN"}},51289:function(e){e.exports={buttonWrapper:"zoom-controller_buttonWrapper__2Ecb8"}}}]);
//# sourceMappingURL=1994-c839320e9d5780d1.js.map