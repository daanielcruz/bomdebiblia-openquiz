<h1 align="center">
Bom de Bíblia - Open Quiz :exclamation::question:
</h1>

<p align="center">
<a href="https://www.linkedin.com/in/danielfercruz/">
<img alt="Made by daanielcruz" src="https://img.shields.io/badge/made%20by-daanielcruz-%23282C34?style=flat-square">
</a>
  
<img alt="language" src="https://img.shields.io/badge/Language-pt_BR-%23282C34.svg?style=flat-square">
<img alt="typescript" src="https://img.shields.io/badge/-TypeScript-%23282C34?style=flat-square&logo=typescript&logoColor=007bcd">
<img alt="react-native" src="https://img.shields.io/badge/-React%20Native-%23282C34?style=flat-square&logo=react">


  
</p>
<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-some-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;
</p>

## 💻 Project

<p align="center">
 <img alt="sample" title="sample" src=".github/screen.png" width="800px" />

After 4 months of study from scratch, I've finally published my very first app on Play Store: a bible quiz app.
In this project I opted for the offline first methodology: if the user has no internet connection, the app will check for questions/categories updates using firebase realtime database, using CodePush and, to keep offline data, RealmDB.

<strong>* Android Only </strong>

If you want to know more about it, visit the play store link: https://play.google.com/store/apps/details?id=com.danielfcruz.bomdebiblia
</p>

## 🔧 Some Technologies

The project was developed using the following technologies:

- [React-Native][react-native]
- [TypeScript][typescript]
- [Styled-Components][styled-components]
- [CodePush][codepush]
- [Firebase][firebase]
- [Firebase/Admob][firebase/admob]
- [Redux][redux]
- [Redux-Saga][redux-saga]
- [RealmDB][realmdb]
- [ESLint][eslint]

## ❓ How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] e [Yarn].
From your command line:

### Simple install

```bash
# Clone this repository
$ git clone https://github.com/daanielcruz/bomdebiblia-openquiz

# Go into the repository
$ cd bomdebiblia-openquiz

# Install dependencies
$ yarn install

# Start the bundler
$ yarn start

# Do the Android build
$ yarn android

# The RN project should have open.
```

## 🤔 How to contribute

- Fork the project;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Push them to your branch: `git push origin my-feature`.
- Create a PR. 

After reviewed and merged, you'll receive a message. Then you can delete your whole fork.

Made with ♥ by Daniel Cruz :wave: [Get in touch!](https://www.linkedin.com/in/danielfercruz/)

[react-native]: https://reactnative.dev/
[nodejs]: https://nodejs.org/en/
[typescript]: https://www.typescriptlang.org/
[styled-components]: https://styled-components.com/
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[codepush]: https://github.com/microsoft/react-native-code-push
[firebase]: https://firebase.google.com/
[firebase/admob]: https://rnfirebase.io/admob/usage
[redux]: https://redux.js.org/
[redux-saga]: https://redux-saga.js.org/
[realmdb]: https://realm.io/
[eslint]: https://eslint.org/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
