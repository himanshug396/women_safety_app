# SheSafe v1 #

1. If you are a collaborator, 
     Run "git clone https://github.com/himanshug396/women_safety_app.git", 
   Else,
     Fork the repo and then run "git clone https://github.com/<YOUR_USERNAME>/women_safety_app.git"
1.1 Create your branch, e.g. git checkout -b rastogi
1.2 To confirm run 'git status' and it would show 'On branch rastogi'
2. For Backend Setup, follow README.md inside backend/
3. For App setup, follow README.md inside mobile_apps/

#Women safety Application :#
SheSafe has been developed considering the increasing cases of crime against women. We have created a simple Hybrid Application to help women in need.
The application SheSafe is successfully built by our team members. 
The theme WOMEN SAFETY is chosen and the project  SheSafe was thought to be started with some major and some minor features.
Features that had to be implemented : 

## Click & Upload
A feature that would help women click the photographs she wanted to share with someone. This feature includes the camera access and FIREBASE cloud storage provided by Google, a send button to share the picture with her contacts via social media or sms ( integrated in the backend).

## Send Alert
This feature is made keeping in mind the urgent need of a women to share her location to specific contacts all at the same time and asking them to keep a eye on her. The present location is taken by the application and send to the corresponding contacts via SMS service that need to be integrated in backend. The user can add contacts itself in the add contact option. 

## Search Nearby Places( like Police Stations , Hospitals, Taxi, Transport) 
This feature is quite useful for anyone who needs to search some near places to him. The app gets the locations via GPS and pass it in the Google Maps to find the nearest places viz.  Police Stations/Hospitals/Taxi/Transport/Banks . This feature includes tabs : Maps & List . Maps would show the location of the places via markers and List would show the places with the Name and the Distance(in km) arranged in ascending order.

## Details about the some areas/localities 
This is one of the major Real-Time feature of the application that includes the rating and reviews of variuous people visiting specific places. E.g. in Chandigarh : Sector34 is an area which is well crowded and had a good transport connectivity and is well lightened(street lights etc). Anyone operating this application can rate Sector34 respective of those three conditions. Also a review feature has been added to it so that if someone wants to tell something to the other users , he can simply review and the reviews are being shown in the area-details-page. Also area is shown on GoogeMaps for easy navigation.

## To show the best safest path to the user
This was thought to be implemented in a way that it shows the best possible safest path based on user ratings. Idea was to get the user input of 2 places i.e. ‘Where he/she is’ and ‘Where she wants to go’. Then based on the rating of the roads , public transport availablity etc, a value is calculated for all the possible paths and shown to user in decreasing order of the safety, most safest path being at the top.
This feature has not been implemented yet.

## User login
For the authentic and appropriate reviews and ratings, the login mechanism is formed so that wrong reviews would have some penalties.

## Contact SheSafe 
A form (email,sub,message) for taking feedback of the users in the application. 
