$(document).ready(function () {
        
    function async() {
        $.ajax({
            url: "https://chess-board-ian.herokuapp.com/",
            type: "GET",
            contentType: false,
            processData: false,
            success: function (data) {

                var json = JSON.parse(data);

                var html = '';

                for (let row = 0; row < json.row; row++) {

                    html+= '<div class="game-row">';
                    for (let col = 0; col < json.col; col++) {
                        if( (col+row+2) % 2 == 0){
                            if(row==0){
                                html+= '<div class="game-col non-shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player1[col]+');">'
                                        +'</div>'
                                    +'</div>';
                            }
                            if(row==1){
                                html+= '<div class="game-col non-shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player1[col+8]+');">'
                                        +'</div>'
                                    +'</div>';
                            }
                            if(row==6){
                                html+= '<div class="game-col non-shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player2[col+8]+');">'
                                        +'</div>'
                                    +'</div>';
                            }
                            if(row==7){
                                html+= '<div class="game-col non-shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player2[col]+');">'
                                        +'</div>'
                                    +'</div>';
                            }
                            if(row==2||row==3||row==4||row==5){
                                html+= '<div class="game-col non-shaded"></div>';
                            }
                        }
                        else{
                            if(row==0){
                                html+= '<div class="game-col shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player1[col]+');">'
                                        +'</div>'
                                    +'</div>';
                                        // +'<div class="img-container" style="background-image: url(assets/img/'+json.player1[col]+');">'
                                        // +'</div>'
                            }
                            if(row==1){
                                html+= '<div class="game-col shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player1[col+8]+');">'
                                        +'</div>'
                                    +'</div>';
                            }
                            if(row==6){
                                html+= '<div class="game-col shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player2[col+8]+');">'
                                        +'</div>'
                                    +'</div>';
                            }
                            if(row==7){
                                html+= '<div class="game-col shaded">'
                                        +'<div class="img-container" style="background-image: url(assets/img/'+json.player2[col]+');">'
                                        +'</div>'
                                    +'</div>';
                            }
                            if(row==2||row==3||row==4||row==5){
                                html+= '<div class="game-col shaded"></div>';
                            }
                            
                        }
                    }
                    html+= '</div>';
                }

                $('.game-board').html(html);
                
            }
        });
    }

    async();

});