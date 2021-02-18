var jet = document.getElementById("jet");
var board = document.getElementById("board");

window.addEventListener("keydown",(e) =>{
var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
    if (e.key =="ArrowLeft" && left > 0 ) {
        jet.style.left= left -10 + "px";
    }
    else if(e.key == "ArrowRight" && left <= 460){
        jet.style.left= left + 10 + "px";
    }
    if( e.keyCode==32){
        var bullet = document.createElement("div");
        bullet.classList.add("bullet");
        board.appendChild(bullet);

        var movebullet = setInterval(()=>{
            var rocket = document.getElementsByClassName("rocket");
            for(var i=0;i<rocket.length; i++){
                var rock = rocket[i];
                var rockbound = rock.getBoundingClientRect();
                var bulletbound = bullet.getBoundingClientRect(); 
                if(
                    bulletbound.left >= rockbound.left &&
                    bulletbound.right <= rockbound.right &&
                    bulletbound.top <= rockbound.top &&
                    bulletbound.bottom <= rockbound.bottom
                    ){
                  rock.parentElement.removeChild(rock);       
                }
            } 
            var bulletbutton = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
            if(bulletbound >=600){
                clearInterval(movebullet);
            }
            bullet.style.left = left + "px";
            bullet.style.bottom =bulletbutton + 3 + "px";
        });
    } 
});
var moveAleansship = setInterval(()=>{
    var rocks = document.getElementsByClassName("rocket");
    if(rocks!=undefined){
        for(var i=0; i<rocks.length;i++){
            var rock = rocks[i];
            var rocktop = parseInt(window.getComputedStyle(rock).getPropertyValue("top"));
            if(rocktop >=560){
                alert("Game Over");
                clearInterval(moveAleansship);

                window.location.reload();
            }
            rock.style.top = rocktop + 20 + "px";
        }
    }
},350);
var genarateAleansship = setInterval(() => {
    var rock = document.createElement("div");
    rock.classList.add("rocket");
    var rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    rock.style.left = Math.floor(Math.random()*450) + "px";
    board.appendChild(rock);
},2000);
