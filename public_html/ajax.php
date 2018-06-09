<?php
    switch($_REQUEST['M']) {
        case 'price':
            switch($_REQUEST['A']) {
                case 'default':
                    require("../lib/ajax/price_default.php");
                    break;
                // default:
                //     // require("../lib/Default.php");
                //     break;
            }
            break;
        // default:
        //     // require("../lib/Default.php");
        //     break;
    }
?>