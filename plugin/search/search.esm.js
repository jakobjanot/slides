var e,t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(e){try{return!!e()}catch(e){return!0}},o=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),i=function(e){return e&&e.Math==Math&&e},a=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||function(){return this}()||Function("return this")(),c=function(e){return"function"==typeof e},u=r,l=c,f=/#|\.prototype\./,s=function(e,t){var n=d[p(e)];return n==v||n!=g&&(l(t)?u(t):!!t)},p=s.normalize=function(e){return String(e).replace(f,".").toLowerCase()},d=s.data={},g=s.NATIVE="N",v=s.POLYFILL="P",h=s,y=c,b=function(e){return"object"==typeof e?null!==e:y(e)},m=b,x=function(e){if(m(e))return e;throw TypeError(String(e)+" is not an object")},S=c,w=x,O=function(e){if("object"==typeof e||S(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")},E=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return w(n),O(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),j=c,R=b,T=E,I={},P=b,A=a.document,_=P(A)&&P(A.createElement),C=function(e){return _?A.createElement(e):{}},N=C,k=!o&&!r((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),$=a,M=c,L=function(e){return M(e)?e:void 0},F=function(e,t){return arguments.length<2?L($[e]):$[e]&&$[e][t]},D=a,z=F("navigator","userAgent")||"",U=D.process,B=D.Deno,W=U&&U.versions||B&&B.version,K=W&&W.v8;K?t=(e=K.split("."))[0]<4?1:e[0]+e[1]:z&&(!(e=z.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=z.match(/Chrome\/(\d+)/))&&(t=e[1]);var G=t&&+t,V=r,Y=!!Object.getOwnPropertySymbols&&!V((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&G&&G<41})),q=Y&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,X=c,H=F,J=q?function(e){return"symbol"==typeof e}:function(e){var t=H("Symbol");return X(t)&&Object(e)instanceof t},Q=c,Z=function(e){try{return String(e)}catch(e){return"Object"}},ee=function(e){if(Q(e))return e;throw TypeError(Z(e)+" is not a function")},te=function(e,t){var n=e[t];return null==n?void 0:ee(n)},ne=c,re=b,oe={exports:{}},ie=a,ae=function(e,t){try{Object.defineProperty(ie,e,{value:t,configurable:!0,writable:!0})}catch(n){ie[e]=t}return t},ce=ae,ue=a["__core-js_shared__"]||ce("__core-js_shared__",{}),le=ue;(oe.exports=function(e,t){return le[e]||(le[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.0",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var fe=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},se=fe,pe=function(e){return Object(se(e))},de=pe,ge={}.hasOwnProperty,ve=Object.hasOwn||function(e,t){return ge.call(de(e),t)},he=0,ye=Math.random(),be=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++he+ye).toString(36)},me=a,xe=oe.exports,Se=ve,we=be,Oe=Y,Ee=q,je=xe("wks"),Re=me.Symbol,Te=Ee?Re:Re&&Re.withoutSetter||we,Ie=function(e){return Se(je,e)&&(Oe||"string"==typeof je[e])||(Oe&&Se(Re,e)?je[e]=Re[e]:je[e]=Te("Symbol."+e)),je[e]},Pe=b,Ae=J,_e=te,Ce=function(e,t){var n,r;if("string"===t&&ne(n=e.toString)&&!re(r=n.call(e)))return r;if(ne(n=e.valueOf)&&!re(r=n.call(e)))return r;if("string"!==t&&ne(n=e.toString)&&!re(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},Ne=Ie("toPrimitive"),ke=function(e,t){if(!Pe(e)||Ae(e))return e;var n,r=_e(e,Ne);if(r){if(void 0===t&&(t="default"),n=r.call(e,t),!Pe(n)||Ae(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),Ce(e,t)},$e=J,Me=function(e){var t=ke(e,"string");return $e(t)?t:String(t)},Le=o,Fe=k,De=x,ze=Me,Ue=Object.defineProperty;I.f=Le?Ue:function(e,t,n){if(De(e),t=ze(t),De(n),Fe)try{return Ue(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Be=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},We=I,Ke=Be,Ge=o?function(e,t,n){return We.f(e,t,Ke(1,n))}:function(e,t,n){return e[t]=n,e},Ve={},Ye={}.toString,qe=function(e){return Ye.call(e).slice(8,-1)},Xe=qe,He="".split,Je=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==Xe(e)?He.call(e,""):Object(e)}:Object,Qe=fe,Ze=function(e){return Je(Qe(e))},et=Math.ceil,tt=Math.floor,nt=function(e){return isNaN(e=+e)?0:(e>0?tt:et)(e)},rt=nt,ot=Math.min,it=function(e){return e>0?ot(rt(e),9007199254740991):0},at=nt,ct=Math.max,ut=Math.min,lt=Ze,ft=it,st=function(e,t){var n=at(e);return n<0?ct(n+t,0):ut(n,t)},pt=function(e){return function(t,n,r){var o,i=lt(t),a=ft(i.length),c=st(r,a);if(e&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},dt={includes:pt(!0),indexOf:pt(!1)},gt={},vt=ve,ht=Ze,yt=dt.indexOf,bt=gt,mt=function(e,t){var n,r=ht(e),o=0,i=[];for(n in r)!vt(bt,n)&&vt(r,n)&&i.push(n);for(;t.length>o;)vt(r,n=t[o++])&&(~yt(i,n)||i.push(n));return i},xt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],St=mt,wt=xt.concat("length","prototype");Ve.f=Object.getOwnPropertyNames||function(e){return St(e,wt)};var Ot=b,Et=qe,jt=Ie("match"),Rt={};Rt[Ie("toStringTag")]="z";var Tt="[object z]"===String(Rt),It=Tt,Pt=c,At=qe,_t=Ie("toStringTag"),Ct="Arguments"==At(function(){return arguments}()),Nt=It?At:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),_t))?n:Ct?At(t):"Object"==(r=At(t))&&Pt(t.callee)?"Arguments":r},kt=Nt,$t=function(e){if("Symbol"===kt(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)},Mt=x,Lt=function(){var e=Mt(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},Ft={},Dt=r,zt=a.RegExp;Ft.UNSUPPORTED_Y=Dt((function(){var e=zt("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),Ft.BROKEN_CARET=Dt((function(){var e=zt("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));var Ut={exports:{}},Bt=c,Wt=ue,Kt=Function.toString;Bt(Wt.inspectSource)||(Wt.inspectSource=function(e){return Kt.call(e)});var Gt,Vt,Yt,qt=Wt.inspectSource,Xt=c,Ht=qt,Jt=a.WeakMap,Qt=Xt(Jt)&&/native code/.test(Ht(Jt)),Zt=oe.exports,en=be,tn=Zt("keys"),nn=function(e){return tn[e]||(tn[e]=en(e))},rn=Qt,on=b,an=Ge,cn=ve,un=ue,ln=nn,fn=gt,sn=a.WeakMap;if(rn||un.state){var pn=un.state||(un.state=new sn),dn=pn.get,gn=pn.has,vn=pn.set;Gt=function(e,t){if(gn.call(pn,e))throw new TypeError("Object already initialized");return t.facade=e,vn.call(pn,e,t),t},Vt=function(e){return dn.call(pn,e)||{}},Yt=function(e){return gn.call(pn,e)}}else{var hn=ln("state");fn[hn]=!0,Gt=function(e,t){if(cn(e,hn))throw new TypeError("Object already initialized");return t.facade=e,an(e,hn,t),t},Vt=function(e){return cn(e,hn)?e[hn]:{}},Yt=function(e){return cn(e,hn)}}var yn={set:Gt,get:Vt,has:Yt,enforce:function(e){return Yt(e)?Vt(e):Gt(e,{})},getterFor:function(e){return function(t){var n;if(!on(t)||(n=Vt(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},bn=o,mn=ve,xn=Function.prototype,Sn=bn&&Object.getOwnPropertyDescriptor,wn=mn(xn,"name"),On={EXISTS:wn,PROPER:wn&&"something"===function(){}.name,CONFIGURABLE:wn&&(!bn||bn&&Sn(xn,"name").configurable)},En=a,jn=c,Rn=ve,Tn=Ge,In=ae,Pn=qt,An=On.CONFIGURABLE,_n=yn.get,Cn=yn.enforce,Nn=String(String).split("String");(Ut.exports=function(e,t,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:t;jn(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Rn(n,"name")||An&&n.name!==u)&&Tn(n,"name",u),(o=Cn(n)).source||(o.source=Nn.join("string"==typeof u?u:""))),e!==En?(i?!c&&e[t]&&(a=!0):delete e[t],a?e[t]=n:Tn(e,t,n)):a?e[t]=n:In(t,n)})(Function.prototype,"toString",(function(){return jn(this)&&_n(this).source||Pn(this)}));var kn=F,$n=I,Mn=o,Ln=Ie("species"),Fn=r,Dn=a.RegExp,zn=Fn((function(){var e=Dn(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})),Un=r,Bn=a.RegExp,Wn=Un((function(){var e=Bn("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),Kn=o,Gn=a,Vn=h,Yn=function(e,t,n){var r,o;return T&&j(r=t.constructor)&&r!==n&&R(o=r.prototype)&&o!==n.prototype&&T(e,o),e},qn=Ge,Xn=I.f,Hn=Ve.f,Jn=function(e){var t;return Ot(e)&&(void 0!==(t=e[jt])?!!t:"RegExp"==Et(e))},Qn=$t,Zn=Lt,er=Ft,tr=Ut.exports,nr=r,rr=ve,or=yn.enforce,ir=function(e){var t=kn(e),n=$n.f;Mn&&t&&!t[Ln]&&n(t,Ln,{configurable:!0,get:function(){return this}})},ar=zn,cr=Wn,ur=Ie("match"),lr=Gn.RegExp,fr=lr.prototype,sr=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,pr=/a/g,dr=/a/g,gr=new lr(pr)!==pr,vr=er.UNSUPPORTED_Y,hr=Kn&&(!gr||vr||ar||cr||nr((function(){return dr[ur]=!1,lr(pr)!=pr||lr(dr)==dr||"/a/i"!=lr(pr,"i")})));if(Vn("RegExp",hr)){for(var yr=function(e,t){var n,r,o,i,a,c,u=this instanceof yr,l=Jn(e),f=void 0===t,s=[],p=e;if(!u&&l&&f&&e.constructor===yr)return e;if((l||e instanceof yr)&&(e=e.source,f&&(t="flags"in p?p.flags:Zn.call(p))),e=void 0===e?"":Qn(e),t=void 0===t?"":Qn(t),p=e,ar&&"dotAll"in pr&&(r=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),n=t,vr&&"sticky"in pr&&(o=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),cr&&(i=function(e){for(var t,n=e.length,r=0,o="",i=[],a={},c=!1,u=!1,l=0,f="";r<=n;r++){if("\\"===(t=e.charAt(r)))t+=e.charAt(++r);else if("]"===t)c=!1;else if(!c)switch(!0){case"["===t:c=!0;break;case"("===t:sr.test(e.slice(r+1))&&(r+=2,u=!0),o+=t,l++;continue;case">"===t&&u:if(""===f||rr(a,f))throw new SyntaxError("Invalid capture group name");a[f]=!0,i.push([f,l]),u=!1,f="";continue}u?f+=t:o+=t}return[o,i]}(e),e=i[0],s=i[1]),a=Yn(lr(e,t),u?this:fr,yr),(r||o||s.length)&&(c=or(a),r&&(c.dotAll=!0,c.raw=yr(function(e){for(var t,n=e.length,r=0,o="",i=!1;r<=n;r++)"\\"!==(t=e.charAt(r))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),o+=t):o+="[\\s\\S]":o+=t+e.charAt(++r);return o}(e),n)),o&&(c.sticky=!0),s.length&&(c.groups=s)),e!==p)try{qn(a,"source",""===p?"(?:)":p)}catch(e){}return a},br=function(e){e in yr||Xn(yr,e,{configurable:!0,get:function(){return lr[e]},set:function(t){lr[e]=t}})},mr=Hn(lr),xr=0;mr.length>xr;)br(mr[xr++]);fr.constructor=yr,yr.prototype=fr,tr(Gn,"RegExp",yr)}ir("RegExp");var Sr={},wr={},Or={}.propertyIsEnumerable,Er=Object.getOwnPropertyDescriptor,jr=Er&&!Or.call({1:2},1);wr.f=jr?function(e){var t=Er(this,e);return!!t&&t.enumerable}:Or;var Rr=o,Tr=wr,Ir=Be,Pr=Ze,Ar=Me,_r=ve,Cr=k,Nr=Object.getOwnPropertyDescriptor;Sr.f=Rr?Nr:function(e,t){if(e=Pr(e),t=Ar(t),Cr)try{return Nr(e,t)}catch(e){}if(_r(e,t))return Ir(!Tr.f.call(e,t),e[t])};var kr={};kr.f=Object.getOwnPropertySymbols;var $r,Mr=Ve,Lr=kr,Fr=x,Dr=F("Reflect","ownKeys")||function(e){var t=Mr.f(Fr(e)),n=Lr.f;return n?t.concat(n(e)):t},zr=ve,Ur=Dr,Br=Sr,Wr=I,Kr=a,Gr=Sr.f,Vr=Ge,Yr=Ut.exports,qr=ae,Xr=function(e,t){for(var n=Ur(t),r=Wr.f,o=Br.f,i=0;i<n.length;i++){var a=n[i];zr(e,a)||r(e,a,o(t,a))}},Hr=h,Jr=mt,Qr=xt,Zr=Object.keys||function(e){return Jr(e,Qr)},eo=I,to=x,no=Zr,ro=o?Object.defineProperties:function(e,t){to(e);for(var n,r=no(t),o=r.length,i=0;o>i;)eo.f(e,n=r[i++],t[n]);return e},oo=F("document","documentElement"),io=x,ao=ro,co=xt,uo=gt,lo=oo,fo=C,so=nn("IE_PROTO"),po=function(){},go=function(e){return"<script>"+e+"<\/script>"},vo=function(e){e.write(go("")),e.close();var t=e.parentWindow.Object;return e=null,t},ho=function(){try{$r=new ActiveXObject("htmlfile")}catch(e){}var e,t;ho="undefined"!=typeof document?document.domain&&$r?vo($r):((t=fo("iframe")).style.display="none",lo.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(go("document.F=Object")),e.close(),e.F):vo($r);for(var n=co.length;n--;)delete ho.prototype[co[n]];return ho()};uo[so]=!0;var yo=Object.create||function(e,t){var n;return null!==e?(po.prototype=io(e),n=new po,po.prototype=null,n[so]=e):n=ho(),void 0===t?n:ao(n,t)},bo=$t,mo=Lt,xo=Ft,So=oe.exports,wo=yo,Oo=yn.get,Eo=zn,jo=Wn,Ro=RegExp.prototype.exec,To=So("native-string-replace",String.prototype.replace),Io=Ro,Po=function(){var e=/a/,t=/b*/g;return Ro.call(e,"a"),Ro.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),Ao=xo.UNSUPPORTED_Y||xo.BROKEN_CARET,_o=void 0!==/()??/.exec("")[1];(Po||_o||Ao||Eo||jo)&&(Io=function(e){var t,n,r,o,i,a,c,u=this,l=Oo(u),f=bo(e),s=l.raw;if(s)return s.lastIndex=u.lastIndex,t=Io.call(s,f),u.lastIndex=s.lastIndex,t;var p=l.groups,d=Ao&&u.sticky,g=mo.call(u),v=u.source,h=0,y=f;if(d&&(-1===(g=g.replace("y","")).indexOf("g")&&(g+="g"),y=f.slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==f.charAt(u.lastIndex-1))&&(v="(?: "+v+")",y=" "+y,h++),n=new RegExp("^(?:"+v+")",g)),_o&&(n=new RegExp("^"+v+"$(?!\\s)",g)),Po&&(r=u.lastIndex),o=Ro.call(d?n:u,y),d?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:Po&&o&&(u.lastIndex=u.global?o.index+o[0].length:r),_o&&o&&o.length>1&&To.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=a=wo(null),i=0;i<p.length;i++)a[(c=p[i])[0]]=o[c[1]];return o});var Co=Io;(function(e,t){var n,r,o,i,a,c=e.target,u=e.global,l=e.stat;if(n=u?Kr:l?Kr[c]||qr(c,{}):(Kr[c]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(a=Gr(n,r))&&a.value:n[r],!Hr(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Xr(i,o)}(e.sham||o&&o.sham)&&Vr(i,"sham",!0),Yr(n,r,i,e)}})({target:"RegExp",proto:!0,forced:/./.exec!==Co},{exec:Co});var No=On.PROPER,ko=Ut.exports,$o=x,Mo=$t,Lo=r,Fo=Lt,Do=RegExp.prototype,zo=Do.toString,Uo=Lo((function(){return"/a/b"!=zo.call({source:"a",flags:"b"})})),Bo=No&&"toString"!=zo.name;(Uo||Bo)&&ko(RegExp.prototype,"toString",(function(){var e=$o(this),t=Mo(e.source),n=e.flags;return"/"+t+"/"+Mo(void 0===n&&e instanceof RegExp&&!("flags"in Do)?Fo.call(e):n)}),{unsafe:!0});var Wo=Ut.exports,Ko=Co,Go=r,Vo=Ie,Yo=Ge,qo=Vo("species"),Xo=RegExp.prototype,Ho=nt,Jo=$t,Qo=fe,Zo=function(e){return function(t,n){var r,o,i=Jo(Qo(t)),a=Ho(n),c=i.length;return a<0||a>=c?e?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===c||(o=i.charCodeAt(a+1))<56320||o>57343?e?i.charAt(a):r:e?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}},ei={codeAt:Zo(!1),charAt:Zo(!0)}.charAt,ti=pe,ni=Math.floor,ri="".replace,oi=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,ii=/\$([$&'`]|\d{1,2})/g,ai=x,ci=c,ui=qe,li=Co,fi=function(e,t,n,r){var o=Vo(e),i=!Go((function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})),a=i&&!Go((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[qo]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](""),!t}));if(!i||!a||n){var c=/./[o],u=t(o,""[e],(function(e,t,n,r,o){var a=t.exec;return a===Ko||a===Xo.exec?i&&!o?{done:!0,value:c.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));Wo(String.prototype,e,u[0]),Wo(Xo,o,u[1])}r&&Yo(Xo[o],"sham",!0)},si=r,pi=x,di=c,gi=nt,vi=it,hi=$t,yi=fe,bi=function(e,t,n){return t+(n?ei(e,t).length:1)},mi=te,xi=function(e,t,n,r,o,i){var a=n+e.length,c=r.length,u=ii;return void 0!==o&&(o=ti(o),u=oi),ri.call(i,u,(function(i,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(a);case"<":l=o[u.slice(1,-1)];break;default:var f=+u;if(0===f)return i;if(f>c){var s=ni(f/10);return 0===s?i:s<=c?void 0===r[s-1]?u.charAt(1):r[s-1]+u.charAt(1):i}l=r[f-1]}return void 0===l?"":l}))},Si=function(e,t){var n=e.exec;if(ci(n)){var r=n.call(e,t);return null!==r&&ai(r),r}if("RegExp"===ui(e))return li.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")},wi=Ie("replace"),Oi=Math.max,Ei=Math.min,ji="$0"==="a".replace(/./,"$0"),Ri=!!/./[wi]&&""===/./[wi]("a","$0");fi("replace",(function(e,t,n){var r=Ri?"$":"$0";return[function(e,n){var r=yi(this),o=null==e?void 0:mi(e,wi);return o?o.call(e,r,n):t.call(hi(r),e,n)},function(e,o){var i=pi(this),a=hi(e);if("string"==typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var c=n(t,i,a,o);if(c.done)return c.value}var u=di(o);u||(o=hi(o));var l=i.global;if(l){var f=i.unicode;i.lastIndex=0}for(var s=[];;){var p=Si(i,a);if(null===p)break;if(s.push(p),!l)break;""===hi(p[0])&&(i.lastIndex=bi(a,vi(i.lastIndex),f))}for(var d,g="",v=0,h=0;h<s.length;h++){p=s[h];for(var y=hi(p[0]),b=Oi(Ei(gi(p.index),a.length),0),m=[],x=1;x<p.length;x++)m.push(void 0===(d=p[x])?d:String(d));var S=p.groups;if(u){var w=[y].concat(m,b,a);void 0!==S&&w.push(S);var O=hi(o.apply(void 0,w))}else O=xi(y,a,b,m,S,o);b>=v&&(g+=a.slice(v,b)+O,v=b+y.length)}return g+a.slice(v)}]}),!!si((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!ji||Ri);var Ti=Nt,Ii=Tt?{}.toString:function(){return"[object "+Ti(this)+"]"},Pi=Tt,Ai=Ut.exports,_i=Ii;Pi||Ai(Object.prototype,"toString",_i,{unsafe:!0})
/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */;var Ci=function(){var e,t,n,r,o,i,a;function c(){(t=document.createElement("div")).classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=t.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",e.getRevealElement().appendChild(t),n.addEventListener("keyup",(function(t){if(13===t.keyCode)t.preventDefault(),function(){if(i){var t=n.value;""===t?(a&&a.remove(),r=null):(a=new f("slidecontent"),r=a.apply(t),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(e.slide(r[o].h,r[o].v),o++))}(),i=!1;else i=!0}),!1),l()}function u(){t||c(),t.style.display="inline",n.focus(),n.select()}function l(){t||c(),t.style.display="none",a&&a.remove()}function f(t,n){var r=document.getElementById(t)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),a=["#ff6","#a0ffff","#9f9","#f99","#f6f"],c=[],u=0,l="",f=[];this.setRegex=function(e){e=e.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),l=new RegExp("("+e+")","i")},this.getRegex=function(){return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(t){if(null!=t&&t&&l&&!i.test(t.nodeName)){if(t.hasChildNodes())for(var n=0;n<t.childNodes.length;n++)this.hiliteWords(t.childNodes[n]);var r,s;if(3==t.nodeType)if((r=t.nodeValue)&&(s=l.exec(r))){for(var p=t;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var d=e.getIndices(p),g=f.length,v=!1;for(n=0;n<g;n++)f[n].h===d.h&&f[n].v===d.v&&(v=!0);v||f.push(d),c[s[0].toLowerCase()]||(c[s[0].toLowerCase()]=a[u++%a.length]);var h=document.createElement(o);h.appendChild(document.createTextNode(s[0])),h.style.backgroundColor=c[s[0].toLowerCase()],h.style.fontStyle="inherit",h.style.color="#000";var y=t.splitText(s.index);y.nodeValue=y.nodeValue.substring(s[0].length),t.parentNode.insertBefore(h,y)}}},this.remove=function(){for(var e,t=document.getElementsByTagName(o);t.length&&(e=t[0]);)e.parentNode.replaceChild(e.firstChild,e)},this.apply=function(e){if(null!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(r),f}}return{id:"search",init:function(n){(e=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(e){"F"==e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t||c(),"inline"!==t.style.display?u():l())}),!1)},open:u}};export{Ci as default};