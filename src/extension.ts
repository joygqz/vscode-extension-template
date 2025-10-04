import * as vscode from 'vscode'
import { commands } from './commands'
import { extensionKey } from './config'

export function activate(context: vscode.ExtensionContext) {
  Object.entries(commands).forEach(([commandName, command]) => {
    const disposable = vscode.commands.registerCommand(`${extensionKey}.${commandName}`, command)
    context.subscriptions.push(disposable)
  })
}

export function deactivate() {}
