/* global io, moment */
const socket = io()
const $logs = document.querySelector("#logs")

socket.on("log", data => {
  const logData = JSON.stringify(data.body)

  console.log(
    `${moment(data.createdAt).format("h:mm a")} | ${logData.slice(0, 20)}...`,
    data.body
  )
  var textedJson = JSON.stringify(data.body, undefined, 4)
  const log = `<details>
                <summary>${moment(data.createdAt).format(
                  "h:mm a"
                )} | ${logData.slice(0, 20)}...</summary>
                <pre>${textedJson}</pre>
              </details>`

  $logs.insertAdjacentHTML("afterbegin", log)
})

console.log("Logs show up here")
