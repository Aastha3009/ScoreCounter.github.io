const p1=document.querySelector('#p1button');
const p2=document.querySelector('#p2button');
const reset=document.querySelector('#reset')
const player1=document.querySelector('#player1');
const player2=document.querySelector('#player2');
const winningScoreInput=document.querySelector('#WinningScore');

let p1score=0;
let p2score=0;
let winningScore=3;
let isgameover=false;


p1.addEventListener('click',function (e){
    
    if(!isgameover)
    {
        p1score+=1;
        if(p1score===winningScore)
        {
            isgameover=true;
            player1.classList.add('has-text-success');
            player2.classList.add('has-text-danger')
            p1.disabled=true;
            p2.disabled=true;

        }
        player1.innerText=p1score;
    }
})



p2.addEventListener('click',function (e){
    if(!isgameover)
    {
        p2score+=1;
        if(p2score===winningScore)
        {
            isgameover=true;
            player2.classList.add('has-text-success');
            player1.classList.add('has-text-danger')
            p1.disabled=true;
            p2.disabled=true;
        }
        player2.innerText=p2score;
    }
})



winningScoreInput.addEventListener('change', function () {
    winningScore=parseInt(this.value) 
    resetscore();
})




reset.addEventListener('click',resetscore)

function resetscore(){
p1score=0;
p2score=0;
isgameover=false;
player1.innerText=p1score;
player2.innerText=p2score;
player1.classList.remove('has-text-success','has-text-danger');
player2.classList.remove('has-text-success','has-text-danger');
p1.disabled=false;
p2.disabled=false;
}

