(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{227:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"report-a-post"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#report-a-post"}},[s._v("#")]),s._v(" Report a post")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Rewards")]),s._v(" "),e("p",[s._v("Upon completing this challenge, you will be rewarded "),e("strong",[s._v("25 Desmos Tokens")]),s._v(".")]),s._v(" "),e("p",[s._v("Please note that in order to prevent spam, you will receive the reward just "),e("strong",[s._v("for the first post")]),s._v(" you report. No tokens will be awarded for later reports.")])]),s._v(" "),e("p",[s._v("With version "),e("code",[s._v("v0.6.0")]),s._v(" we've implemented the ability for users to report abusive posts.")]),s._v(" "),e("h2",{attrs:{id:"create-your-first-report"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-report"}},[s._v("#")]),s._v(" Create your first report")]),s._v(" "),e("p",[s._v("Reporting a post is pretty simple; all you have to provide is:")]),s._v(" "),e("ol",[e("li",[s._v("the "),e("code",[s._v("id")]),s._v(" of the post to be reported;")]),s._v(" "),e("li",[s._v("the "),e("code",[s._v("type")]),s._v(" of the report to create;")]),s._v(" "),e("li",[s._v("the "),e("code",[s._v("message")]),s._v(" of the report.")])]),s._v(" "),e("p",[s._v("In order to see a list of posts and get one id of a post to report, what you can do is either:")]),s._v(" "),e("ol",[e("li",[s._v("go inside the "),e("a",{attrs:{href:"https://morpheus.desmos.network/transactions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Morpheus block explorer"),e("OutboundLink")],1),s._v(" and look at the transactions;")]),s._v(" "),e("li",[s._v("or "),e("a",{attrs:{href:"http://lcd.morpheus.desmos.network:1317/posts",target:"_blank",rel:"noopener noreferrer"}},[s._v("query the LCD for the existing posts"),e("OutboundLink")],1),s._v(".")])]),s._v(" "),e("p",[s._v("To report a post, all you have to do is execute the following command:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli tx reports create "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("post-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("report-type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("report-message"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id morpheus-7001 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-key-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Here's an example of such command:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli tx reports create dc09b4e6fa1303ce484eed24a09d9d5758a6b1708bc9b3ffeb37f5e747d0e348 scam "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this post is a scam"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id morpheus-7001 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from jack --yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this:")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" C43F94C2CF53473BD50F5B525CEABB4A3A20B7427E63207DDAF253A951444EFB\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[]'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("To make sure the transaction has been processed successfully, you can query it using the following command:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli query tx "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --trust-node --output json\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli query tx C43F94C2CF53473BD50F5B525CEABB4A3A20B7427E63207DDAF253A951444EFB \\")]),s._v("\n  --trust-node --output json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("This will return you the JSON representation of the transaction itself.")]),s._v(" "),e("h2",{attrs:{id:"getting-the-reward"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-reward"}},[s._v("#")]),s._v(" Getting the reward")]),s._v(" "),e("p",[s._v("After you've created the post, to make sure you receive your reward please follow this procedure:")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Create a fork of this repo inside your private GitHub profile."),e("br"),s._v("\nIf you do not know how to do it, follow the "),e("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub fork guide"),e("OutboundLink")],1),s._v(".")])]),s._v(" "),e("li",[e("p",[s._v("Pull the fork locally:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/primer.git ~/desmos-primer\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/desmos-primer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Make sure your fork is up to date with the Primer repository:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream https://github.com/desmos-labs/primer.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch upstream\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase upstream/master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Create a file named after your GitHub username containing the post creation transaction hash:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<tx-hash>"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./phase-5/submissions/reports/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-github-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "C43F94C2CF53473BD50F5B525CEABB4A3A20B7427E63207DDAF253A951444EFB" >> ./phase-5/submissions/reports/RiccardoM')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the "),e("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pull Requests guide"),e("OutboundLink")],1),s._v(".")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);