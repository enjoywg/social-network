import {ActionsType, SidebarType} from "./store";

let initialState = {friends: [
        {id: 1, img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
        {id: 2, img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
        {id: 3, img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType) => {
    return state
}