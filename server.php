<?php

    $uri = $_SERVER['REQUEST_URI'];
    $uri = trim($uri, '/');
    
    include 'chess.php';
    
    $index = new Chess();
    $index->board();
   
    
?>