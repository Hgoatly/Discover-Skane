# Discover Skåne Testing:

The Discover Skåne site was discovered extensively, using the following processes:

# Table of Contents:

- [Chrome-Developer-Tools](#chrome-developer-tools)
- [W3c-Markup-Validation-Service](#W3C-markup-validation-service)
- [W3C-CSS-Validation-Service](#W3C-markup-validation-service)
- [JSHint](#jshint)
- [Testing-the-User-Stories](#testing-the-user-stories)
- [Manual-Testing](#manual-testing)
## Chrome Developer Tools:

- Chrome developer tools was used regulraly to check the layout, and to check the console for errors.

## W3C Markup Validation Service:

- The [W3C-Markup-Validation-Service](https://validator.w3.org/) was used to check that HTML used for the site was compliant with modern standards.
The code passed the validator's tests with no errors or warnings:

<img src="assets/images/readme-images/html-validator-w3c-results.jpg" alt="Screenshot of the W3 HTML validator results">

## W3C CSS Validation Service: 

- The [W3C-CSS-Validation-Service](https://jigsaw.w3.org/) was used to check that CSS used on the site was compliant with modern standards. The code passed the 
validator's tests with no errors. 

<div align="center">
    <img src="assets/images/readme-images/w3c-css-validator.jpg" alt="Screenshot of the W3 CSS validator results">
</div>

There were, however, some warnings. These were to do with the code used to cross browser compatability for the display of background images.

<div align="center">
    <img src="assets/images/readme-images/w3c-css-validator-warnings.jpg" alt="Screenshot of the W3 CSS validator warnings">
</div>

## JSHint:

- JSHint was used to test the validity of the Javascript code in the project. 'Const' was flagged as a warning, but once it was told to
recognise ECMAScript 6 features by adding: '/*jshint esversion: 6 */' at the top, all Javascript code passed with no errors or warnings. 

## Testing the User Stories:

- The following user stories are listed in the README.md file. Images have been inserted below each of them to show how their requirements 
have been fulfilled.

- User stories one, two, three and nine are concerned with 'Lake' destinations:

1. I have booked a holiday to Skåne, and I want to find out where there is a lake, so that I can go fishing.
2. I have booked a holiday to Skåne, and I want to find out where there is a lake, so that I can go canoeing.
3. I have booked a holiday to Skåne, and I want to find out where there is a lake, so that I can enjoy the landscape and see some waterfoul.
9. I want to know where there are some nice lakes in Skåne, so that I know whether to book a holiday there. 

- Navigate to the 'Lakes and Forests' section. 
  
  - **Test Case 1**
    - Ensure that the 'Lakes' image shows a picture of a lake. 
  - **Expected Result**: 'Lakes' image should be visible.
  - **Actual Result**: Pass.
  
  - **Test Case 2**
    - Ensure that the text below the image details some recommended lakes in Skåne. 
  - **Expected Result**: Text below the 'Lakes' image should be visible.
  - **Actual Result**: Pass.

  - **Test Case 3**
    - Ensure that when 'Show on Map' is clicked, the map is visible, and the image is hidden.
  - **Expected Result**: When 'Show on Map' is clicked, the map should be visible, and the image should be hidden.
  - **Actual Result**: Pass.

  - **Test Case 4** 
    - Ensure that when 'Hide Map is clicked, the map is hidden and the image is visible.
  - **Expected Result**: When 'Hide Map' is clicked, the map will be hidden, and the image will be visible.
  - **Actual Result**: Pass.

  - **Test Case 5**
    - Ensure that there are custom markers on each map. 
  - **Expected Result**: When maps are visible, custom markers shoule be displayed on them.
  - **Actual Result**: Pass.
  
  - **Test Case 6**
    - Ensure that when clicked, each marker will display an infowindow. 
  - **Expected Result**: Each marker will display an infowindow when clicked.
  - **Actual Result**: Pass.

  - **Test Case 7**
    - Ensure that the Hjälmsjön and Lake Immeln infowindows display information about canoeing and fishing.
  - **Expected Result**: The Hjälmsjön and Lake Immeln infowindows will display information about canoeing and fishing.
  - **Actual Result**: Pass.

  - **Test Case 8**
    - Ensure that the Hammarsjön infowindow details information about the landscape and waterfoul in the area. 
  - **Expected Result**: The Hammarsjön infowindow will display information about the landscape and waterfoul in the area.
  - **Actual Result**: Pass.

  - **Test Case 9**
    - Ensure that the 'Attribution' link on each infowindow works, and takes the user to an external site, which opens in a
  new tab.
  - **Expected Result**: All 'Attribution' links to work, with external sites opening in new tabs. 
  - **Actual Result**: Pass.

<div align="center">
    <img src="assets/images/readme-images/lakes-card-screenshot.jpg" alt="Screenshot of the lakes card">
</div><br>

<div align="center">
    <img src="assets/images/readme-images/lakes-map-screenshot-infowindow1.jpg" alt="Screenshot of the Hjälmsjön infowindow on the lakes card map">
</div><br>

<div align="center">
    <img src="assets/images/readme-images/lakes-map-screenshot-infowindow2.jpg" alt="Screenshot of the Lake Immeln infowindow on the lakes card map">
</div><br>

<div align="center">
    <img src="assets/images/readme-images/lakes-map-screenshot-infowindow3.jpg" alt="Screenshot of the Hammarsjön infowindow on the lakes card map">
</div>

- The fourth and eighth user stories are concerned with 'Forests' and 'National Parks' destinations:

4. I have booked a holiday to Skåne, and I want to find out where there are some unspoilt forests and National Parks, so that I can enjoy getting back to nature.
8. I want find out whether there are any unspoilt forests in Skåne, so that I know whether to book a holiday there where I can 'get away from it all'. 

- Navigate to the 'Lakes and Forests' section. 
  - Ensure that the 'Forest' and 'National Parks' images show pictures of a National Park, and a Forest. 
  - Ensure the that text below the image details some recommended forests and National Parks in Skåne. 
  - Ensure that when 'Show on Map is clicked, the map is visible, and the image is hidden. 
  - Ensure that when 'Hide Map is clicked, the map is hidden and the image is visible.
  - Ensure that there are custom markers on each map. 
  - Ensure that when clicked, each marker will display an infowindow. 
  - Ensure that each infowindow details information about recommended forests or National Parks in Skåne. 
  - Ensure that the 'Attribution' link on each infowindow works, and takes the user to an external site, which opens in a
  new tab.

- **Expected Result**: All images and maps to render, all infowindows to open and display the correct content, and all 'Attribution'
links to navigate to an external site which opens in a new tab.

- **Actual Result**: Pass.

<div align="center">
    <img src="assets/images/readme-images/forests-card-screenshot.jpg" alt="Screenshot of the Forests card">
</div><br>

  - 'Forests' map.

<div align="center">
    <img src="assets/images/readme-images/forests-map-screenshot.jpg" alt="Screenshot of the Forests map">
</div><br>

  - 'National Parks' card.

<div align="center">
    <img src="assets/images/readme-images/national-parks-card-screenshot.jpg" alt="Screenshot of the National Parks card">
</div><br>
  
  - 'National Parks' map.

  <div align="center">
    <img src="assets/images/readme-images/national-parks-map-screenshot.jpg" alt="Screenshot of the National Parks map">
</div><br>

  - 'Sö‎deråsen National Park' infowindow.

<div align="center">
    <img src="assets/images/readme-images/soderasen-infowindow.jpg" alt="Screenshot of the Soderasen infowindow on the National Parks card map">
</div><br>

  - 'Stenshuvuds National Park' infowindow.

<div align="center">
    <img src="assets/images/readme-images/stenshuvud-infowindow.jpg" alt="Screenshot of the Stenshuvud infowindow on the National Parks card map">
</div><br>

  - Häckeberga infowindow.

<div align="center">
    <img src="assets/images/readme-images/hackeberga-infowindow.jpg" alt="Screenshot of the Hackeberga infowindow on the National Parks card map">
</div><br>

  - Fulltofta infowindow.

  <div align="center">
    <img src="assets/images/readme-images/fulltofta-infowindow.jpg" alt="Screenshot of the Fulltofta infowindow on the National Parks card map">
</div><br>

  - Skrylle infowindow.

  <div align="center">
    <img src="assets/images/readme-images/skrylle-infowindow.jpg" alt="Screenshot of the Skrylle infowindow on the National Parks card map">
</div><br>

- User stories five and seven are concerned with finding beaches suitable for a seaside holiday. 

5. I have booked a holiday to Skåne, and I want to find out where there are some beaches, so that I can enjoy a seaside break.
7. I want to find out whether there are any nice beaches in Skåne, so that I know whether to book a beach holiday there.

- Navigate to the 'Beautiful Beaches' section of the website.
  - Ensure that the 'East Coast', 'West Coast' and 'South Coast' images show pictures of beaches. 
  - Ensure the that text below each image details some recommended beaches in Skåne. 
  - Ensure that when 'Show on Map is clicked, the map is visible, and the image is hidden. 
  - Ensure that when 'Hide Map is clicked, the map is hidden and the image is visible.
  - Ensure that there are custom markers on each map. 
  - Ensure that when clicked, each marker will display an infowindow. 
  - Ensure that each infowindow details information about recommended beaches in Skåne. 
  - Ensure that the 'Attribution' link on each infowindow works, and takes the user to an external site, which opens in a
  new tab.

- **Expected Result**: All images and maps to render, all infowindows to open and display the correct content, and all 'Attribution'
links to navigate to an external site which opens in a new tab.

- **Actual Result**: Pass.
  
  - 'Beautiful Beaches' cards.

<div align="center">
    <img src="assets/images/readme-images/beach-cards-screenshot.jpg" alt="Screenshot of the 'Beautiful Beaches' cards with images displayed.">
</div><br>

  -'Beautiful Beaches' maps.

<div align="center">
    <img src="assets/images/readme-images/beach-cards-maps.jpg" alt="Screenshot of the 'Beautiful Beaches' maps.">
</div><br>

- User stories six and ten are concerned with cultural activities in the region.

6. I have booked a holiday to Skåne, and I want to find out where there are some cultural activities available, so that I can learn/see somehting new.
10. I want to know what kind of cultural activities there are in the largest cities in Skåne, so that I know whether to book a city break there.

- Navigate to the 'City and Culture' section of the website.
  - Ensure that the 'Malmö', 'Helsingborg' and 'Lund' images show pictures of each city. 
  - Ensure the that text below each image details recommended cultural activities in Malmö, Helsingborg and Lund respectively. 
  - Ensure that when 'Show on Map is clicked, the map is visible, and the image is hidden. 
  - Ensure that when 'Hide Map is clicked, the map is hidden and the image is visible.
  - Ensure that there are custom markers on each map. 
  - Ensure that when clicked, each marker will display an infowindow. 
  - Ensure that each infowindow details information about recommended cultural activities in Malmö, Helsingborg and Lund. 
  - Ensure that the 'Attribution' link on each infowindow works, and takes the user to an external site, which opens in a
  new tab.

- **Expected Result**: All images and maps to render, all infowindows to open and display the correct content, and all 'Attribution'
links to navigate to an external site which opens in a new tab.

- **Actual Result**: Pass.

11. I want to find some hotel deals, so that I can book my holiday in Skåne.

- Navigate to the 'Book' section of the website.
  - **Test Case 1**:
    - Ensure that the 'Booking.com' Dealfinder renders, and displays a selection of hotel deals in Skåne.
  - **Expected Result**: The 'Booking.com' Dealfinder API will render, and a selection of available hotels in Skåne
  will be visible.
  - **Actual Result**: Pass.

  - **Test Case 2**:
    - Ensure that when clicked, the 'See All Deals' button takes the user to an external site, which opens in a new tab.
  - **Expected Result**: The 'See All Deals' button will take users to the 'Booking.com' site, which will open in a new tab.
  - **Actual Result**: Pass.

12. I want to view all the recommended places to visit in Skåne on one map, so that I know where they all are in relation to one another.

- Navigate to the 'Map' section of the website.
13. I want to get in touch with the site owner so that I can recommend more places to visit in Skåne.


  
## Manual Testing:

- Manual testing was carried out across a variety of browsers. The results are detailed here: 