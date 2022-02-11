
$(document).ready(function(){
    $("#slider").on("input change", (e) => {
      const beforeImgWidth = e.target.value;
      $('.before-img').css('width', `${beforeImgWidth}%`)
      $('.compare-btn').css('left', `calc(${beforeImgWidth}% - 18px)`)
    });
});


