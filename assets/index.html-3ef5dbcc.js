import{_ as l,p as i,q as e,a1 as a}from"./framework-5866ffd3.js";const d={},r=a('<br><br><h2 id="名次解释" tabindex="-1"><a class="header-anchor" href="#名次解释" aria-hidden="true">#</a> 名次解释</h2><p><code>神经网络</code></p><p>神经网络是一种<b>模仿动物神经网络行为特征</b>，进行分布式并行信息处理的<b>算法数学模型</b></p><p><code>通用人工智能</code></p><ul><li>人工智能研究终极目标</li><li>弱人工智能只能处理特定的问题</li><li>通用人工智能是具备与人类同等智慧、或超越人类的人工智能</li></ul><p><code>并行</code></p><ul><li>并行是指两个或者多个事件可以在<strong>同一时刻</strong>发生</li></ul><p><code>并发</code></p><ul><li>并发是指两个或者多个事件可以在<strong>同一时间间隔</strong>发生</li></ul><h2 id="计算机组成" tabindex="-1"><a class="header-anchor" href="#计算机组成" aria-hidden="true">#</a> 计算机组成</h2><h3 id="计算机的总线" tabindex="-1"><a class="header-anchor" href="#计算机的总线" aria-hidden="true">#</a> 计算机的总线</h3><h4 id="总线的概述" tabindex="-1"><a class="header-anchor" href="#总线的概述" aria-hidden="true">#</a> 总线的概述</h4><p>USB <code>Universal Serial Bus</code> 通用串行总线</p><ul><li>提供了对外连接端口</li><li>不同设备可以通过USB接口进行连接</li><li>连接的标准，促使外围设备接口的统一</li><li><strong>解决不同设备之间的通信问题</strong></li></ul><p>分类</p><ol><li><strong>片内总线</strong> 高集成度芯片内部的信息传输线</li><li><strong>系统总线</strong> CPU、主内存、IO设备、各组件之间的信息传输线</li></ol><h4 id="总线的仲裁" tabindex="-1"><a class="header-anchor" href="#总线的仲裁" aria-hidden="true">#</a> 总线的仲裁</h4><p>解决不同设备使用总线的冲突问题</p><ul><li><strong>链式查询</strong></li></ul><blockquote><p>好处：电路复杂度低，仲裁方式简单</p><p>坏处：优先级低的设备难以获得总线使用权</p><p>坏处：对电路故障敏感</p></blockquote><ul><li><strong>计时器定时查询</strong></li></ul><blockquote><p>仲裁控制器对设别编号并使用计数器累计计数</p><p>接收到仲裁信号后，往所有设备发出计数值</p><p>计数值与设备编号一直则获得总线使用权</p></blockquote><ul><li><strong>独立请求</strong></li></ul><blockquote><p>每个设备均有总线地理连接仲裁器</p><p>设备可单独向仲裁器发送请求和接收请求</p><p>当同时收到多个请求，仲裁器有权按优先级分配使用权</p><p>好处：响应速度快，优先顺序可动态改变</p><p>坏处：设备连接多，总线控制复杂</p></blockquote><h3 id="计算机的输入输出设备" tabindex="-1"><a class="header-anchor" href="#计算机的输入输出设备" aria-hidden="true">#</a> 计算机的输入输出设备</h3><h4 id="常见的输入设备" tabindex="-1"><a class="header-anchor" href="#常见的输入设备" aria-hidden="true">#</a> 常见的输入设备</h4><ol><li>键盘 <code>薄膜键盘</code> <code>机械键盘</code> <code>电容键盘</code></li><li>鼠标</li><li>数位板</li><li>扫描仪</li></ol><h4 id="常见的输出设备" tabindex="-1"><a class="header-anchor" href="#常见的输出设备" aria-hidden="true">#</a> 常见的输出设备</h4><ol><li>显示器 <code>CRT</code> <code>液晶</code></li><li>打印机</li><li>投影仪</li></ol><h4 id="输入输出接口的通用设计" tabindex="-1"><a class="header-anchor" href="#输入输出接口的通用设计" aria-hidden="true">#</a> 输入输出接口的通用设计</h4><ol><li>数据线 <ul><li>是I/O设备与主机之间进行数据交换的传送线</li><li>单向传输数据线</li><li>双向传输数据线</li></ul></li><li>状态线 <ul><li>IO设备状态向主机报告的信号线</li><li>查询设备是否已经正常连接并就绪</li><li>查询设备是否已经被占用</li></ul></li><li>命令线 <ul><li>用于CPU向设备发送命令的信号线</li><li>发送读写信号</li><li>发送启动停止信号</li></ul></li><li>设备选择线 <ul><li>主机选择I/O设备进行操作的信号线</li><li>对连在总线伤的设备进行选择</li></ul></li></ol><h4 id="cpu与io设备的通信" tabindex="-1"><a class="header-anchor" href="#cpu与io设备的通信" aria-hidden="true">#</a> CPU与IO设备的通信</h4><ol><li>程序中断 <ul><li>当外围IO设备就绪时，向CPU发出中断信号</li><li>CPU有专门的电路响应中断信号</li></ul></li></ol><blockquote><p>提供一种低速设备通知CPU的一种异步的方式</p><p>CPU可以告诉运转的同时同时兼顾低速设备的响应</p></blockquote><ol start="2"><li>DMA（直接存储器访问） <ul><li>DMA直接连接主存与IO设备 <strong>不需要中断CPU、提高CPU效率</strong></li><li>DMA工作时不需要CPU参与</li></ul></li></ol><h3 id="计算机存储器" tabindex="-1"><a class="header-anchor" href="#计算机存储器" aria-hidden="true">#</a> 计算机存储器</h3><h4 id="存储器的分类" tabindex="-1"><a class="header-anchor" href="#存储器的分类" aria-hidden="true">#</a> 存储器的分类</h4><ul><li>半导体存储器</li><li>磁存储器</li></ul><h4 id="存储器的层次结构" tabindex="-1"><a class="header-anchor" href="#存储器的层次结构" aria-hidden="true">#</a> 存储器的层次结构</h4><ul><li>缓存</li><li>主存</li><li>辅存</li></ul><h4 id="主存储器「内存」" tabindex="-1"><a class="header-anchor" href="#主存储器「内存」" aria-hidden="true">#</a> 主存储器「内存」</h4><ol><li>RAM（随机存取存储器）</li><li>RAM通过电容存储数据，必须隔一段时间刷新一次</li><li>如果断电，那么一段时间后将丢失所有数据</li></ol><p><code>32位系统</code> 2<sup>32</sup> = 4 x 2<sup>30</sup> = 4GB <br><code>64位系统</code> 2<sup>64</sup> = 2<sup>32</sup> x 2<sup>30</sup> = 2<sup>32</sup>GB</p><h4 id="辅助存储器「磁盘」" tabindex="-1"><a class="header-anchor" href="#辅助存储器「磁盘」" aria-hidden="true">#</a> 辅助存储器「磁盘」</h4><ol><li>表面是可磁化的硬磁特性材料</li><li>可移动磁头径向运动读取磁道信息</li></ol><p><code>先来先服务算法</code></p><ul><li>按照顺序访问进程的磁道算法</li></ul><p><code>最短寻道时间优先算法</code></p><ul><li>与磁头相关位置有关</li><li>优先访问离磁头最近的磁道</li></ul><p><code>扫描算法（电梯算法）</code></p><ul><li>每次只往一个方向移动</li><li>到达一个方向需要服务的尽头再反方向移动</li></ul><p><code>循环扫描算法</code></p><ul><li>只能往一个方向算法</li></ul><h3 id="计算机的高速缓存" tabindex="-1"><a class="header-anchor" href="#计算机的高速缓存" aria-hidden="true">#</a> 计算机的高速缓存</h3><blockquote><p><strong>解决CPU与主存速度不匹配</strong></p></blockquote><h4 id="高速缓存的工作原理" tabindex="-1"><a class="header-anchor" href="#高速缓存的工作原理" aria-hidden="true">#</a> 高速缓存的工作原理</h4><p><code>字</code> 是指存放在一个存储单元中的二进制代码组合 <br><code>字块</code> 存储在连续的存储单元中而被看作是一个单元的一组字 <br></p><p><code>命中率</code> <code>访问效率</code></p><p>🌟需要性能良好的缓存替换策略</p><h4 id="高度缓存的替换策略" tabindex="-1"><a class="header-anchor" href="#高度缓存的替换策略" aria-hidden="true">#</a> 高度缓存的替换策略</h4><ol><li>随机算法</li><li>先进先出算法（FIFO）</li><li>最不经常使用算法（LFU）</li><li>最近最少使用算法（LRU）</li></ol><h3 id="计算机的指令系统" tabindex="-1"><a class="header-anchor" href="#计算机的指令系统" aria-hidden="true">#</a> 计算机的指令系统</h3><ol><li>机器指令的形式</li><li>机器指令的操作方式</li><li>机器指令的寻址方式</li></ol><h2 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h2><ul><li>操作系统是管理计算机硬件和软件资源的计算机程序</li><li>管理配置内存、决定资源供需顺序、控制输入输出设备等</li><li>操作系统提供让用户和系统交互的操作界面</li></ul><h3 id="操作系统概览" tabindex="-1"><a class="header-anchor" href="#操作系统概览" aria-hidden="true">#</a> 操作系统概览</h3><h4 id="常见的操作系统" tabindex="-1"><a class="header-anchor" href="#常见的操作系统" aria-hidden="true">#</a> 常见的操作系统</h4><ol><li>Android <code>MIUI</code> <code>ColorOS</code> <code>Flyme</code></li><li>iOS</li><li><a href="/Windows" target="_blank">Windows</a></li><li><a href="/Linux" target="_blank">Linux</a> <code>CentOS</code> <code>Ubuntu</code></li><li><a href="/MacOS" target="_blank">MacOS</a></li></ol><h4 id="操作系统的基本功能" tabindex="-1"><a class="header-anchor" href="#操作系统的基本功能" aria-hidden="true">#</a> 操作系统的基本功能</h4><ol><li>统一管理着计算机资源 <ul><li>处理器资源</li><li>IO设备资源</li><li>存储器资源</li><li>文件资源</li></ul></li><li>操作系统实现了对计算机资源的抽象 <ul><li>用户无需向硬件接口编程</li><li>IO设备管理软件，提供读写接口</li><li>文件管理软件，提供操作文件接口</li></ul></li><li>操作系统提供了用户与计算机之间的接口 <ul><li>图像窗口像是</li><li>命令形式</li><li>系统调用形式</li></ul></li></ol><h4 id="操作系统的相关概念" tabindex="-1"><a class="header-anchor" href="#操作系统的相关概念" aria-hidden="true">#</a> 操作系统的相关概念</h4><ol><li>并发性</li><li>共享性</li><li>虚拟性</li><li>异步性</li></ol><h3 id="进程管理值进程实体" tabindex="-1"><a class="header-anchor" href="#进程管理值进程实体" aria-hidden="true">#</a> 进程管理值进程实体</h3>',75),o=[r];function h(c,n){return i(),e("div",null,o)}const u=l(d,[["render",h],["__file","index.html.vue"]]);export{u as default};
