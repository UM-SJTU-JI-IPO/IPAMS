## UM-SJTU JI IPAMS

### Introduction

This is the website for application website of [UM-SJTU Joint Institute International Programs Application and Management System](https://umji.sjtu.edu.cn/global/apply).

### Usage

Please check [***wiki***](https://github.com/JI-IPO/IPAMS/wiki) before you start !!!

### Environment Set Up for Developer

#### Recommended Env Setup

Prepare
- macOS with valet is great

Procedure
- Git clone this repo
- Install npm, composer, laravel, setup MySQL.
- run `npm install`, `composer install`
- Copy .env from our shared onenote
- Start Coding.

### Compile `CSS` `JS`
Sources are stored in `/resource/assets`, configure file is `gulpfile.js`. This project
is stil using `Laravel Elixir` instead of `Laravel Mix` to compile due to some source reference
problems. It should be fixed if time available.

To compile new `.css` and `.js`, just run `gulp` in project directory.

## Attention
The website has not been deployed yet, the following info is used 
for develpor's refence.

### Deployment

**Server:**

FTP:

202.121.178.212

**Database:**

phpmyadmin.umji.sjtu.edu.cn

Please remeber to add the following line to hosts file of your computer to get access to phpmyadmin:

202.121.178.212 phpmyadmin.umji.sjtu.edu.cn



### Attention

Please ***DO NOT*** distribute the source codes of this project.



### Current Progress

Please check [**Projects**](https://github.com/JI-IPO/IPAMS/projects).