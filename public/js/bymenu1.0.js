(function($){

  $.fn.bymenu = function(options) {

	//set up default options
	var defaults = {
		speed: 400, //the class name for your drop down
		dropDownWidth: 'auto',	//the default width of drop down elements
		slideDownEasing: 'easeInOutCirc', //easing method for slideDown
		slideUpEasing: 'easeInOutCirc', //easing method for slideUp
		contentwidth: 400,
		alpha:0.5,
		shadowbackcolor: "#333333",
		menubgcolor: ""

	};

	var opts = $.extend({}, defaults, options);
	//alert(opts.menubgcolor)	;
	var docw = $(document).width();
	var doch = $(document).height();
	var $prithis = $(this);
	var $parent = $(this).parent();
	//alert($parent.attr("id"));
	$parent.append('<div class="by_menu_shadow"></div>');
	$parent.find(".by_menu_shadow").css("width",docw);
	$parent.find(".by_menu_shadow").css("height",doch);
	$parent.find(".by_menu_shadow").css("left",0);
	$parent.find(".by_menu_shadow").css("top",0);
	$parent.find(".by_menu_shadow").css("display","none");
	$parent.find(".by_menu_shadow").css("z-index",50);
	$parent.find(".by_menu_shadow").css("background-color",opts.shadowbackcolor);
	$parent.find(".by_menu_shadow").css("position","absolute");

	var arraycolor = opts.menubgcolor.split(","); //获取每个菜单不同的颜色
	  //alert( $(this).find(".by_menu_shadow").width());
	  /*
	$prithis.mouseover(function(){
		  $(".by_menu_shadow").fadeTo(opts.speed, 0.7);
		  $prithis.css("position","absolute");
		  $prithis.css("z-index",100);
		  //alert($prithis.attr("id"))
		  });
		  $prithis.mouseout(function(){
			$(".by_menu_shadow").fadeOut(0);
		  });
		  */
    return this.each(function() {
	  var $this = $(this);
	  //alert($this.attr("id"));



	  //alert($this.find("li").attr("class"));
	 // var cccc = $this.find("li").attr("class");
	  //cccc += cccc;
	//  var uloffset = $this.offset();
	//  var ulleft = uloffset.left;
	//  alert(ulleft);
	 var ulwidth = $this.width(); /// 下拉部分宽度
	 // alert(ulwidth);
	 // $this.find('ul').css("left",ulleft);

	  //alert($this.find('ul').css("width"));
	  var buttonWidth = $this.find('ul').parent().width() + 'px';
	  var buttonHeight = $this.find('ul').parent().height() + 'px';
	  if(opts.orientation == 'horizontal') {
		$this.find('ul').css('left', '0px').css('top', buttonHeight);
	  }
	  //if(opts.orientation == 'vertical') {
		//$this.find('ul').css('left', buttonWidth).css('top', '0px');
	 // }
	// $this.find('ul').css("width",opts.contentwidth); //这里使用自定义宽度不使用固定宽度
	  $this.find('ul').css("width",ulwidth);
	  $this.find('li').css("z-index",100);
	 // $this.find('li').css("background-repeat","#FDB5B7");

	  $this.find('li').hoverIntent(getDropDown, hideDropDown);


	 // alert($(this).text())

	  function getDropDown(){
		activeNav = $(this);

		showDropDown();
	}

	function showDropDown(){
		if(opts.menubgcolor != "")
			{
				//arraycolor(opts.menubgcolor);
				//alert(arraycolor);
				var nowliid = activeNav.attr("id");
				//alert(nowliid);

				if(nowliid > 1)
				{
					var pre_width = 0;
					for(var fi=1;fi<nowliid;fi++)
					{
						pre_width = pre_width + $this.find("#"+fi).width();
					}
					//alert(pre_width);
					activeNav.find('ul').css("left","-"+pre_width+"px");
					//alert(activeNav.find('ul').text());
					//alert($activeNav.find("ul").text());
					//alert(pre_width);
				}
				//alert(arraycolor[nowliid-1]);
				var now_a_class_id = "menu_title_"+nowliid;
				activeNav.find('.'+now_a_class_id).find("a").css("color","#ffffff");
				activeNav.css("background-color",arraycolor[nowliid-1]);

			}

		//alert(opts.slideDownDuration);
		if(activeNav.find('ul').text() != "")
		{
			activeNav.find('ul').slideDown({duration:opts.slideDownDuration, easing:opts.slideDownEasing});
			activeNav.find('.menu_jiantou').css("color","#ffffff");
			activeNav.find('.menu_jiantou').css("background-image","url(../public/images/menu_list_li.png)");
			activeNav.find('.menu_jiantou').css("background-position","right");
			activeNav.find('.menu_jiantou').css("background-repeat","no-repeat");

		}
		$(".by_menu_shadow").fadeTo(opts.speed, opts.alpha);



		//alert()
	}

	function hideDropDown(){
		activeNav.find('ul').slideUp({duration:opts.slideUpDuration, easing:opts.slideUpEasing});
		$(".by_menu_shadow").fadeOut(0);//hides the current dropdown
		activeNav.find('.menu_jiantou').css("background-image","none");
		var nowliid = activeNav.attr("id");
			//alert(nowliid);
			//alert(arraycolor[nowliid-1]);
		var now_a_class_id = "menu_title_"+nowliid;
		activeNav.find('.'+now_a_class_id).find("a").css("color","");
		activeNav.css("background-color","");
		//alert(activeNav.attr("alt"))
	}


	  //alert(cccc);
    });



  };
})(jQuery);