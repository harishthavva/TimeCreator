(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(3),c=n.n(s),i=n(4),o=n(5),r=n(7),h=n(6),d=(n(12),n(13),n(0)),l=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).date=new Date,e.onChange=function(t){e.setState({searchFiled:t.target.value})},e.Timer=function(){console.log(e.state.searchFiled);var t=new Date(e.state.searchFiled).getTime(),n=setInterval((function(){var a=(new Date).getTime(),s=t-a,c=Math.floor(s/864e5),i=Math.floor(s%864e5/36e5);console.log(i);var o=Math.floor(s%36e5/6e4),r=Math.floor(s%6e4/1e3);e.setState({days:c,hours:i,minutes:o,seconds:r}),console.log("Timer Ends in this time period :- ".concat(c,"Days ").concat(i,"Hours ").concat(o,"Minutes ").concat(r,"Seconds")),s<0&&(clearInterval(n),document.getElementById("demo").innerHTML="EXPIRED")}),1e3)},e.state={searchFiled:"",days:0,hours:0,minutes:0,seconds:0},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"tc modify",children:[Object(d.jsx)("h1",{children:Object(d.jsx)("marquee",{direction:"right",children:"Current Time in INDIA ".concat(this.date)})}),Object(d.jsx)("h4",{children:"Please Enter the date on which the Timer Ends !!!"}),Object(d.jsx)("h2",{children:"Remaining Time Period :- ".concat(this.state.days,"Days ").concat(this.state.hours,"Hours ").concat(this.state.minutes,"Minutes ").concat(this.state.seconds,"Seconds")}),Object(d.jsx)("input",{className:"pa2 bg-light-green",type:"date",placeholder:"Enter date in MM-DD-YEAR Formate",onChange:this.onChange}),Object(d.jsx)("span",{children:" "}),Object(d.jsx)("button",{className:"pa2 bg-light-grey pointer",type:"submit",onClick:this.Timer,children:"Submit"})]})}}]),n}(a.Component),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};c.a.render(Object(d.jsx)("div",{children:Object(d.jsx)(l,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.56032e66.chunk.js.map