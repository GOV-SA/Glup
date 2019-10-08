## Gulp 
transforming gov.sa Sass into CSS.
## Requirements
- You'll need [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm).
- You'll need to install the following packages via npm:
gulp
gulp-autoprefixer
gulp-rename
gulp-sass
gulp-sourcemaps
gulp-uglify
node-sass

## Installation
If you've never installed Gulp, you'll need to install the gulp globally:
```bash
npm install gulp-cli -g
```

Add all the required dependencies at once with following command from your project's root directory:
```bash npm install gulp gulp-autoprefixer gulp-rename gulp-sass gulp-sourcemaps gulp-uglify node-sass --save-dev```

## Create a gulpfile
copy the ```bash gulpfile.js ``` on your project root 

Intitialize your gov.sa project by running the following command:
```bash gulp init ```

Watch SCSS files and compile any changes with it

```bash gulp watch ```