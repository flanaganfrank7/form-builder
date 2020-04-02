var systemStack = "-apple-system, BlinkMacSystemFont, Arial";

// Switch Class
$("#inputStylesButton").on("click", function() {
  if ($(".fs-text-input").attr("status") === "underline") {
    $(".fs-text-input").addClass("outline");
    $(".outline").removeClass("underline");
    $(".outline").removeClass("dark-underline");
    $(".fs-text-input").attr("status", "outline");
  } else {
    $(".fs-text-input").addClass("underline");
    $(".underline").removeClass("outline");
    $(".underline").removeClass("dark-outline");
    $(".fs-text-input").attr("status", "underline");
  }
});

$("#tileStylesButton").on("click", function() {
  if ($("#non-tiled").css("visibility") === "visible") {
    $("#non-tiled").hide();
    $("#tiled").show();
    $("#non-tiled").css("visibility", "hidden");
  } else {
    $("#non-tiled").show();
    $("#tiled").hide();
    $("#non-tiled").css("visibility", "visible");
  }
});

$("#paddingButton").on("click", function() {
  if ($("#paddingButton").attr("value") == "48") {
    $("#paddingButton").attr("value", "32");
    $(".tile").css("padding", "2rem");
    $(".half").css("width", "17.95rem");
    $(".tile-header").css("padding", "21px 0rem 0rem 2rem");
  } else {
    $("#paddingButton").attr("value", "48");
    $(".tile").css("padding", "3rem");
    $(".half").css("width", "16.95rem");
    $(".tile-header").css("padding", "21px 0rem 0rem 3rem");
  }
});

$("#labelButton").on("click", function() {
  if ($("#labelButton").attr("value") == "14") {
    $("#labelButton").attr("value", "12");
    $("label").css("font-size", ".75rem");
  } else {
    $("#labelButton").attr("value", "14");
    $("label").css("font-size", ".875rem");
  }
});

$("#selectFont").on("change", function() {
  if (this.value === "System Fonts") {
    $("html").css("font-family", systemStack);
    $(".fs-text-input").css("font-family", systemStack);
  }
  if (this.value === "Sometype Mono") {
    $("html").css("font-family", "Sometype Mono");
    $(".fs-text-input").css("font-family", "Sometype Mono");
  }
  if (this.value === "Authentic Sans") {
    $("html").css("font-family", "Authentic Sans");
    $(".fs-text-input").css("font-family", "Authentic Sans");
  }
  if (this.value === "Combination") {
    $("html").css("font-family", "Authentic Sans");
    $(".fs-text-input").css("font-family", "Sometype Mono");
  }
});

// $('#schemeButton').on('click',function(){
// 	if($('body').attr('c-mode')==="light"){

// 	}
// 	else{
// 		$('body').attr('c-mode','light')

// 	}
// })

$("#heightButton").on("click", function() {
  if ($("body").attr("ht") == "32") {
    $("body").attr("ht", "40");
    $(".fs-text-input").css("height", "40px");
  } else {
    $("body").attr("ht", "32");
    $(".fs-text-input").css("height", "32px");
  }
});

// $('#schemeButton').on('click',function(){
// 	if($('body').attr('c-mode')==="light"){

// 		$('.tile').addClass('dark-tile')
// 		$('.tile-header').addClass('dark-tile-header')
// 		if($('.fs-text-input').attr('status')==='underline'){
// 			$('.fs-text-input').addClass('dark-underline')
// 			// $('.underline').removeClass('dark-outline')
// 			// $('.fs-text-input').attr('status', 'underline');
// 			$('body').addClass('dark-body')
// 			$('body').attr('c-mode','dark')
// 		}
// 		else{
// 			$('.fs-text-input').addClass('dark-outline')
// 			// $('.outline').removeClass('dark-underline')
// 			// $('.fs-text-input').attr('status', 'outline');
// 			$('body').addClass('dark-body')
// 			$('body').attr('c-mode','dark')
// 		}

// 	}
// 	else{
// 		$('body').attr('c-mode','light')
// 		$('.tile').removeClass('dark-tile')
// 		$('.tile-header').removeClass('dark-tile-header')
// 		if($('.fs-text-input').attr('status')==='outline'){
// 			$('.outline').removeClass('dark-outline')
// 			// $('.fs-text-input').attr('status', 'underline');
// 		}
// 		else{
// 			$('.underline').removeClass('dark-underline')
// 			// $('.fs-text-input').attr('status', 'outline');
// 		}
// 		$('body').removeClass('dark-body')
// 	}
// })

// const styles = {
// 	borderWidth:["0px 0px 1px 0px", "1px 1px 1px 1px", "0"],
// 	backgroundColor:['none','#F4F4F4'],
// 	boxShadow: ['0px 10px 15px rgba(0, 0, 0, 0.1)', 'none'],
// 	height:['32px','40px']
// }

// let borderWidths = styles.borderWidth
// let bg = styles.backgroundColor
// let box = styles.boxShadow
// let heights = styles.height

// const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
// const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

// let output = cartesian(borderWidths,bg,box, heights);
// console.log(output)

// new Vue({
// 	el:"#ffForms",
// 	data: {output}
// })
