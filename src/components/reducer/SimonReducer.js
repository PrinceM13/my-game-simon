// constant
export const START_GAME = 'START_GAME';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const SET_SIMON_COLORS = 'SET_SIMON_COLORS';
export const SET_PLAYER_TURN = 'SET_PLAYER_TURN';
export const SET_PLAYER_NEW_COLORS = 'SET_PLAYER_NEW_COLORS'
export const SET_NEXT_LEVEL = 'SET_NEXT_LEVEL'
export const END_GAME = 'END_GAME';

// initial
export const INITIAL_GAME = {
    score: 0,
    simonColors: [],    // quest from Simon.
    simonTurn: false,   // state: Simon shows all colors to Player.
    playerColors: [],   // Player's answers.
    playerTurn: false   // state: Play gives an answer to Simon.
};

// gameReducer
export const gameReducer = (state, action) => {
    switch (action.type) {
        case START_GAME: return action.payload;
        case SET_INITIAL_STATE: return action.payload;
        case SET_SIMON_COLORS: return action.payload;
        case SET_PLAYER_TURN: return action.payload;
        case SET_PLAYER_NEW_COLORS: return action.payload;
        case SET_NEXT_LEVEL: return action.payload;
        case END_GAME: return action.payload;
        default: return state;
    }
}