(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={item:"ContactItem_item__2KdFa",name:"ContactItem_name__1bT_p",number:"ContactItem_number__f5Ixf",button:"ContactItem_button__1siMh"}},,,,function(t,e,n){t.exports={button:"Form_button__243jh"}},function(t,e,n){t.exports={title:"Header_title__3SH2Q"}},function(t,e,n){t.exports={base:"ContactList_base__27RLo"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(9),c=n.n(r),i=n(13),o=n(2),s=n(3),u=n(5),l=n(4),b=(n(19),n(7)),d=n(10),h=n.n(d),m=n(14),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={inputName:"",number:""},t.handleInputChange=function(e){t.setState({inputName:e.currentTarget.value})},t.handleInputChangeNumber=function(e){t.setState({number:e.currentTarget.value})},t.handleAdd=function(){console.log("my hanlerAdd",Object(b.a)(t))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(m.a)(),name:t.state.inputName,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({id:"",inputName:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.inputName,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)("label",{htmlFor:this.id,children:"Name"})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",name:"inputValue",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:this.id,value:e,onChange:this.handleInputChange})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{htmlFor:this.id,children:"Number"})}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:this.id,value:n,onChange:this.handleInputChangeNumber})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{children:Object(j.jsx)("button",{className:h.a.button,type:"submit",onClick:this.handleAdd,children:"add Contact "})})})]})}}]),n}(a.Component),f=p,O=n(11),C=n.n(O),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.title;return Object(j.jsx)("h1",{className:C.a.title,children:t})}}]),n}(a.Component),v=x,g=n(6),y=n.n(g),_=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contact,n=t.deleteContact;return Object(j.jsxs)("li",{className:y.a.item,children:[Object(j.jsxs)("span",{className:y.a.name,children:[e.name,": "]}),Object(j.jsx)("a",{href:"tel:".concat(e.number),className:y.a.number,children:e.number}),Object(j.jsx)("button",{className:y.a.button,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})}}]),n}(a.Component),N=_,A=n(12),S=n.n(A),k=function(t){var e=t.contacts,n=t.deleteContact;return Object(j.jsx)("ul",{className:S.a.base,children:e().map((function(t){return Object(j.jsx)(N,{contact:t,deleteContact:n},t.id)}))})},F=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}}]),n}(a.Component),I=F,w=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already on contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{title:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addContact}),Object(j.jsx)(v,{title:"Contacts"}),Object(j.jsx)(I,{value:this.filter,onChange:this.changeFilter}),Object(j.jsx)(k,{contacts:this.filterContacts,deleteContact:this.deleteContact})]})}}]),n}(a.Component),z=w;c.a.render(Object(j.jsx)(z,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.cb010896.chunk.js.map