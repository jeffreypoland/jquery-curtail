/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Copyright 2014, Jeffrey Poland
 * Released under the MIT License.
 * http://jquery.org/license
 * Title: Curtail 
*/

$(function ( $ ) {

$.fn.curtail = function(options) {

  var settings = $.extend({
    // These are the defaults.
                character: 150,
                more:"Read More",
                less:"Read Less",
                start_height:55
                
            }, options );


  var captureStartHeight = settings.start_height;

    $(this).each(function(){
       var myCurrentNode = $(this).get(0).nodeName;
     //check if curtail is assigned to a div
        if(myCurrentNode === 'DIV'){
            $(this).wrap('<div class="curtail_container"></div>');
            $(this).append('<div class="curtail_hide"></div>');
            $(this).css('height', ''+settings.start_height+'px');
            $(this).parent().append('<div class="curtail_control"><a href="#" class="curtail_expand curtail_more">' + settings.more + '</a><a style= "display:none;" href="#" class="curtail_expand">' + settings.less + '</a></div>');

        }else{

        var par = $(this).text();

        if( par.length <= settings.character){

        }else{

        $(this).html(
            par.slice(0,settings.character)+'<span>... </span><a href="#" class="curtail_expand curtail_more">' + settings.more + '</a>'+
            '<span style="display:none;">'+ par.slice(settings.character,par.length)+' <a href="#" class="curtail_expand">' + settings.less + '</a></span>'
        );
       

        }

    }//end else
     $(this).addClass('curtail_base');
    });//end each

$('.curtail_expand').unbind('click').click(function(event) {
    var thisParent = $(this).parent();
    event.preventDefault();
   //check if this has parent div called curtail_control
    if (thisParent.hasClass('curtail_control')) {

        if ($(this).hasClass('curtail_more')) {

            $(this).parent().prev().css('height', 'auto');
            $(this).css('display', 'none');
            $(this).next().css('display', 'block');
            $(this).parent().parent().find('.curtail_hide').css('height', '0px');

        } else {

            $(this).parent().prev().css('height', '' + captureStartHeight + 'px');
            $(this).parent().parent().find('.curtail_hide').removeAttr('style');
            $(this).css('display', 'none');
            $(this).prev().removeAttr('style');
        }
    } else {

        if ($(this).hasClass('curtail_more')) {

            $(this).hide().prev().hide();
            $(this).next().fadeIn();

        } else {

            $(this).parent().fadeOut().prev().show().prev().show();
        }
    }
});//end click


};
$(".curtail").curtail();

}( window.jQuery ));