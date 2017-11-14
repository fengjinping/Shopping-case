// 入口函数
$(function(){

	  // fullpage方法
	  $('#fullpage').fullpage({
	  		// 内容不垂直居中显示布尔类型
	  		verticalCentered:false,
	  		//设置背景颜色
	  		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
	  		// 是否显示侧边导航
	  		navigation:true,
	  		// 导航的位置
	  		navigationPosition: 'right',
	  		// 设置滚动速度
	  		scrollingSpeed:1500,


	  		//当页面结构加载成功后的回调函数
	  		afterRender:function(){

	  			//当页面加载完成后，点击down图片向下移动一屏
	  			$(".down").on("click",function(){

	  				// 整个屏幕（插件）向下移动
	  				$.fn.fullpage.moveSectionDown();

	  			});


	  			$(".screen08").on("mousemove",function(e){

	  				$(".screen08 .hand").css({
	  					"left": e.clientX+20,
	  					"top":e.clientY+20
	  				})

	  				$(".screen08 .btn img:first-child").on("mouseenter",function(){
	  					
	  					$(this).hide().siblings().show();

	  				}).on("mouseleave",function(){

	  					$(this).show().siblings().hide();

	  				});
	  			});

	  			$(".screen08 .more").on("click",function(){
	  				$.fn.fullpage.moveTo(1);
	  			})
	  		},
	  		// 离开当前屏进入到下一屏的回调函数
	  		onLeave:function(index,nextindex,direction){

	  			//当按钮离开上一屏进入到下一屏的时候要淡出
	  			 $(".down").fadeOut();

	  			 if(index==2 && nextindex==3) {
	  			 	//离开第2屏进入第3屏 给隐藏的沙发添加动画
	  			 	$(".screen02 .h_sofa").addClass('animate');

	  			 }else if(index==3 && nextindex==4){
	  			 	$(".screen03 .h_sofa").addClass('animate').on("animationend",function(){
	  			 		//隐藏在购物车中的沙发显示
	  			 		$(".screen04 .cart .sofaImg").show();
	  			 		//购物车开始移动
	  			 		$(".screen04 .cart").addClass('animate').on("animationend",function(){
	  			 			//收货地址文字显示
	  			 			$(".screen04 .h_textImg").show();
	  			 			//收货地址开始显示
	  			 			$(".screen04 .address .h-addressImg01").fadeIn(1000,function(){
	  			 					$(".screen04 .address .h-addressImg").fadeIn();

	  			 			});
	  			 		});

	  			 	});
	  			 }else if(index==5 && nextindex==6) {
	  			 	 $(".screen05 .card .sofaImg").addClass('down_img');

	  			 	 $(".screen06").parent().addClass('select');
	  			 	
	  			 }else if(index==6 && nextindex==7){
	  			 	 $(".screen07 .start").addClass('animate');
	  			 }
	  		},
	  		// 滚动到某一屏时候的回调函数
	  		afterLoad:function(link,index){
	  			//当按钮进入到当前屏的时候要淡出
	  			$(".down").fadeIn();
	  			//移动到当前屏的时候动态添加一个类样式
	  			$(this).addClass('select');	
	  			//当手移动完后让鼠标显示
	  			$(".screen05 .mouse .handImg").on("transitionend",function(){
	  				$(".screen05 .mouse .mouse02Img").show(100,function(){
	  					//沙发开始下落
	  					$(".screen05 .card .sofaImg").addClass('animate');
	  					$(".screen05 .card .orderImg").addClass('animate');
	  				});
	  			})
	  		}
	  });

});