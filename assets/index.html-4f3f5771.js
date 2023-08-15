import{_ as e,p as r,q as o,a1 as a}from"./framework-5866ffd3.js";const n="/image/Docker/docker.png",t={},c=a('<br><br><img src="'+n+'" style="width:100px;height:100px;display:block;margin-left:auto;margin-right:auto;"><h1 id="docker简介" tabindex="-1"><a class="header-anchor" href="#docker简介" aria-hidden="true">#</a> Docker简介</h1><h2 id="什么是docker" tabindex="-1"><a class="header-anchor" href="#什么是docker" aria-hidden="true">#</a> 什么是Docker</h2><p>Docker 使用 Google 公司推出的 <a href="/Go" target="_blank">Go 语言</a> 进行开发实现，基于 <a href="/Linux" target="_blank">Linux 内核</a> 的 cgroup，namespace，以及 OverlayFS 类的 Union FS 等技术，对进程进行封装隔离，属于 操作系统层面的虚拟化技术。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 LXC，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 libcontainer，从 1.11 版本开始，则进一步演进为使用 runC 和 containerd。</p><p><b>Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。</b></p><h2 id="为什么要用docker" tabindex="-1"><a class="header-anchor" href="#为什么要用docker" aria-hidden="true">#</a> 为什么要用docker</h2><p>作为一种新兴的虚拟化方式，Docker 跟传统的虚拟化方式相比具有众多的优势。</p><p><strong>更高效的利用系统资源</strong><br> 由于容器不需要进行硬件虚拟以及运行完整操作系统等额外开销，Docker 对系统资源的利用率更高。无论是应用执行速度、内存损耗或者文件存储速度，都要比传统虚拟机技术更高效。因此，相比虚拟机技术，一个相同配置的主机，往往可以运行更多数量的应用。</p><p><strong>更快速的启动时间</strong><br> 传统的虚拟机技术启动应用服务往往需要数分钟，而 Docker 容器应用，由于直接运行于宿主内核，无需启动完整的操作系统，因此可以做到秒级、甚至毫秒级的启动时间。大大的节约了开发、测试、部署的时间。</p><p><strong>一致的运行环境</strong><br> 开发过程中一个常见的问题是环境一致性问题。由于开发环境、测试环境、生产环境不一致，导致有些 bug 并未在开发过程中被发现。而 Docker 的镜像提供了除内核外完整的运行时环境，确保了应用运行环境一致性，从而不会再出现 「这段代码在我机器上没问题啊」 这类问题。</p><p><strong>持续交付和部署</strong><br> 对开发和运维（DevOps）人员来说，最希望的就是一次创建或配置，可以在任意地方正常运行。</p><p>使用 Docker 可以通过定制应用镜像来实现持续集成、持续交付、部署。开发人员可以通过 Dockerfile 来进行镜像构建，并结合 持续集成(Continuous Integration) 系统进行集成测试，而运维人员则可以直接在生产环境中快速部署该镜像，甚至结合 持续部署(Continuous Delivery/Deployment) 系统进行自动部署。</p><p>而且使用 Dockerfile 使镜像构建透明化，不仅仅开发团队可以理解应用运行环境，也方便运维团队理解应用运行所需条件，帮助更好的生产环境中部署该镜像。</p><p><strong>更轻松的迁移</strong><br> 由于 Docker 确保了执行环境的一致性，使得应用的迁移更加容易。Docker 可以在很多平台上运行，无论是物理机、虚拟机、公有云、私有云，甚至是笔记本，其运行结果是一致的。因此用户可以很轻易的将在一个平台上运行的应用，迁移到另一个平台上，而不用担心运行环境的变化导致应用无法正常运行的情况。</p><p><strong>更轻松的维护和扩展</strong><br> Docker 使用的分层存储以及镜像的技术，使得应用重复部分的复用更为容易，也使得应用的维护更新更加简单，基于基础镜像进一步扩展镜像也变得非常简单。此外，Docker 团队同各个开源项目团队一起维护了一大批高质量的 官方镜像，既可以直接在生产环境使用，又可以作为基础进一步定制，大大的降低了应用服务的镜像制作成本。</p><h1 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h1>',18),i=[c];function s(d,p){return r(),o("div",null,i)}const k=e(t,[["render",s],["__file","index.html.vue"]]);export{k as default};
