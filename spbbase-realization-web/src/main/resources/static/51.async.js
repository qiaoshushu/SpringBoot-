(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{"4F5L":function(e,t,l){e.exports={searchForm:"antd-pro\\pages\\-mail\\-mail-list-searchForm",tableListOperator:"antd-pro\\pages\\-mail\\-mail-list-tableListOperator"}},cAGS:function(e,t,l){"use strict";var a=l("xK3H"),r=l("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("fhlT");var n=a(l("kXZy")),i=a(l("dnxz"));l("Lzml");var d=a(l("vpm+"));l("Z2z2");var u=a(l("kI2X"));l("XFd2");var s=a(l("33fr"));l("/26P");var c=a(l("aYvq"));l("mKhK");var o=a(l("iW5v")),f=a(l("SeLb")),m=a(l("Sx57")),p=a(l("4zp0")),h=a(l("iVWQ")),v=a(l("lF+r")),E=a(l("PApH"));l("/MhY");var g=a(l("w0+5"));l("E2ON");var y=a(l("jjSt"));l("Q3sr");var b,C,w,M,k,F,S,T,x,V=a(l("9NP+")),D=r(l("zLBQ")),N=l("LneV"),O=a(l("+kNj")),I=a(l("zHco")),P=a(l("CkN6")),R=a(l("4F5L")),L=a(l("I9Uw")),A=V.default.Item,q=y.default.Option,H=(g.default.TextArea,O.default.Description,["\u90ae\u5bc4","\u81ea\u53d6","\u9001\u8fbe"]),j=["\u672a\u5bc4\u51fa","\u5df2\u5bc4\u51fa"],z=["\u4eb2\u5b50\u9274\u5b9a","\u6587\u4e66\u9274\u5b9a","\u9152\u7cbe\u9274\u5b9a","\u8f66\u8f86\u75d5\u8ff9\u9274\u5b9a","\u6cd5\u533b\u4e34\u5e8a\u9274\u5b9a","\u6cd5\u533b\u75c5\u7406\u9274\u5b9a"],Y=["EMS","\u987a\u4e30","\u767e\u4e16"],K=["\u51ed\u5408\u540c\u526f\u672c","\u7968\u636e","\u8eab\u4efd\u8bc1"],Q=(b=V.default.create(),b(C=function(e){function t(){var e,l;(0,m.default)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return l=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(r))),l.handleOk=function(){var e=l.props,t=e.selectedRows,a=e.form,r=(e.dispatch,e.mailList),n=e.handleOk;e.componentDidMount;a.validateFields(function(e,i){if(!e){for(var d in t){var u=(0,f.default)({},i,{caseId:t[d].idString,providedType:t[d].reportProvidedType,certTypeForTook:t[d].certTypeForTook,certIdentify:t[d].certIdentify});r.push(u)}l.setState(function(){n(r)}),a.resetFields()}})},l.handleCancel=function(){var e=l.props.handleCancel;l.setState(function(){e()})},l}return(0,E.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,l=e.form,a=e.selectedRows;return D.default.createElement(s.default,{title:"\u90ae\u5bc4\u754c\u9762",visible:t,onOk:this.handleOk,onCancel:this.handleCancel},D.default.createElement(V.default,{layout:"inline",className:R.default.searchForm},D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u90ae\u5bc4\u516c\u53f8"},l.getFieldDecorator("expressCompany",{rules:[{required:!0,message:"\u8be5\u9879\u4e0d\u53ef\u4e3a\u7a7a"}]})(D.default.createElement(y.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"},allowClear:!0},D.default.createElement(q,{value:"0"},"EMS"),D.default.createElement(q,{value:"1"},"\u987a\u4e30"),D.default.createElement(q,{value:"2"},"\u767e\u4e16")))))),D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u5feb\u9012\u5355\u53f7"},l.getFieldDecorator("expressNumber",{rules:[{required:!0,message:"\u5fc5\u586b"}]})(D.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165"}))))),D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u4eba"},l.getFieldDecorator("recipientName",{rules:[{required:!0,message:"\u5fc5\u586b"}],initialValue:a[0].recipientName})(D.default.createElement(g.default,null))))),D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u65b9\u5f0f"},l.getFieldDecorator("recipientPhone",{rules:[{required:!0,message:"\u5fc5\u586b"}],initialValue:a[0].recipientPhone})(D.default.createElement(g.default,null))))),D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6536\u4ef6\u4eba\u5730\u5740"},l.getFieldDecorator("recipientAddress",{rules:[{required:!0,message:"\u5fc5\u586b"}],initialValue:a[0].recipientAddress})(D.default.createElement(g.default,null)))))))}}]),t}(D.PureComponent))||C),X=(w=V.default.create(),w(M=function(e){function t(){var e,l;(0,m.default)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return l=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(r))),l.handleOk=function(){var e=l.props,t=e.deliveryMailOk,a=e.mailList,r=e.form,n=e.selectedRows;r.validateFields(function(e,i){if(!e){for(var d in n){var u=(0,f.default)({},i,{caseId:n[d].idString});a.push(u)}l.setState(function(){t(a)}),r.resetFields()}})},l.handleCancel=function(){var e=l.props.deliveryMailCancel;l.setState(function(){e()})},l}return(0,E.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.deliveryMailVisible,l=e.form,a=e.selectedRows;return D.default.createElement(s.default,{title:"\u90ae\u5bc4\u754c\u9762",visible:t,onOk:this.handleOk,onCancel:this.handleCancel},D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u4eba"},l.getFieldDecorator("recipientName",{rules:[{required:!0,message:"\u5fc5\u586b"}],initialValue:a[0].recipientName})(D.default.createElement(g.default,null))))),D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u8054\u7cfb\u65b9\u5f0f"},l.getFieldDecorator("recipientPhone",{rules:[{required:!0,message:"\u5fc5\u586b"}],initialValue:a[0].recipientPhone})(D.default.createElement(g.default,null))))),D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u6536\u4ef6\u4eba\u5730\u5740"},l.getFieldDecorator("recipientAddress",{rules:[{required:!0,message:"\u5fc5\u586b"}],initialValue:a[0].recipientAddress})(D.default.createElement(g.default,null))))))}}]),t}(D.PureComponent))||M),B=(k=V.default.create(),k(F=function(e){function t(){var e,l;(0,m.default)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return l=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(r))),l.handleOk=function(){var e=l.props,t=e.selfMailHandleOk,a=e.mailList,r=e.form,n=e.selectedRows;r.validateFields(function(e,i){if(!e){for(var d in n){var u=(0,f.default)({},i,{caseId:n[d].idString,providedType:n[d].reportProvidedType});a.push(u)}l.setState(function(){t(a)}),r.resetFields()}})},l.handleCancel=function(){var e=l.props.selfMailHandleCancel;l.setState(function(){e()})},l}return(0,E.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.selfMailVisible,l=e.selectedRows,a=e.form;return D.default.createElement(s.default,{title:"\u90ae\u5bc4\u754c\u9762",visible:t,onOk:this.handleOk,onCancel:this.handleCancel},D.default.createElement(V.default,{layout:"inline",className:R.default.searchForm},D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(A,{labelCol:{span:5},wrapperCol:{span:15},label:"\u81ea\u53d6\u65b9\u5f0f"},a.getFieldDecorator("certTypeForTook",{initialValue:l[0].certTypeForTook,rules:[{required:!0,message:"\u8be5\u9879\u4e0d\u53ef\u4e3a\u7a7a"}]})(D.default.createElement(y.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"},allowClear:!0},D.default.createElement(q,{value:0},K[0]),D.default.createElement(q,{value:1},K[1]),D.default.createElement(q,{value:2},K[2]))))),function(){switch(console.log("\u8eab\u4efd\u8bc1"),console.log(a.getFieldValue("certTypeForTook"),"+++++++++++++++++++++++++"),a.getFieldValue("certTypeForTook")){case 2:return D.default.createElement(o.default,{md:24,sm:24},D.default.createElement(V.default.Item,{label:"\u8eab\u4efd\u8bc1"},a.getFieldDecorator("certIdentify",{initialValue:l[0].certIdentify,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7"}]})(D.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165\u8eab\u4efd\u8bc1\u53f7"}))));default:return null}}())))}}]),t}(D.PureComponent))||F),J=(S=(0,N.connect)(function(e){var t=e.mailModel,l=e.casedemo,a=e.loading;return{mailModel:t,casedemo:l,loading:a.models.mailModel}}),T=V.default.create(),S(x=T(x=function(e){function t(){var e,l;(0,m.default)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return l=(0,h.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(r))),l.state={visible:!1,selfMailVisible:!1,deliveryMailVisible:!1,selectedRows:[],formValues:{},record:[],mailList:[]},l.columns=[{title:"\u6848\u4f8b\u7f16\u53f7",dataIndex:"caseNo",align:"center"},{title:"\u4e13\u4e1a\u7c7b\u522b",dataIndex:"caseCategoryId",align:"center",render:function(e){return z[e]}},{title:"\u53d7\u7406\u65e5\u671f",dataIndex:"acceptDate",align:"center",render:function(e){return null!==e?D.default.createElement("span",null,(0,L.default)(e).format("YYYY-MM-DD")):e}},{title:"\u59d4\u6258\u65b9",dataIndex:"clientName",align:"center"},{title:"\u90ae\u5bc4\u7c7b\u578b",dataIndex:"reportProvidedType",align:"center",render:function(e,t){var l=D.default.createElement("div",null,D.default.createElement("p",null,"\u6536\u4ef6\u4eba\uff1a",t.recipientName),D.default.createElement("p",null,"\u8054\u7cfb\u65b9\u5f0f\uff1a",t.recipientPhone),D.default.createElement("p",null,"\u9001\u8fbe\u5730\u5740\uff1a",t.recipientAddress)),a=D.default.createElement("div",null,D.default.createElement("p",null,"\u90ae\u5bc4\u516c\u53f8\uff1a",Y[t.expressCompany]),D.default.createElement("p",null,"\u90ae\u5bc4\u5355\u53f7\uff1a",t.expressNumber),D.default.createElement("p",null,"\u6536\u4ef6\u4eba\uff1a",t.recipientName),D.default.createElement("p",null,"\u8054\u7cfb\u65b9\u5f0f\uff1a",t.recipientPhone),D.default.createElement("p",null,"\u9001\u8fbe\u5730\u5740\uff1a",t.recipientAddress)),r=D.default.createElement("div",null,D.default.createElement("p",null,"\u81ea\u53d6\u51ed\u8bc1\uff1a",K[t.certTypeForTook]),function(){switch(t.certTypeForTook){case 2:return D.default.createElement("p",null,"\u8eab\u4efd\u8bc1\uff1a",t.certIdentify);default:return null}}()),n=D.default.createElement("div",null,D.default.createElement("p",null,"\u6536\u4ef6\u4eba\uff1a",t.recipientName),D.default.createElement("p",null,"\u624b\u673a\u53f7\uff1a",t.recipientPhone),D.default.createElement("p",null,"\u5730  \u5740\uff1a",t.recipientAddress));return 0===e?D.default.createElement(u.default,{content:0==t.isMail?l:a,title:H[e],trigger:"hover"},D.default.createElement("a",null,H[e])):1===e?D.default.createElement(u.default,{content:r,title:H[e],trigger:"hover"},D.default.createElement("a",null,H[e])):D.default.createElement(u.default,{content:n,title:H[e]},D.default.createElement("a",null,H[e]))}},{title:"\u90ae\u5bc4\u72b6\u6001",dataIndex:"isMail",align:"center",render:function(e){return j[e]}},{title:"\u63cf\u8ff0",dataIndex:"describe",align:"center"}],l.showModal=function(e){var t=l.state.selectedRows;switch(e){case 0:l.setState({visible:!0});break;case 1:l.setState({selfMailVisible:!0});break;case 2:l.setState({deliveryMailVisible:!0});break}l.setState({selectedRows:t})},l.handleOk=function(e){var t=l.props.dispatch;l.state.selectedRows;new Promise(function(l,a){t({type:"mailModel/insert",payload:{mailList:e,resolve:l,reject:a}})}).then(function(e){1==e&&l.componentDidMount()}),l.setState({selectedRows:[],visible:!1,mailList:[]})},l.handleCancel=function(){l.setState({visible:!1})},l.selfMailHandleOk=function(e){var t=l.props.dispatch;l.state.selectedRows;new Promise(function(l,a){t({type:"mailModel/insert",payload:{mailList:e,resolve:l,reject:a}})}).then(function(e){1==e&&l.componentDidMount()}),l.setState({selectedRows:[],mailList:[],selfMailVisible:!1})},l.selfMailHandleCancel=function(){l.setState({selfMailVisible:!1})},l.deliveryMailOk=function(e){var t=l.props.dispatch;new Promise(function(l,a){t({type:"mailModel/insert",payload:{mailList:e,resolve:l,reject:a}})}).then(function(e){1==e&&l.componentDidMount()}),l.setState({selectedRows:[],mailList:[],deliveryMailVisible:!1}),l.setState({})},l.deliveryMailCancel=function(){l.setState({deliveryMailVisible:!1})},l.handleSearch=function(e){e.preventDefault();var t=l.props,a=t.dispatch,r=t.form;r.validateFields(function(e,t){if(!e){var r=(0,f.default)({},t);l.setState({formValues:r}),a({type:"casedemo/fetch",payload:{caseCategoryId:t.caseCategoryId,clientName:t.clientName}})}})},l.handleFormReset=function(){var e=l.props,t=e.form,a=e.dispatch;t.resetFields(),l.setState({formValues:{}}),a({type:"casedemo/fetch"})},l.handleSelectRows=function(e){l.setState({selectedRows:e})},l.handleStandardTableChange=function(e){var t=l.props.dispatch,a=l.state.formValues,r=(0,f.default)({currentPage:e.current,pageSize:e.pageSize},a);t({type:"mailModel/fetch",payload:r})},l.generateData=function(e,t){for(var l in e.list){var a=0;for(var r in t)e.list[l].idString===t[r].caseId&&(a=1,e.list[l].certTypeForTook=t[r].certTypeForTook,e.list[l].certIdentify=t[r].certIdentify,e.list[l].expressCompany=t[r].expressCompany,e.list[l].expressNumber=t[r].expressNumber,e.list[l].recipientName=t[r].recipientName,e.list[l].recipientPhone=t[r].recipientPhone,e.list[l].recipientAddress=t[r].recipientAddress);e.list[l].isMail=a}return e},l}return(0,E.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;this.state.formValues;new Promise(function(t,l){e({type:"casedemo/fetch2",payload:{resolve:t,reject:l}})}).then(function(t){if(0!==t.length){var l=t.map(function(e){return e.idString});e({type:"mailModel/fetchMail",payload:l})}})}},{key:"renderAdvancedSearchForm",value:function(){var e=this.props.form.getFieldDecorator;return D.default.createElement(V.default,{onSubmit:this.handleSearch,layout:"inline",className:R.default.searchForm},D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}},D.default.createElement(o.default,{md:8,sm:24},D.default.createElement(A,{label:"\u4e13\u4e1a\u7c7b\u578b"},e("caseCategoryId")(D.default.createElement(y.default,{placeholder:"\u8bf7\u9009\u62e9",allowClear:!0},D.default.createElement(q,{value:"0"},"\u4eb2\u5b50\u9274\u5b9a"),D.default.createElement(q,{value:"1"},"\u6587\u4e66\u9274\u5b9a"),D.default.createElement(q,{value:"2"},"\u9152\u7cbe\u9274\u5b9a"),D.default.createElement(q,{value:"3"},"\u8f66\u8f86\u75d5\u8ff9\u9274\u5b9a"),D.default.createElement(q,{value:"4"},"\u6cd5\u533b\u4e34\u5e8a\u9274\u5b9a"),D.default.createElement(q,{value:"5"},"\u6cd5\u533b\u75c5\u7406\u9274\u5b9a"))))),D.default.createElement(o.default,{md:8,sm:24},D.default.createElement(A,{label:"\u59d4\u6258\u65b9"},e("clientName")(D.default.createElement(g.default,{placeholder:"\u8bf7\u8f93\u5165\u5bc4\u4ef6\u4eba"})))),D.default.createElement(o.default,{md:8,sm:24},D.default.createElement("span",{className:R.default.submitButtons},D.default.createElement(d.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),D.default.createElement(d.default,{style:{marginTop:6,marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e")))),D.default.createElement(c.default,{gutter:{md:8,lg:24,xl:48}}))}},{key:"render",value:function(){var e=this,t=this.props,l=t.casedemo.data,a=t.mailModel.mailData,r=t.loading,u=(t.form.getFieldDecorator,this.state),s=u.selectedRows,c=u.visible,o=u.selfMailVisible,f=u.deliveryMailVisible,m=u.mailList,p=this.props.dispatch,h={handleOk:this.handleOk,componentDidMount:this.componentDidMount,handleCancel:this.handleCancel},v={selfMailHandleOk:this.selfMailHandleOk,selfMailHandleCancel:this.selfMailHandleCancel},E={deliveryMailOk:this.deliveryMailOk,deliveryMailCancel:this.deliveryMailCancel};return D.default.createElement(I.default,{title:"\u90ae\u5bc4\u5217\u8868"},D.default.createElement(n.default,{bordered:!1},D.default.createElement("div",null,this.renderAdvancedSearchForm()),D.default.createElement("div",{className:R.default.tableListOperator},D.default.createElement(d.default,{type:"primary",disabled:1!==s.length||0!==s.filter(function(e){return 1===e.isMail}).length,onClick:function(){return e.showModal(s[0].reportProvidedType)}},"\u786e\u8ba4\u90ae\u5bc4"),s&&0!=s.length?D.default.createElement(Q,(0,i.default)({},h,{visible:c,selectedRows:s,mailList:m,dispatch:p})):null,s&&0!=s.length?D.default.createElement(B,(0,i.default)({},v,{selfMailVisible:o,selectedRows:s,mailList:m,dispatch:p})):null,s&&0!=s.length?D.default.createElement(X,(0,i.default)({},E,{deliveryMailVisible:f,selectedRows:s,mailList:m,dispatch:p})):null),D.default.createElement(P.default,{rowKey:"idString",selectedRows:s,loading:r,data:this.generateData(l,a),columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange})))}}]),t}(D.PureComponent))||x)||x),W=J;t.default=W}}]);