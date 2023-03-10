import { ipcRenderer } from "electron"
import { getRawData, isSiyuanNewWin } from "./common"

/**
 * 发送事件的统一入口
 *
 * @param channel 频道
 * @param args 参数
 */
export function sendToMain(channel: string, args?: object) {
  let data = {}
  data = Object.assign({ type: channel, isSiyuanNewWin: isSiyuanNewWin() })
  if (args) {
    data = Object.assign(getRawData(args))
  }
  console.log("ipcRenderer send channel=>", channel)
  console.log("ipcRenderer send data=>", data)
  ipcRenderer.send(channel, data)
}
