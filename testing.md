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

- Navigate to the 'Lakes and Forests' section. The 'Lakes' image shows a picture of a lake, and the text below the image details some recommended lakes in Skåne. 
At the bottom of the card, the text below the 'Lake' card says 'Show on Map'. When clicked, this will hide the image, and show the 
map. On the map, there are 3 custom markers. Click on each of them, and an infowindow will open. The Hjälmsjön and Lake Immeln infowindows detail information about 
opportuinties for conoeists and those wanting to go fishing. The Hammarsjön infowindow details information about the landscape and waterfoul in the area.  Additionally, there is a link to the external site from where the text was sourced. 
The external site also gives the site visitor more information about the destination. When 'Hide Map' is clicked, the map is hidden, and the image is shown once more.

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

- Navigate to the 'Lakes and Forests' section. The 'Forest' and 'National Parks' images image show pictures of a National Park, and a Forest. The text below the 
image details some recommended forests and National Parks in Skåne. At the bottom of each card, the text below the image says 'Show on Map'. When clicked, this will 
hide the image, and show the map. On each map, there are custom markers. Click on each of them, and an infowindow will open. Each infowindow details information about 
recommended forests or National Parks in Skåne. Additionally, there is a link to the external site from where the text was sourced. 
The external site also gives the site visitor more information about the destination. When 'Hide Map' is clicked, the map is hidden, and the image is shown once more.

  - 'Forests' card.

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

  - Skrylle infowindow.

- User stories five and seven are concerned with finding beaches suitable for a seaside holiday. 

5. I have booked a holiday to Skåne, and I want to find out where there are some beaches, so that I can enjoy a seaside break.
7. I want to find out whether there are any nice beaches in Skåne, so that I know whether to book a beach holiday there.

- The 'Beautiful Beaches' section displays 3 cards. Each card represents a different part of the Skåne coastline, and shows an image of a beach in that region.
Below the image, the text gives details of recommended beaches in that area. When 'Show on Map' is clicked on each card, a map is revealed, and the image is hidden. 
Each map shows custom icons. Some of them are displayed as markerclusters initially, due to the zoom level required to display them all on the map.  
When the icons are clicked, they open infowindows which display information about each beach. Additionally, each infowindow has a link to the external site from where the text was sourced. 
The external site also gives the site visitor more information about the destination. When 'Hide Map' is clicked, the map is hidden, and the image is shown once more.
  
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



11. I want to find some hotel deals, so that I can book my holiday in Skåne.
12. I want to view all the recommended places to visit in Skåne on one map, so that I know where they all are in relation to one another.
13. I want to get in touch with the site owner so that I can recommend more places to visit in Skåne.

## Manual Testing:

- Manual testing was carried out across a variety of browsers. The results are detailed here: 