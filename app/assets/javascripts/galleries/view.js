var thumbnails = [];

$(document).ready(function() {
  //position album divs
  $(".album .thumbnail").hover(
    function () {
      var preloads = $(this).attr('data-thumbnails').split(',');

      for(var x=0;x<preloads.length;x++) {
          thumbnails[x] = new Image();
          thumbnails[x].src = preloads[x];
      }

      //create dividers
      var numphotos = $(this).parent().attr('numphotos');
      var width = $(this).find('img').width()/numphotos;
      var height = $(this).height();
      console.log('style="height:'+height+'px;width:'+width+'px;');
      for (i=0; i<numphotos; i++) {
        $(this).append('<div id="'+i+'" class="divider" onclick="window.location=$(this).siblings(\'.border\').children(\'a\').attr(\'href\');" onmouseover="divider_hover($(this));" style="float:left;position:absolute; top:'+$(this).position().top+'px; left:'+(width*i+$(this).position().left)+'px; height:'+height+'px;width:'+width+'px;"></div>');
      }
    },
    function () {
      $(this).find(".divider").remove();
    }
  );



});

function divider_hover(divider) {
    var divider_id = divider.attr('id');
    var album_border = divider.siblings('.border');
    var album_thumb = album_border.find('img');
    var numphotos = divider.parent().parent().attr('numphotos');
    album_thumb.stop(true, true).fadeTo(0, 0.6);
    album_thumb.attr('src', thumbnails[divider_id].src);
    album_border.css('top', (divider.height()/2)-(album_thumb.height()/2));
    album_thumb.fadeTo(800, 1);
  }
