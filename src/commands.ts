import { window } from 'vscode'

function helloWorld() {
  window.showInformationMessage('Hello World from vscode-extension-template!')
}

export const commands = {
  helloWorld,
}
