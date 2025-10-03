# VSCode Extension Template

[![Version](https://img.shields.io/github/package-json/v/joygqz/vscode-extension-template)](https://github.com/joygqz/vscode-extension-template)
[![License](https://img.shields.io/github/license/joygqz/vscode-extension-template)](https://github.com/joygqz/vscode-extension-template/blob/main/LICENSE)

这是一个现代化的 VSCode 扩展开发模板，提供了快速开发 VSCode 扩展的完整基础结构和最佳实践配置。

## ✨ 功能特性

- 🔧 **TypeScript** - 完整的 TypeScript 支持，提供类型安全
- 📦 **esbuild** - 超快的构建和打包工具
- 🔍 **ESLint** - 集成 @antfu/eslint-config 代码规范
- 🚀 **热重载** - 开发模式下支持自动重新编译
- 📝 **版本管理** - 集成 bumpp 自动版本发布
- 🔄 **CI/CD** - GitHub Actions 工作流配置
- 📋 **模板文件** - 包含 CHANGELOG、LICENSE 等标准文件

## 🚀 快速开始

### 1. 使用此模板

点击 GitHub 上的 "Use this template" 按钮，或者：

```bash
git clone https://github.com/joygqz/vscode-extension-template.git
cd vscode-extension-template
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 自定义扩展信息

编辑 `package.json` 文件，修改以下字段：
- `name`: 扩展名称
- `displayName`: 显示名称
- `description`: 扩展描述
- `publisher`: 发布者名称
- `repository.url`: 你的仓库地址

### 4. 开始开发

```bash
pnpm run watch
```

然后按 `F5` 在新的 VSCode 窗口中运行扩展进行测试。

## 📋 可用命令

此扩展提供以下命令：

- **Hello World** (`vscode-extension-template.helloWorld`): 显示一个简单的 Hello World 消息

## 🛠️ 开发脚本

| 脚本 | 描述 |
|------|------|
| `pnpm run compile` | 编译 TypeScript 代码并进行类型检查 |
| `pnpm run watch` | 启动监听模式，自动重新编译 |
| `pnpm run check-types` | 仅进行 TypeScript 类型检查 |
| `pnpm run lint` | 运行 ESLint 代码规范检查 |
| `pnpm run package` | 构建生产版本 |
| `pnpm run ext:package` | 打包扩展为 .vsix 文件 |
| `pnpm run ext:publish` | 发布扩展到 VS Code 市场 |
| `pnpm run release` | 自动版本发布（使用 bumpp） |

## 📁 项目结构

```
├── .github/                # GitHub Actions 工作流
├── .vscode/                # VS Code 配置文件
├── src/                    # 源代码目录
│   └── extension.ts       # 扩展主入口文件
├── dist/                   # 构建输出目录
├── package.json           # 扩展清单和依赖
├── tsconfig.json          # TypeScript 配置
├── eslint.config.mjs      # ESLint 配置
├── esbuild.js            # 构建配置
├── CHANGELOG.md          # 更新日志
├── LICENSE               # 许可证文件
└── README.md             # 项目说明
```

## 🔧 自定义扩展

### 1. 基本信息
修改 `package.json` 中的扩展信息：
```json
{
  "name": "your-extension-name",
  "displayName": "Your Extension Display Name",
  "description": "Your extension description",
  "publisher": "your-publisher-name",
  "version": "0.0.1"
}
```

### 2. 添加命令
在 `package.json` 的 `contributes.commands` 中添加新命令：
```json
{
  "contributes": {
    "commands": [
      {
        "command": "your-extension.commandName",
        "title": "Command Title"
      }
    ]
  }
}
```

### 3. 实现功能
在 `src/extension.ts` 中实现你的扩展逻辑：
```typescript
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('your-extension.commandName', () => {
    vscode.window.showInformationMessage('Hello from your extension!')
  })

  context.subscriptions.push(disposable)
}
```

## 📦 打包和发布

### 本地打包
```bash
pnpm run ext:package
```
这将生成一个 `.vsix` 文件，可以通过 VS Code 的"Install from VSIX"功能安装。

### 发布到市场
1. 首先需要获取 [Azure DevOps Personal Access Token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)
2. 使用 vsce 登录：
   ```bash
   npx vsce login your-publisher-name
   ```
3. 发布扩展：
   ```bash
   pnpm run ext:publish
   ```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个模板！

## 📄 许可证

[MIT](LICENSE) © joygqz
