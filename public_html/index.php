<?php
    switch($_REQUEST['M']) {
        case 'Default':
            switch($_REQUEST['A']) {
                default:
                    require("../lib/Default.php");
                    break;
            }
            break;
        default:
            require("../lib/Default.php");
            break;
    }
?>