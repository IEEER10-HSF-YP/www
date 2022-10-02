jQuery(function($){
    $('.slider').each(function(){
        $(this).slick({
            // 自動再生
            autoplay:true,
            // スライド切り替え時間
            autoplaySpeed:5000,
            // インジケータの表示
            dots:true,
        });
    });
});