(self.webpackChunknodify_docs=self.webpackChunknodify_docs||[]).push([[7292],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1133:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={},p={unversionedId:"api/ConnectorEventHandler",id:"api/ConnectorEventHandler",isDocsHomePage:!1,title:"ConnectorEventHandler Delegate",description:"Namespace: Nodify",source:"@site/docs/api/ConnectorEventHandler.md",sourceDirName:"api",slug:"/api/ConnectorEventHandler",permalink:"/nodify/docs/api/ConnectorEventHandler",editUrl:"https://github.com/miroiu/nodify/edit/docs/docs/api/ConnectorEventHandler.md",version:"current",frontMatter:{},sidebar:"api",previous:{title:"ConnectorEventArgs Class",permalink:"/nodify/docs/api/ConnectorEventArgs"},next:{title:"DebugConverter Class",permalink:"/nodify/docs/api/DebugConverter"}},i=[],s={toc:i};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Namespace:")," Nodify  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Assembly:")," Nodify  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inheritance:")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Delegate"},"Delegate")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.MulticastDelegate"},"MulticastDelegate")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"ConnectorEventHandler"},"ConnectorEventHandler"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"References:")," ",(0,a.kt)("a",{parentName:"p",href:"ConnectorEventArgs"},"ConnectorEventArgs"),", ",(0,a.kt)("a",{parentName:"p",href:"Connector"},"Connector"),"  "),(0,a.kt)("p",null,"Represents the method that will handle ",(0,a.kt)("a",{parentName:"p",href:"Connector"},"Connector")," related routed events.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public delegate void ConnectorEventHandler(object sender, ConnectorEventArgs e);  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sender")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),": The object where the event handler is attached.  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"e")," ",(0,a.kt)("a",{parentName:"p",href:"ConnectorEventArgs"},"ConnectorEventArgs"),": The event data."))}l.isMDXComponent=!0}}]);