# 为什么要规范 Git 提交

好的提交记录，会将每次提交内容的范围，内容，以及涉及到的 bug 都能清晰的展示出来，且格式一致，便于查找找提交记录，对查看代码提交记录或者审核的人更友好，能够更好地了解项目的生命周期以及中间出现的问题。

配置 Git 提交规范需要使用到以下依赖：
```json
"devDependencies": {
  "@commitlint/cli": "^12.1.4",
  "@commitlint/config-conventional": "^12.1.4",
  "commitizen": "^4.2.4",
  "commitlint-config-cz": "^0.13.2",
  "cz-conventional-changelog": "^3.3.0",
  "cz-customizable": "^6.3.0",
  "husky": "^6.0.0"
}
```

版本不需要和示例完全一致！

各个依赖的用途如下：

1. @commitlint/cli：校验提交信息的命令行工具
2. @commitlint/config-conventional：社区定义的提交规范
3. commitizen：Commitizen 是一个帮助撰写规范 commit messages 的工具
4. commitlint-config-cz：用于自定义提交格式
5. cz-conventional-changelog：适配器，用来提供约定提交格式，不同的需求，可以使用不同的适配器
6. cz-customizable：自定义提交规范 提示文案
7. husky： husky是一个Git Hook工具，用来为 git 客户端增加 hook 的工具。

# 配置 Git 提交规范

## 配置安装 commitizen

```
npm i -D commitizen cz-conventional-changelog
```

根目录新建 ```.czrc``` 文件

```
{"path":"cz-customizable"}
```

对package.json文件添加如下配置

```
"scripts":{
  commit:"git-cz"
},
"config": {
  "cz-customizable": {
    "config": ".cz-config.js"
  }
}
```

## 配置安装 husky

husky4.0 和 husky6.0 的版本差异较大，配置方式也不同

husky6.0 配置方式

1、安装并初始化husky

```
npx husky-init
```

2、启用 Git 挂钩

```
npx husky install
```

## 自定义规范

首先下载自定义规范约束的包替换第三方规范。

```
npm i -D commitlint-config-cz cz-customizable
```

在项目根目录创建.cz-config.js，这个文件里自定义规范

```
module.exports = {
	types: [
		{ value: 'init', name: 'init:     初始提交' },
		{ value: 'feat', name: 'feat:     增加新功能' },
		{ value: 'fix', name: 'fix:      修复bug' },
		{ value: 'ui', name: 'ui:       更新UI' },
		{ value: 'refactor', name: 'refactor: 代码重构' },
		{ value: 'release', name: 'release:  发布' },
		{ value: 'deploy', name: 'deploy:   部署' },
		{ value: 'docs', name: 'docs:     修改文档' },
		{ value: 'test', name: 'test:     增删测试' },
		{ value: 'chore', name: 'chore:    更改配置文件' },
		{ value: 'style', name: 'style:    样式修改不影响逻辑' },
		{ value: 'revert', name: 'revert:   版本回退' },
		{ value: 'add', name: 'add:      添加依赖' },
		{ value: 'minus', name: 'minus:    版本回退' },
		{ value: 'del', name: 'del:      删除代码/文件' }
	],
	scopes: [
		{ name: 'components' },
		{ name: 'utils' },
		{ name: 'styles' },
		{ name: 'deps' },
		{ name: 'other' }
	],
	messages: {
		type: '选择更改类型:\n',
		// 如果allowcustomscopes为true，则使用
		scope: '选择一个 scope（可选）：\n',
		customScope: '请输入自定义的 scope：',
		subject: '简短描述:\n',
		body: '详细描述. 使用"|"换行:\n',
		breaking: 'Breaking Changes列表:\n',
		footer: '关闭的issues列表. E.g.: #31, #34:\n',
		confirmCommit: '确认提交?'
	},
	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix']
}
```

参考：

[https://juejin.cn/post/6962056746328129567](https://juejin.cn/post/6962056746328129567)