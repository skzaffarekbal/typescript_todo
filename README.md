# TypeScript Todo App

A simple Todo application built with TypeScript and vanilla JavaScript, bootstrapped with Create Snowpack App (CSA).

## Features

- Add, edit, and delete todos
- Mark todos as completed
- Persistent storage using localStorage
- Type safety with TypeScript

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/typescript_todo.git
   cd typescript_todo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Building for Production

Build a static copy of your site to the `build/` folder:
```bash
npm run build
```
Your app is ready to be deployed!

**For the best production performance:**  
Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

## Project Structure

```
src/
  index.ts        # Main application logic
  ...
public/
  index.html      # HTML template
types/
  ...             # TypeScript type definitions (if any)
```

## License

This project is licensed under