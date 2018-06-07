<?php
    require("../public_html/template/header.tpl");
    require("../public_html/template/Default.tpl");
    require("../public_html/template/footer.tpl");

    echo $_out_html;
    // file_put_contents("./debug.txt", $_out_html)
?>