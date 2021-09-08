(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(6),c=n.n(s),i=(n(14),n(9)),r=n(2),l=n(7),u=n(8),p="https://mesto.nomoreparties.co/v1/cohort-26/",d="b0e0b94f-d543-4f9f-b125-9b741686cafd",b=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(l.a)(this,e),this._baseUrl=n,this._headers=a}return Object(u.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getAllneededData",value:function(){return Promise.all([this.getCards(),this.getUserInfo()])}},{key:"setCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"setDislike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"".concat(t?"DELETE":"PUT"),headers:this._headers}).then(this._handleResponse)}},{key:"setDelete",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}]),e}())({baseUrl:p,headers:{authorization:d,"Content-Type":"application/json"}}),h=o.a.createContext(),j=n.p+"static/media/logo-header.5f3664ca.svg",m=n(0),_=function(){return Object(m.jsx)("header",{className:"header section",children:Object(m.jsx)("img",{className:"logo header__logo",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},f=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDeleteClick,c=o.a.useContext(h),i=t.owner._id===c._id,r=t.likes.some((function(e){return e._id===c._id}));return Object(m.jsxs)("li",{className:"element",children:[Object(m.jsx)("button",{onClick:function(){s(t)},className:"button element__delete-button",style:i?{display:"block"}:{display:"none"},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"button"}),Object(m.jsx)("img",{className:"element__image",onClick:function(){n(t)},src:t.link,alt:t.title}),Object(m.jsxs)("div",{className:"element__info",children:[Object(m.jsx)("h2",{className:"element__title",children:t.name}),Object(m.jsxs)("div",{className:"element__like",children:[Object(m.jsx)("button",{onClick:function(){a(t)},className:r?"button element__like-button element__like-button_active":"button element__like-button","aria-label":"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c",type:"button"}),Object(m.jsx)("span",{className:"element__like-counter",children:t.likes.length})]})]})]})},O=function(e){var t=e.handleEditProfileClick,n=e.handleAddPlaceClick,a=e.handleEditAvatarClick,s=e.handleCardClick,c=e.handleCardDeleteClick,i=e.cards,r=e.onCardLike,l=o.a.useContext(h);return Object(m.jsxs)("main",{className:"main",children:[Object(m.jsxs)("section",{className:"profile section",children:[Object(m.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(l.avatar,")")},onClick:a}),Object(m.jsxs)("div",{className:"profile__info",children:[Object(m.jsx)("h1",{className:"profile__name",children:l.name}),Object(m.jsx)("button",{className:"button profile__edit-button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",type:"button",onClick:t}),Object(m.jsx)("p",{className:"profile__occupation",children:l.about})]}),Object(m.jsx)("button",{className:"button profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button",onClick:n})]}),Object(m.jsx)("section",{className:"section elements",children:Object(m.jsx)("ul",{className:"elements__list",children:i.map((function(e){return Object(m.jsx)(f,{card:e,onCardClick:s,onCardLike:r,onCardDeleteClick:c},e._id)}))})})]})},C=function(){return Object(m.jsx)("footer",{className:"footer section",children:Object(m.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})},v=function(e){var t=e.title,n=e.name,a=e.buttonText,o=e.isOpen,s=e.children,c=e.onClose,i=e.onSubmit,r=e.onCloseOverlay;return Object(m.jsx)("section",{onClick:r,className:o?"popup popup_type_input popup_opened":"popup popup_type_input",id:n,children:Object(m.jsxs)("div",{className:"popup__container popup__container_type_input",children:[Object(m.jsx)("h2",{className:"popup__title",children:t}),Object(m.jsx)("button",{onClick:c,className:"button popup__exit-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(m.jsxs)("form",{onSubmit:i,className:"popup__form",action:"#",name:n,children:[s,Object(m.jsx)("button",{className:"button popup__save-button",type:"submit","aria-label":a,children:a})]})]})})},x=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,c=e.onCloseOverlay,i=e.isLoading,l=o.a.useContext(h),u=Object(a.useState)(""),p=Object(r.a)(u,2),d=p[0],b=p[1],j=Object(a.useState)(""),_=Object(r.a)(j,2),f=_[0],O=_[1];return Object(a.useEffect)((function(){b(l.name),O(l.about)}),[l]),Object(m.jsxs)(v,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:d,about:f})},onCloseOverlay:c,children:[Object(m.jsx)("input",{onChange:function(e){b(e.target.value)},value:d,className:"popup__input",id:"name",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40"}),Object(m.jsx)("span",{className:"popup__input-error",id:"name-error",children:"Mistake"}),Object(m.jsx)("input",{onChange:function(e){O(e.target.value)},value:f,className:"popup__input",id:"occupation",type:"text",placeholder:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",name:"about",required:!0,minLength:"2",maxLength:"200"}),Object(m.jsx)("span",{className:"popup__input-error",id:"occupation-error"})]})},k=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=e.onCloseOverlay,c=e.isLoading,i=o.a.useRef();return Object(m.jsxs)(v,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:i.current.value})},onCloseOverlay:s,children:[Object(m.jsx)("input",{ref:i,className:"popup__input",id:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",required:!0}),Object(m.jsx)("span",{className:"popup__input-error",id:"avatar-error"})]})},y=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,s=e.onCloseOverlay,c=e.isLoading,i=o.a.useRef(),r=o.a.useRef();return Object(m.jsxs)(v,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i.current.value,link:r.current.value})},onCloseOverlay:s,children:[Object(m.jsx)("input",{ref:i,className:"popup__input",id:"title",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",required:!0,minLength:"2",maxLength:"30"}),Object(m.jsx)("span",{className:"popup__input-error",id:"title-error",children:"Mistake"}),Object(m.jsx)("input",{ref:r,className:"popup__input",id:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0}),Object(m.jsx)("span",{className:"popup__input-error",id:"link-error"})]})},g=function(e){var t=e.card,n=e.onClose,a=e.onCloseOverlay;return Object(m.jsx)("section",{onClick:a,className:t.link?"popup popup_type_image popup_opened":"popup popup_type_image",id:"image-popup",children:Object(m.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(m.jsx)("button",{className:"button popup__exit-button",onClick:n,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(m.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(m.jsx)("h2",{className:"popup__caption",children:t.name})]})})},N=function(e){var t=e.card,n=e.onClose,a=e.onCloseOverlay,o=e.onCardDelete,s=e.isLoading;return Object(m.jsx)("section",{onClick:a,className:t.link?"popup popup_type_image popup_opened":"popup popup_type_image",id:"delete-conformation",children:Object(m.jsxs)("div",{className:"popup__container popup__container_type_input",children:[Object(m.jsx)("h2",{className:"popup__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(m.jsx)("button",{className:"button popup__exit-button",onClick:n,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),o(t)},className:"popup__form",id:"delete-conformation-form",action:"#",name:"delete-conformation-form",children:Object(m.jsx)("button",{className:"button popup__save-button",type:"submit","aria-label":s?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",children:s?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"})})]})})};var L=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)({name:"",about:"",id_:""}),c=Object(r.a)(s,2),l=c[0],u=c[1],p=Object(a.useState)(!1),d=Object(r.a)(p,2),j=d[0],f=d[1],v=Object(a.useState)(!1),L=Object(r.a)(v,2),S=L[0],U=L[1],E=Object(a.useState)(!1),D=Object(r.a)(E,2),P=D[0],T=D[1],A=Object(a.useState)({name:"",link:""}),R=Object(r.a)(A,2),I=R[0],w=R[1],q=Object(a.useState)({name:"",link:""}),J=Object(r.a)(q,2),F=J[0],M=J[1],B=Object(a.useState)(!1),H=Object(r.a)(B,2),z=H[0],G=H[1];Object(a.useEffect)((function(){b.getAllneededData().then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];o(n),u(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&Q()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]);var K=function(e){e.target===e.currentTarget&&Q()},Q=function(){f(!1),U(!1),T(!1),w({name:"",link:""}),M({name:"",link:""})};return Object(m.jsx)(h.Provider,{value:l,children:Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)(_,{}),Object(m.jsx)(O,{handleEditProfileClick:function(){f(!0)},handleAddPlaceClick:function(){U(!0)},handleEditAvatarClick:function(){T(!0)},handleCardClick:function(e){w(e)},handleCardDeleteClick:function(e){M(e)},cards:n,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===l._id}));b.changeLikeCardStatus(e._id,t).then((function(t){o((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(C,{}),Object(m.jsx)(x,{isOpen:j,isLoading:z,onClose:Q,onUpdateUser:function(e){G(!0),b.setUserInfo(e).then((function(e){u(e),Q()})).catch((function(e){return console.log(e)})).finally((function(){G(!1)}))},onCloseOverlay:K}),Object(m.jsx)(y,{isOpen:S,isLoading:z,onClose:Q,onAddPlace:function(e){G(!0),b.setCard(e).then((function(e){o([e].concat(Object(i.a)(n))),Q()})).catch((function(e){return console.log(e)})).finally((function(){G(!1)}))},onCloseOverlay:K}),Object(m.jsx)(k,{isOpen:P,isLoading:z,onClose:Q,onUpdateAvatar:function(e){G(!0),b.setAvatar(e).then((function(e){u(e),Q()})).catch((function(e){return console.log(e)})).finally((function(){G(!1)}))},onCloseOverlay:K}),Object(m.jsx)(g,{card:I,onClose:Q,onCloseOverlay:K}),Object(m.jsx)(N,{card:F,onClose:Q,onCloseOverlay:K,onCardDelete:function(e){G(!0),b.setDelete(e._id).then((function(t){o((function(t){return t.filter((function(t){return t._id!==e._id}))})),Q()})).catch((function(e){return console.log(e)})).finally((function(){G(!1)}))},isLoading:z})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.d8db8517.chunk.js.map