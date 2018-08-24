// JavaScript Document
(function($){

  $.fn.indexcontent = function(options) {  
  
	//set up default options 
	var defaults = { 
		//speed: 400, 
		hosturl:"",
		listchangecolor: "none",
		lineClass: "index_content_line",
		titleClass:"org_list_title",
		listcontentClass: "index_content",
		listcontentbackimg:"images_bg-1.jpg"/*tpa=http://www.blackant.cn/Jquery/images/images_bg.jpg*/,
		mouseovercolor: "#00ccff",
		mouseoutcolor:"#fff",
		imgbackground:false,// ������������ȥ��ͼ����Ҫ�䱳����
		imgbackgroundClass:"",
		imgbackgroundpix:"0",
		imgmore:false, // ������������ȥ�� moreͼ����Ҫ�䱳����
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
		$(this).find("."+opts.listcontentBgClass).css("background-image","none");
		$(this).find("."+opts.listcontentBgClass).css("background-color",opts.mouseovercolor);
		$(this).find("."+opts.listcontentClass).css("color",opts.mouseoutcolor);
		$(this).find("."+opts.titleClass).css("color",opts.mouseovercolor);
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
		$(this).find("."+opts.listcontentBgClass).css("background-image","url("+opts.hosturl+opts.listcontentbackimg+")");
		$(this).find("."+opts.listcontentClass).css("color","");
		$(this).find("."+opts.titleClass).css("color","");
	});
	

	
  };
})(jQuery);