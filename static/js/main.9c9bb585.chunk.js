(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(14),r=n.n(o),l=(n(69),n(2)),s=n(3),c=n(5),h=n(4),u=n(6),d=(n(70),n(71),n(72),a.Component,n(56)),g=n.n(d),p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){n.setState({response:e})},n.handleWChange=function(e){n.setState({weight:e})},n.state={response:n.props.response,weight:n.props.weight},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{backgroundColor:"white"}},i.a.createElement("img",{src:g.a,alt:"Question Image",class:"question_icon"}),i.a.createElement("div",null,i.a.createElement("h1",{class:"survey_question"},this.props.text),i.a.createElement("div",{class:"radio"},i.a.createElement("label",null,i.a.createElement("input",{class:"radio-inline",type:"radio",value:"1",checked:1===this.state.response,onChange:function(){return e.handleChange(1)}}),"1"),i.a.createElement("label",{class:"radio-inline"},i.a.createElement("input",{type:"radio",value:"2",checked:2===this.state.response,onChange:function(){return e.handleChange(2)}}),"2"),i.a.createElement("label",{class:"radio-inline"},i.a.createElement("input",{type:"radio",value:"3",checked:3===this.state.response,onChange:function(){return e.handleChange(3)}}),"3"),i.a.createElement("label",{class:"radio-inline"},i.a.createElement("input",{type:"radio",value:"4",checked:4===this.state.response,onChange:function(){return e.handleChange(4)}}),"4"),i.a.createElement("label",{class:"radio-inline"},i.a.createElement("input",{type:"radio",value:"5",checked:5===this.state.response,onChange:function(){return e.handleChange(5)}}),"5")),"How important is this attribute to you?",i.a.createElement("br",null),i.a.createElement("div",{class:"radio"},i.a.createElement("label",null,i.a.createElement("input",{class:"radio-inline",type:"radio",value:"1",checked:1===this.state.weight,onChange:function(){return e.handleWChange(1)}}),"1"),i.a.createElement("label",null,i.a.createElement("input",{class:"radio-inline",type:"radio",value:"2",checked:2===this.state.weight,onChange:function(){return e.handleWChange(2)}}),"2"),i.a.createElement("label",null,i.a.createElement("input",{class:"radio-inline",type:"radio",value:"3",checked:3===this.state.weight,onChange:function(){return e.handleWChange(3)}}),"3"),i.a.createElement("label",null,i.a.createElement("input",{class:"radio-inline",type:"radio",value:"4",checked:4===this.state.weight,onChange:function(){return e.handleWChange(4)}}),"4"),i.a.createElement("label",null,i.a.createElement("input",{class:"radio-inline",type:"radio",value:"5",checked:5===this.state.weight,onChange:function(){return e.handleWChange(5)}}),"5")),i.a.createElement("br",null),0!==this.state.response&&i.a.createElement("button",{onClick:function(){return e.props.func(e.props.i,e.props.title,e.state.response,e.state.weight)}},"submit")))}}]),t}(a.Component),m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"survey_progress"},this.props.ans.map(function(e,t){var n=this;return 1==e?this.i==t?i.a.createElement("i",{class:"fas fa-question-circle fa-2x prog",style:{color:"#5db333"}}):i.a.createElement("i",{class:"fas fa-question-circle fa-2x prog",style:{color:"black"},onClick:function(){return n.func(t)}}):this.i==t?i.a.createElement("i",{class:"far fa-question-circle fa-2x prog",style:{color:"#5db333"}}):i.a.createElement("i",{class:"far fa-question-circle fa-2x prog",style:{color:"black"},onClick:function(){return n.func(t)}})},{i:this.props.i,func:this.props.func}))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).changeQuestion=function(e){n.setState({i:e})},n.answerQuestion=function(e,t,a,i){var o=n.state.answered;o[e]=1;var r=n.state.answers;r[t]=a;var l=n.state.weights;l[t]=i;var s=n.state.questions;s[e].response=a,s[e].weight=i,e<n.state.questions.length-1?n.setState({answered:o,answers:r,i:e+1,questions:s,weights:l}):(n.setState({answered:o,answers:r,questions:s,weights:l}),n.props.submit(n.state.answers,n.state.weights))},n.state={answered:[0,0,0,0,0,0,0,0,0,0,0,0,0],answers:{},weights:{},questions:[{title:"Majority Age",text:"Which age group are you looking to live around?",response:0,weight:1},{title:"Neighborhood Size",text:"About what size neighborhood would you like?",response:0,weight:1},{title:"House Size",text:"What size of house fits you?",response:0,weight:1},{title:"Family Percentage",text:"What percentage of your neighbors would you like to be families?",response:0,weight:1},{title:"Vacancy",text:"How much vacancy would you like in the area?",response:0,weight:1},{title:"Income",text:"What income group would you like to live around?",response:0,weight:1},{title:"Rent",text:"What average rent would you prefer?",response:0,weight:1},{title:"Home Value",text:"Which home value suits you?",response:0,weight:1},{title:"Transit Closeness",text:"How close would you like to be to public transit?",response:0,weight:1},{title:"Transit Cost",text:"About how much would you want to spend monthly on transit?",response:0,weight:1},{title:"Rent Increase",text:"Which rate of rent inflation would you like?",response:0,weight:1},{title:"Home Value Increase",text:"Which rate of home value inflation would you like?",response:0,weight:1},{title:"Density",text:"How dense would you like the area to be?",response:0,weight:1}],i:0},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"survey_frame"},i.a.createElement(p,{key:this.state.i,title:this.state.questions[this.state.i].title,text:this.state.questions[this.state.i].text,i:this.state.i,func:this.answerQuestion,response:this.state.questions[this.state.i].response,weight:this.state.questions[this.state.i].weight}),0!=this.state.i&&i.a.createElement("button",{onClick:function(){return e.changeQuestion(e.state.i-1)}},"back"),this.state.i!=this.state.questions.length-1&&i.a.createElement("button",{onClick:function(){return e.changeQuestion(e.state.i+1)}},"skip"),this.state.i==this.state.questions.length-1&&i.a.createElement("button",{onClick:function(){return e.props.submit(e.state.answers,e.state.weights)}},"finish"),i.a.createElement(m,{ans:this.state.answered,i:this.state.i,func:this.changeQuestion}))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h2",null,"Welcome to Village"),i.a.createElement("button",{onClick:function(){return e.props.func()}},"Start"))}}]),t}(a.Component),f=n(17),w=n.n(f),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e={value_dict:this.props.weights,weight_dict:this.props.answers};console.log(e),w.a.post("https://us-central1-moving-233718.cloudfunctions.net/predict-cors",e).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Good job, you're done."),Object.keys(this.props.answers).map(function(e,t){return i.a.createElement("div",null,i.a.createElement("span",null,e,": "),i.a.createElement("span",null,this.answers[e]))},{answers:this.props.answers}),Object.keys(this.props.weights).map(function(e,t){return i.a.createElement("div",null,i.a.createElement("span",null,e,": "),i.a.createElement("span",null,this.weights[e]))},{weights:this.props.weights}),i.a.createElement("button",{onClick:this.props.reset},"reset"))}}]),t}(a.Component),v=n(57),k=n.n(v),C=(a.Component,function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{backgroundColor:"red"}},i.a.createElement("h1",null,"Question"),this.props.text,i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){return e.props.func(e.props.i)}},"answer"))}}]),t}(a.Component)),x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{backgroundColor:"green"}},this.props.ans.map(function(e,t){var n=this;return 1==e?this.i==t?i.a.createElement("span",null,"X"):i.a.createElement("span",{onClick:function(){return n.func(t)}},"x"):this.i==t?i.a.createElement("span",null,"O"):i.a.createElement("span",{onClick:function(){return n.func(t)}},"o")},{i:this.props.i,func:this.props.func}))}}]),t}(a.Component),j=(a.Component,n(92),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:""},i.a.createElement("header",null,i.a.createElement("h2",null,this.props.content.title)),i.a.createElement("div",{class:"content"},i.a.createElement("h3",null,this.props.content.text),i.a.createElement("ul",{class:"actions",style:{paddingLeft:"5vw",paddingRight:"5vw"}},this.props.content.labels.map(function(e,t){var n=this;return this.response===t?i.a.createElement("button",{onClick:function(){return n.onQ(n.qIndex,t)},class:"button primary large",style:{width:"20%",textAlign:"center",padding:"0%",marginLeft:"2%"}},e):i.a.createElement("button",{onClick:function(){return n.onQ(n.qIndex,t)},class:"button large",style:{width:"20%",textAlign:"center",padding:"0%",marginLeft:"2%"}},e)},{qIndex:this.props.index,response:this.props.content.response,onQ:this.props.onQuestion})),i.a.createElement("h3",null,"How important is this to you?"),i.a.createElement("ul",{class:"actions",style:{paddingLeft:"5vw",paddingRight:"5vw"}},[1,2,3,4,5].map(function(e,t){var n=this;return this.weight===e?i.a.createElement("button",{onClick:function(){return n.onW(n.qIndex,e)},class:"button primary large",style:{width:"20%",textAlign:"center",padding:"0%",marginLeft:"2%"}},e):i.a.createElement("button",{onClick:function(){return n.onW(n.qIndex,e)},class:"button large",style:{width:"20%",textAlign:"center",padding:"0%",marginLeft:"2%"}},e)},{qIndex:this.props.index,weight:this.props.content.weight,onW:this.props.onWeight})),i.a.createElement("span",{class:"image main"})))}}]),t}(a.Component)),O=n(59),q=n.n(O),W=n(60),A=n.n(W),D=n(8),H=n.n(D),S=n(58),M=n.n(S),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={coords:{lat:59.95,lng:30.33},coordsLoading:!0},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.address.split(" ").join("+");w.a.get("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDfi87OPz0rr6f1oIQ_iH3boI4H53zLFAg&address=".concat(t)).then(function(t){var n=t.data.results;console.log(n),e.setState({location:n[0],coords:{lat:n[0].geometry.location.lat,lng:n[0].geometry.location.lng},coordsLoading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return this.state.location?i.a.createElement("div",{style:{height:"50vh",width:"100%",marginTop:"5%",display:"inline-block"}},i.a.createElement("h5",null,"Map"),i.a.createElement(M.a,{bootstrapURLKeys:{key:"AIzaSyDfi87OPz0rr6f1oIQ_iH3boI4H53zLFAg"},defaultCenter:this.state.coords,defaultZoom:14})):i.a.createElement(H.a,{xs:12,className:"pt-3"})}}]),t}(i.a.Component),z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={showDet:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("section",{style:{padding:"5%",margin:"5%",borderLeft:"6px solid #49fcd4",borderRadius:"25px"}},i.a.createElement("header",null,i.a.createElement("h2",{style:{margin:"0%"}},this.props.index+1,": ",this.props.content.u_neighborhood.Neighborhood)),i.a.createElement("div",{class:"content"},i.a.createElement("strong",null,"Match Rating:"),i.a.createElement(q.a,{now:this.props.content.closeness,label:Math.round(this.props.content.closeness)+"%"}),i.a.createElement("a",{onClick:function(){var t=!e.state.showDet;e.setState({showDet:t})}},"details"),this.state.showDet&&i.a.createElement("div",{style:{margin:"5%"}},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("h5",null,"Features")),console.log(Object.keys(this.props.content.b_neighborhood).sort(function(t){return Math.abs(e.props.input[t]-e.props.content.b_neighborhood[t]/e.props.weight[t])})),i.a.createElement(A.a,null,Object.keys(this.props.content.b_neighborhood).sort(function(t,n){return 10*Math.abs(e.props.input[t]-e.props.content.b_neighborhood[t]/e.props.weight[t])-e.props.weight[t]-(10*Math.abs(e.props.input[n]-e.props.content.b_neighborhood[n]/e.props.weight[n])-e.props.weight[n])}).map(function(e,t){if("Neighborhood"!==e){var n=this.input[e]-this.binned[e]/this.weight[e];console.log(n);var a=[];for(t=0;t<this.weight[e];t++)a.push(t);if("Majority Age"===e){if(0===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"green",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),this.unbinned[e]),i.a.createElement("div",{style:{height:"40px",backgroundColor:"green"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-1===n||1===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"greenyellow",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),this.unbinned[e]),i.a.createElement("div",{style:{height:"40px",backgroundColor:"greenyellow"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-2===n||2===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"yellow",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),this.unbinned[e]),i.a.createElement("div",{style:{height:"40px",backgroundColor:"yellow"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-3===n||3===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"orange",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),this.unbinned[e]),i.a.createElement("div",{style:{height:"40px",backgroundColor:"orange"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-4===n||4===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"red",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),this.unbinned[e]),i.a.createElement("div",{style:{height:"40px",backgroundColor:"red"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))))}else{if(0===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"green",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),Math.round(this.unbinned[e])),i.a.createElement("div",{style:{height:"40px",backgroundColor:"green"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-1===n||1===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"greenyellow",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),Math.round(this.unbinned[e])),i.a.createElement("div",{style:{height:"40px",backgroundColor:"greenyellow"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-2===n||2===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"yellow",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),Math.round(this.unbinned[e])),i.a.createElement("div",{style:{height:"40px",backgroundColor:"yellow"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-3===n||3===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"orange",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),Math.round(this.unbinned[e])),i.a.createElement("div",{style:{height:"40px",backgroundColor:"orange"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))));if(-4===n||4===n)return i.a.createElement(H.a,{sm:3,style:{textAlign:"center",padding:"0%",height:"20vh",marginBottom:"2%"}},i.a.createElement("div",{style:{backgroundColor:"red",margin:"2%",display:"inline-block",width:"90%",height:"90%"}},i.a.createElement("div",{style:{backgroundColor:"white",margin:"5%",padding:"2%",display:"inline-block",width:"90%",height:"70%"}},i.a.createElement("h6",{style:{margin:"0%",height:"40%"}},e),Math.round(this.unbinned[e])),i.a.createElement("div",{style:{height:"40px",backgroundColor:"red"}},a.map(function(e,t){return i.a.createElement("i",{class:"far fa-dot-circle white",style:{color:"white"}})}))))}}},{binned:this.props.content.b_neighborhood,unbinned:this.props.content.u_neighborhood,input:this.props.input,weight:this.props.weight})),i.a.createElement("div",{style:{textAlign:"center",width:"100%",height:"100%"}},i.a.createElement(I,{address:this.props.content.b_neighborhood.Neighborhood+", Austin TX"})))))}}]),t}(a.Component),Q=(a.Component,n(19)),_=n.n(Q),B=n(61),L=n.n(B),R=n(62),T=n.n(R),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).loadMore=function(){var e=n.state.page;n.setState({page:e+1})},n.state={page:1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={value_dict:this.props.valueDict,weight_dict:this.props.weightDict};w.a.post("https://us-central1-moving-233718.cloudfunctions.net/predict",t).then(function(t){e.setState({neighborhoods:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return this.state.neighborhoods?i.a.createElement("div",null,this.state.neighborhoods.map(function(e,t){if(t<5*this.page)return i.a.createElement(z,{key:t,index:t,content:e,input:this.input,weight:this.weight})},{page:this.state.page,input:this.props.valueDict,weight:this.props.weightDict}),i.a.createElement("section",{style:{marginBottom:"20vh"}},i.a.createElement("header",null),i.a.createElement("div",{class:"content",style:{textAlign:"center"}},i.a.createElement("button",{onClick:function(){return e.loadMore()},class:"button primary large",style:{display:"inline-block"}},"Load More")))):Object.keys(this.props.valueDict).length?i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(L.a,{animation:"border",variant:"primary"})):i.a.createElement("div",null,i.a.createElement(T.a,{key:1,variant:"danger"},"You must answer at least 1 question :("))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).valueDict=function(){var e={};for(var t in n.props.questions){var a=n.props.questions[t],i=a.response;null!==i&&(e[a.title]=i)}return e},n.weightDict=function(){var e={};for(var t in n.props.questions){var a=n.props.questions[t],i=a.weight;e[a.title]=i}return e},n.state={show:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.valueDict(),n=this.weightDict();return this.state.demo&&(t={Density:4,"Family Percentage":1,"Home Value":1,"House Size":1,Income:4,"Majority Age":1,"Neighborhood Size":1,Rent:1,"Transit Closeness":4,"Transit Cost":0},n={Density:1,"Family Percentage":5,"Home Value":2,"House Size":2,Income:3,"Majority Age":5,"Neighborhood Size":1,Rent:5,"Transit Closeness":3,"Transit Cost":3}),console.log(t),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){e.setState({show:!0,demo:!1})},class:"button primary large",style:{}},"Calculate"),i.a.createElement("button",{onClick:function(){e.setState({show:!0,demo:!0})},class:"button large",style:{}},"Demo"),i.a.createElement(_.a,{size:"lg",show:this.state.show,onHide:function(){e.setState({show:!1})},"aria-labelledby":"example-modal-sizes-title-lg"},i.a.createElement(_.a.Header,{closeButton:!0},i.a.createElement(_.a.Title,{id:"example-modal-sizes-title-lg"},"Your Reccomendations")),i.a.createElement(_.a.Body,null,i.a.createElement($,{valueDict:t,weightDict:n}))))}}]),t}(a.Component),V=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).onQuestion=function(e,t){var a=n.state.questions;a[e].response===t?a[e].response=null:a[e].response=t,n.setState({questions:a})},n.onWeight=function(e,t){var a=n.state.questions;a[e].weight=t,n.setState({questions:a})},n.state={questions:[{title:"Majority Age",text:"Which age group are you looking to live around?",response:null,weight:1,labels:["18-24","25-34","35-44","45-59","60+"]},{title:"Neighborhood Size",text:"About what size neighborhood would you like?",response:null,weight:1,labels:["0-1.4k","1.4-2k","2-3k","3-5k","5k+"]},{title:"House Size",text:"What size of house fits you?",response:null,weight:1,labels:["0-1.9","1.9-2.2","2.2-2.4","2.4-2.78","2.78-3.9"]},{title:"Family Percentage",text:"What percentage of your neighbors would you like to be families?",response:null,weight:1,labels:["0-15%","15-21%","21-26%","26-34%","34%+"]},{title:"Vacancy",text:"How much vacancy would you like in the area?",response:null,weight:1,labels:["0-5%","5-7%","7-9%","9-11%","11%+"]},{title:"Income",text:"What income group would you like to live around?",response:null,weight:1,labels:["$12-36k","$36-42k","$42-50k","$50-66k","$66k+"]},{title:"Rent",text:"What average rent would you prefer?",response:null,weight:1,labels:["$752-827","$827-895","$895-962","$962-1011","$1011+"]},{title:"Home Value",text:"Which home value suits you?",response:null,weight:1,labels:["100-137k","137-175k","175-253k","253-338k","338k+"]},{title:"Transit Closeness",text:"How close would you like to be to public transit?",response:null,weight:1,labels:["0-30","30-70","70-76","76-87","87+"]},{title:"Transit Cost",text:"About how much would you want to spend monthly on transit?",response:null,weight:1,labels:["0-590","590-629","629-668","668-708","708+"]},{title:"Rent Increase",text:"Which rate of rent inflation would you like?",response:null,weight:1,labels:["0-22","22-28","28-33","33-40","40+"]},{title:"Home Value Increase",text:"Which rate of home value inflation would you like?",response:null,weight:1,labels:["0-44","44-62","62-93","93-113","113+"]},{title:"Density",text:"How dense would you like the area to be?",response:null,weight:1,labels:["0-3","3-5","5-7","7-9","9+"]}],neighborhoods:null},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"wrapper"},i.a.createElement("section",{class:"intro"},i.a.createElement("header",null,i.a.createElement("h1",null,"Village"),i.a.createElement("p",null,"Find your next home in Austin"),i.a.createElement("ul",{class:"actions"},i.a.createElement("li",null,i.a.createElement("a",{href:"#first",class:"arrow scrolly"},i.a.createElement("span",{class:"label"},"Next"))))),i.a.createElement("div",{class:"content"},i.a.createElement("span",{class:"image fill","data-position":"center"},i.a.createElement("img",{src:"https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",alt:""})))),this.state.questions.map(function(e,t){return i.a.createElement(j,{key:t,index:t,content:e,onQuestion:this.onQuestion,onWeight:this.onWeight})},{onQuestion:this.onQuestion,onWeight:this.onWeight}),i.a.createElement("section",null,i.a.createElement("header",null,i.a.createElement("h2",null,"Results")),i.a.createElement("div",{class:"content"},i.a.createElement(N,{questions:this.state.questions})))))}}]),t}(a.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(V,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,n){e.exports=n.p+"static/media/family.10ee3407.png"},57:function(e,t,n){e.exports=n.p+"static/media/logo.8c2d7811.png"},63:function(e,t,n){e.exports=n(155)},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},92:function(e,t,n){e.exports=n.p+"static/media/family.10ee3407.png"}},[[63,1,2]]]);
//# sourceMappingURL=main.9c9bb585.chunk.js.map