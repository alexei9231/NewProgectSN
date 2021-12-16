type MessageType = {
    id: number
    message: string
}

 type DialogType = {
    id: number
    name: string
}

 type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageTypes = {
    posts: Array<PostType>
}

 type DialogPageTypes = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

 type SidebarTypes = {}

 type RootStateType = {
    profilePage: ProfilePageTypes
    dialogsPage: DialogPageTypes
    sidebar: SidebarTypes
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, nice to meet you", likesCount: 12},
            {id: 2, message: "How are you?", likesCount: 15},
            {id: 3, message: "What are you doing?", likesCount: 118},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Bratok"},
            {id: 2, name: "Fufel"},
            {id: 3, name: "Poexavshii"},
            {id: 4, name: "Polkovnik"},
            {id: 5, name: "Capitan"},
            {id: 6, name: "Zver"},
        ],
        messages: [
            {id: 1, message: "ololo"},
            {id: 2, message: "Hi"},
            {id: 3, message: "Privet"},
            {id: 4, message: "Privet"},
            {id: 5, message: "Privet"},
            {id: 6, message: "Privet"},
        ]
    },
    sidebar: {}
}

export default state