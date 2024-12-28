(function(){"use strict";var e={7878:function(e,t,o){o(4603),o(7566),o(8721);var i=o(5130),a=o(6768);const r={class:"main"},n={class:"main main--no-blend"};function s(e,t,o,i,s,c){const l=(0,a.g2)("HeroComponent"),d=(0,a.g2)("StatusSection"),p=(0,a.g2)("HobbiesSection"),g=(0,a.g2)("ToolsSection"),m=(0,a.g2)("ProjectsSection"),h=(0,a.g2)("MediaTechSection"),u=(0,a.g2)("FooterComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(l),(0,a.Lk)("div",r,[(0,a.bF)(d),(0,a.bF)(p),(0,a.bF)(g),(0,a.bF)(m)]),(0,a.Lk)("div",n,[(0,a.bF)(h)]),(0,a.bF)(u)],64)}var c=o(9975),l=o.p+"img/me.10eec139.png";const d={class:"hero__wrapper"};function p(e,t){return(0,a.uX)(),(0,a.CE)("div",d,t[0]||(t[0]=[(0,a.Fv)('<div class="hero"><div class="title-creative"></div><div class="personal__container" tabindex="0"><div class="personal__title text-xs">Annelies Vaandrager</div><img class="personal__picture" src="'+l+'"></div></div><div class="title-creative-developer"><span>creative</span><span>developer</span></div>',2)]))}var g=o(1241);const m={},h=(0,g.A)(m,[["render",p]]);var u=h,_=o.p+"img/cern.fa16cdf9.jpg";function f(e,t){return(0,a.uX)(),(0,a.CE)("footer",null,t[0]||(t[0]=[(0,a.Fv)('<div class="footer__contact-wrapper"><div class="footer__contact-container"><h2 class="text-l">let&#39;s connect</h2><div class="footer__icons"><a target="_blank" href="https://linkedin.com/in/anneliesvaandrager" class="footer__icon"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"></a><a target="_blank" href="https://github.com/Vaannelies" class="footer__icon"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"></a><a target="_blank" href="https://instagram.com/groetjesvanannelies" class="footer__icon"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"></a><a target="_blank" href="mailto:annelies.vaandrager@outlook.com" class="footer__icon"><img src="/vue-portfolio/media-tech/image_2024-12-28_21-34-02.png"></a></div></div></div><div class="footer__image-wrapper"><img class="footer__image" src="'+_+'"><p class="text-xs">The ATLAS control room at CERN</p></div>',2)]))}const v={},b=(0,g.A)(v,[["render",f]]);var k=b,y=o(4232),w=o.p+"img/IMG_20230807_142920_Bokeh.4b9ae75b.png";const L={class:"status__container"},x={class:"status-text__container"},I={class:"status-text__container-row text-s"},S={class:"text-s"};function C(e,t,o,i,r,n){const s=(0,a.g2)("section-component");return(0,a.uX)(),(0,a.Wv)(s,{title:"status"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",L,[t[5]||(t[5]=(0,a.Lk)("img",{class:"picture-half",src:w,alt:""},null,-1)),(0,a.Lk)("table",x,[t[1]||(t[1]=(0,a.Lk)("tr",{class:"status-text__container-row status-text__container-row--header text-m"},[(0,a.Lk)("td",{colspan:"2"},[(0,a.eW)("Full-Stack developer "),(0,a.Lk)("span",{class:"status-text__container-label text-xs"},"@Internetbureau Slik")])],-1)),(0,a.Lk)("tr",I,[t[0]||(t[0]=(0,a.Lk)("td",null,[(0,a.Lk)("label",null,"Age:")],-1)),(0,a.Lk)("td",null,[(0,a.Lk)("p",S,(0,y.v_)(n.age),1)])]),t[2]||(t[2]=(0,a.Lk)("tr",{class:"status-text__container-row text-s"},[(0,a.Lk)("td",null,[(0,a.Lk)("label",null,"Degree:")]),(0,a.Lk)("td",null,[(0,a.Lk)("p",{class:"text-s"},"MSc Media Technology, Leiden University")])],-1)),t[3]||(t[3]=(0,a.Lk)("tr",{class:"status-text__container-row text-s"},[(0,a.Lk)("td",null,[(0,a.Lk)("label",null,"Languages:")]),(0,a.Lk)("td",null,[(0,a.Lk)("p",{class:"text-s"},"Dutch, English")])],-1)),t[4]||(t[4]=(0,a.Lk)("tr",{class:"status-text__container-row text-s"},[(0,a.Lk)("td",null,[(0,a.Lk)("label",null,"Location:")]),(0,a.Lk)("td",null,[(0,a.Lk)("p",{class:"text-s"},"Rotterdam")])],-1))])])])),_:1})}const j={class:"section"},A=["id"],R={class:"section__content"};function T(e,t,o,i,r,n){return(0,a.uX)(),(0,a.CE)("div",j,[(0,a.Lk)("h2",{class:"section__title",id:r.title},(0,y.v_)(r.title),9,A),(0,a.Lk)("div",R,[(0,a.RG)(e.$slots,"default")])])}var P={props:["title"],data(){return{title:this.title}}};const F=(0,g.A)(P,[["render",T]]);var W=F,E={extends:[c.lD],components:{SectionComponent:W},computed:{age(){const e=new Date,t=new Date("2000-07-10");let o=e.getFullYear()-t.getFullYear(),i=e.getMonth()-t.getMonth();return(i<0||0==i&&e.getDate()<t.getDate())&&o--,o}},setup(){return{}}};const U=(0,g.A)(E,[["render",C]]);var D,X,V=U,M=o.p+"img/hobby_vector_guitar.44b56af1.svg",O=o.p+"img/hobby_vector_travel.dc7af13d.svg",G=o.p+"img/hobby_vector_coding.a3b92e99.svg",H=o.p+"img/hobby_vector_craft.e8168937.svg";function q(e,t,o,i,r,n){const s=(0,a.g2)("section-component");return(0,a.uX)(),(0,a.Wv)(s,{title:"hobbies"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.Lk)("div",{class:"hobbies__container"},[(0,a.Lk)("div",{class:"hobby__card hobby__card--guitar",tabindex:"0"},[(0,a.Lk)("p",{class:"hobby__card-title text-m"},"guitar"),(0,a.Lk)("img",{src:M})]),(0,a.Lk)("div",{class:"hobby__card hobby__card--travel",tabindex:"0"},[(0,a.Lk)("p",{class:"hobby__card-title text-m"},"travel"),(0,a.Lk)("img",{src:O})]),(0,a.Lk)("div",{class:"hobby__card hobby__card--coding",tabindex:"0"},[(0,a.Lk)("p",{class:"hobby__card-title text-m"},"coding"),(0,a.Lk)("img",{src:G})]),(0,a.Lk)("div",{class:"hobby__card hobby__card--craft",tabindex:"0"},[(0,a.Lk)("p",{class:"hobby__card-title text-m"},"craft"),(0,a.Lk)("img",{src:H})])],-1)]))),_:1})}let N=(D=(0,c.JY)({components:{SectionComponent:W}}),D(X=class extends c.lD{})||X);const B=(0,g.A)(N,[["render",q]]);var Y,J,K=B,$=o.p+"img/logo-vue.599671a3.svg",z=o.p+"img/logo-ts.aeb3b591.svg",Q=o.p+"img/logo-java.d6ca113c.svg",Z=o.p+"img/logo-php.dad558c3.svg",ee=o.p+"img/logo-cpp.56c1562f.svg",te=o.p+"img/logo-python.a7a6b2c1.svg",oe=o.p+"img/logo-js.8cce8bf2.svg",ie=o.p+"img/logo-nodejs.82f25b7c.svg";function ae(e,t,o,i,r,n){const s=(0,a.g2)("section-component");return(0,a.uX)(),(0,a.Wv)(s,{title:"tools"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.Lk)("div",{class:"tools__container__wrapper"},[(0,a.Lk)("div",{class:"tools__container"},[(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:$}),(0,a.eW)(" Vue (2 + 3) ")]),(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:z}),(0,a.eW)(" TypeScript ")]),(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:Q}),(0,a.eW)(" Java ")]),(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:Z}),(0,a.eW)(" PHP ")]),(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:ee}),(0,a.eW)(" C++ ")]),(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:te}),(0,a.eW)(" Python ")]),(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:oe}),(0,a.eW)(" JavaScript ")]),(0,a.Lk)("div",{class:"grid-item"},[(0,a.Lk)("img",{src:ie}),(0,a.eW)(" NodeJS ")])])],-1)]))),_:1})}let re=(Y=(0,c.JY)({components:{SectionComponent:W}}),Y(J=class extends c.lD{})||J);const ne=(0,g.A)(re,[["render",ae]]);var se=ne;const ce={class:"projects__container"};function le(e,t,o,i,r,n){const s=(0,a.g2)("section-component");return(0,a.uX)(),(0,a.Wv)(s,{title:"projects"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",ce,[(0,a.Lk)("div",{tabindex:"0",class:"project__card",onFocus:t[0]||(t[0]=e=>n.toggleProjectCard(e,!0)),onBlur:t[1]||(t[1]=e=>n.toggleProjectCard(e,!1))},t[8]||(t[8]=[(0,a.Lk)("div",{class:"project__card-content__wrapper"},[(0,a.Lk)("h2",{class:"project__card-title text-l text-l"},"front-end"),(0,a.Lk)("p",{class:"project__card-subtitle text-xs"},"Websites, web apps, native apps (Android)")],-1),(0,a.Lk)("div",{class:"project__card__list"},[(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w}),(0,a.Lk)("p",{class:"text-xs"}," SlimLaden (Android app) ")]),(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w})]),(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w})])],-1)]),32),(0,a.Lk)("div",{tabindex:"0",class:"project__card",onFocus:t[2]||(t[2]=e=>n.toggleProjectCard(e,!0)),onBlur:t[3]||(t[3]=e=>n.toggleProjectCard(e,!1))},t[9]||(t[9]=[(0,a.Lk)("div",{class:"project__card-content__wrapper"},[(0,a.Lk)("h2",{class:"project__card-title text-l"},"back-end"),(0,a.Lk)("p",{class:"project__card-subtitle text-xs"},"(REST) APIs, database queries (CRUD), creating endpoints, data validation, securtiy")],-1),(0,a.Lk)("div",{class:"project__card__list"},[(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w})]),(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w})]),(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w})])],-1)]),32),(0,a.Lk)("div",{tabindex:"0",class:"project__card",onFocus:t[4]||(t[4]=e=>n.toggleProjectCard(e,!0)),onBlur:t[5]||(t[5]=e=>n.toggleProjectCard(e,!1))},t[10]||(t[10]=[(0,a.Lk)("div",{class:"project__card-content__wrapper"},[(0,a.Lk)("h2",{class:"project__card-title text-l"},"UX"),(0,a.Lk)("p",{class:"project__card-subtitle text-xs"},"Accessibility, interviews, journey maps, personas, user flows, usability testing, info architecture, paper prototypes, empathy maps, user stories, wireframes")],-1),(0,a.Lk)("div",{class:"project__card__list"},[(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w})])],-1)]),32),(0,a.Lk)("div",{tabindex:"0",class:"project__card",onFocus:t[6]||(t[6]=e=>n.toggleProjectCard(e,!0)),onBlur:t[7]||(t[7]=e=>n.toggleProjectCard(e,!1))},t[11]||(t[11]=[(0,a.Lk)("div",{class:"project__card-content__wrapper"},[(0,a.Lk)("h2",{class:"project__card-title text-l"},"hardware"),(0,a.Lk)("p",{class:"project__card-subtitle text-xs"},"Rapid prototyping, soldering, robotsArduino, Raspberry Pi, IoT, soldering, smart objects, robots")],-1),(0,a.Lk)("div",{class:"project__card__list"},[(0,a.Lk)("div",{class:"project__card__list-item"},[(0,a.Lk)("img",{class:"project__card__list-item__picture",src:w})])],-1)]),32)])])),_:1})}var de={components:{SectionComponent:W},data(){return{}},methods:{toggleProjectCard(e,t){const o=e.target,i=o.querySelector(".project__card__list"),a=i.querySelectorAll(".project__card__list-item");let r=0;t&&a.forEach((e=>{r+=parseInt(getComputedStyle(e).height)})),i.setAttribute("style","height: "+r+"px")}}};const pe=(0,g.A)(de,[["render",le]]);var ge=pe;const me={class:"media-tech__projects__container"},he={class:"grid__row"},ue={class:"grid__row"},_e={class:"grid__row"},fe={class:"grid__row"},ve={class:"grid__row"};function be(e,t,o,i,r,n){const s=(0,a.g2)("grid-card"),c=(0,a.g2)("section-component");return(0,a.uX)(),(0,a.Wv)(c,{title:"media technology"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",me,[(0,a.Lk)("div",he,[(0,a.bF)(s,{title:"AI in Society",description:"Sneakpeek AI (concept)",text:"We designed an app to inform Radiology students about how AI might affect the tasks in their future career.",backgroundImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png",heroImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"}),(0,a.bF)(s,{title:"Artificial Creatures",description:"Unique aspects of organic creatures, portrayed by artificial ones",text:"We created a robot that loves to check himself out in the mirror. When the infraredsensor registers input, the LED-matrix shows heart-eyes and the head tilts and rotates a little bit, as if it is checking out its own face in the mirror. If the mirror is taken away, the robot stops moving and shows a sad face. This behavior, vanity, appears to be a feature that only humans show. Robots usually do not show this behavior.",backgroundImage:"/vue-portfolio/media-tech/Screenshot_2023-03-23-17-34-08-886_com.miui.videoplayer[1].png",heroImage:"/vue-portfolio/media-tech/Screenshot_2023-03-23-17-34-08-886_com.miui.videoplayer[1].png",heroVideo:"/vue-portfolio/media-tech/narcissus robot ‐ Gemaakt met Clipchamp (1).mp4",media:[{type:"video",path:"/vue-portfolio/media-tech/narcissus robot ‐ Gemaakt met Clipchamp (1).mp4"},{type:"image",path:"/vue-portfolio/media-tech/Screenshot_2023-03-23-17-34-08-886_com.miui.videoplayer[1].png"},{type:"image",path:"/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2023-03-24 om 13.27.38_d6efa77b.jpg"}]}),(0,a.bF)(s,{title:"Creative Programming",description:"Courses in programming, i.e. Processing",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-27_19-19-46.png",heroImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png",heroVideo:"/vue-portfolio/media-tech/video_2024-12-27_21-28-33.mp4",media:[{type:"video",path:"/vue-portfolio/media-tech/video_2024-12-27_21-28-33.mp4"},{type:"video",path:"/vue-portfolio/media-tech/etch_a_sketch.mp4"},{type:"video",path:"/vue-portfolio/media-tech/alpaca.mp4"}]},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)(" In this course, I learned a lot about programming dynamic visuals in Processing. I also learned to connect Arduino to Processing and PlugData. ")]))),_:1})]),(0,a.Lk)("div",ue,[(0,a.bF)(s,{title:"Exhibition: Science to Experience",description:"Hosting an exhibition in Rotterdam",backgroundImage:"/vue-portfolio/media-tech/image_2023-06-03_16-10-18.png",heroImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png",heroVideo:"/vue-portfolio/media-tech/signal-2023-06-06-14-29-44-625.mp4",media:[{type:"video",path:"/vue-portfolio/media-tech/signal-2023-06-06-14-29-44-625.mp4"},{type:"image",path:"/vue-portfolio/media-tech/image_2023-06-03_16-10-18.png"},{type:"video",path:"/vue-portfolio/media-tech/VID_20230609_140904.mp4"},{type:"image",path:"/vue-portfolio/media-tech/Screenshot 2024-12-28 at 23-06-22 Instagram.png"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-28_23-09-33.png"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-28_23-06-38.png"}]},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)(' June 2023, my classmates and I hosted an exhibition in Rotterdam. In teams, we created all of the installations. The theme was "patterns". My team created an interactive installation where visitors were asked to solve an old unsolved "crime". They had to connect the right pictures on the wall using red yarn. Technically, there was no correct answer. However, every participant came up with a totally different story. Most of the participants appeared very certain of their case. After they "submitted their answer", we showed them a compilation of the answers of the previous participants. The goal of our installation was to show people that everyone might see different patterns in things, even if they are looking at the same info as you are. This phenomenon is called "apophenia": seeing patterns that are not really there. '),(0,a.Lk)("br",null,null,-1),(0,a.Lk)("br",null,null,-1),(0,a.eW)(" We used a projector to project the red lines of the previous participants on the wall. ")]))),_:1}),(0,a.bF)(s,{title:"Hardware and Physical Computing",description:"Soldering and working with sensors and actors on an Arduino",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-27_19-02-02.png",heroVideo:"/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-16 om 13.05.53_92de3586.mp4",media:[{type:"video",path:"/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-16 om 13.05.53_92de3586.mp4"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-27_18-49-49.png"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-27_19-02-02.png"}]},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)(" In a team, I created a small escape room. We created a vault that was locked with a lever connected to a servo. The vault would automatically open if the player entered the right password in the device we created. In order to reach the vault, the player had to cross an obstacle that consisted of red wires with tiny bells on it. If you touched a wire, the bells would trigger a sound sensor. The player had to guess the password based on a rebus we made. ")]))),_:1}),(0,a.bF)(s,{title:"Human Computer Interaction and Information Visualization",description:"UX",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-27_21-15-00.png",heroImage:"/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 170010.png",media:[{type:"image",path:"/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-27_21-15-48.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_normal_list.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_filter.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_list.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_map.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_detail.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_locations.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_resources.png"},{type:"image",path:"/vue-portfolio/media-tech/storyboard1.png"},{type:"image",path:"/vue-portfolio/media-tech/storyboard2.png"},{type:"image",path:"/vue-portfolio/media-tech/birds_diagram.png"}]},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)(" My teammate and I came up with an app for people suffering from ornitophobia (fear of birds). I designed and created an Android app that tells you how many birds have been spotted in specific areas in the Netherlands. People can use this app to avoid birds. If they are afraid to go to a certain place because there might be birds, theoretically they could use this app to check the presence of birds before they leave their house. The lack of bird registrations in the API is a great limitation of the app. "),(0,a.Lk)("br",null,null,-1),(0,a.Lk)("br",null,null,-1),(0,a.eW)(" Later, we decided to add features for people who want to use this app to find and attract "),(0,a.Lk)("b",null,"more",-1),(0,a.eW)(" birds. ")]))),_:1}),(0,a.bF)(s,{title:"Kotlin App",description:"(Elective project)",backgroundImage:"/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png",heroImage:"/vue-portfolio/media-tech/kotlin-home.png",media:[{type:"image",path:"/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-28_23-14-04.png"}]},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)(" As an elective project, I learned how to create an Android app in Kotlin. I created an app for tourists in Leiden. It's connected to an API and a database. It also uses geofences. ")]))),_:1})]),(0,a.Lk)("div",_e,[(0,a.bF)(s,{title:"Modern Game AI Algorithms",description:"Algorithms used in gaming",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-27_20-41-15.png",heroImage:"/vue-portfolio/media-tech/image_2024-12-27_20-41-15.png",media:[{type:"image",path:"/vue-portfolio/media-tech/image_2024-03-09_22-10-50.png"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-03-09_22-07-24.png"},{type:"youtube",path:"https://www.youtube.com/embed/cvI72eArJUg?si=jvsFNhdvKrJd7oLd"}]},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.Lk)("div",null,[(0,a.Lk)("p",null,"Individually created an algorithm to generate a 'Barbie' themed house in Minecraft, that is different in shape, size and features every time and is automatically built in the best location in the perimeter on the map. The house will not be placed on top of a tree: only on flat areas. If there is no flat area that is big enough for the house, it will change the size of the house. If it is too small, it will generate a platform (attached to the biggest flat area) to build the house on."),(0,a.Lk)("p",null,[(0,a.eW)("In a team, I created an algorithm that generates a multi-level platform game in Minecraft, which is different every time you play it. Important features are: "),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"Procedural content generation"),(0,a.Lk)("li",null,"Adaptive difficulty"),(0,a.Lk)("li",null,"Randomness"),(0,a.Lk)("li",null,"Monte Carlo tree search")])])],-1)]))),_:1}),(0,a.bF)(s,{title:"Non-human Cognition",description:"Animal behavior experiment",text:"In a team, I conducted a research experiment on pigeon behavior in a teammate's backyard. We reported the observations of pigeon behavior at feeding time on a poster.",backgroundImage:"/vue-portfolio/media-tech/NHC POSTER PRINT-1_thumbnail.png",heroImage:"/vue-portfolio/media-tech/NHC POSTER PRINT-1.png",media:[{type:"image",path:"/vue-portfolio/media-tech/NHC POSTER PRINT-1.png"}]}),(0,a.bF)(s,{title:"Playful and Creative Science",description:"Visualize the output of scientific research in a creative way",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-27_18-44-44.png",heroImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png",heroVideo:"/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-19 om 00.42.54_4ebd93c2.mp4",media:[{type:"video",path:"/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-19 om 00.42.54_4ebd93c2.mp4"},{type:"image",path:"/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.42.25_5e5aeb22.jpg"},{type:"image",path:"/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.46.39_12a44efe.jpg"},{type:"image",path:"/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.45.44_d920764c.jpg"},{type:"image",path:"/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.43.27_8df6dea1.jpg"}]},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)(' With a teammate, I crafted an interactive peephole box. A scientic paper reported that bees stop humming during a solar eclipse. We wanted to visualize this phenomenon in a creative way. Using a light sensor, a servo motor and a buzzer, we triggered an Arduino to cover the light-hole of the box with a cardboard "moon" whenever a person covered the top of the box using the "solar eclipse activator lid". ')]))),_:1}),(0,a.bF)(s,{title:"Research Fundamentals",description:"Scientific research",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-27_20-29-43.png",heroImage:"/vue-portfolio/media-tech/image_2024-12-27_20-29-43.png"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)(" I wrote a "),(0,a.Lk)("a",{href:"/vue-portfolio/media-tech/7-papers-assignment_annelies_vaandrager_s3624587.pdf",target:"_blank"},"literature review",-1),(0,a.eW)(" about papers about retrograde cricopharyngeal dysfunction (R-CPD). ")]))),_:1})]),(0,a.Lk)("div",fe,[(0,a.bF)(s,{title:"Robotics",description:"Learning the basics of robotics",text:"hwoeijelsifjeslfjels",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-27_21-09-57.png",heroImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png",heroVideo:"/vue-portfolio/media-tech/robotics ‐ Gemaakt met Clipchamp.mp4",media:[{type:"video",path:"/vue-portfolio/media-tech/robotics ‐ Gemaakt met Clipchamp.mp4"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-27_21-09-57.png"},{type:"image",path:"/vue-portfolio/media-tech/photo_2024-12-28_23-22-14.png"}]},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)(" In a team, I created an algorithm for a robot car (equipped with a camera) that lets it pick up soda cans of a certain color. The robot is voice activated and it takes a natural language prompt as input. You can tell it the brand of the soda can you want it to pick up, and it will understand which color it has to look for. For this course, I also wrote an algorithm for a simulated vacuum cleaner that had to navigate through different rooms using a LIDAR. ")]))),_:1}),(0,a.bF)(s,{title:"Sciences and Humanities",description:"The opinion of what 'truth' is, according to various philosophers",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-28_19-55-44.png",heroImage:"/vue-portfolio/media-tech/image_2024-12-28_19-55-44.png"},{default:(0,a.k6)((()=>t[9]||(t[9]=[(0,a.eW)(" A teammate and I created a plan for a hypothetical installation in the stellarium in Leiden. "),(0,a.Lk)("a",{target:"_blank",href:"/vue-portfolio/media-tech/Sciences_and_Humanities_Final_Assignment.docx.pdf"},"View",-1)]))),_:1}),(0,a.bF)(s,{title:"Sound, Space and Interaction",description:"Creating installations with the use of sound, using PureData",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-28_18-24-55.png",heroVideo:"/vue-portfolio/media-tech/ghostbusters.mp4",media:[{type:"video",path:"/vue-portfolio/media-tech/ghostbusters.mp4"},{type:"image",path:"/vue-portfolio/media-tech/image_2024-12-28_18-24-55.png"}]},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)(' For the final assignment of Sound, Space and Interaction, a teammate and I created an interactive installation where someone "scares" ghosts using a flashlight. A person is surrounded by 4 speakers. A light sensor (LDR) is attached to each speaker. All light sensors are connected to an Arduino, which is connected to a laptop. The speakers are also connected to the laptop. The Arduino registers the brightness values from the sensors, and sends this to the laptop. In PlugData, ghost sounds are played on the 4 speakers. If the person points the flashlight in a direction, the ghost sounds will "move" to the speakers in the other corners. For the person standing in the center, it will sound as if the ghosts move around them to avoid the light. If the person quickly points the light in a certain direction, the ghosts make a squeal sound before they "run" away, as if the ghosts were startled. ')]))),_:1}),(0,a.bF)(s,{title:"Strategies in Creative and Performing Arts",description:"",backgroundImage:"/vue-portfolio/media-tech/image_2024-12-28_22-33-38.png",heroImage:"/vue-portfolio/media-tech/image_2024-12-28_22-33-38.png"},{default:(0,a.k6)((()=>t[11]||(t[11]=[(0,a.eW)(" For this course, I invented a new art strategy: invisible effort. "),(0,a.Lk)("a",{href:"/vue-portfolio/media-tech/Final assignment.pdf",target:"_blank"},"View",-1)]))),_:1})]),(0,a.Lk)("div",ve,[(0,a.bF)(s,{title:"Graduation Project [work in progress]",description:"For my thesis, I am using computational methods to discover new insights about a relatively unknown medical condition, called retrograde cricopharyngeal dysfunction (R-CPD). I have performed content analysis on 11.904 Reddit posts, from a subreddit called 'r/noburp'. This subreddit is about R-CPD has over 33.000 members.",backgroundImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png",heroImage:"/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png",disableUnfold:!0})])])])),_:1})}const ke={class:"grid__card-content__wrapper"},ye={class:"grid__card-title text-l text-l"},we={class:"grid__card-subtitle text-xs"},Le={class:"grid__card__list"},xe={class:"grid__card__list-item"},Ie=["src"],Se=["src"],Ce={class:"grid__card__list-item__content-wrapper"},je={key:0,class:"grid__card__media-list"},Ae=["onClick"],Re=["src"],Te=["src"],Pe=["onClick","src"],Fe={class:"grid__card__text text-xs"},We={key:0},Ee=["src"],Ue=["src"],De=["src"],Xe={key:3,class:"pop-up__arrows"};function Ve(e,t,o,r,n,s){return(0,a.uX)(),(0,a.CE)("div",{onKeydown:[t[3]||(t[3]=(0,i.jR)((e=>null==n.selectedIndex?s.switchGridCard(e,!1):s.decreaseSelection()),["left"])),t[4]||(t[4]=(0,i.jR)((e=>null==n.selectedIndex?s.switchGridCard(e,!0):s.increaseSelection()),["right"]))],tabindex:"0",class:"grid__card",onKeyup:t[5]||(t[5]=(0,i.jR)((e=>s.toggleGridCard(e,!1)),["esc"])),onFocusin:t[6]||(t[6]=e=>s.toggleGridCard(e,!0)),onBlur:t[7]||(t[7]=e=>s.toggleGridCard(e,!1)),style:(0,y.Tr)("background-image: url('"+n.backgroundImage+"')")},[(0,a.Lk)("div",ke,[(0,a.Lk)("h2",ye,(0,y.v_)(n.title),1),(0,a.Lk)("p",we,(0,y.v_)(n.description),1)]),(0,a.Lk)("div",Le,[(0,a.Lk)("div",xe,[n.heroVideo?((0,a.uX)(),(0,a.CE)("video",{key:0,muted:"",autoplay:"",loop:"",class:"grid__card__list-item__picture",src:n.heroVideo,type:"video/mp4"},null,8,Ie)):((0,a.uX)(),(0,a.CE)("img",{key:1,class:"grid__card__list-item__picture",src:n.heroImage},null,8,Se)),(0,a.Lk)("div",Ce,[null!==n.media?((0,a.uX)(),(0,a.CE)("ul",je,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.media,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{class:"grid__card__media-item",key:t,onClick:e=>n.selectedIndex=t},["video"==e.type?((0,a.uX)(),(0,a.CE)("video",{key:0,muted:"",src:e.path,type:"video/mp4"},null,8,Re)):"image"==e.type?((0,a.uX)(),(0,a.CE)("img",{key:1,src:e.path},null,8,Te)):((0,a.uX)(),(0,a.CE)("iframe",{key:2,onClick:e=>n.selectedIndex=t,width:"80",height:"80",src:e.path,title:"YouTube video player",frameborder:"0",disabled:"",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,Pe))],8,Ae)))),128))])):(0,a.Q3)("",!0),(0,a.Lk)("div",Fe,[n.text?((0,a.uX)(),(0,a.CE)("p",We,(0,y.v_)(n.text),1)):(0,a.RG)(e.$slots,"default",{key:1}),null!==n.selectedIndex?((0,a.uX)(),(0,a.CE)("div",{key:2,class:"grid__card__list-item__pop-up",onClick:t[2]||(t[2]=(0,i.D$)((e=>n.selectedIndex=null),["self"]))},["video"==n.media[n.selectedIndex].type?((0,a.uX)(),(0,a.CE)("video",{key:0,muted:"",controls:"",autoplay:"",loop:"",src:n.media[n.selectedIndex].path,type:"video/mp4"},null,8,Ee)):"image"==n.media[n.selectedIndex].type?((0,a.uX)(),(0,a.CE)("img",{key:1,src:n.media[n.selectedIndex].path},null,8,Ue)):((0,a.uX)(),(0,a.CE)("iframe",{key:2,width:"560",height:"315",src:n.media[n.selectedIndex].path,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,De)),n.media.length>1?((0,a.uX)(),(0,a.CE)("div",Xe,[(0,a.Lk)("button",{class:(0,y.C4)(["pop-up__arrow pop-up__arrow--left",{enabled:n.selectedIndex>0}]),onClick:t[0]||(t[0]=(0,i.D$)(((...e)=>s.decreaseSelection&&s.decreaseSelection(...e)),["prevent"]))},"<",2),(0,a.Lk)("button",{class:(0,y.C4)(["pop-up__arrow pop-up__arrow--right",{enabled:n.selectedIndex<n.media.length-1}]),onClick:t[1]||(t[1]=(0,i.D$)(((...e)=>s.increaseSelection&&s.increaseSelection(...e)),["prevent"]))},">",2)])):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0)])])])])],36)}var Me={components:{SectionComponent:W},props:["title","description","text","heroImage","backgroundImage","heroVideo","media","disableUnfold"],data(){return{title:this.title,description:this.description,text:this.text,heroImage:this.heroImage,backgroundImage:this.backgroundImage,heroVideo:this.heroVideo,media:this.media||null,disableUnfold:this.disableUnfold,selectedIndex:null,hasFocus:!1}},methods:{toggleGridCard(e,t){if(this.disableUnfold)return;let o=0;const i=e.target,a=i.querySelector(".grid__card__list");if(a){if(t){const e=a.querySelectorAll(".grid__card__list-item");e.forEach((e=>{o+=parseInt(getComputedStyle(e).height)}))}else e.target.blur();(t||!e.relatedTarget||e.relatedTarget&&"grid__card"==e.relatedTarget.className||e.relatedTarget&&!e.relatedTarget.closest(".grid__card"))&&a.setAttribute("style","height: "+o+"px")}},preventClose(e){e.preventDefault()},increaseSelection(){this.selectedIndex<this.media.length-1&&this.selectedIndex++},decreaseSelection(){this.selectedIndex>0&&this.selectedIndex--},switchGridCard(e,t){t?e.target.nextSibling?e.target.nextSibling.focus():e.target.parentElement.nextSibling&&e.target.parentElement.nextSibling.children[0].focus():e.target.previousSibling?e.target.previousSibling.focus():e.target.parentElement.previousSibling&&e.target.parentElement.previousSibling.lastChild.focus()}}};const Oe=(0,g.A)(Me,[["render",Ve]]);var Ge=Oe,He={components:{SectionComponent:W,GridCard:Ge},data(){return{}},methods:{getImagePath(e){return console.log(new URL(e,"file:///C:/Users/annel/Documenten/Uni/Media%20Tech/vue-portfolio/src/components/MediaTechSection.vue%3Fvue&type=script&lang=js")),new URL(e,"file:///C:/Users/annel/Documenten/Uni/Media%20Tech/vue-portfolio/src/components/MediaTechSection.vue%3Fvue&type=script&lang=js").href}}};const qe=(0,g.A)(He,[["render",be]]);var Ne=qe,Be=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Ye=class extends c.lD{};Ye=Be([(0,c.JY)({components:{HeroComponent:u,FooterComponent:k,StatusSection:V,HobbiesSection:K,ToolsSection:se,ProjectsSection:ge,MediaTechSection:Ne}})],Ye);var Je=Ye;const Ke=(0,g.A)(Je,[["render",s]]);var $e=Ke;function ze(e,t,o){setTimeout((()=>{const e=document.createElement("span");e.innerText=t,o.appendChild(e)}),100*e)}function Qe(e,t){const o=e.querySelectorAll("span");o.forEach((e=>{e.classList.add("--outline")}));const i=document.querySelector(".hero");i?.setAttribute("style","background: black");for(let a=0;a<t;a++)setTimeout((()=>{i?.setAttribute("style","background: white")}),200*a),setTimeout((()=>{i?.setAttribute("style","background: black")}),200*a+100)}function Ze(e,t){for(let o=0;o<t;o++)setTimeout((()=>{const t=e.cloneNode(!0);t.setAttribute("style",`top: -${10*o}px; left: -${10*o}px; position: absolute; opacity: ${1-o/20};`),e?.parentElement?.appendChild(t)}),40*o)}function et(){const e=[{name:"Android Studio",image:new URL(o(8653),o.b).href},{name:"Arduino",image:new URL(o(3528),o.b).href},{name:"git",image:new URL(o(776),o.b).href},{name:"HTML",image:new URL(o(9575),o.b).href},{name:"WordPress",image:new URL(o(6261),o.b).href},{name:"SQL",image:new URL(o(7124),o.b).href},{name:"Figma",image:new URL(o(3004),o.b).href},{name:"LESS",image:new URL(o(6571),o.b).href},{name:"Processing",image:new URL(o(8041),o.b).href},{name:"CSS",image:new URL(o(589),o.b).href},{name:"Smarty",image:new URL(o(3824),o.b).href},{name:"Twig",image:new URL(o(7471),o.b).href},{name:"PlugData",image:new URL(o(9588),o.b).href},{name:"Kotlin",image:new URL(o(2751),o.b).href},{name:"Laravel",image:new URL(o(167),o.b).href},{name:"Raspberry Pi",image:new URL(o(8430),o.b).href}];let t=!1;window.addEventListener("scroll",(o=>{const i=document.querySelector(".tools__container__wrapper"),a=i?.getBoundingClientRect().bottom||0;if(a+100<window.innerHeight&&!t&&(e.forEach(((e,t)=>{setTimeout((()=>{const t=document.createElement("img");t.src=e.image;const o=document.createElement("div");o.className="grid-item",o.appendChild(t),o.append(e.name),i?.children[0]?.appendChild(o),o.addEventListener("mousemove",(e=>{const{x:t,y:i}=o.getBoundingClientRect();o.style.setProperty("--x",(e.clientX-t).toString()),o.style.setProperty("--y",(e.clientY-i).toString()),console.log(t,i)}))}),50*t)})),t=!0,t)){const e=document.querySelectorAll(".grid-item");e.forEach((e=>{e.addEventListener("mousemove",(t=>{const{x:o,y:i}=e.getBoundingClientRect();e.style.setProperty("--x",(t.clientX-o).toString()),e.style.setProperty("--y",(t.clientY-i).toString()),console.log(o,i)}))}))}}))}(0,i.Ef)($e).mount("#app"),window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".title-creative");if(e){const t="creative";for(let o=0;o<t.length;o++)ze(o,t[o],e);setTimeout((()=>{Qe(e,3)}),1e3),setTimeout((()=>{window.innerWidth>481?Ze(e,20):Ze(e,15)}),1700)}et()}))},8653:function(e,t,o){e.exports=o.p+"img/logo-android.73959f9f.svg"},3528:function(e,t,o){e.exports=o.p+"img/logo-arduino.8f31402b.svg"},589:function(e,t,o){e.exports=o.p+"img/logo-css.5cb6daad.svg"},3004:function(e,t,o){e.exports=o.p+"img/logo-figma.ebf3b12d.svg"},776:function(e,t,o){e.exports=o.p+"img/logo-git.0094604a.svg"},9575:function(e,t,o){e.exports=o.p+"img/logo-html.d2097010.svg"},2751:function(e,t,o){e.exports=o.p+"img/logo-kotlin.396a14b3.svg"},167:function(e,t,o){e.exports=o.p+"img/logo-laravel.68a9867d.svg"},6571:function(e,t,o){e.exports=o.p+"img/logo-less.074ce2d2.svg"},9588:function(e,t,o){e.exports=o.p+"img/logo-pd.dcf4ab53.svg"},8041:function(e,t,o){e.exports=o.p+"img/logo-processing.b0d62b88.svg"},3824:function(e,t,o){e.exports=o.p+"img/logo-smarty.cdaca48b.svg"},7124:function(e,t,o){e.exports=o.p+"img/logo-sql.89ba1d93.svg"},7471:function(e,t,o){e.exports=o.p+"img/logo-twig.eb6a99b2.svg"},6261:function(e,t,o){e.exports=o.p+"img/logo-wp.91f1fa05.svg"},8430:function(e,t,o){e.exports=o.p+"img/logo-raspberry-pi.6b5c3df3.png"}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,i,a,r){if(!i){var n=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&r||n>=r)&&Object.keys(o.O).every((function(e){return o.O[e](i[c])}))?i.splice(c--,1):(s=!1,r<n&&(n=r));if(s){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/vue-portfolio/"}(),function(){o.b=document.baseURI||self.location.href;var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,n=i[0],s=i[1],c=i[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(c)var d=c(o)}for(t&&t(i);l<n.length;l++)r=n[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},i=self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[504],(function(){return o(7878)}));i=o.O(i)})();
//# sourceMappingURL=app.f25ec0d8.js.map