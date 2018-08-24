
document.addEventListener("DOMContentLoaded",function(){


       //函数对象
        var Carousel=function(options){
          
          var defaults={
              ele:"",   //元素
              imgs:[],  //图片
              width:3000,  //宽度
              height:420,   //高度
              index:0,
              page:true,     //是否显示分页
              button:true,   //是否显示左右按钮
              type:"vertical",  //轮播类型
              seamless:true,  //是否无缝滚动
              duration:3000,
          }

          //合并对象
          this.opt=Object.assign({},defaults,options);
          this.len=this.opt.imgs.length;

          //初始化并传递参数
          this.init(this.opt);

        //   console.log(this.opt);
        //   console.log(this.len);
        }



        /*-------------------初始化【方法】---------------- */
      
       Carousel.prototype.init=function(opt){
           //div.carousel.lx-carousel
           this.ele=document.querySelector(opt.ele); 
           
           //轮播类型
           this.ele.classList.add("lx-carousel");

           //设置样式
           this.ele.style.width=opt.width+"px";
           this.ele.style.height=opt.height+"px";

           //生成图片
           let ul=document.createElement("ul");
           //给ul添加类型，设置轮播类型
           ul.className=opt.type;

           //判断轮播类型
           if(opt.type==="horizontal"){
               ul.style.width=opt.width*this.len+"px";
           }else if(opt.type==="fade"){
               ul.style.width=opt.width+"px";
               ul.style.height=opt.height+"px";
           }

           ul.innerHTML=opt.imgs.map(item=>{
               return `<li><img src="${item}"/></li>`;
           }).join("");

           //写入页面
           this.ele.appendChild(ul);



          //传递参数
          this.ul=ul;



        /*----轮播图添加图片数字分页----*/
           if(opt.page){
                this.page=document.createElement("div");
                this.page.className="page";

                for(var i=0;i<this.len;i++){
                    var span=document.createElement("span");
                    span.innerHTML=i+1;

                    //高亮当前
                    if(i===opt.index){
                        span.className="active";
                    }

                    this.page.appendChild(span);
                }

                this.ele.appendChild(this.page);
           }

          



         /*---轮播图添加左右按钮---*/
           if(opt.button){
                let btnPrev = document.createElement('span');
                btnPrev.className = 'btn-prev';
                btnPrev.innerHTML = '&lt;';

                let btnNext = document.createElement('span');
                btnNext.className = 'btn-next';
                btnNext.innerHTML = '&gt;';

                this.ele.appendChild(btnPrev);
                this.ele.appendChild(btnNext);
            }


           //初始化，页面进入自动轮播
           this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
           this.play();



        /*---鼠标移入移出（控制页码）----*/
           this.ele.onmouseover = ()=>{
                this.stop();
            }
            this.ele.onmouseout = ()=>{
                this.timer = setInterval(this.autoPlay.bind(this),opt.duration);
            }


        /*-----点击切换图片----*/
            this.ele.onclick = e=>{
                if(e.target.parentNode.className === 'page'){
                    opt.index = e.target.innerText-1;

                    this.play();
                }else if(e.target.className === 'btn-prev'){
                    opt.index--;
                    this.play();
                }else if(e.target.className === 'btn-next'){
                    opt.index++;
                    this.play();
                }
            }


       }


        /*-----------自动播放-----------*/
       Carousel.prototype.autoPlay=function(){
           this.opt.index++;
        // console.log(this.opt.index);
           this.play();
       }


       /*-----------------播放----------------*/
       Carousel.prototype.play=function(){
           let opt=this.opt;
           
           if(opt.index>=this.len){
               opt.index=0;
           }else if(opt.index<0){   //点击左右箭头按钮，控制
               opt.index=this.len-1;
           }


           var obj={};

               if(opt.type === 'horizontal'){
                obj.left = -opt.index*opt.width;
                // console.log(obj.left);
                animate(this.ul,obj);
            }else if(opt.type === 'vertical'){
                obj.top = -opt.index*opt.height;
                animate(this.ul,obj);
            }else if(opt.type === 'fade'){
                for(var i=0;i<this.len;i++){
                    animate(this.ul.children[i],{opacity:0});
                }
                animate(this.ul.children[opt.index],{opacity:1});

            }


            /*---------高亮当前页码------*/
            if(this.page){
                for(var i=0;i<this.len;i++){
                    this.page.children[i].className = "";
                }
                this.page.children[opt.index].className = "active";
            }


       }


        /*--------------停止-------------*/
        Carousel.prototype.stop = function(){
            clearInterval(this.timer);
        }

        // var ht_four=$(".haitun .ht_four");

    //  new Carousel({
    //           ele:'.ht_four',   //元素
    //          imgs:["img/indexImg/scroll01.jpg","img/indexImg/scroll02.jpg","img/indexImg/scroll03.jpg"],
    //          type:"horizontal",   //轮播类型
    //          height:420,
    //          width:2000,
    //      })


});


