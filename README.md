# User List App
A simple and responsive web app that fetches user data from an API and shows it as an individual user card it allows users to filter by city and company in real time.  
🔗[GitHub Repository](https://github.com/simon701/User-List-App)

## Description
The **User List App** uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) to retrieve mock user data and dynamically renders each user's details in a card format. A filter was used to quickly search for the details based on city or company.

This web app was built using **HTML** which allows to structure the content of the page sich as layout, search input, header, and user card container.

Then using **CSS** we styled the page such as the layout, fonts, colors, cards design and spacing, transitions. We used **CSS grid** to arrange the cards in a clean and responsive layout.

Then using **JavaScript** which powered the dynamic functionality of the page. Here's how we used it:
1. Fetching and parsing the data from the API.
2. Rendering the user cards dynamically
3. Enabling real-time filtering based on user input

## How to run the app locally
Follow the following steps to be able to run the project locally:

1. **Clone the repository**  
    Open your terminal and run the following command:
    ```bash
    git clone https://github.com/simon701/User-List-App.git
    ```
    This command will create a local copy of the project on your machine in a folder named User-List-App
2. **Navigate to the project directory**
    ```bash
    cd User-List-App
    ```
3. **Open the project in your browser**
    Now you can open the index.html file directly in your browser.
       - If you're using VS code you might need to install an extension called ***Live Preview*** here's a link to the extension: [Live Preview Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). Once installed right click on "index.html" then simply click on "Show Preview". Done! You can now see the website live on your machine!
       - If not using VS code you can simply go to the project directory in your files and double click o "index.html" and done!

4. **Done!!**
    The app should now be running in your browser. You can search and filter users by city or company in real-time.

## Screenshots

*Initial interface with search and user cards*
![App Screenshot](https://github.com/user-attachments/assets/e4b411d7-b6a9-424f-bd5c-57df5fc08d27)

*Real-time search functionality that filters users based on city or company name*
![App Screenshot Live-Filtering feature](https://github.com/user-attachments/assets/1847fb91-f666-41f8-b5c1-688d4b7d7062)

## Future Improvements

- Add dropdown autocomplete for cities and companies
- Enable soting users alphabetically or by company name
- Allow users to click on a card and see more details in a popup