
jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(

function() {

     changeCheck(jQuery(this));

});


jQuery(".niceCheck").each(

function() {

     changeCheckStart(jQuery(this));

});

                                        });

function changeCheck(el)

{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -17px");
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");
		input.attr("checked", false)
	}

	var lastElem = $('.niceCheckDisabled');
	if(!lastElem.attr("checked")) {
		lastElem.css("background-position","0 -17px");
		lastElem.attr("checked", true)
	} else {
		lastElem.css("background-position","0 -17px");
		lastElem.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el)

{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -17px");
		}
     return true;
}