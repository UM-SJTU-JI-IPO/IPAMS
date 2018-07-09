## UM-SJTU JI IPAMS

# This Project is permanently suspended according JI IT instructions for security concerns

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



### Licence

Except for the code which is not the working result of this project, this project is using 
[GNU GENERAL PUBLIC LICENSE](https://github.com/UM-SJTU-JI-IPO/IPAMS/blob/master/LICENSE).

The commercial products which are used in this project are still subject to ***the original licences***.



### Current Progress

Please check [**Projects**](https://github.com/JI-IPO/IPAMS/projects).
