(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[3028],{64538:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var l=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"deploy build",sidebar_label:"deploy build"},d={unversionedId:"cli/commands/deploy-build",id:"cli/commands/deploy-build",isDocsHomePage:!1,title:"ionic deploy build",description:"Create a deploy build on Appflow",source:"@site/docs/cli/commands/deploy-build.md",sourceDirName:"cli/commands",slug:"/cli/commands/deploy-build",permalink:"/docs/cli/commands/deploy-build",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/cli/commands/deploy-build.md",version:"current",sidebar_label:"deploy build",frontMatter:{title:"deploy build",sidebar_label:"deploy build"},sidebar:"cli",previous:{title:"ionic deploy add",permalink:"/docs/cli/commands/deploy-add"},next:{title:"ionic deploy configure",permalink:"/docs/cli/commands/deploy-configure"}},p=[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Advanced Options",id:"advanced-options",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a deploy build on Appflow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic deploy build [options]\n")),(0,i.kt)("p",null,"This command creates a deploy build on Appflow. While the build is running, it prints the remote build log to the terminal."),(0,i.kt)("p",null,"Customizing the build:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"--environment")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--channel")," options can be used to customize the groups of values exposed to the build.")),(0,i.kt)("p",null,"Apart from ",(0,i.kt)("inlineCode",{parentName:"p"},"--commit"),", every option can be specified using the full name setup within the Appflow ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com"},"Dashboard"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic deploy build \n$ ionic deploy build --environment="My Custom Environment Name"\n$ ionic deploy build --commit=2345cd3305a1cf94de34e93b73a932f25baac77c\n$ ionic deploy build --channel="Master"\n$ ionic deploy build --channel="Master" --channel="My Custom Channel"\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-environment",id:"option-environment"},"--environment",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The group of environment variables exposed to your build")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-channel",id:"option-channel"},"--channel",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The channel you want to auto deploy the build to. This can be repeated multiple times if multiple channels need to be specified."))))),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-commit",id:"option-commit"},"--commit",(0,i.kt)("span",{class:"option-spec"}," =<sha1>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"Commit (defaults to HEAD)")))))))}u.isMDXComponent=!0}}]);