(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"78rr":function(e,t,a){"use strict";var l=a("xK3H"),r=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("khen");var n=l(a("3J+T")),d=l(a("dnxz"));a("Z2z2");var u=l(a("kI2X"));a("Ktq0");var c=l(a("fL5V"));a("wyr4");var i=l(a("NEb+"));a("fhlT");var f=l(a("kXZy"));a("Jm7A");var o=l(a("F1Zk"));a("1pPU");var s=l(a("KjZ1"));a("Lzml");var m=l(a("vpm+"));a("/26P");var h=l(a("aYvq"));a("9TwZ");var p=l(a("wOVV"));a("mKhK");var v=l(a("iW5v")),g=l(a("SeLb")),E=l(a("Sx57")),y=l(a("4zp0")),S=l(a("iVWQ")),w=l(a("lF+r")),b=l(a("PApH"));a("XFd2");var F=l(a("33fr"));a("/MhY");var C=l(a("w0+5"));a("E2ON");var k=l(a("jjSt"));a("Q3sr");var x,I,O,R,D,M,A,P,L,V=l(a("9NP+")),Y=r(a("zLBQ")),N=a("LneV"),z=l(a("CkN6")),T=l(a("zHco")),j=l(a("kxm8")),q=l(a("I9Uw")),B=V.default.Item,K=k.default.Option,U=C.default.TextArea,Z=(F.default.confirm,["\u5df2\u521b\u5efa","\u5df2\u6c47\u6b3e","\u5df2\u9000\u6b3e"]),_=(x=V.default.create(),x(I=function(e){function t(){var e,a;(0,E.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,S.default)(this,(e=(0,w.default)(t)).call.apply(e,[this].concat(r))),a.handleSearch=function(e){e.preventDefault();var t=a.props,l=t.form,r=t.handleSearch;l.validateFields(function(e,t){if(!e){var l=(0,g.default)({},t,{acceptDate:t.acceptDate&&t.acceptDate.format("YYYY-MM-DD")});a.setState(function(){r(l)})}})},a.handleFormReset=function(){var e=a.props,t=e.form,l=e.handleFormReset;t.resetFields(),a.setState(function(){l()})},a}return(0,b.default)(t,e),(0,y.default)(t,[{key:"renderAdvancedSearchForm",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.Category,l=e.toggleSearchForm;return Y.default.createElement(V.default,{onSubmit:this.handleSearch,layout:"inline",className:j.default.searchForm},Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement(B,{label:"\u6848\u4f8b\u7f16\u53f7"},t("caseNo")(Y.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u6848\u4f8b\u7f16\u53f7"})))),Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement(B,{label:"\u4e13\u4e1a\u7c7b\u522b"},t("caseCategoryId")(Y.default.createElement(k.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},a.map(function(e){return Y.default.createElement(K,{key:e.id,value:e.id},e.value)}))))),Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement(B,{label:"\u53d7\u7406\u65e5\u671f"},t("acceptDate")(Y.default.createElement(p.default,{style:{width:"100%"}}))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement(B,{label:"\u59d4\u6258\u65b9"},t("clientName")(Y.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u59d4\u6258\u5355\u4f4d/\u4eba\u540d\u79f0"})))),Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement(B,{label:"\u6848\u4f8b\u72b6\u6001"},t("status")(Y.default.createElement(k.default,{placeholder:"\u8bf7\u9009\u62e9",allowClear:!0},Y.default.createElement(K,{value:"0"},"\u5df2\u767b\u8bb0"),Y.default.createElement(K,{value:"1"},"\u5f85\u5ba1\u6838"),Y.default.createElement(K,{value:"2"},"\u5ba1\u6838\u4e0d\u901a\u8fc7"),Y.default.createElement(K,{value:"3"},"\u5b9e\u9a8c\u4e2d"),Y.default.createElement(K,{value:"4"},"\u62a5\u544a\u5236\u4f5c"),Y.default.createElement(K,{value:"5"},"\u62a5\u544a\u6821\u5bf9"),Y.default.createElement(K,{value:"6"},"\u7b7e\u53d1\u4e2d"),Y.default.createElement(K,{value:"7"},"\u62a5\u544a\u6253\u5370"),Y.default.createElement(K,{value:"8"},"\u53d1\u653e\u4e2d"),Y.default.createElement(K,{value:"9"},"\u5f52\u6863")))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:24,sm:{span:24}},Y.default.createElement("div",{style:{float:"right",marginBottom:24,paddingRight:16}},Y.default.createElement(m.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),Y.default.createElement(m.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),Y.default.createElement("a",{style:{marginLeft:8},onClick:l},"\u6536\u8d77 ",Y.default.createElement(s.default,{type:"up"}))))))}},{key:"renderSimpleSearchForm",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.toggleSearchForm;e.Category,e.remittanceState;return Y.default.createElement(V.default,{onSubmit:this.handleSearch,layout:"inline",className:j.default.searchForm},Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement(B,{label:"\u6848\u4f8b\u7f16\u53f7"},t("caseNo")(Y.default.createElement(C.default,{placeholder:"\u8bf7\u8f93\u5165\u6848\u4f8b\u7f16\u53f7"})))),Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement(B,{label:"\u6848\u4f8b\u72b6\u6001"},t("status")(Y.default.createElement(k.default,{placeholder:"\u8bf7\u9009\u62e9",allowClear:!0},Y.default.createElement(K,{value:0},"\u5df2\u767b\u8bb0"),Y.default.createElement(K,{value:1},"\u5f85\u5ba1\u6838"),Y.default.createElement(K,{value:2},"\u5ba1\u6838\u4e0d\u901a\u8fc7"),Y.default.createElement(K,{value:3},"\u5b9e\u9a8c\u4e2d"),Y.default.createElement(K,{value:4},"\u62a5\u544a\u5236\u4f5c"),Y.default.createElement(K,{value:5},"\u62a5\u544a\u6821\u5bf9"),Y.default.createElement(K,{value:6},"\u7b7e\u53d1\u4e2d"),Y.default.createElement(K,{value:7},"\u62a5\u544a\u6253\u5370"),Y.default.createElement(K,{value:8},"\u53d1\u653e\u4e2d"),Y.default.createElement(K,{value:9},"\u5f52\u6863"))))),Y.default.createElement(v.default,{md:8,sm:24},Y.default.createElement("div",{style:{float:"right",marginBottom:24,paddingRight:16}},Y.default.createElement(m.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),Y.default.createElement(m.default,{style:{marginLeft:8},onClick:this.handleFormReset},"\u91cd\u7f6e"),Y.default.createElement("a",{style:{marginLeft:8},onClick:a},"\u5c55\u5f00 ",Y.default.createElement(s.default,{type:"down"}))))))}},{key:"renderSearchForm",value:function(){var e=this.props.expandSearchForm;return e?this.renderAdvancedSearchForm():this.renderSimpleSearchForm()}},{key:"render",value:function(){var e=this.props;e.form,e.renderSearchForm,e.toggleSearchForm,e.renderAdvancedSearchForm,e.renderSimpleSearchForm,e.expandSearchForm;return Y.default.createElement("div",null,this.renderSearchForm())}}]),t}(Y.PureComponent))||I),J=(O=V.default.create(),O(R=function(e){function t(){var e,a;(0,E.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,S.default)(this,(e=(0,w.default)(t)).call.apply(e,[this].concat(r))),a.onOk=function(){var e=a.props,t=e.form.validateFields,l=e.refundOnOk,r=e.selectedRow;t(function(e,t){var n=(0,g.default)({},t,{status:4,refundDate:new Date,bizId:r.id});e||a.setState(function(){l(n)})})},a.onCancel=function(){var e=a.props.refundOnCancel;a.setState(function(){e()})},a.check=function(e,t,l){var r=a.props.selectedRow;t?(t>r.totalPrice&&l("\u8be5\u9879\u4e0d\u53ef\u5927\u4e8e\u5df2\u6536\u91d1\u989d"),/^[0-9]+$/.test(t)||l("\u8bf7\u8f93\u5165\u6570\u5b57"),l()):l("\u8be5\u9879\u4e0d\u53ef\u4e3a\u7a7a")},a}return(0,b.default)(t,e),(0,y.default)(t,[{key:"irreversibleAmountOnchack",value:function(e){var t=this.props.irreversibleAmountOnchack,a=e.target.value;this.setState(function(){t(a)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.form,l=t.refundForm,r=t.selectedRow;return Y.default.createElement(F.default,{title:"\u9000\u6b3e\u7a97\u53e3",visible:l,onOk:this.onOk,onCancel:this.onCancel},Y.default.createElement(V.default,{layout:"inline",className:j.default.searchForm},Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:23,sm:24},Y.default.createElement(B,{label:"\u5df2\u6536\u91d1\u989d"},a.getFieldDecorator("totalPrice",{initialValue:r.totalPrice})(Y.default.createElement(C.default,{disabled:!0,addonAfter:"\u5206"}))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:23,sm:24},Y.default.createElement(B,{label:"\u4e0d\u9000\u91d1\u989d"},a.getFieldDecorator("deduction",{rules:[{validator:this.check}],initialValue:0})(Y.default.createElement(C.default,{onChange:function(t){return e.irreversibleAmountOnchack(t)}}))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:23,sm:24},Y.default.createElement(B,{label:"\u9000\u6b3e\u91d1\u989d"},a.getFieldDecorator("money",{initialValue:r.totalPrice-r.deduction>0?r.totalPrice-r.deduction:0})(Y.default.createElement(C.default,{disabled:!0}))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:23,sm:24},Y.default.createElement(B,{label:"\u5907\u6ce8"},a.getFieldDecorator("remark",{})(Y.default.createElement(U,{rows:3})))))))}}]),t}(Y.PureComponent))||R),Q=(D=V.default.create(),D(M=function(e){function t(e){var a;return(0,E.default)(this,t),a=(0,S.default)(this,(0,w.default)(t).call(this,e)),a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleChange=function(e){var t=e.fileList;return a.setState({fileList:t})},a.onOk=function(){var e=a.props,t=e.form,l=t.validateFields,r=t.resetFields,n=e.chargeOnOk,d=e.selectedRows,u=(e.selectedRow,e.Category,a.state.fileList),c=d.map(function(e){return e.id}),i=[];i.push("jcb_finance_remittance_bill"),l(function(e,t){var l=(0,g.default)({},t,{caseIds:c,file:u[0],bizType:i});e||(r(),a.setState(function(){n(l)}))})},a.onCancel=function(){var e=a.props.chargeCancel;a.setState(function(){e()})},a.state={previewVisible:!1,previewImage:"",fileList:[]},a}return(0,b.default)(t,e),(0,y.default)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.previewVisible,l=t.previewImage,r=t.fileList,n=this.props,d=n.form.getFieldDecorator,u=n.ChargeForm,c=n.selectedRows,m=(n.moneyStatus,0);for(var E in c)m+=c[E].totalPrice;var y=[{title:"\u6848\u4f8b\u7f16\u53f7",align:"center",dataIndex:"caseNo"},{title:"\u4e13\u4e1a\u7c7b\u522b",align:"center",dataIndex:"caseCategoryId",render:function(e){return category[e]}},{title:"\u53d7\u7406\u65e5\u671f",align:"center",dataIndex:"acceptDate",render:function(e){return Y.default.createElement("span",null,(0,q.default)(e).format("YYYY-MM-DD"))}},{title:"\u59d4\u6258\u65b9",align:"center",dataIndex:"clientName"},{title:"\u5e94\u6536\u91d1\u989d",align:"center",dataIndex:"totalPrice"}],S={onRemove:function(t){e.setState(function(e){var a=e.fileList.indexOf(t),l=e.fileList.slice();return l.splice(a,1),{fileList:l}})},beforeUpload:function(t){return e.setState(function(e){return{fileList:[t]}}),!1},onPreview:function(t){e.setState({previewImage:t.url||t.thumbUrl,previewVisible:!0})},listType:"picture-card",accept:".jpg, .jpeg, .png"},w=[],b=Y.default.createElement("div",null,Y.default.createElement(s.default,{type:"plus"}),Y.default.createElement("div",{className:"ant-upload-text"},"Upload"));for(var k in c){var x=(0,g.default)({},c[k]);w.push(x)}return Y.default.createElement(F.default,{width:"50%",title:"\u6536\u8d39\u7a97\u53e3",visible:u,onOk:this.onOk,onCancel:this.onCancel},Y.default.createElement("div",null,Y.default.createElement(f.default,{title:"\u6c47\u6b3e\u767b\u8bb0"},Y.default.createElement(V.default,{layout:"inline",className:j.default.searchForm},Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:12,sm:24},Y.default.createElement(B,{label:"\u6c47\u6b3e\u91d1\u989d"},d("money",{initialValue:m,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6c47\u6b3e\u91d1\u989d\uff01"}]})(Y.default.createElement(C.default,{disabled:!0})))),Y.default.createElement(v.default,{md:12,sm:24},Y.default.createElement(B,{label:"\u6c47\u6b3e\u65e5\u671f"},d("remittanceDate",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6c47\u6b3e\u65e5\u671f\uff01"}]})(Y.default.createElement(p.default,{style:{width:"100%"},allowClear:!0}))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:12,sm:24},Y.default.createElement(B,{label:"\u6c47\u6b3e\u8d26\u6237"},d("remittanceAccount",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\uff01"}]})(Y.default.createElement(C.default,{placeholder:"\u8bf7\u586b\u5199"})))),Y.default.createElement(v.default,{md:12,sm:24},Y.default.createElement(B,{label:"\u6536\u6b3e\u8d26\u6237"},d("beneficiaryAccount",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\uff01"}]})(Y.default.createElement(C.default,{placeholder:"\u8bf7\u586b\u5199"}))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:12,sm:24},Y.default.createElement(B,{label:"\u6c47\u6b3e\u4eba"},d("remitter",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\uff01"}]})(Y.default.createElement(C.default,{placeholder:"\u8bf7\u586b\u5199"}))))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:24,sm:24},Y.default.createElement(B,{label:"\u51ed\u8bc1"},d("credentials",{rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\uff01"}]})(Y.default.createElement(o.default,S,r.length>=1?null:b)))),Y.default.createElement(F.default,{visible:a,footer:null,onCancel:this.handleCancel},Y.default.createElement("img",{alt:"example",style:{width:"100%"},src:l}))),Y.default.createElement(h.default,{gutter:{md:8,lg:24,xl:48}},Y.default.createElement(v.default,{md:24,sm:24},Y.default.createElement(B,{label:"\u5907\u6ce8"},d("remark",{})(Y.default.createElement(U,{rows:4})))))))),Y.default.createElement("br",null),Y.default.createElement("br",null),Y.default.createElement("br",null),Y.default.createElement("div",null,Y.default.createElement(f.default,{title:"\u6848\u4f8b\u5217\u8868"},Y.default.createElement(i.default,{rowKey:"id",columns:y,pagination:!1,dataSource:w}))))}}]),t}(Y.PureComponent))||M),H=(A=(0,N.connect)(function(e){var t=e.financeModel,a=e.casereview,l=e.Entrust,r=e.casedemo,n=e.loading;return{financeModel:t,casereview:a,Entrust:l,casedemo:r,loading:n.models.financeModel}}),P=V.default.create(),A(L=P(L=function(e){function t(){var e,a;(0,E.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,S.default)(this,(e=(0,w.default)(t)).call.apply(e,[this].concat(r))),a.state={expandSearchForm:!1,refundForm:!1,ChargeForm:!1,selectedRows:[],selectedRow:{},formValues:{}},a.handleSelectRows=function(e){a.setState({selectedRows:e,selectedRow:e[0]})},a.handleStandardTableChange=function(e){var t=a.props.dispatch,l=a.state.formValues,r=(0,g.default)({currentPage:e.current,pageSize:e.pageSize},l);t({type:"financeModel/fetch",payload:r})},a.chargeConfirm=function(){a.setState({ChargeForm:!0})},a.chargeOnOk=function(e){var t=a.props.dispatch,l=new FormData;l.append("file",e.file),l.append("bizType",e.bizType),l.append("bizId",[]),new Promise(function(e,a){t({type:"AttachmentModal/add",payload:{formData:l,resolve:e,reject:a}})}).then(function(a){if(void 0!==a){var l;for(var r in a)l=a[r].id;t({type:"financeModel/add",payload:{money:e.money,remittanceDate:e.remittanceDate,remitter:e.remitter,remittanceAccount:e.remittanceAccount,beneficiaryAccount:e.beneficiaryAccount,status:1,caseIds:e.caseIds,attachmentId:l,remark:e.remark}}),t({type:"financeModel/fetch"}),t({type:"casereview/fetch"}),t({type:"financeModel/fetch2"})}}),c.default.success("\u6dfb\u52a0\u6210\u529f"),a.chargeCancel(),a.setState({selectedRows:[]}),a.handleFormReset()},a.chargeCancel=function(){a.setState({ChargeForm:!1})},a.refundModal=function(){a.state.refundConfirm;a.setState({refundForm:!0})},a.refundOnOk=function(e){var t=a.props.dispatch;t({type:"financeModel/addRefund",payload:(0,g.default)({},e)}),c.default.success("\u64cd\u4f5c\u6210\u529f"),a.setState({refundForm:!1}),a.setState({selectedRows:[]})},a.refundOnCancel=function(){a.state.refundForm;a.setState({refundForm:!1})},a.handleSearch=function(e){var t=a.props,l=t.dispatch;t.form;a.setState({formValues:e}),l({type:"financeModel/fetch",payload:e})},a.handleFormReset=function(){var e=a.props,t=(e.form,e.dispatch);a.setState({formValues:{}}),t({type:"financeModel/fetch"}),t({type:"financeModel/fetch"}),t({type:"casereview/fetch"}),t({type:"financeModel/fetch2"}),t({type:"casedemo/caseStates"}),t({type:"Entrust/fetchCategorys"}),t({type:"casereview/remittanceStates"})},a.toggleSearchForm=function(){var e=a.state.expandSearchForm;a.setState({expandSearchForm:!e})},a.irreversibleAmountOnchack=function(e){var t=a.state.selectedRow,l=t;a.setState({selectedRow:(0,g.default)({},l,{deduction:e})})},a}return(0,b.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.state.formValues;e({type:"financeModel/fetch",payload:t}),e({type:"casereview/fetch"}),e({type:"financeModel/fetch2"}),e({type:"casedemo/caseStates"}),e({type:"Entrust/fetchCategorys"}),e({type:"casereview/remittanceStates"})}},{key:"render",value:function(){var e=this.props,t=e.financeModel,a=t.data,l=(t.ProfessionalTypes,t.BillBiz),r=e.casereview,c=r.data1,i=r.remittanceState,o=e.casedemo.caseState,s=e.Entrust.Category,h=e.loading;if(void 0!==a&&void 0!==a.list&&0!==a.list.length)for(var p=function(e){if(void 0!==l.list){var t=l.list.filter(function(t){return t.bizIdString===a.list[e].id});a.list[e].remittanceBillIds=t.length>0?t[0].remittanceBillIdString:0}},v=0;v<a.list.length;v+=1)p(v);if(void 0!==a&&void 0!==a.list&&0!==a.list.length){var g=function(e){if(void 0!==c.list){var t=c.list.filter(function(t){return t.idString===a.list[e].remittanceBillIds});a.list[e].statuss=t.length>0?t[0].status:0,a.list[e].remittanceDate=t.length>0?t[0].remittanceDate:0,a.list[e].reason=t.length>0?t[0].reason:0}};for(v=0;v<a.list.length;v+=1)g(v)}var E=this.state,y=E.selectedRows,S=E.selectedRow,w=E.expandSearchForm,b=E.refundForm,F=E.ChargeForm,C={toggleSearchForm:this.toggleSearchForm,handleSearch:this.handleSearch,handleFormReset:this.handleFormReset},k={refundOnOk:this.refundOnOk,refundOnCancel:this.refundOnCancel,irreversibleAmountOnchack:this.irreversibleAmountOnchack},x={chargeOnOk:this.chargeOnOk,chargeCancel:this.chargeCancel},I=[{title:"\u6848\u4f8b\u7f16\u7801",align:"center",dataIndex:"caseNo"},{title:"\u4e13\u4e1a\u7c7b\u522b",dataIndex:"caseCategoryId",align:"center",render:function(e){var t=s.filter(function(t){return parseInt(t.id,10)===parseInt(e,10)});return t.length>0?t[0].value:e}},{title:"\u53d7\u7406\u65e5\u671f",dataIndex:"acceptDate",align:"center",render:function(e){return null!==e?Y.default.createElement("span",null,(0,q.default)(e).format("YYYY-MM-DD")):e}},{title:"\u59d4\u6258\u65b9",align:"center",dataIndex:"clientName"},{title:"\u6848\u4f8b\u72b6\u6001",dataIndex:"status",align:"center",render:function(e){var t=o.filter(function(t){return parseInt(t.id,10)===parseInt(e,10)}),a=t.length>0?t[0].value:e;return a}},{title:"\u5e94\u6536\u91d1\u989d",dataIndex:"totalPrice",align:"center"},{title:"\u5df2\u6536\u91d1\u989d",dataIndex:"receivedAmount",align:"center",render:function(e,t){if(void 0!==t)return 0!==t.statuss?t.totalPrice:void 0}},{title:"\u786e\u8ba4\u72b6\u6001",dataIndex:"statuss",align:"center",render:function(e,t){var a=i.filter(function(t){return parseInt(t.id,10)===parseInt(e,10)}),l=a.length>0?a[0].value:e;return 3===e||6===e?Y.default.createElement(u.default,{content:"\u4e0d\u901a\u8fc7\u539f\u56e0\uff1a".concat(t.reason),title:l,trigger:"hover"},Y.default.createElement("a",null,l)):0===e?void 0:l}},{title:"\u6c47\u6b3e\u65e5\u671f",align:"center",dataIndex:"remittanceDate",render:function(e){return 0===e?void 0:Y.default.createElement("span",null,(0,q.default)(e).format("YYYY-MM-DD"))}}];return Y.default.createElement(T.default,{title:"\u8d22\u52a1\u5217\u8868"},Y.default.createElement(f.default,{bordered:!1},Y.default.createElement(_,(0,d.default)({remittanceState:i},C,{expandSearchForm:w,Category:s})),y&&0!=y.length?Y.default.createElement(J,(0,d.default)({},k,{refundForm:b,selectedRow:S})):null,y&&0!=y.length?Y.default.createElement(Q,(0,d.default)({},x,{selectedRows:y,selectedRow:S,ChargeForm:F,Category:s,moneyStatus:Z})):null,Y.default.createElement("div",{className:j.default.tableListOperator},Y.default.createElement(m.default,{type:"primary",disabled:!y.length>0||S.statuss>0,onClick:this.chargeConfirm},"\u6536\u8d39\u786e\u8ba4"),Y.default.createElement(m.default,{type:"danger",disabled:1!==y.length||y.filter(function(e){return 2!==parseInt(e.statuss,10)}).length>0,onClick:this.refundModal},"\u9000\u6b3e"),Y.default.createElement(n.default,{placement:"top",title:"\u5c06\u5bfc\u51fa\u5217\u8868\u4e2d\u5c55\u73b0\u7684\u6240\u6709\u6570\u636e"},Y.default.createElement(m.default,{icon:"file-excel"},"\u5bfc\u51fa"))),Y.default.createElement(z.default,{rowKey:"id",selectedRows:y,loading:h,data:a,columns:I,onChange:this.handleStandardTableChange,onSelectRow:this.handleSelectRows})))}}]),t}(Y.PureComponent))||L)||L),X=H;t.default=X}}]);