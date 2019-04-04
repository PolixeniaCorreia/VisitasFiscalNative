<?php

$books = [
        ["title" => "Romeo and Juliet", "genre" => "tragedy", "noofpages"=> "100"],
        ["title" => "Hamlet", "genre" => "tragedy", "noofpages"=> "200"],
        ["title" => "A Midsummer Night's Dream", "genre" => "comedy", "noofpages"=> "50"],
        ["title" => "Mcabeth", "genre" => "tragedy", "noofpages"=> "180"],
        ["title" => "Merchant of Venice", "genre" => "comedy", "noofpages"=> "40"],
    ];
    
    $books_by_genre = [];
    foreach($books as $key => $book) {
        if(!isset($books_by_genre[$book['genre']])) {
            $books_by_genre[$book['genre']] = [];
        }
        array_push($books_by_genre[$book['genre']], $book);
    }

    echo json_encode($books_by_genre);
    // var_dump($books_by_genre);