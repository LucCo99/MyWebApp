<?php
// Check if the mail function is enabled
if (function_exists('mail')) {
    echo "The mail function is enabled in PHP.";
} else {
    echo "The mail function is not enabled in PHP.";
}
?>