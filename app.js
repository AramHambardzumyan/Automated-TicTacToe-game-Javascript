let boxOne= document.getElementById('boxOne')
let boxTwo = document.getElementById('boxTwo')
let boxTree = document.getElementById('boxTree')
let boxfour = document.getElementById('boxfour')
let boxFive = document.getElementById('boxFive')
let boxSix = document.getElementById('boxSix')
let boxSeven = document.getElementById('boxSeven')
let boxEight = document.getElementById('boxEight')
let boxNine = document.getElementById('boxNine')
const display = document.getElementById('display')
const restart = document.getElementById('restart-button')
let isFin = false
let gameTime = false
let clickFlag = false

let array = [
    {
    selected : false, 
    div : boxOne
    },
    {
    selected : false, 
    div : boxTwo
    },
    {
    selected : false, 
    div : boxTree
    },
    {
    selected : false, 
    div : boxFour
    },
    {
    selected : false, 
    div : boxFive
    },
    {
    selected : false, 
    div : boxSix
    },
    {
    selected : false, 
    div : boxSeven
    },
    {
    selected : false, 
    div : boxEight
    },
    {
    selected : false, 
    div : boxNine
    }
]



array.map((el) => {
    el.div.addEventListener('click' , ()=> {
        if(isFin === false){      
            if(el.div.innerHTML === ''){
                if(clickFlag === false){
                    el.div.innerHTML = '<img src="./image/x.png" alt="x" class="image-x"> '
                    el.selected = true
                    foo()
                    clickFlag = true
                    foo2()
                }
            }
        }
    })
})



let foo2 = (el) => {
    if(isFin === false){    
        setTimeout(()=>{
            if(clickFlag === true){
                if (array[0].div.innerHTML === array[1].div.innerHTML && array[0].selected === true && array[2].selected === false){
                        array[2].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[2].selected = true

                } else if (array[3].div.innerHTML === array[4].div.innerHTML && array[3].selected === true && array[5].selected === false){
                        array[5].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[5].selected = true   

                } else if (array[1].div.innerHTML === array[2].div.innerHTML && array[1].selected === true && array[0].selected === false){
                        array[0].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[0].selected = true 

                }else if (array[4].div.innerHTML === array[5].div.innerHTML && array[4].selected === true && array[3].selected === false){
                        array[3].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[3].selected = true 

                }else if (array[6].div.innerHTML === array[7].div.innerHTML && array[6].selected=== true && array[8].selected === false){
                        array[8].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[8].selected = true 

                }else if (array[7].div.innerHTML === array[8].div.innerHTML && array[7].selected === true && array[6].selected === false){
                        array[6].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[6].selected = true  

                } else if (array[0].div.innerHTML === array[3].div.innerHTML && array[0].selected === true && array[6].selected === false){
                        array[6].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[6].selected = true 

                }else if (array[3].div.innerHTML === array[6].div.innerHTML && array[3].selected === true && array[0].selected === false){
                        array[0].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[0].selected = true

                } else if (array[1].div.innerHTML === array[4].div.innerHTML && array[1].selected === true && array[7].selected === false){
                        array[7].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[7].selected = true

                } else if (array[4].div.innerHTML === array[7].div.innerHTML && array[4].selected === true && array[1].selected === false){
                        array[1].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[1].selected = true

                } else if (array[2].div.innerHTML === array[5].div.innerHTML && array[2].selected === true && array[8].selected === false){
                        array[8].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[8].selected = true

                } else if (array[5].div.innerHTML === array[8].div.innerHTML && array[5].selected === true && array[2].selected === false){
                        array[2].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[2].selected = true

                } else if( array[4].div.innerHTML === array[6].div.innerHTML && array[4].selected === true && array[2].selected === false){
                        array[2].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[2].selected = true
                
                } else if (array[2].div.innerHTML === array[4].div.innerHTML && array[2].selected === true &&   array[6].selected === false){
                        array[6].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[6].selected = true

                } else if (array[0].div.innerHTML === array[4].div.innerHTML && array[0].selected === true && array[8].selected === false){
                        array[8].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[8].selected = true
                
                } else if (array[4].div.innerHTML === array[8].div.innerHTML && array[4].selected === true && array[0].selected === false){
                        array[0].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[0].selected = true
                
                } else if (array[0].div.innerHTML === array[2].div.innerHTML && array[0].selected === true && array[1].selected === false){
                        array[1].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[1].selected = true
                
                } else if (array[3].div.innerHTML === array[5].div.innerHTML && array[3].selected === true && array[4].selected === false){
                        array[4].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[4].selected = true
                
                }  else if (array[6].div.innerHTML === array[8].div.innerHTML && array[6].selected === true && array[7].selected === false){
                        array[7].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[7].selected = true
                
                } else if (array[0].div.innerHTML === array[6].div.innerHTML && array[0].selected === true && array[3].selected === false){
                        array[3].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[3].selected = true
                
                } else if (array[1].div.innerHTML === array[7].div.innerHTML && array[1].selected === true && array[4].selected === false){
                        array[4].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[4].selected = true
                
                } else if (array[2].div.innerHTML === array[8].div.innerHTML && array[2].selected === true && array[5].selected === false){
                        array[5].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[5].selected = true
                    
                } else if (array[0].div.innerHTML === array[8].div.innerHTML && array[0].selected === true && array[4].selected === false){
                        array[4].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[4].selected = true
                
                } else if (array[2].div.innerHTML === array[6].div.innerHTML && array[2].selected === true && array[4].selected === false){
                        array[4].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[4].selected = true
                
                }else if(array[4].selected === false ){
                        array[4].div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        array[4].selected = true

                } else if(array[4].selected === true){
                    let filteredArray = array.filter(el => el.selected === false)
                    if(filteredArray.length === 0){
                        gameTime = true
                        display.innerHTML = `don't have a winner`
                    } else {
                        let randomNum
                        randomNum = filteredArray[Math.floor(Math.random() * filteredArray.length)]
                        el = randomNum
                        el.div.innerHTML = '<img src="./image/o.png" alt="o" class="image-o"> '
                        el.selected = true
                    }  
                }
                    clickFlag = false
                    foo()
        }    
        },1500)
    }
}

function foo(){    
    if(array[0].div.innerHTML === array[1].div.innerHTML && array[0].div.innerHTML === array[2].div.innerHTML && array[0].selected ===true){
        if( array[0].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[0].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[1].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[2].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
    if(array[3].div.innerHTML === array[4].div.innerHTML && array[3].div.innerHTML === array[5].div.innerHTML && array[3].selected ===true){
        if( array[3].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[3].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[4].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[5].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
    if(array[6].div.innerHTML === array[7].div.innerHTML && array[6].div.innerHTML === array[8].div.innerHTML && array[6].selected ===true){
        if( array[6].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[6].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[7].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[8].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
    if(array[0].div.innerHTML === array[3].div.innerHTML && array[0].div.innerHTML === array[6].div.innerHTML && array[0].selected ===true){
        if( array[0].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[0].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[3].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[6].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
    if(array[1].div.innerHTML === array[4].div.innerHTML && array[1].div.innerHTML === array[7].div.innerHTML && array[1].selected ===true){
        if( array[1].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[1].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[4].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[7].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
    if(array[2].div.innerHTML === array[5].div.innerHTML && array[2].div.innerHTML === array[8].div.innerHTML && array[2].selected ===true){
        if( array[2].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[2].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[5].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[8].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
    if(array[0].div.innerHTML === array[4].div.innerHTML && array[0].div.innerHTML === array[8].div.innerHTML && array[0].selected ===true){
        if( array[0].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[0].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[4].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[8].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
    if(array[2].div.innerHTML === array[4].div.innerHTML && array[2].div.innerHTML === array[6].div.innerHTML && array[2].selected ===true){
        if( array[2].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
            display.innerHTML = ' Winner X'
        } else {
            display.innerHTML = ' Winner 0'
        }
        array[2].div.innerHTML = '<img src="./image/tic.png" alt="win" class="tictactoe"></img>'
        array[4].div.innerHTML = '<img src="./image/tac.png" alt="win" class="tictactoe"></img>'
        array[6].div.innerHTML = '<img src="./image/toe.png" alt="win" class="tictactoe"></img>' 
        isFin = true
    }
}

restart.addEventListener('click' , () => {
    window.location.reload()
})

