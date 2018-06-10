$(function(){
console.log("jquery start");

    //初回アクセス時
    $(document).ready(function() {
        show_page("page_default");
    });

    //それぞれのページにアクセス
    $("#nav_default").click(function() {
        show_page("page_default");
    });
    $("#nav_price").click(function() {
        show_page("page_price");
    });
    $("#nav_attention").click(function() {
        show_page("page_attention");
    });
    $("#nav_gamelist").click(function() {
        show_page("page_gamelist");
    });
    $("#nav_access").click(function() {
        show_page("page_access");
    });
    
    //それぞれのアイコンを少し上にずらす
    hover_nav_move("nav_default");
    hover_nav_move("nav_price");
    hover_nav_move("nav_attention");
    hover_nav_move("nav_gamelist");
    hover_nav_move("nav_access");

    //ページを開く
    function show_page(id) {
        $(".show_page").hide();
        $("#"+id).show();
    }
    
    //ナビゲーションにマウスを乗せたとき、アイコンを少し上にずらす
    function hover_nav_move(id) {
        $("#"+id).hover(
            function() {
                $("#"+id).css({
                    position: "relative",
                    top: "-3px"
                });
            },
            function() {
                $("#"+id).css({
                    position: "relative",
                    top: "0px"
                });
            }
        );
    }

    //ajaxテスト
    // $("#nav_price").click(function() {
    //     $.ajax({
    //         url:'./ajax.php',
    //         data: {
    //             'M':'price',
    //             'A':'default'
    //         },
    //         success: function(json_data){
    //             console.log("ajax check");
    //             console.log(json_data);
    //         },
    //         dataType: 'json'
    //     })
    // });
});