<?php
    $a =  100;
    echo json_encode($a);

    require("../../public_html/template/header.tpl");
    require("../../public_html/template/Price.tpl");
    require("../../public_html/template/footer.tpl");

    echo $_out_html;
?>