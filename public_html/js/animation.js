$(function(){
console.log("jquery start");

    //トップページのアクセスのときだけフェードイン演出をつける
    var top_access = $("#top_access").text();
    if(top_access == 1) {
        $("#header_top").addClass("fadeIn_anime");
        $("#navbar ul li").addClass("fadeIn_anime");
    }

    //料金
    // $("#price").click(function() {
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