<?php

    $uri = $_SERVER['REQUEST_URI'];
    $uri = trim($uri, '/');
    
    include 'chess.php';
    
    $index = new Chess();
    $index->board();

    class Chess{

        function board(){
            
            $board = array(
                'row' => 8, 
                'col' => 8,
                'player1' => array(
                    '0' => 'rook-2.png', 
                    '1' => 'horse-2.png', 
                    '2' => 'bishop-2.png', 
                    '3' => 'king-2.png', 
                    '4' => 'queen-2.png', 
                    '5' => 'bishop-2.png', 
                    '6' => 'horse-2.png', 
                    '7' => 'rook-2.png', 
                    '8' => 'pawn-2.png', 
                    '9' => 'pawn-2.png', 
                    '10' => 'pawn-2.png', 
                    '11' => 'pawn-2.png', 
                    '12' => 'pawn-2.png', 
                    '13' => 'pawn-2.png', 
                    '14' => 'pawn-2.png', 
                    '15' => 'pawn-2.png', 
                ),
                'player2' => array(
                    '0' => 'rook-1.png', 
                    '1' => 'horse-1.png', 
                    '2' => 'bishop-1.png', 
                    '3' => 'queen-1.png', 
                    '4' => 'king-1.png', 
                    '5' => 'bishop-1.png', 
                    '6' => 'horse-1.png', 
                    '7' => 'rook-1.png', 
                    '8' => 'pawn-1.png', 
                    '9' => 'pawn-1.png', 
                    '10' => 'pawn-1.png', 
                    '11' => 'pawn-1.png', 
                    '12' => 'pawn-1.png', 
                    '13' => 'pawn-1.png', 
                    '14' => 'pawn-1.png', 
                    '15' => 'pawn-1.png', 
                ),
            );

            echo json_encode($board);
        }
    }
   
    
?>