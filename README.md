# Einbürgerungstest Germany Bavaria

This is a Vue.js application designed to help users prepare for the Einbürgerungstest in Bavaria, Germany. The application provides a set of questions and answers to aid in studying for the test.

### Visit the project [here](https://poyeshsoftware.github.io/Einbuergerungstest/).

## Project Setup

To set up the project on your local machine, follow these steps:

1. Clone the repository to your local machine using `git clone <repository-url>`.
2. Navigate to the project directory using `cd <project-directory>`.
3. Install the necessary dependencies using `npm install`.
4. Start the development server using `npm run dev`.

## Usage

Once the server is running, you can access the application by navigating to `http://localhost:5000` (or whatever port you have configured) in your web browser.

The application presents a series of questions related to the Einbürgerungstest. Select an answer for each question and proceed to the next one using the "Next" button. Your score is calculated based on your responses.

## Contributing

Contributions are welcome! Please read the contributing guidelines before making any changes.

## License

This project is licensed under the terms of the MIT license.

## Git push to Github Pages Process

1. Run `npm run build` to generate the production build.
2. Run `git add dist -f` to add the `dist` directory to the repository.
3. Run `git commit -m "Add dist subtree for GitHub Pages deployment"` to commit the changes.
4. Run `git subtree push --prefix dist origin gh-pages` to push the `dist` directory to the `gh-pages` branch on GitHub.
5. Or Split the subtree into a new branch `git subtree split --prefix=dist -b temp-branch-for-gh-pages` and 
6. and force push the temporary branch to the remote gh-pages repository `git push origin temp-branch-for-gh-pages:gh-pages --force`
7. Delete the temporary branch `git branch -D temp-branch-for-gh-pages`
8. Access the application at `https://<username>.github.io/<repository-name>`.
