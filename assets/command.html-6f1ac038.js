import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i="/image/Linux/htop.png",d={},l=e(`<h2 id="htop" tabindex="-1"><a class="header-anchor" href="#htop" aria-hidden="true">#</a> htop</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">htop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-4-10-centos ~<span class="token punctuation">]</span><span class="token comment">#  htop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+i+`"><h2 id="nvm-node" tabindex="-1"><a class="header-anchor" href="#nvm-node" aria-hidden="true">#</a> nvm / node</h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>


<span class="token comment"># 安装完成后需要执行以下命令使修改的内容生效</span>
<span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入一下命令验证是否生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 nvm 安装 node</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装14.18版本的node</span>
nvm <span class="token function">install</span> <span class="token number">14.18</span>
<span class="token comment"># 安装12.8版本的node</span>
nvm <span class="token function">install</span> <span class="token number">12.8</span>
<span class="token comment"># 使用某一个node版本</span>
nvm use <span class="token number">14.18</span>
<span class="token comment"># 查看node版本</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[l];function t(r,o){return a(),s("div",null,c)}const m=n(d,[["render",t],["__file","command.html.vue"]]);export{m as default};
