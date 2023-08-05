import Tile from '../Tile/Tile';

import './Chessboard.css';

const verticalAxis = ["1","2","3","4","5","6","7","8"];
const horizontalAxis =["a","b","c","d","e","f","g","h"];

interface Piece{
    image: string;
    x:number;
    y:number;
}
const pieces: Piece[]=[];

for(let i=0;i<2;i++){
    let color;
    let ypos;
    (i===0)?color='b':color='w';
    (color=='b')?ypos=7:ypos=0;
    pieces.push({image:`assets/images/${color}R.svg`, x:0 ,y:ypos});
    pieces.push({image:`assets/images/${color}R.svg`, x:7 ,y:ypos});    
    pieces.push({image:`assets/images/${color}N.svg`, x:1 ,y:ypos});
    pieces.push({image:`assets/images/${color}N.svg`, x:6 ,y:ypos});
    pieces.push({image:`assets/images/${color}B.svg`, x:2 ,y:ypos});
    pieces.push({image:`assets/images/${color}B.svg`, x:5 ,y:ypos});
    pieces.push({image:`assets/images/${color}Q.svg`, x:3 ,y:ypos});
    pieces.push({image:`assets/images/${color}K.svg`, x:4 ,y:ypos});
}


for(let i=0;i<8;i++){
    pieces.push({image:"assets/images/bP.svg", x:i ,y:6});
}
for(let i=0;i<8;i++){
    pieces.push({image:"assets/images/wP.svg", x:i ,y:1});
}



export default function Chessboard (){
    let board=[];
    for(let i=verticalAxis.length-1;i>=0;i--){
        for(let j=0;j<horizontalAxis.length;j++){
            const flag=j+i+2;
            let image=undefined;

            pieces.forEach((p) => {
                if(p.x===j && p.y===i)
                    image=p.image ;              
            });
            // console.log(image);
            board.push(<Tile key={`${j},${i}`} image={image} number={flag} />)
        }
    }
    return <div id="chessboard">{board}</div>
}