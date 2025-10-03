# VSCode Extension Template

这是一个 VSCode 扩展开发模板，提供了快速开发 VSCode 扩展的基础结构和配置。

## 功能特性

- 使用 TypeScript 开发
- 集成 ESLint 代码规范检查
- 使用 esbuild 进行快速构建
- 包含测试框架配置
- 支持热重载开发模式
- 预配置的发布脚本

## 快速开始

1. 克隆此模板：
   ```bash
   git clone <repository-url>
   cd vscode-extension-template
   ```

2. 安装依赖：
   ```bash
   pnpm install
   ```

3. 开始开发：
   ```bash
   pnpm run watch
   ```

4. 按 `F5` 在新的 VSCode 窗口中运行扩展

## 命令

此扩展提供以下命令：

- `Hello World`: 显示一个简单的 Hello World 消息

## 开发脚本

- `pnpm run compile`: 编译 TypeScript 代码
- `pnpm run watch`: 启动监听模式，自动重新编译
- `pnpm run test`: 运行测试
- `pnpm run lint`: 运行代码规范检查
- `pnpm run package`: 构建生产版本
- `pnpm run ext:package`: 打包扩展为 .vsix 文件
- `pnpm run ext:publish`: 发布扩展到市场

## 项目结构

```
├── src/                    # 源代码目录
│   ├── extension.ts       # 扩展主入口文件
│   └── test/              # 测试文件
├── package.json           # 扩展清单和依赖
├── tsconfig.json          # TypeScript 配置
├── eslint.config.mjs      # ESLint 配置
└── esbuild.js            # 构建配置
```

## 自定义扩展

1. 修改 `package.json` 中的扩展信息（名称、描述、版本等）
2. 在 `src/extension.ts` 中实现你的扩展逻辑
3. 更新 `package.json` 中的 `contributes` 部分添加命令、设置等
4. 更新此 README.md 文件
