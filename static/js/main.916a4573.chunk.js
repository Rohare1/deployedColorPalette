(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{229:function(e,a,t){e.exports=t.p+"static/media/bg.b0044910.svg"},255:function(e,a,t){e.exports=t(496)},260:function(e,a,t){},495:function(e,a,t){},496:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(8),i=t.n(l),c=t(36),s=(t(260),t(31)),m=t(16),d=t(13),u=t(19),h=t(20),p=t(6),g=t(21),b=t(62),f=t(559),v=t(557),C=t(224),y=t(499),E=t(5),j=t(41),O=t.n(j),w=function(e){return"@media (max-width: ".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}[e],")")},x={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50% "},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(E.a)(o,w("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.333%"}}),Object(E.a)(o,w("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20% "}}),Object(E.a)(o,w("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return O()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return O()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return O()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return O()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",top:"0",bottom:"0",right:"0",left:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(E.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},w("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1200)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,l=e.classes,i=this.state.copied;return r.a.createElement(C.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{className:l.ColorBox,style:{background:t}},r.a.createElement("div",{style:{background:t},className:"".concat(l.copyOverlay," ").concat(i&&l.showOverlay)}),r.a.createElement("div",{className:"".concat(l.copyMessage," ").concat(i&&l.showMessage)},r.a.createElement("h1",null,"Copied!"),r.a.createElement("p",{className:l.copyText},t)),r.a.createElement("div",null,r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.colorName},a)),r.a.createElement("button",{className:l.copyButton},"Copy")),n&&r.a.createElement(c.b,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"MORE"))))}}]),a}(n.Component),S=Object(y.a)(x)(k),P=t(555),N=t(541),F=t(558),B=t(542),D=t(117),I=t.n(D),A=t(237),T={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},slider:Object(E.a)({width:"350px",margin:"0 10px",display:"flex",borderLeft:"15px","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& span":{marginRight:"15px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",height:"13px",width:"13px",marginTop:"-3px"}},w("sm"),{width:"150px"}),logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},selectContainer:{marginLeft:"auto",marginRight:"1rem"}},L=(t(321),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(p.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,l=this.state.format;return r.a.createElement("header",{className:n.Navbar},r.a.createElement("div",{className:n.logo},r.a.createElement(c.b,{to:"/"},"React Color Picker")),o&&r.a.createElement("div",null,r.a.createElement("div",{className:n.slider},r.a.createElement("span",null,"Level:",a),r.a.createElement(A.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:n.selectContainer},r.a.createElement(P.a,{value:l,onChange:this.handleFormatChange},r.a.createElement(N.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(N.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(N.a,{value:"rgba"},"RGBA - rgba(255,255,255,1.0)"))),r.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed To ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(B.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(I.a,null))]}))}}]),a}(n.Component)),R=Object(y.a)(T)(L);var G,M,z,U,H=Object(y.a)({PaletteFooter:{background:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.PaletteFooter},a,r.a.createElement("span",{className:o.emoji},t))})),q={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(G={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(E.a)(G,w("lg"),{width:"25%",height:"33.333%"}),Object(E.a)(G,w("md"),{width:"50%",height:"20%"}),Object(E.a)(G,w("xs"),{width:"100%",height:"10%"}),G)},V=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(p.a)(t)),t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,l=this.props.classes,i=this.state,c=i.level,s=i.format,m=a[c].map((function(e){return r.a.createElement(S,{background:e[s],name:e.name,key:e.name,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(R,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),r.a.createElement("div",{className:l.colors}," ",m," "),r.a.createElement(H,{paletteName:t,emoji:o}))}}]),a}(n.Component),W=Object(y.a)(q)(V),J=t(543),Y=t(546),K=t(540),_=t(497),Q=t(545),X=t(547),$=t(230),Z=t.n($),ee=t(544),ae=t(118),te=t.n(ae),oe=t(556),ne=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).deletePalette=t.deletePalette.bind(Object(p.a)(t)),t.handleClick=t.handleClick.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement(te.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette,key:oe.a.id,id:oe.a.id}),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o," ")," "))}}]),a}(n.PureComponent),re=Object(y.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden "},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(ne),le=t(160),ie=t.n(le),ce=t(161),se=t.n(ce),me=t(229),de={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#8b8eaa",backgroundImage:"url(".concat(t.n(me).a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:(M={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(E.a)(M,w("xl"),{width:"80%"}),Object(E.a)(M,w("xs"),{width:"75%"}),M),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:(z={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(E.a)(z,w("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(E.a)(z,w("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),z)},ue=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={openDeleteDialog:!1,deletingId:""},t.openDialog=t.openDialog.bind(Object(p.a)(t)),t.closeDialog=t.closeDialog.bind(Object(p.a)(t)),t.handleDelete=t.handleDelete.bind(Object(p.a)(t)),t.goToPalette=t.goToPalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"React Colors"),r.a.createElement(c.b,{to:"/palette/new"},"Create New Palette")),r.a.createElement(f.a,{className:o.palettes},t.map((function(a){return r.a.createElement(v.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(re,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),r.a.createElement(J.a,{open:n,"aria-labelledby":"Delete-dialog-title",onClose:this.closeDialog},r.a.createElement(ee.a,{id:"Delete-dialog-title"},"Delete this palette?"),r.a.createElement(K.a,null,r.a.createElement(_.a,{button:!0,onClick:this.handleDelete},r.a.createElement(Q.a,null,r.a.createElement(Y.a,{style:{backgroundColor:ie.a[100],color:ie.a[600]}},r.a.createElement(Z.a,null))),r.a.createElement(X.a,{primary:"Delete"})),r.a.createElement(_.a,{button:!0,onClick:this.closeDialog},r.a.createElement(Q.a,null,r.a.createElement(Y.a,{style:{backgroundColor:se.a[100],color:se.a[600]}},r.a.createElement(I.a,null))),r.a.createElement(X.a,{primary:"Cancel"})))))}}]),a}(n.Component),he=Object(y.a)(de)(ue),pe=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,l=this.props.classes,i=this._shades.map((function(a){return r.a.createElement(S,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(R,{handleChange:this.changeFormat,showingAllColors:!1}),r.a.createElement("div",{className:l.colors},i,r.a.createElement("div",{className:l.goBack},r.a.createElement(c.b,{to:"/palette/".concat(n)},"GO BACK"))),r.a.createElement(H,{paletteName:t,emoji:o}))}}]),a}(n.Component),ge=Object(y.a)(q)(pe),be=t(26),fe=t.n(be),ve=t(7),Ce=t(54),ye=t(551),Ee=t(550),je=t(548),Oe=t(549),we=t(238),xe=(t(331),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.state={stage:"form",newPaletteName:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showEmojiPicker=t.showEmojiPicker.bind(Object(p.a)(t)),t.savePalette=t.savePalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Ce.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(J.a,{open:"emoji"===t,onClose:o},r.a.createElement(ee.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),r.a.createElement(we.a,{onSelect:this.savePalette})),r.a.createElement(J.a,{open:"form"===t,onClose:o,"aria-labelledby":"form-dialog-title"},r.a.createElement(ee.a,{id:"form-dialog-title"},"Choose a Palette Name "),r.a.createElement(Ce.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(je.a,null,r.a.createElement(Oe.a,null,"Please enter a name for your new Palette. Make sure it's unique!"),r.a.createElement(Ce.TextValidator,{label:"Palette Name",value:a,onChange:this.handleChange,fullWidth:!0,margin:"normal",name:"newPaletteName",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),r.a.createElement(Ee.a,null,r.a.createElement(ye.a,{onClick:this.props.hideForm,color:"primary"},"Cancel"),r.a.createElement(ye.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),a}(n.Component)),ke=t(552),Se=t(553),Pe=t(83),Ne=t(232),Fe=t.n(Ne),Be=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(500,"px)"),marginLeft:500,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},navBtns:Object(E.a)({marginRight:"1rem","& a":{textDecoration:"none"}},w("md"),{marginRight:"0.5rem"}),button:Object(E.a)({margin:"0 0.5rem"},w("md"),{margin:"0 0.2rem",padding:"0.3rem"})}},De=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={newPaletteName:"",formShowing:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showForm=t.showForm.bind(Object(p.a)(t)),t.hideForm=t.hideForm.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.handleSubmit,n=e.palettes,l=e.handleDrawerOpen,i=this.state.formShowing;return r.a.createElement("div",{className:a.root},r.a.createElement(ke.a,{position:"fixed",color:"default",className:fe()(a.appBar,Object(E.a)({},a.appBarShift,t))},r.a.createElement(Se.a,{disableGutters:!t},r.a.createElement(B.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:fe()(a.menuButton,t&&a.hide)},r.a.createElement(Fe.a,null)),r.a.createElement(Pe.a,{variant:"h6",color:"inherit",noWrap:!0,className:a.title},"Create A Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(c.b,{to:"/"},r.a.createElement(ye.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),r.a.createElement(ye.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),i&&r.a.createElement(xe,{palettes:n,handleSubmit:o,hideForm:this.hideForm}))}}]),a}(n.Component),Ie=Object(ve.a)(Be,{withTheme:!0})(De),Ae=t(233),Te={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",marginTop:"1rem",padding:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%"}},Le=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={currentColor:"teal",newColorName:""},t.updateColor=t.updateColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Ce.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Ce.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes;return r.a.createElement("div",null,r.a.createElement(Ae.ChromePicker,{color:this.state.currentColor,onChangeComplete:this.updateColor,className:t.picker}),r.a.createElement(Ce.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Ce.TextValidator,{value:this.state.newColorName,className:t.colorNameInput,name:"newColorName",variant:"filled",margin:"normal",placeholder:"Color Name",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["This field is required!","Color name must be unique!","Color already used!"]}),r.a.createElement(ye.a,{type:"submit",variant:"contained",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":this.state.currentColor}},a?"Palette Full":"Add Color")))}}]),a}(n.Component),Re=Object(ve.a)(Te)(Le),Ge=t(561),Me=t(554),ze=t(236),Ue=t.n(ze),He=t(120),qe={root:(U={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5px","&:hover svg":{color:"white",transform:"scale(1.25)"}},Object(E.a)(U,w("lg"),{width:"25%",height:"20%"}),Object(E.a)(U,w("md"),{width:"50%",height:"10%"}),Object(E.a)(U,w("sm"),{width:"100%",height:"5%"}),U),boxContent:Object(E.a)({position:"absolute",color:function(e){return O()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},width:"100%",left:"0px",bottom:"0px",padding:"10px",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},w("md"),{bottom:"-10px"}),deleteIcon:{position:"relative",right:"10px",transition:"all 0.3s ease-in-out"}},Ve=Object(He.b)((function(e){var a=e.classes,t=e.name,o=e.handleClick,n=e.color;return r.a.createElement("div",{className:a.root,style:{background:n}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,t),r.a.createElement(te.a,{className:a.deleteIcon,onClick:o})))})),We=Object(ve.a)(qe)(Ve),Je=Object(He.a)((function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return r.a.createElement(We,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))}));function Ye(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function Ke(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ye(t,!0).forEach((function(a){Object(E.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ye(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var _e=function(e){return{root:{display:"flex"},drawer:{width:500,flexShrink:0},drawerPaper:{width:500,display:"flex",alignItems:"center"},drawerHeader:Ke({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{height:"calc(100vh - 64px)",flexGrow:1,padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-500},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},buttons:{width:"100%"},button:{width:"50%"},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}},Qe=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Xe=t(494),$e=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState((function(e){var t=e.colors;return{colors:Xe(t,a,o)}}))},t.state={open:!0,colors:Qe[0].colors},t.addNewColor=t.addNewColor.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.removeColor=t.removeColor.bind(Object(p.a)(t)),t.clearColors=t.clearColors.bind(Object(p.a)(t)),t.addRandomColor=t.addRandomColor.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e])})}},{key:"addRandomColor",value:function(){for(var e,a,t=Qe.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some((function(e){return e.name===a.name})),console.log(a);this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,i=n.colors,c=i.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(Ie,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(Ge.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(B.a,{onClick:this.handleDrawerClose},r.a.createElement(Ue.a,null))),r.a.createElement(Me.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(Pe.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:a.buttons},r.a.createElement(ye.a,{variant:"contained",color:"secondary",className:a.button,onClick:this.clearColors},"Clear Palette"),r.a.createElement(ye.a,{variant:"contained",color:"primary",className:a.button,onClick:this.addRandomColor,disabled:c},"Random Color")),r.a.createElement(Re,{paletteIsFull:c,addNewColor:this.addNewColor,colors:i}))),r.a.createElement("main",{className:fe()(a.content,Object(E.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(Je,{colors:i,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),a}(n.Component);$e.defaultProps={maxColors:20};var Ze=Object(ve.a)(_e,{withTheme:!0})($e);t(495);var ea=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},aa=[50,100,200,300,400,500,600,700,800,900];function ta(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=aa[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var i=r.value;a.colors[i]=[]}}catch(v){o=!0,n=v}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var c,s,m=!0,d=!1,u=void 0;try{for(var h,p=e.colors[Symbol.iterator]();!(m=(h=p.next()).done);m=!0){var g=h.value,b=(c=g.color,s=10,O.a.scale(function(e){return[O()(e).darken(1.4).hex(),e,"#fff"]}(c)).mode("lab").colors(s)).reverse();for(var f in b)a.colors[aa[f]].push({name:"".concat(g.name," ").concat(aa[f]),id:g.name.toLowerCase().replace(/ /g,"-"),hex:b[f],rgb:O()(b[f]).css(),rgba:O()(b[f]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(v){d=!0,u=v}finally{try{m||null==p.return||p.return()}finally{if(d)throw u}}return a}var oa=function(e){function a(e){var t;Object(m.a)(this,a),t=Object(u.a)(this,Object(h.a)(a).call(this,e));var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||Qe},t.savePalette=t.savePalette.bind(Object(p.a)(t)),t.findPalette=t.findPalette.bind(Object(p.a)(t)),t.deletePalette=t.deletePalette.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{render:function(a){var t=a.location;return r.a.createElement(f.a,null,r.a.createElement(v.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(b.c,{location:t},r.a.createElement(b.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(ea,null,r.a.createElement(Ze,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(b.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(ea,null,r.a.createElement(he,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(b.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(ea,null,r.a.createElement(W,{palette:ta(e.findPalette(a.match.params.id))}))}}),r.a.createElement(b.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(ea,null,r.a.createElement(ge,{colorId:a.match.params.colorId,palette:ta(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(b.a,{render:function(a){return r.a.createElement(ea,null,r.a.createElement(he,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(oa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[255,1,2]]]);
//# sourceMappingURL=main.916a4573.chunk.js.map