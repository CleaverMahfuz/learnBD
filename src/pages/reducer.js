export const initialState = {
    authUser: null,
    publicUsers:null,
    publicAll:null,
    singleItem:null,
    permitted:null,
    chatUser:null,
    specialUser:null,
}
export const actionTypes = {
    SET__USER:"SET__USER",
    SET__PUBLIC:"SET__PUBLIC",
    ALL__USER:"ALL__USER",
    SET__SINGLEITEM:"SET__SINGLEITEM",
    PERMITTED__USER:"PERMITTED__USER",
    SINGLE_CHAT__USER:"SINGLE_CHAT__USER",
    SPECIAL__SECREAT__ID:"SPECIAL__SECREAT__ID"


}
 const reducer=(state, action) => {
    
    switch(action.type){
        case actionTypes.SET__USER:
            return {
                ...state,
                authUser:action.authUser,
            }
                case actionTypes.SET__PUBLIC:
                    return {
                        ...state,
                        publicUsers:action.publicUsers,
                    }
                case actionTypes.ALL__USER:
                    return {
                        ...state,
                        publicAll:action.publicAll,
                    }
                case actionTypes.SET__SINGLEITEM:
                    return {
                        ...state,
                        singleItem:action.singleItem,
                    }
                case actionTypes.PERMITTED__USER:
                    return {
                        ...state,
                        permitted:action.permitted,
                    }
                    case actionTypes.SINGLE_CHAT__USER:
                        return {
                            ...state,
                            chatUser:action.chatUser,
                        }
                        case actionTypes.SPECIAL__SECREAT__ID:
                            return {
                                ...state,
                                specialUser:action.specialUser,
                            }
            default:
                return state;
    }

};
export default reducer;