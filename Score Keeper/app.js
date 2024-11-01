const p1butt = document.querySelector('#p1Button');
const p2butt = document.querySelector('#p2Button');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const resetButton = document.querySelector('#reset');

const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;

let isGameOver = false;

let winningScore = 3;

p1butt.addEventListener('click',function(){
    
    if(!isGameOver){ 
        p1Score++;
        
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p2butt.disabled = true;
            p1butt.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2butt.addEventListener('click',function(){
    
    if(!isGameOver){
        p2Score++;
        
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p2butt.disabled = true;
            p1butt.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset);

function reset(){
    
    isGameOver = false;
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p2butt.disabled = false;
    p1butt.disabled = false;
}