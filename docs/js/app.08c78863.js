(function(e){function t(t){for(var s,r,c=t[0],u=t[1],n=t[2],b=0,m=[];b<c.length;b++)r=c[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);i&&i(t);while(m.length)m.shift()();return o.push.apply(o,n||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],s=!0,c=1;c<l.length;c++){var u=l[c];0!==a[u]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=l[0]))}return e}var s={},a={app:0},o=[];function r(t){if(s[t])return s[t].exports;var l=s[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=s,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(l,s,function(t){return e[t]}.bind(null,s));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var n=0;n<c.length;n++)t(c[n]);var i=u;o.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"1f58":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var s=l("2b0e"),a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("b-jumbotron",{staticClass:"mb-0",staticStyle:{height:"150px"},attrs:{header:"Обективен ваксинационен калкулатор за COVID-19",lead:"",fluid:"","bg-variant":"info","text-variant":"white","header-tag":"H3","header-level":"5"}}),l("b-container",{staticClass:"mt-3"},[l("b-card",[l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Възръст:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"5 - 18г."},{value:1,text:"Над 18г."}]},model:{value:e.selected[0],callback:function(t){e.$set(e.selected,0,t)},expression:"selected[0]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Пол:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Мъж"},{value:1,text:"Жена"}]},model:{value:e.selected[1],callback:function(t){e.$set(e.selected,1,t)},expression:"selected[1]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Обществен риск:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":6,options:[{value:0,text:"Не"},{value:1,text:"Нисък (20 случаи/ден)"},{value:2,text:"Умерен (200 случаи/ден)"},{value:3,text:"Висок (2500 случаи/ден)"},{value:4,text:"Много висок (6800 случаи/ден)"},{value:5,text:"Екстремно висок (13600 случаи/ден)"}]},model:{value:e.selected[2],callback:function(t){e.$set(e.selected,2,t)},expression:"selected[2]"}})],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("BMI:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"<18.5"},{value:1,text:"18.5 - 30"},{value:2,text:">30"}]},model:{value:e.selected[3],callback:function(t){e.$set(e.selected,3,t)},expression:"selected[3]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Диабет:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":5,options:[{value:0,text:"Не"},{value:1,text:"Компенсиран тип 1 диабет (HBA1C <6.5%)"},{value:2,text:"Декомпенсиран тип 1 диабет (HBA1C >7.5%)"},{value:3,text:"Компенсиран тип 2 диабет (HBA1C <6.5%)"},{value:4,text:"Декомпенсиран тип 2 диабет (HBA1C >7.5%)"}]},model:{value:e.selected[4],callback:function(t){e.$set(e.selected,4,t)},expression:"selected[4]"}})],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Хронична бъбречна недостатъчност (ХБН):")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":6,options:[{value:0,text:"Не"},{value:1,text:"Стадий I (GFR > 90 mL/min)"},{value:2,text:"Стадий II (GFR 60-89 mL/min)"},{value:3,text:"Стадий III (GFR 30-59 mL/min)"},{value:4,text:"Стадий IV (GFR 15-29 mL/min)"},{value:5,text:"Стадий V (GFR < 15 mL/min)"}]},model:{value:e.selected[5],callback:function(t){e.$set(e.selected,5,t)},expression:"selected[5]"}})],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Онкологичен пациент:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":4,options:[{value:0,text:"Не"},{value:1,text:"Солидно заболяване"},{value:2,text:"Хематологично заболяване"},{value:3,text:"Матестазирало заболяване"}]},model:{value:e.selected[6],callback:function(t){e.$set(e.selected,6,t)},expression:"selected[6]"}})],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Автоимунни и възпалителни ревматични заболявания (АВРЗ):")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Ремисия"},{value:2,text:"Активно"}]},model:{value:e.selected[7],callback:function(t){e.$set(e.selected,7,t)},expression:"selected[7]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Хронични пулмопатии:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Бронхиална астма (независимо от стадий)"},{value:2,text:"Хроничен бронхит"},{value:3,text:"Емфизем"}]},model:{value:e.selected[8],callback:function(t){e.$set(e.selected,8,t)},expression:"selected[8]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Сърдечно-съдови заболявания (ССЗ):")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":8,options:[{value:0,text:"Не"},{value:1,text:"Вродени сърдечни заболявания"},{value:2,text:"Коронарна болест"},{value:3,text:"Преживял инсулт или транзирторна исхемична атака"},{value:4,text:"Предсърдно мъждене"},{value:5,text:"Сърдечна недостатъчност (независимо от стадий)"},{value:6,text:"Периферна съдова болест (независимо от стадий)"},{value:6,text:"Преживял тромбоза или БТЕ"}]},model:{value:e.selected[9],callback:function(t){e.$set(e.selected,9,t)},expression:"selected[9]"}})],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Неврологични заболявания:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":5,options:[{value:0,text:"Не"},{value:1,text:"Болест на Паркинсон"},{value:2,text:"Епилепсия"},{value:3,text:"Болест на моторните неврони, множественна склероза, миастания или болест на Хънтингтън"},{value:4,text:"Детска церебрална пареза (ДЦП)"}]},model:{value:e.selected[10],callback:function(t){e.$set(e.selected,10,t)},expression:"selected[10]"}})],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Психиатрични отклонения:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Биполярно афективно разстройство"},{value:2,text:"Шизофрения"},{value:3,text:"Деменция"}]},model:{value:e.selected[11],callback:function(t){e.$set(e.selected,11,t)},expression:"selected[11]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Имунен дефицит:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Клетъчен"},{value:2,text:"Хомурален"},{value:3,text:"Смесен"}]},model:{value:e.selected[12],callback:function(t){e.$set(e.selected,12,t)},expression:"selected[12]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Активна химиотерапия:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Медикаменти група А"},{value:2,text:"Медикаменти група B"},{value:3,text:"Медикаменти група C"}]},model:{value:e.selected[13],callback:function(t){e.$set(e.selected,13,t)},expression:"selected[13]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Имуномодулиращи лекарства:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"НСПВС"},{value:2,text:"Стероиди"},{value:3,text:"Антиревматични лекарства (DMARDs)"},{value:4,text:"Биологични агенти"}]},model:{value:e.selected[14],callback:function(t){e.$set(e.selected,14,t)},expression:"selected[14]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Хронични инфекции:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Хепатит B"},{value:2,text:"Хепатит C"},{value:3,text:"HIV"},{value:4,text:"Туберкулоза"}]},model:{value:e.selected[15],callback:function(t){e.$set(e.selected,15,t)},expression:"selected[15]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Хронична чернодробна недостатъчност:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":5,options:[{value:0,text:"Не"},{value:1,text:"Child-Pugh клас A"},{value:2,text:"Child-Pugh клас B"},{value:3,text:"Child-Pugh клас C"},{value:4,text:"След чернодробна трансплантация"}]},model:{value:e.selected[16],callback:function(t){e.$set(e.selected,16,t)},expression:"selected[16]"}})],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Наследствена тромбофилия:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Има данни за такава"}]},model:{value:e.selected[17],callback:function(t){e.$set(e.selected,17,t)},expression:"selected[17]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Анамнеза за Guillain-Barré:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Има данни за такава"}]},model:{value:e.selected[18],callback:function(t){e.$set(e.selected,18,t)},expression:"selected[18]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Бременни:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Планирана бременост"},{value:2,text:"<20-та гестационна седмица"},{value:3,text:">20-та гестационна седмица"}]},model:{value:e.selected[19],callback:function(t){e.$set(e.selected,19,t)},expression:"selected[19]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Кърмачки:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-group",[l("b-form-radio-group",{attrs:{options:[{value:0,text:"Не"},{value:1,text:"Жената кърми"}]},model:{value:e.selected[20],callback:function(t){e.$set(e.selected,20,t)},expression:"selected[20]"}})],1)],1)],1),l("b-row",{staticClass:"my-1"},[l("b-col",{attrs:{sm:"3"}},[l("label",[e._v("Алергии:")])]),l("b-col",{attrs:{sm:"9"}},[l("b-form-select",{attrs:{"select-size":6,options:[{value:0,text:"Не"},{value:1,text:"Към типичните алергени"},{value:2,text:"Към други ваксини; леки-умерени"},{value:3,text:"Към други ваксини; тежки"},{value:4,text:"Към съставките на К-19 ваксина; леки-умерени след първа доза"},{value:5,text:"Към съставките на К-19 ваксина; тежки/анафилаксия  след първа доза"}]},model:{value:e.selected[21],callback:function(t){e.$set(e.selected,21,t)},expression:"selected[21]"}})],1)],1),l("b-row",{staticClass:"pt-5"},[l("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[l("b-button",{attrs:{size:"lg",variant:"info"},on:{click:function(t){return e.Calculate()}}},[e._v("Изчисли")])],1)],1)],1),l("b-modal",{attrs:{id:"modal-1",title:"Резултат",centered:"","ok-only":!0,"ok-title":"Добре",headerBgVariant:e.variants[e.score]},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[l("p",{staticClass:"my-4"},[e._v(e._s(e.outcome))])])],1)],1)},o=[],r=(l("d81d"),{name:"App",components:{},data:function(){return{selected:[null,null,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],map:{0:[{0:1},{1:0}],1:[{0:0},{1:0}],2:[{0:0},{1:0},{2:0},{3:0},{4:0},{5:0}],3:[{0:0},{1:0},{2:0}],4:[{0:0},{1:0},{2:0},{3:0},{4:0}],5:[{0:0},{1:0},{2:0},{3:0},{4:0},{5:0}],6:[{0:0},{1:2},{2:2},{3:2}],7:[{0:0},{1:2},{2:2}],8:[{0:0},{1:0},{2:0},{3:0}],9:[{0:0},{1:0},{2:0},{3:1},{4:1},{5:0},{6:0},{7:1}],10:[{0:0},{1:0},{2:0},{3:0},{4:0}],11:[{0:0},{1:0},{2:0},{3:0}],12:[{0:0},{1:2},{2:2},{3:2}],13:[{0:0},{1:2},{2:2},{3:2}],14:[{0:0},{1:0},{2:1},{3:2},{4:2}],15:[{0:0},{1:1},{2:1},{3:1},{4:1}],16:[{0:0},{1:0},{2:0},{3:0},{4:2}],17:[{0:0},{1:1}],18:[{0:0},{1:1}],19:[{0:0},{1:1},{2:1},{3:1}],20:[{0:0},{1:1}],21:[{0:0},{1:0},{2:0},{3:3},{4:3},{5:4}]},score:0,outcomes:{0:"Лицето може да бъде ваксинирано с която и да е удобрена от ИАЛ ваксина, следвайки стандартните ваксинационни срокове.",1:"Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, следвайки стандартните ваксинационни срокове.",2:"Препоръчително е лицето да бъде ваксинирано с mRNA ваксина, включваща и трета доза, поставена 28 дни след втората ± четвърта доза, поставена до 6 месеца след третата (при умерен-тежък имунен дефицит).",3:"Лицето може да бъде ваксинирано след консултация и съгласие от алерголог; активно наблюдение до 30 минути след ваксинацията.",4:"За момента НЕ СЕ препоръчва ваксинация с ваксината, на която съставки са показали алергична реакция при пациента след първото ѝ прилагане. Препоръчва се консултация с алерголог и преценка за риск/полза от ваксинация."},variants:["info","warning","warning","danger","danger"],outcome:null,modal:!1}},methods:{Calculate:function(){this.score=0;for(var e=0;e<this.selected.length;e++)for(var t=this.map[e],l=0;l<t.length;l++)t[l][this.selected[e]]>this.score&&(this.score=t[l][this.selected[e]]);this.outcome=this.outcomes[this.score],this.modal=!0}}}),c=r,u=(l("7ab2"),l("2877")),n=Object(u["a"])(c,a,o,!1,null,"448c48be",null),i=n.exports,b=l("5f5b"),m=l("b1e0");l("f9e3"),l("2dd8");s["default"].use(b["a"]),s["default"].use(m["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(i)}}).$mount("#app")},"7ab2":function(e,t,l){"use strict";l("1f58")}});
//# sourceMappingURL=app.08c78863.js.map