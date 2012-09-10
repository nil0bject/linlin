$(document).ready(function() {
  $(".album .thumbnail").hover(
    function () {
      //create dividers
      var numphotos = $(this).parent().attr('numphotos');
      var width = $(this).find('img').width()/numphotos;
      var height = $(this).height();
      console.log('style="height:'+height+'px;width:'+width+'px;');
      for (i=0; i<numphotos; i++) {
        $(this).append('<div id="'+i+'" class="divider" onclick="" onmouseover="divider_hover($(this));" style="float:left;position:absolute; top:'+$(this).position().top+'px; left:'+(width*i+$(this).position().left)+'px; height:'+height+'px;width:'+width+'px;"></div>');
      }
    }, 
    function () {
      $(this).find(".divider").remove();
    }
  );
  
  

});

function divider_hover(divider) {
    var divider_id = divider.attr('id');
    var album_thumb = divider.parent().find('img');
    var numphotos = divider.parent().parent().attr('numphotos');
    var thumbnails = divider.parent().attr('data-thumbnails').split(',');
    console.log(divider_id);
    album_thumb.attr('src', thumbnails[divider_id]);
    album_thumb.css('top', (divider.height()/2)-(album_thumb.height()/2));
  }