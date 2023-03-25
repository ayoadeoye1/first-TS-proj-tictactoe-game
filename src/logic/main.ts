import { Request, Response } from "express";
    
const Main = async( req: Request, res: Response ): Promise<Response> => {
    const body = req.body;
    const x1 = body?.x1;
    const x2 = body?.x2;
    const x3 = body?.x3;
    const x4 = body?.x4;
    const x5 = body?.x5;
    const x6 = body?.x6;
    const x7 = body?.x7;
    const x8 = body?.x8;
    const x9 = body?.x9;

    
    try {
        // conditions for player X
        if((x1 === 'X') && (x2 === 'X') && (x3 === 'X')){
            return res.status(200).json('player X won!');
        }else if((x1 === 'X') && (x4 === 'X') && (x7 === 'X')){
            return res.status(200).json('player X won!');
        }else if((x7 === 'X') && (x8 === 'X') && (x9 === 'X')){
            return res.status(200).json('player X won!');
        }else if((x3 === 'X') && (x6 === 'X') && (x9 === 'X')){
            return res.status(200).json('player X won!');
        }else if((x1 === 'X') && (x5 === 'X') && (x9 === 'X')){
            return res.status(200).json('player X won!');
        }else if((x3 === 'X') && (x5 === 'X') && (x7 === 'X')){
            return res.status(200).json('player X won!');
        }else if((x2 === 'X') && (x5 === 'X') && (x8 === 'X')){
            return res.status(200).json('player X won!');
        }else if((x4 === 'X') && (x5 === 'X') && (x6 === 'X')){
            return res.status(200).json('player X won!');
        }
        // conditions for player O
        else if((x1 === 'O') && (x2 === 'O') && (x3 === 'O')){
            return res.status(200).json('player O won!');
        }else if((x1 === 'O') && (x4 === 'O') && (x7 === 'O')){
            return res.status(200).json('player O won!');
        }else if((x7 === 'O') && (x8 === 'O') && (x9 === 'O')){
            return res.status(200).json('player O won!');
        }else if((x3 === 'O') && (x6 === 'O') && (x9 === 'O')){
            return res.status(200).json('player O won!');
        }else if((x1 === 'O') && (x5 === 'O') && (x9 === 'O')){
            return res.status(200).json('player O won!');
        }else if((x3 === 'O') && (x5 === 'O') && (x7 === 'O')){
            return res.status(200).json('player O won!');
        }else if((x2 === 'O') && (x5 === 'O') && (x8 === 'O')){
            return res.status(200).json('player O won!');
        }else if((x4 === 'O') && (x5 === 'O') && (x6 === 'O')){
            return res.status(200).json('player O won!');
        }
        // conditions for player draw
        else if(((x1 === 'X') || (x1 === 'O')) && ((x2 === 'X') || (x2 === 'O')) && ((x3 === 'X') || (x3 === 'O')) 
        && ((x4 === 'X') || (x4 === 'O')) && ((x5 === 'X') || (x5 === 'O')) && ((x6 === 'X') || (x6 === 'O')) 
        && ((x7 === 'X') || (x7 === 'O')) && ((x8 === 'X') || (x8 === 'O')) && ((x9 === 'X') || (x9 === 'O'))){
            return res.status(200).json('draw game!');
        }
    } catch (error) {
        res.status(400).json(`something went wrong: ${error.message}`);
    }
}

export default Main;