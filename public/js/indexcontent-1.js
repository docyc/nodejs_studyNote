// JavaScript Document
(function($){

  $.fn.indexcontent = function(options) {  
  
	//set up default options 
	var defaults = { 
		//speed: 400, 
		hosturl:"",
		listchangecolor: "none",
		lineClass: "index_content_line",
		listcontentClass: "index_content",
		listcontentbackimg:"images_bg-2.jpg"/*tpa=http://www.blackant.cn/eng/Jquery/images/images_bg.jpg*/,
		mouseovercolor: "#00ccff",
		mouseoutcolor:"#fff",
		imgbackground:false,// 特例，当点上去有图标需要变背景的
		imgbackgroundClass:"",
		imgbackgroundpix:"0",
		imgmore:false, // 特例，当点上去有 more图标需要变背景的
		imgmoreClass:"",
		imgmorepix:"0"
		

	}; 
	var opts = $.extend({}, defaults, options); 	
	/////
	
	var $this = $(this);
	$this.mouseover(function(){
		
		if(opts.listchangecolor != "none")
		{
			$(this).css("color",opts.mouseovercolor);
		}

		if(opts.imgbackground)
		{
			//alert(opts.imgbackgroundClass);
			$(this).find("."+opts.imgbackgroundClass).css("background-position","0 "+opts.imgbackgroundpix)
		}
		if(opts.imgmore)
		{
			//alert(opts.imgbackgroundClass);
			$(this).find("."+opts.imgmoreClass).css("background-position","0 "+opts.imgmorepix)
		}
		//alert(opts.mouseovercolor);
		//alert(opts.listcontentClass);
		$(this).find("."+opts.lineClass).css("border-top-color",opts.mouseovercolor);
		$(this).find("."+opts.listcontentClass).css("background-image","none");
		$(this).find("."+opts.listcontentClass).css("background-color",opts.mouseovercolor);
		$(this).find("."+opts.listcontentClass).css("color",opts.mouseoutcolor);
	});
	
	$this.mouseout(function(){
		if(opts.listchangecolor != "none")
		{
			$(this).css("color","");
		}
		if(opts.imgbackground)
		{
			$(this).find("."+opts.imgbackgroundClass).css("background-position","0px 0px")
		}
		if(opts.imgmore)
		{
			//alert(opts.imgbackgroundClass);
			$(this).find("."+opts.imgmoreClass).css("background-position","0px 0px")
		}
		$(this).find("."+opts.lineClass).css("border-top-color","");
		$(this).find("."+opts.listcontentClass).css("background-image","url("+opts.hosturl+opts.listcontentbackimg+")");
		$(this).find("."+opts.listcontentClass).css("color","");
	});
	

	
  };
})(jQuery);