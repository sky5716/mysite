<?php
    switch($_REQUEST['M']) {
        case 'Default':
            switch($_REQUEST['A']) {
                default:
                    require("../lib/Default.php");
                    break;
            }
            break;
        case 'Price':
            switch($_REQUEST['A']) {
                case 'Default':
                    require("../lib/Price.php");
                    break;
                default:
                    require("../lib/Price.php");
                    break;
            }
            break;
        default:
            require("../lib/Default.php");
            break;
    }
?>