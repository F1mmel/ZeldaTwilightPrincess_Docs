"use strict";(self.webpackChunkdecomp_www=self.webpackChunkdecomp_www||[]).push([[782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Installation",id:"installation",description:"How to set up the project",sidebar_position:0},i=void 0,s={unversionedId:"contribute/installation",id:"contribute/installation",title:"Installation",description:"How to set up the project",source:"@site/docs/contribute/1_installation.mdx",sourceDirName:"contribute",slug:"/contribute/installation",permalink:"/contribute/installation",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",id:"installation",description:"How to set up the project",sidebar_position:0},sidebar:"auto",previous:{title:"Contribue",permalink:"/contribute/"},next:{title:"Decompiler Setup",permalink:"/contribute/decompiler-setup"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3},{value:"Problems?",id:"problems",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unity"),": Version 2020.3 or higher.  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Git"),": Installed on your system.  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Third-Party Assets"),": The following third-party assets are required but are not included in the repository. You must obtain and import them into Unity manually:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/massive-clouds-screen-space-volumetric-clouds-131898"},"Massive Clouds - Screen Space Volumetric Clouds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/global-snow-2-248191"},"Global Snow 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/tools/animation/dotween-hotween-v2-27676"},"DOTween")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/tools/gui/text-animator-for-unity-254677"},"Text Animator for Unity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/templates/systems/third-person-system-3-0-2022-214330"},"Third Person System 3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/tools/animation/dynamic-bone-16743"},"Dynamic Bone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/tools/animation/final-ik-14290"},"FinalIK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/vfx/shaders/stylized-water-2-170386"},"Stylized Water 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/vfx/shaders/dynamic-effects-for-stylized-water-2-extension-257865"},"Dynamic Effects for Stylized Water 2 (Extension)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/underwater-rendering-for-stylized-water-2-extension-185030"},"Underwater Rendering for Stylized Water 2 (Extension)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/tools/animation/pegasus-65397"},"Pegasus"))))),(0,n.kt)("h3",{id:"steps"},"Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Clone the repository:")," ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone https://github.com/F1mmel/ZeldaTwilightPrincessRemastered.git\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Import the third-party assets listed above into the Unity project"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Download the ",(0,n.kt)("a",{parentName:"strong",href:"https://zelda.fimmel.dev/Downloads/ZeldaTPConfigurator"},"ZeldaTPConfigurator"))),(0,n.kt)("p",{parentName:"li"},"The ZeldaTPConfigurator tool is essential for applying important modifications to your GameCube ISO before running the game. These adjustments ensure that the remastered version operates smoothly and provides the best possible experience.  "),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("strong",{parentName:"p"},"Open the Tool:"),(0,n.kt)("br",{parentName:"p"}),"\n",'Put the GameCube iso file into the "iso/" folder and launch the executable.'),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("strong",{parentName:"p"},"Apply Modifications:"),(0,n.kt)("br",{parentName:"p"}),"\n","Follow the on-screen instructions to:  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Optimize the game's performance for modern systems.  "),(0,n.kt)("li",{parentName:"ul"},"Enable additional graphical enhancements and fixes.  "),(0,n.kt)("li",{parentName:"ul"},"Apply patches for compatibility with the remastered engine.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Verify Integrity:"),(0,n.kt)("br",{parentName:"p"}),"\n","The tool will perform a final check to ensure all required changes were applied successfully.  "))),(0,n.kt)("admonition",{title:"Important  ",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The Configurator will not need delete or overwrite the iso file!")),(0,n.kt)("h2",{id:"problems"},"Problems?"),(0,n.kt)("p",null,"Feel free to ask for help on the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.zelda.deco.mp/"},"Zelda Decompilation Discord server")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"#tp-decomp-help")," channel!"))}c.isMDXComponent=!0}}]);