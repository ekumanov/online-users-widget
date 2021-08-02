module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,e){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["common/components/Link"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,e,n){"use strict";var r=n(0),o=n.n(r);function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=n(1),i=n.n(a),u=n(2),c=n.n(u),l=n(3),f=n.n(l),p=n(4),d=n.n(p),g=n(5),x=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n);var o=r.prototype;return o.oninit=function(e){var n,r,o;t.prototype.oninit.call(this,e),null!=(n=this.attrs.state).users||(n.users=[]),null!=(r=this.attrs.state).isLoading||(r.isLoading=!1),null!=(o=this.attrs.state).hasLoaded||(o.hasLoaded=!1)},o.oncreate=function(e){t.prototype.oncreate.call(this,e),this.attrs.state.hasLoaded||this.load()},o.className=function(){return"Afrux-OnlineUsersWidget"},o.icon=function(){return"fas fa-user-friends"},o.title=function(){return app.translator.trans("afrux-online-users-widget.forum.widget.title")},o.content=function(){if(this.attrs.state.isLoading)return m(i.a,null);var t=app.forum.attribute("afrux-online-users-widget.maxUsers")||15;return console.log(t),m("div",{className:"Afrux-OnlineUsersWidget-users"},this.attrs.state.users.slice(0,t).map((function(t){return m(d.a,{href:app.route("user",{username:t.slug()}),className:"Afrux-OnlineUsersWidget-users-item"},m(c.a,{text:t.displayName()},f()(t)))})),this.attrs.state.users.length>t?m("span",{className:"Afrux-OnlineUsersWidget-users-item Afrux-OnlineUsersWidget-users-item--plus"},m("span",{className:"Avatar"},"+"+t)):null)},o.load=function(){var t=this;this.attrs.state.isLoading=!0,app.store.find("users",{filter:{online:!0},sort:"-lastSeenAt"}).then((function(e){t.attrs.state.users=e,t.attrs.state.isLoading=!1,t.attrs.state.hasLoaded=!0,m.redraw()}))},r}(n.n(g).a);e.a=function(t){(new o.a).add({key:"onlineUsers",component:x,isDisabled:function(){return!t.forum.attribute("canViewLastSeenAt")||!t.forum.attribute("canSearchUsers")},isUnique:!0,placement:"end",position:1}).extend(t,"afrux-online-users-widget")}},function(t,e,n){"use strict";n.r(e);var r=n(6);app.initializers.add("afrux/online-users-widget",(function(){Object(r.a)(app)}))}]);
//# sourceMappingURL=forum.js.map