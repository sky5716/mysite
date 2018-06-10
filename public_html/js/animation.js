$(function(){
console.log("jquery start");

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
    
    function show_page(id) {
        $(".show_page").hide();
        $("#"+id).show();
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