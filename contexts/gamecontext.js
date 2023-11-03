"use client";

const { createContext, useState } = require("react");

const GameContext = createContext();

export const GameProvider = ({ children }) => {

    const [user, setUser] = useState("X");
    const [winner, setWinner] = useState("");
    const [gameData, setGameData] = useState([{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" },

    { value: "" }, { value: "" }, { value: "" }, { value: "" }])

    const [scores, setScores] = useState({X:0,O:0})
    
    const controlFunction = () => {

        const winningCombos = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]

        winningCombos.forEach(scenario => {

            if (gameData[scenario[0]].value == "X" && gameData[scenario[1]].value == "X" && gameData[scenario[2]].value == "X") {
                setWinner("X")
                setScores({...scores, X: scores.X+1})
            }

            else if (gameData[scenario[0]].value == "O" && gameData[scenario[1]].value == "O" && gameData[scenario[2]].value == "O") {
                setWinner("O")
                setScores({...scores, O: scores.O+1})
            }

        });


    }
    return (<GameContext.Provider value={{
        updater:
            (setValueFunction, id) => {

                setValueFunction(user);

                gameData[id - 1].value = user;

                user == "X" ? setUser("O") : setUser("X");

                controlFunction();
            }
        , winner: winner,

        restart: () => {


            for (let i = 0; i < 9; i++) {

                gameData[i].value = "";
                setUser("X");
                setWinner("R");
                setWinner("");
                

            }

        },reload: () => {
           
            setScores({X:0, O:0})

        },scores: scores,
        getValue: (id) => {
            return gameData[id-1].value;
        }, user: user
    }}>
        {children}
    </GameContext.Provider>);
}

export default GameContext;