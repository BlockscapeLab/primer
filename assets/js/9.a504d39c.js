(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{430:function(s,t,e){"use strict";e.r(t);var a=e(53),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"like-a-post"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#like-a-post"}},[s._v("#")]),s._v(" Like a post")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("This challenge has been replaced by the "),e("RouterLink",{attrs:{to:"/phase-2/add-reaction.html"}},[s._v("Phase 2 Reaction challenge")]),s._v(".")],1),s._v(" "),e("p",[s._v("Until January 31th 23:59:59 UTC, you can still complete it by replacing the below command with")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('desmoscli tx posts add-reaction <post-id> "like" --from <your-key> --yes\n\n# Example \n# desmoscli tx posts add-reaction 12 "like" --from jack --yes\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("This challenge allows you to receive "),e("strong",[s._v("10 Desmos Tokens")]),s._v(" upon completion.")]),s._v(" "),e("p",[s._v("Please note that in order to prevent spam, you will receive the reward just "),e("strong",[s._v("for the first post")]),s._v(" you like. No tokens will be awarded for later posts.")])]),s._v(" "),e("p",[s._v("Likes are Desmos' way for users expressing their appreciation towards an existing post, either created by the post authors or by another users.")]),s._v(" "),e("p",[s._v("Different from posts, likes can be removed using the "),e("em",[s._v("unlike")]),s._v(" transaction. However, once you like a post on the chain a trace will be left forever and clients can decide to ignore unlikes and showing just the original likes. In the end, make sure you really like a post before liking it on Desmos as likes will be forever.")]),s._v(" "),e("h2",{attrs:{id:"liking-a-post"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#liking-a-post"}},[s._v("#")]),s._v(" Liking a post")]),s._v(" "),e("h3",{attrs:{id:"retrieving-a-post-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-a-post-id"}},[s._v("#")]),s._v(" Retrieving a post id")]),s._v(" "),e("p",[s._v("To like a post, you will need to know its id. Post ids can be retrieved from creation transactions.")]),s._v(" "),e("p",[s._v("As an example, let's take the transaction having the following hash and used to create a simple post:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("To get the id of the post you can get its JSON representation by running")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli query tx 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231 --output json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("And, using a JSON formatter website or tool, read the "),e("code",[s._v("post_id")]),s._v(" associated value inside the "),e("code",[s._v("events")]),s._v(" array. In this case, the id of the created post is "),e("code",[s._v("12")]),s._v(".")]),s._v(" "),e("h3",{attrs:{id:"performing-the-like-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performing-the-like-transaction"}},[s._v("#")]),s._v(" Performing the like transaction")]),s._v(" "),e("p",[s._v("Once you got the id of a post that you would want to put a like on, you simply have to run the following command:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli tx posts like "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("post-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --from "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --yes\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli tx posts like 12 --from jack --yes")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("This should return you something like this:")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"like_post"}]}]}]\'')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("msgindex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("success")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" message\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("attributes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" action\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" like_post\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("You can now query the tx result to make sure everything was processed successfully:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("desmoscli query tx 1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9 --output json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"getting-the-reward"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-reward"}},[s._v("#")]),s._v(" Getting the reward")]),s._v(" "),e("p",[s._v("After you've created a post, please following this procedure to receive your rewards:")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Create a fork of this repo inside your private GitHub profile."),e("br"),s._v("\nIf you do not know how to do it, follow the "),e("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub fork guide"),e("OutboundLink")],1),s._v(".")])]),s._v(" "),e("li",[e("p",[s._v("Pull the fork locally:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/primer.git ~/desmos-primer\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/desmos-primer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Create a file named after your GitHub username containing the like transaction hash:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<tx-hash>"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./phases/phase-1/challenges/likes/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-github-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9" >> ./phases/phase-1/challenges/likes/RiccardoM')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the "),e("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pull Requests guide"),e("OutboundLink")],1),s._v(".")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);