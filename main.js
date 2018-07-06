const WebSocket = require('ws');
const io = require('socket.io')
const ws = new WebSocket('wss://api.bitfinex.com/ws/2');
let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCUSD'
})
ws.on('open',()=>{
    ws.on('message',(data)=>{
        res = JSON.parse(data)
        arr = new Array()
        arr[1] = new Array()
        for (var i=0;i<res.length;i++){
            for (var j=0;j<res[i].length;j++)
                arr[1].push(res[i][j])
        }
        if (arr[1][2]) console.log(arr[1][2])
    })
    ws.send(msg)  
})