(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{"/HqV":function(e,t,a){"use strict";var l=a("xK3H"),n=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("dnxz"));a("fhlT");var d=l(a("kXZy"));a("wyr4");var i=l(a("NEb+"));a("Z2z2");var u=l(a("kI2X"));a("9TwZ");var c=l(a("wOVV"));a("/26P");var s=l(a("aYvq"));a("1pPU");var o=l(a("KjZ1"));a("Lzml");var f=l(a("vpm+"));a("mKhK");var m=l(a("iW5v"));a("Ktq0");var p=l(a("fL5V")),h=l(a("SeLb")),v=l(a("8g53")),y=l(a("Sx57")),g=l(a("4zp0")),E=l(a("iVWQ")),w=l(a("lF+r")),b=l(a("PApH"));a("49Cq");var S=l(a("/OG3"));a("XFd2");var k=l(a("33fr"));a("E2ON");var M=l(a("jjSt"));a("/MhY");var C=l(a("w0+5"));a("SwZr");var F=l(a("AUq8"));a("Q3sr");var V,I,x,R,D,O=l(a("9NP+")),A=n(a("zLBQ")),L=a("LneV"),Y=(l(a("r27q")),l(a("I9Uw"))),N=(l(a("D/dJ")),l(a("iczh")),l(a("+kNj"))),z=l(a("CkN6")),U=l(a("zHco")),j=l(a("rGht")),P=(N.default.Description,O.default.Item),q=(F.default.Step,C.default.TextArea),T=M.default.Option,B=k.default.confirm,K=(S.default.Group,function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")}),Z=(V=O.default.create(),V(I=function(e){function t(){var e,a;(0,y.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,E.default)(this,(e=(0,w.default)(t)).call.apply(e,[this].concat(n))),a.state={caseList:[]},a.onOk=function(){var e=a.props,t=e.form.validateFields,l=e.handleModal2Ok,n=e.selectedRows,r=n.map(function(e){return e.idString}),d=[];t(function(e,t){for(var n in r){var i={id:r[n],reason:t.reason,status:3};d.push(i)}e||a.setState(function(){l(d)})})},a.onCancel=function(){var e=a.props.auditeModalonCancel;a.setState(function(){e()})},a}return(0,b.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.AddModalVisable,l=e.selectedRows;l.map(function(e){return e.idString});return A.default.createElement(k.default,{title:"\u5ba1\u6838\u4e0d\u901a\u8fc7\u539f\u56e0\uff1a",visible:a,width:700,onOk:this.onOk,onCancel:this.onCancel},A.default.createElement(P,{key:"remark"},t("reason",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e0d\u901a\u8fc7\u539f\u56e0\uff01"}]})(A.default.createElement(q,{autosize:{minRows:4,maxRows:8}}))))}}]),t}(A.PureComponent))||I),H=(x=(0,L.connect)(function(e){var t=e.casereview,a=e.Entrust,l=e.casedemo,n=e.loading;return{casereview:t,Entrust:a,casedemo:l,loading:n.models.casereview}}),R=O.default.create(),x(D=R(D=function(e){function t(){var e,a;(0,y.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,E.default)(this,(e=(0,w.default)(t)).call.apply(e,[this].concat(n))),a.state={modal1Visible:!1,AddModalVisable:!1,updateModalVisible:!1,expandForm:!1,selectedRows:[],formValues:{},stepFormValues:{},visible:!1,stepDirection:"horizontal",caseList:[]},a.handleStandardTableChange=function(e,t,l){var n=a.props.dispatch,r=a.state.formValues,d=Object.keys(t).reduce(function(e,a){var l=(0,h.default)({},e);return l[a]=K(t[a]),l},{}),i=(0,h.default)({currentPage:e.current,pageSize:e.pageSize},r,d);l.field&&(i.sorter="".concat(l.field,"_").concat(l.order)),n({type:"casereview/fetch",payload:i})},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.dispatch;t.resetFields(),a.setState({formValues:{}}),l({type:"casereview/fetch",payload:{}})},a.toggleForm=function(){var e=a.state.expandForm;a.setState({expandForm:!e})},a.handleSelectRows=function(e){a.setState({selectedRows:e})},a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form;n.validateFields(function(e,t){if(!e){var n=(0,h.default)({},t,{remittanceDate:t.remittanceDate&&t.remittanceDate.format("YYYY-MM-DD")});a.setState({formValues:n}),l({type:"casereview/fetch",payload:n})}})},a.handleDelete=function(e){var t=a.props.dispatch,l=a.state.selectedRows;switch(e.key){case"":break;default:t({type:"casereview/remove",payload:{key:l.map(function(e){return e.key})},callback:function(){a.setState({selectedRows:[]})}});break}p.default.success("\u5e9f\u9664\u6210\u529f"),a.handleModalVisible()},a.handleOk=function(){a.setState({visible:!1})},a.handleAudit=function(){a.setState({AddModalVisable:!0})},a.auditModalonOk=function(){a.setState({AddModalVisable:!1})},a.auditeModalonCancel=function(){a.setState({AddModalVisable:!1})},a.handleCancel=function(){a.setState({visible:!1})},a.remove=function(){var e=a.props.dispatch,t=a.state.selectedRows,l="\u60a8\u5c06\u5220\u9664\u6c47\u6b3e\u5355\u53f7\u4e3a   ",n="    \u7684\u6570\u636e\uff01",r=t.map(function(e){return e.length}),d=t.map(function(e){return e.idString}),i=l+d+r+n,u=(0,v.default)((0,v.default)(a));t&&B({title:"\u786e\u5b9a\u8981\u5220\u9664\u6570\u636e\u5417?",content:i,onOk:function(){e({type:"casereview/remove",payload:d}),p.default.success("\u5220\u9664\u6210\u529f"),u.setState({selectedRows:[]}),u.handleFormReset()},onCancel:function(){}})},a.showConfirms=function(){var e=a.props.dispatch,t=a.state,l=t.selectedRows,n=t.caseList,r="\u60a8\u5c06\u5ba1\u6838\u901a\u8fc7\u5b9e\u9a8c\u7f16\u53f7\u4e3a   ",d="    \u7684\u6570\u636e\uff01",i=l.map(function(e){return e.length}),u=l.map(function(e){return e.idString}),c=r+u+i+d,s=(0,v.default)((0,v.default)(a));if(l){for(var o in u){var f={id:u[o],status:2};n.push(f)}B({title:"\u786e\u5b9a\u8981\u5ba1\u6838\u901a\u8fc7\u5417?",content:c,onOk:function(){e({type:"casereview/update",payload:n}),p.default.success("\u5ba1\u6838\u6210\u529f"),s.setState({selectedRows:[]}),s.handleFormReset()},onCancel:function(){}})}},a.handleUpdateModalVisible=function(e,t){a.setState({updateModalVisible:!!e,stepFormValues:t||{}})},a.handleAdd=function(e){var t=a.props.dispatch;t({type:"casereview/add",payload:{desc:e.desc}}),p.default.success("\u6dfb\u52a0\u6210\u529f"),a.handleModalVisible()},a.handleUpdate=function(e){var t=a.props.dispatch;t({type:"casereview/update",payload:{name:e.name,desc:e.desc,key:e.key}}),p.default.success("\u914d\u7f6e\u6210\u529f"),a.handleUpdateModalVisible()},a.handleModal2Ok=function(e){var t=a.props.dispatch;t({type:"casereview/updateReasons",payload:e}),p.default.success("\u64cd\u4f5c\u6210\u529f"),a.auditModalonOk(),a.setState({selectedRows:[]}),a.handleFormReset()},a}return(0,b.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"casereview/fetch"}),e({type:"casereview/remittanceStates"}),e({type:"Entrust/fetchCategorys"}),e({type:"casereview/getcaseDatas",payload:{}}),e({type:"casedemo/caseStates"})}},{key:"renderSimpleForm",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.casereview.remittanceState;return A.default.createElement(O.default,{onSubmit:this.handleSearch,layout:"inline"},A.default.createElement(s.default,{gutter:{md:8,lg:24,xl:48}},A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6c47\u6b3e\u5355\u53f7"},t("id")(A.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u6c47\u6b3e\u5355\u53f7"})))),A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6c47\u6b3e\u72b6\u6001"},t("status")(A.default.createElement(M.default,{allowClear:!0,placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},a.map(function(e){return A.default.createElement(T,{key:e.id,value:e.id},e.value)}))))),A.default.createElement(m.default,{md:8,sm:24},A.default.createElement("span",{className:j.default.submitButtons},A.default.createElement(f.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),A.default.createElement(f.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),A.default.createElement("a",{style:{marginLeft:8},onClick:this.toggleForm},"\u5c55\u5f00 ",A.default.createElement(o.default,{type:"down"}))))))}},{key:"renderAdvancedForm",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.casereview.remittanceState;e.Entrust.Category;return A.default.createElement(O.default,{onSubmit:this.handleSearch,layout:"inline"},A.default.createElement(s.default,{gutter:{md:8,lg:24,xl:48}},A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6c47\u6b3e\u5355\u53f7"},t("id")(A.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u6c47\u6b3e\u5355\u53f7"})))),A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6c47\u6b3e\u72b6\u6001"},t("status")(A.default.createElement(M.default,{allowClear:!0,placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},a.map(function(e){return A.default.createElement(T,{key:e.id,value:e.id},e.value)}))))),A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6c47\u6b3e\u65e5\u671f"},t("remittanceDate")(A.default.createElement(c.default,{style:{width:"100%"}})))),A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6c47\u6b3e\u4eba",style:{marginLeft:12}},t("remitter")(A.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u6c47\u6b3e\u4eba"})))),A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6c47\u6b3e\u8d26\u6237"},t("remittanceAccount")(A.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u6c47\u6b3e\u8d26\u6237"})))),A.default.createElement(m.default,{md:8,sm:24},A.default.createElement(P,{label:"\u6536\u6b3e\u8d26\u6237"},t("beneficiaryAccount")(A.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u6536\u6b3e\u8d26\u6237"}))))),A.default.createElement("div",{style:{overflow:"hidden"}},A.default.createElement("div",{style:{float:"right",marginBottom:24}},A.default.createElement(f.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),A.default.createElement(f.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),A.default.createElement("a",{style:{marginLeft:8},onClick:this.toggleForm},"\u6536\u8d77 ",A.default.createElement(o.default,{type:"up"})))))}},{key:"renderForm",value:function(){var e=this.state.expandForm;return e?this.renderAdvancedForm():this.renderSimpleForm()}},{key:"render",value:function(){var e=this,t=this.props,a=(t.form.getFieldDecorator,t.casereview),l=a.data1,n=a.remittanceState,c=(a.caseinfos,a.attachmentList),s=t.casedemo.caseState,o=t.loading,m=t.Entrust.Category,p=function(t,a){var l=e.props.dispatch;1==t&&l({type:"casereview/caseDatas",payload:{remittanceBillId:a.idString}})},h=this.state,v=h.visible,y=h.selectedRows,g=h.updateModalVisible,E=h.stepFormValues,w=h.AddModalVisable,b={handleUpdateModalVisible:this.handleUpdateModalVisible,handleUpdate:this.handleUpdate},S={auditModalonOk:this.auditModalonOk,auditeModalonCancel:this.auditeModalonCancel,handleModal2Ok:this.handleModal2Ok},M=function(t){e.setState({visible:!0}),C(t)},C=function(t){var a=e.props.dispatch;new Promise(function(e,l){a({type:"casereview/fileDatas",payload:{remittanceBillId:t.idString,resolve:e,reject:l}})}).then(function(e){if(void 0!==e){var t,l=[];t=e[0].attachmentIdString,l.push(t),a({type:"casereview/fileById",payload:l})}})},F=function(){e.setState({visible:!1})},V=[{title:"\u6c47\u6b3e\u5355\u53f7",dataIndex:"idString",align:"center"},{title:"\u6c47\u6b3e\u91d1\u989d",dataIndex:"money",align:"center"},{title:"\u6c47\u6b3e\u65e5\u671f",dataIndex:"remittanceDate",align:"center",render:function(e){return A.default.createElement("span",null,(0,Y.default)(e).format("YYYY-MM-DD"))}},{title:"\u6c47\u6b3e\u4eba",dataIndex:"remitter",align:"center"},{title:"\u6c47\u6b3e\u8d26\u53f7",dataIndex:"remittanceAccount",align:"center"},{title:"\u6536\u6b3e\u8d26\u53f7",dataIndex:"beneficiaryAccount",align:"center"},{title:"\u6c47\u6b3e\u72b6\u6001",dataIndex:"status",align:"center",render:function(e,t){var a=n.filter(function(t){return parseInt(t.id,10)===parseInt(e,10)}),l=a.length>0?a[0].value:e;return 3===e?A.default.createElement(u.default,{content:"\u4e0d\u901a\u8fc7\u539f\u56e0\uff1a".concat(t.reason),title:l,trigger:"hover"},A.default.createElement("a",null,l)):l}},{title:"\u6536\u6b3e\u51ed\u8bc1",align:"center",render:function(e){return A.default.createElement("div",null,A.default.createElement("a",{onClick:function(){return M(e)}},"\u67e5\u770b\u51ed\u8bc1"),A.default.createElement(k.default,{visible:v,onCancel:F,footer:null},A.default.createElement("img",{alt:"example",style:{width:"100%"},src:c.length>0?c[0].filePath:null})))}},{title:"\u5907\u6ce8",dataIndex:"remark",align:"center"}],I=function(e){var t=[];void 0!==e.cases&&(t=e.cases);var a=[{title:"\u6848\u4f8b\u7f16\u53f7",dataIndex:"caseNo"},{title:"\u6848\u4f8b\u7f16\u7801",align:"center",dataIndex:"caseNo"},{title:"\u4e13\u4e1a\u7c7b\u522b",dataIndex:"caseCategoryId",align:"center",render:function(e){var t=m.filter(function(t){return parseInt(t.id,10)===parseInt(e,10)});return t.length>0?t[0].value:e}},{title:"\u53d7\u7406\u65e5\u671f",dataIndex:"acceptDate",align:"center",render:function(e){return null!==e?A.default.createElement("span",null,(0,Y.default)(e).format("YYYY-MM-DD")):e}},{title:"\u59d4\u6258\u65b9",align:"center",dataIndex:"clientName"},{title:"\u6848\u4f8b\u72b6\u6001",dataIndex:"status",align:"center",render:function(e){var t=s.filter(function(t){return parseInt(t.id,10)===parseInt(e,10)}),a=t.length>0?t[0].value:e;return a}}];return A.default.createElement(i.default,{columns:a,dataSource:t,pagination:!1})};return A.default.createElement(U.default,{title:"\u6848\u4f8b\u5ba1\u6838"},A.default.createElement(d.default,{bordered:!1},A.default.createElement("div",{className:j.default.tableList},A.default.createElement("div",{className:j.default.tableListForm},this.renderForm()),A.default.createElement("div",{className:j.default.tableListOperator},A.default.createElement("span",null,A.default.createElement(f.default,{onClick:this.showConfirms,type:"primary",disabled:0===y.length||y.filter(function(e){return 3===parseInt(e.status,10)}).length>0},"\u5ba1\u6838\u901a\u8fc7"),A.default.createElement(f.default,{onClick:function(){return e.handleAudit()},type:"danger",disabled:0===y.length||y.filter(function(e){return 2===e.status}).length>0},"\u5ba1\u6838\u4e0d\u901a\u8fc7"),A.default.createElement(f.default,{onClick:this.remove,type:"danger",disabled:0===y.length},"\u5220\u9664"))),A.default.createElement(z.default,{rowKey:"idString",selectedRows:y,loading:o,data:l,columns:V,expandedRowRender:I,onSelectRow:this.handleSelectRows,onExpand:p,onChange:this.handleStandardTableChange}))),E&&Object.keys(E).length?A.default.createElement(UpdateForm,(0,r.default)({},b,{updateModalVisible:g,values:E})):null,A.default.createElement(Z,(0,r.default)({},S,{AddModalVisable:w,selectedRows:y})))}}]),t}(A.PureComponent))||D)||D),Q=H;t.default=Q}}]);