TICITY APP

TEAM ROLES
Bryan: Trello/Communications, Supporting Chuck
Chuck: Tech Lead/Anchor, Product manager
Matt: Design Lead, Client Liaison

MVP
As a developer, I can create a Rails application with Devise functionality
As a developer, I can create an CityQuery resource with the appropriate attributes
As a developer, I can create an association between User and CityQuerys
***
As a developer, I can add React components to my TICity app
As a developer, I ensure my app distinguishes the difference between JSON and HTML payloads in my routes
As a user, I can navigate to a log in page
As a user, I can log out
***
As a user, I can save information returned from a city query
As a user, I can delete any query from my list of saved queries
As a user, I can edit/change the ranking value of any cities within my personal listings
As a user, I can hit the

User Stories
Story: As an un-registered guest on the website, I can go to a web page and see a list of available score categories. CityQueries have: "Housing","Cost of Living",:"Startups","Venture Capital","Travel Connectivity","Commute","Business Freedom",":"Safety","Healthcare",”Education",:"Environmental Quality","Economy","Taxation","Internet Access","Leisure Culture","Tolerance","Outdoors" (note: possible reduction)
Story: As an un-registered guest on the website, I can click on a score category to run a query (note: single item query for MVP, return top 3 results, expand later if possible)
Story: As an un-registered guest on the website, I can see a header/footer element at the top of each page containing navigation to the other pages
Story: As a un-registered guest, I can go to registration page with a form and register as a new user
Story: As a registered user who has not logged in, I can go to a login page
Story: As a logged in user, I should be able to log out
Story:: As a logged in user, I can save the information for any cityquery I have created, but I cannot edit the information for queries that belong to someone else

Stretch Goals
Story: As an registered guest on the website, I can click on multiple score categories to run a query (note: multiple item query returns average score, return top 3 results)
Story: As a user, when a city is returned, I can see a background image of that city
Story: As a user, when a city is returned, I can also browse landmarks of that city in a carousel
Story: As a user, when a city is returned, I am presented with a graph image of all of the possible score categories

Wireframes can be located at https://www.figma.com/file/P9o3U9O3DFFEJtqP2tqevL/TICity-WireFrame?node-id=13%3A6 (must be team member to have access)
Trello Board located at https://trello.com/b/GOfz6keO/ticity-app (must be team member to have access)

Initial Commit
- Created Rails App
- Created React App within Rails framework
- Added Devise functionality for user paths
- Added Assets, Components, and Pages repositories to already existing component repositories
- Created Header and Footer components with boilerplate info

Create Functionality Commit 
- Created form in CitySearch page
- Added onChange and value attriubutes to each input on the form
- Successfully passed form data to App.js onClick
- onClick console.logs inputed form data
- onClick successfully routes user to Search Results page

Read Functionality Commit: 
- Created MySearchIndex page
- Added logged in(protected paths) to navigations
- If a logged in user has saved searches it displays upon navigating to MySearchIndex
- Created SearchResults page that auto fills with mockSearches data 
- Added button and onClick functionality to Search Results page to navigate to CityShow page with all that cities information

Update Functionality Commit:
- Added an edit search button to search results page
- Clicking edit search redirects to CitySearch page
- Clicking that button will also pass the previously passed search results to the form
- Added onChange and to all inputs of the form
- Once the inputs are changed, clicking on search will console.log the new search results with the new criteria
- This will also redirect to SearchResults page
- Successfully passed form data to App.js onClick



