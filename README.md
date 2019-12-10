# PostcssCustomWebpackGlobalIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Bug Reproduction

This repository demonstrates a bug where postcssPresetEnv is added using the @angular-builders/custom-webpack custom builders.  The issue is that the postcss plugin extension settings added are not being applied when the build processes scss partial files imported into the styles of the application.

Reproduction steps:

> ng run build

Open the dist/postcss-custom-webpack-global-issue/styles.css file. Note that the block of style that came from `src/styles.scss` directly has it's logical css properties transformed correctly.  The ones that are imported by `src/styles.scss` from `shared/styles/_shared.style.scss` are not transformed and stay in their original form.

The content end ups looking like:

```
/* You can add global styles to this file, and also import other style files */
div.container {
  border: 5px solid black;
  -webkit-margin-start: 20px;
          margin-inline-start: 20px;
  -webkit-margin-end: 50px;
          margin-inline-end: 50px;
}
div.container {
  border-left-color: orange;
  border-right-color: orange;
}

/*# sourceMappingURL=styles.css.map*/
```

For some reason the styles from `shared/styles/_shared.style.scss` are not being transformed with the added plugin settings.

The expected output would be:

```
/* You can add global styles to this file, and also import other style files */
div.container {
  border: 5px solid black;
  margin-left: 20px;
  margin-right: 50px;
}
div.container {
  border-left-color: orange;
  border-right-color: orange;
}

/*# sourceMappingURL=styles.css.map*/
```

