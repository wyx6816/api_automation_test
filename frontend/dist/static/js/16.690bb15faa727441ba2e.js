webpackJsonp([16],{"40l2":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("P9l9"),r=t("7t+N"),o=t.n(r),i={data:function(){return{activeNames:["1","2","3","4"],id:"",httpType:"",requestType:"",addr:"",apiName:"",updateTime:"",head:[],ParameterTyep:!0,parameterType:"",parameter:[],parameterRaw:"",response:[],mockCode:"",mockData:"",mockJsonData:"",httpCode:[{value:"200",label:"200"},{value:"404",label:"404"},{value:"400",label:"400"},{value:"500",label:"500"},{value:"502",label:"502"},{value:"302",label:"302"}],resultShow:!0,status:!0,listLoadingHead:!1,listLoadingParameter:!1,listLoadingResponse:!1,parameterInfoVisible:!1,parameterInfo:[],responseInfoVisible:!1,responseInfo:[]}},methods:{getApiInfo:function(){var e=this;e.listLoadingHead=!0,e.listLoadingParameter=!0,e.listLoadingResponse=!0;var a={project_id:e.$route.params.project_id,api_id:e.$route.params.api_id};o.a.ajax({type:"get",url:s.z+"/api/api/api_info",async:!0,data:a,headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(a){if(e.listLoadingHead=!1,e.listLoadingParameter=!1,e.listLoadingResponse=!1,"999999"===a.code){a=a.data,e.id=a.id,e.httpType=a.httpType,e.requestType=a.requestType,e.addr=a.apiAddress,e.apiName=a.name,e.updateTime=a.lastUpdateTime,e.status=a.status,e.head=a.headers,e.parameterType=a.requestParameterType,e.parameter=a.requestParameter;try{e.parameterRaw=a.requestParameterRaw.data}catch(e){}e.response=a.response,e.mockCode=a.mockCode,e.mockData=a.data,a.data&&(e.mockJsonData=JSON.parse(a.data))}else e.$message.error({message:a.msg,center:!0})}})},formatChange:function(){},changFormat:function(){var e=document.getElementsByTagName("pre")[0];console.log(e),hljs.highlightBlock(e),this.resultShow=!this.resultShow},lookParameterInfo:function(e){this.parameterInfoVisible=!0,this.parameterInfo=this.parameter[e]},lookResponseInfo:function(e){this.responseInfoVisible=!0,this.responseInfo=this.response[e]},parameterTypeChange:function(){"form-data"===this.parameterType?this.ParameterTyep=!0:this.ParameterTyep=!1}},watch:{parameterType:function(){this.parameterTypeChange()}},mounted:function(){this.getApiInfo(),this.formatChange()}},l={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("section",[s("div",{staticStyle:{border:"1px solid #e6e6e6","margin-bottom":"10px",padding:"15px"}},[s("el-row",{attrs:{span:24}},[s("el-col",{staticStyle:{"padding-left":"6px","padding-right":"6px"},attrs:{span:2}},[s("div",{staticClass:"httpStyle",model:{value:e.httpType,callback:function(a){e.httpType=a},expression:"httpType"}},[e._v(e._s(e.httpType))])]),e._v(" "),s("el-col",{staticStyle:{"padding-left":"6px"},attrs:{span:2}},[s("div",{staticClass:"httpStyle",model:{value:e.requestType,callback:function(a){e.requestType=a},expression:"requestType"}},[e._v(e._s(e.requestType))])]),e._v(" "),s("el-col",{staticClass:"apiInfo",attrs:{span:15}},[s("div",[s("strong",{model:{value:e.addr,callback:function(a){e.addr=a},expression:"addr"}},[e._v(e._s(e.addr))])]),e._v(" "),s("div",[s("strong",{model:{value:e.apiName,callback:function(a){e.apiName=a},expression:"apiName"}},[e._v(e._s(e.apiName))])])]),e._v(" "),s("el-col",{attrs:{span:5}},[s("i",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],staticClass:"el-icon-check statusIcon"}),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:!e.status,expression:"!status"}],staticClass:"el-icon-close statusIcon"}),e._v(" "),s("div",{staticClass:"apiDate",model:{value:e.updateTime,callback:function(a){e.updateTime=a},expression:"updateTime"}},[e._v(e._s(e.updateTime))])])],1)],1),e._v(" "),s("el-collapse",{model:{value:e.activeNames,callback:function(a){e.activeNames=a},expression:"activeNames"}},[s("el-collapse-item",{attrs:{title:"请求头部",name:"1"}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoadingHead,expression:"listLoadingHead"}],staticStyle:{width:"100%"},attrs:{data:e.head,"highlight-current-row":""}},[s("el-table-column",{attrs:{type:"index",label:"#","min-width":"10%",sortable:""}}),e._v(" "),s("el-table-column",{attrs:{prop:"name",label:"标签","min-width":"22%",sortable:""}}),e._v(" "),s("el-table-column",{attrs:{prop:"value",label:"内容","min-width":"68%",sortable:"","show-overflow-tooltip":""}})],1)],1),e._v(" "),s("el-collapse-item",{attrs:{title:"请求参数",name:"2"}},[[s("div",{directives:[{name:"show",rawName:"v-show",value:e.parameterRaw,expression:"parameterRaw"}],class:e.ParameterTyep?"parameter-b":"parameter-a",staticStyle:{border:"1px solid #e6e6e6","margin-bottom":"10px",padding:"15px","word-break":"break-all"},model:{value:e.parameterRaw,callback:function(a){e.parameterRaw=a},expression:"parameterRaw"}},[e._v(e._s(e.parameterRaw))])],e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.parameter.length&&!e.parameterRaw,expression:"!parameter.length&&!parameterRaw"}],staticClass:"raw"},[e._v("暂无数据")]),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoadingParameter,expression:"listLoadingParameter"}],class:e.ParameterTyep?"parameter-a":"parameter-b",staticStyle:{width:"100%"},attrs:{data:e.parameter,"highlight-current-row":""}},[s("el-table-column",{attrs:{type:"index",label:"#","min-width":"10%",sortable:""}}),e._v(" "),s("el-table-column",{attrs:{prop:"name",label:"参数名","min-width":"22%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"value",label:"参数值","min-width":"38%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{prop:"_type",label:"参数类型","min-width":"10%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{label:"必填?","min-width":"10%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[s("img",{directives:[{name:"show",rawName:"v-show",value:a.row.required,expression:"scope.row.required"}],attrs:{src:t("LbCb")}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!a.row.required,expression:"!scope.row.required"}],attrs:{src:t("3mUg")}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"详情","min-width":"10%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.lookParameterInfo(a.$index)}}},[e._v("查看")])]}}])})],1)],2),e._v(" "),s("el-dialog",{attrs:{title:"参数详情",visible:e.parameterInfoVisible,"close-on-click-modal":!1},on:{"update:visible":function(a){e.parameterInfoVisible=a}}},[s("div",{staticStyle:{"font-size":"15px"},model:{value:e.parameterInfo,callback:function(a){e.parameterInfo=a},expression:"parameterInfo"}},[s("el-row",{staticStyle:{margin:"10px"},attrs:{gutter:20}},[s("div",[s("el-col",{attrs:{span:7}},[e._v("参数名")]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v("参数值")]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v("参数类型")]),e._v(" "),s("el-col",{attrs:{span:3}},[e._v("必填?")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[s("el-col",{attrs:{span:7}},[e._v(e._s(e.parameterInfo.name))]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v(e._s(e.parameterInfo.value))]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v(e._s(e.parameterInfo._type))]),e._v(" "),s("el-col",{attrs:{span:3}},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.parameterInfo.required,expression:"parameterInfo.required"}],attrs:{src:t("LbCb")}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!e.parameterInfo.required,expression:"!parameterInfo.required"}],attrs:{src:t("3mUg")}})])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"70px"}},[s("el-col",[e._v("输入限制:")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"100px"}},[s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.parameterInfo.restrict,expression:"parameterInfo.restrict"}]},[e._v(e._s(e.parameterInfo.restrict))]),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:!e.parameterInfo.restrict,expression:"!parameterInfo.restrict"}]},[e._v("无限制要求")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"140px"}},[s("el-col",[e._v("说明:")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"170px"}},[s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.parameterInfo.description,expression:"parameterInfo.description"}]},[e._v(e._s(e.parameterInfo.description))]),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:!e.parameterInfo.description,expression:"!parameterInfo.description"}]},[e._v("无详细说明")])],1)])],1)]),e._v(" "),s("el-collapse-item",{attrs:{title:"返回参数",name:"3"}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoadingResponse,expression:"listLoadingResponse"}],staticStyle:{width:"100%"},attrs:{data:e.response,"highlight-current-row":""}},[s("el-table-column",{attrs:{type:"index",label:"#","min-width":"10%",sortable:""}}),e._v(" "),s("el-table-column",{attrs:{prop:"name",label:"参数名","min-width":"22%",sortable:""}}),e._v(" "),s("el-table-column",{attrs:{prop:"value",label:"参数值","min-width":"38%",sortable:""}}),e._v(" "),s("el-table-column",{attrs:{prop:"_type",label:"参数类型","min-width":"10%",sortable:"","show-overflow-tooltip":""}}),e._v(" "),s("el-table-column",{attrs:{label:"必含?","min-width":"10%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[s("img",{directives:[{name:"show",rawName:"v-show",value:a.row.required,expression:"scope.row.required"}],attrs:{src:t("LbCb")}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!a.row.required,expression:"!scope.row.required"}],attrs:{src:t("3mUg")}})]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"详情","min-width":"10%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.lookResponseInfo(a.$index)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"参数详情",visible:e.responseInfoVisible,"close-on-click-modal":!1},on:{"update:visible":function(a){e.responseInfoVisible=a}}},[s("div",{staticStyle:{"font-size":"15px"},model:{value:e.responseInfo,callback:function(a){e.responseInfo=a},expression:"responseInfo"}},[s("el-row",{staticStyle:{margin:"10px"},attrs:{gutter:20}},[s("div",[s("el-col",{attrs:{span:7}},[e._v("参数名")]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v("参数值")]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v("参数类型")]),e._v(" "),s("el-col",{attrs:{span:3}},[e._v("必含?")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[s("el-col",{attrs:{span:7}},[e._v(e._s(e.responseInfo.name))]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v(e._s(e.responseInfo.value))]),e._v(" "),s("el-col",{attrs:{span:7}},[e._v(e._s(e.responseInfo._type))]),e._v(" "),s("el-col",{attrs:{span:3}},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.responseInfo.required,expression:"responseInfo.required"}],attrs:{src:t("LbCb")}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!e.responseInfo.required,expression:"!responseInfo.required"}],attrs:{src:t("3mUg")}})])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"70px"}},[s("el-col",[e._v("说明:")])],1),e._v(" "),s("div",{staticStyle:{"margin-top":"100px"}},[s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.responseInfo.description,expression:"responseInfo.description"}]},[e._v(e._s(e.responseInfo.description))]),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:!e.responseInfo.description,expression:"!responseInfo.description"}]},[e._v("无详细说明")])],1)])],1)]),e._v(" "),s("el-collapse-item",{attrs:{title:"普通Mock",name:"4"}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("el-select",{attrs:{placeholder:"HTTP状态"},model:{value:e.mockCode,callback:function(a){e.mockCode=a},expression:"mockCode"}},e._l(e.httpCode,function(e,a){return s("el-option",{key:a+"",attrs:{label:e.label,value:e.value}})}),1),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.changFormat}},[e._v("格式转换")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.mockData,expression:"mockData"}],class:e.resultShow?"parameter-a":"parameter-b",staticStyle:{border:"1px solid #e6e6e6","margin-bottom":"10px",padding:"15px","word-break":"break-all","line-height":"25px"},model:{value:e.mockData,callback:function(a){e.mockData=a},expression:"mockData"}},[e._v(e._s(e.mockData))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.mockData&&!e.mockJsonData,expression:"!mockData&&!mockJsonData"}],staticClass:"raw"},[e._v("暂无数据")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.mockJsonData,expression:"mockJsonData"}],class:e.resultShow?"parameter-b":"parameter-a",staticStyle:{border:"1px solid #e6e6e6","margin-bottom":"10px",padding:"15px","word-break":"break-all",height:"300px",overflow:"auto","overflow-x":"hidden"}},[s("pre",[e._v(e._s(e.mockJsonData))])])])],1)],1)],1)},staticRenderFns:[]};var n=t("VU/8")(i,l,!1,function(e){t("yZaC")},"data-v-b3c7dc8e",null);a.default=n.exports},yZaC:function(e,a){}});
//# sourceMappingURL=16.690bb15faa727441ba2e.js.map