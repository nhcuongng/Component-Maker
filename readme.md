# React Component Maker

![npm](https://img.shields.io/npm/v/@nhcuong/react-component-maker)
![npm](https://img.shields.io/npm/dw/@nhcuong/react-component-maker?style=flat-square)
![David](https://img.shields.io/david/nhcuong/component-maker)
![npm bundle size](https://img.shields.io/bundlephobia/min/@nhcuong/react-component-maker?style=flat-square)

> For anyone who follow my convention. You can see my convention at [here](https://github.com/nhcuongng/boilerplate-nextjs)

<div align="center" style="margin: 20px 0px">
  <img alt="React component maker" src="https://raw.githubusercontent.com/nhcuongng/component-maker/main/images/react_component_maker_demo.gif" width="100%" />
</div>

## Features 🎉

-   Create a component with **index.ts** and  **.module.scss** file
-   Create a folder wrapper what wrap your components into it with file **index.ts** inside
-   Content in all files are follow my convention


## Installation 🚀

From your terminal run:

```shell
# Run by npx
$ npx @nhcuong/react-component-maker
# Run by Yarn
$ yarn @nhcuong/react-component-maker
```

Or you can install it global

```shel
npm i -g @nhcuong/react-component-maker
```

after that you can call it anywhere

```shell
component-maker
```

## Sepcific Details

| Input field                      	| Description                                                                                	| Default value               	|
|----------------------------------	|--------------------------------------------------------------------------------------------	|-----------------------------	|
| What are you want create?         | Component or Folder Wrapper                                                                	| None                        	|
| Directory to your Component Name 	| Relative path to folder (begin from current working folder), you can copy it by use VSCode 	| src/components/NewComponent 	|
| Your child component name        	| Child component inside folder wrapper                                                      	| ChildComponent              	|
