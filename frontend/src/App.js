import React from 'react'
const  App = ()=>{
    const webSocket = new WebSocket('ws://localhost:8001/ws/chat/testing_room')
    webSocket.onmessage = (e)=>{
        const data = JSON.parse(e.data)
        document.querySelector('.chat').innerHTML += (<p>Barlus</p>)
    }
    return (
        <>
            <h1>Chat:{"<RoomName>"}</h1>
        </>
    )
}

export default App;