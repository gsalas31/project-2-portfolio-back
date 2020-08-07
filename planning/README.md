# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description

My app will be a book/author database where users will be able to interact by addindg their favorite literary work and author if missing. They will know more about each author by going through their biography section(saved on our database). User will be able to find their next read (name of book/poem and its author) based on their preferences.

## Wireframes  
- [Mobile](https://res.cloudinary.com/g31ssa/image/upload/v1596207308/phone_w4xva2.jpg)
- [Tablet](https://res.cloudinary.com/g31ssa/image/upload/v1596207298/Desktop_IPAD_isnq88.jpg)
- [Desktop](https://res.cloudinary.com/g31ssa/image/upload/v1596207298/Desktop_IPAD_isnq88.jpg)

## Time/Priority Matrix 
(https://res.cloudinary.com/g31ssa/image/upload/v1596208302/MATRIX_-_BACK_utupru.pdf)

### MVP/PostMVP - 5min

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to add favorite books and authors
- Save their choices for future update 

#### PostMVP 

- Overall CSS 
- Adding quotes/ IMAGES  ffir fav authors 


## Functional Components
#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating Routes | H | 4hr | 1.5hr | -hr|
| Routes Handlers | H | 4hr | 4hr | -hr|
| Schema and Models | H |4hr | 4hr | -hr|
| Functions | H | 7hr| 8hr | -hr |
| Connect to server and test endpoint| H | 4hr | 3hr | -hr|
| Populating info to DOM | H | 7hrs| 4hr | -hr |
| Deployment | H | 6hr | 5hr | -hr|
| Total | H | 32hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Extra imgs | L | 6hr | -hr | -hr|
| Others | L | 6hr | -hr | -hr|
| Total | H | 12hrs| -hrs | -hrs |

## Code Snippet

const writerSchema = new Schema(
    {
        name: { type: String, required: true },
        portrait: { type: String, required: true },
        bio:{
                dob: {type:String},
                description: {type:String, required:true}
            }, 
        books: [
            {
                type: Schema.Types.ObjectId,
                 ref:'Book'
            }
                 ],
        poems: [
            {
                type: Schema.Types.ObjectId,
                 ref:'Poem'
            }
                 ]
    }
)

module.exports = mongoose.model('Writer', writerSchema)


## Issues and Resolutions

Had some problems while deploying to heroku but was able to fix it wuth some instructons. I feel very proud to be able to understand a little more how everything is connected. At some point I felt like it was not just some random coding that i was not able to figure out. Everything started to make sense and very proud of that. 

