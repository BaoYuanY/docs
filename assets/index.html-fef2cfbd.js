import{_ as e,M as i,p as t,q as l,R as n,t as a,N as c,a1 as r}from"./framework-5866ffd3.js";const d={},o=n("h2",{id:"安装-git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-git","aria-hidden":"true"},"#"),a(" 安装 Git")],-1),p=n("blockquote",null,[n("p",null,"根据自己的系统去安装Git")],-1),u={href:"https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="配置-user-信息" tabindex="-1"><a class="header-anchor" href="#配置-user-信息" aria-hidden="true">#</a> 配置 user 信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;***&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;***&#39;</span>

<span class="token comment"># 单项目配置(--local) 在对应目录配置</span>
<span class="token function">git</span> config user.name <span class="token string">&#39;***&#39;</span>
<span class="token function">git</span> config user.email <span class="token string">&#39;***&#39;</span>

<span class="token comment"># 显示 config 的配置  加 --list</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--local</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--global</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建-git-仓库" tabindex="-1"><a class="header-anchor" href="#建-git-仓库" aria-hidden="true">#</a> 建 Git 仓库</h2><h3 id="_1-把已有的项目代码纳入git管理" tabindex="-1"><a class="header-anchor" href="#_1-把已有的项目代码纳入git管理" aria-hidden="true">#</a> 1. 把已有的项目代码纳入Git管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> 项目代码所在的文件夹
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-新建的项目直接用git管理" tabindex="-1"><a class="header-anchor" href="#_2-新建的项目直接用git管理" aria-hidden="true">#</a> 2. 新建的项目直接用GIt管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> 某个文件夹
<span class="token function">git</span> init 项目文件夹 <span class="token comment">#会在当前路径下创建和项目名称同名的文件夹</span>
<span class="token builtin class-name">cd</span> 项目文件夹
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单提交" tabindex="-1"><a class="header-anchor" href="#简单提交" aria-hidden="true">#</a> 简单提交</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加文件</span>
<span class="token comment"># touch text.txt</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;添加文件&quot;</span>

<span class="token comment"># 查看状态</span>
<span class="token function">git</span> status

<span class="token comment"># 查看日志</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(b,h){const s=i("ExternalLinkIcon");return t(),l("div",null,[o,p,n("p",null,[n("a",u,[a("Git官网"),c(s)])]),m])}const k=e(d,[["render",v],["__file","index.html.vue"]]);export{k as default};
