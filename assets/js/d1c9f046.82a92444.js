(self.webpackChunknodify_docs=self.webpackChunknodify_docs||[]).push([[3041],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7825:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},p={unversionedId:"api/SelectionHelper",id:"api/SelectionHelper",isDocsHomePage:!1,title:"SelectionHelper Class",description:"Namespace: Nodify",source:"@site/docs/api/SelectionHelper.md",sourceDirName:"api",slug:"/api/SelectionHelper",permalink:"/nodify/docs/api/SelectionHelper",editUrl:"https://github.com/miroiu/nodify/edit/docs/docs/api/SelectionHelper.md",version:"current",frontMatter:{},sidebar:"api",previous:{title:"ResizeEventHandler Delegate",permalink:"/nodify/docs/api/ResizeEventHandler"},next:{title:"SelectionType Enum",permalink:"/nodify/docs/api/SelectionType"}},l=[{value:"Constructors",id:"constructors",children:[{value:"SelectionHelper(NodifyEditor)",id:"selectionhelpernodifyeditor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"End()",id:"end",children:[]},{value:"Start(Point, SelectionType?)",id:"startpoint-selectiontype",children:[]},{value:"Update(Point)",id:"updatepoint",children:[]}]}],c={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Namespace:")," Nodify  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Assembly:")," Nodify  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inheritance:")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object")," \u2192 ",(0,i.kt)("a",{parentName:"p",href:"SelectionHelper"},"SelectionHelper"),"  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"References:")," ",(0,i.kt)("a",{parentName:"p",href:"NodifyEditor"},"NodifyEditor"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public sealed class SelectionHelper  \n")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"selectionhelpernodifyeditor"},"SelectionHelper(NodifyEditor)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public SelectionHelper(NodifyEditor host);  \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"host")," ",(0,i.kt)("a",{parentName:"p",href:"NodifyEditor"},"NodifyEditor"),"  "),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"end"},"End()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public void End();  \n")),(0,i.kt)("h3",{id:"startpoint-selectiontype"},"Start(Point, SelectionType?)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public void Start(Point location, SelectionType? selectionType = null);  \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"location")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Point"},"Point"),"  "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"selectionType")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Nullable"},"SelectionType?"),"  "),(0,i.kt)("h3",{id:"updatepoint"},"Update(Point)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public void Update(Point endLocation);  \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"endLocation")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Point"},"Point")))}s.isMDXComponent=!0}}]);