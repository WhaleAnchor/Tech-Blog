<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]

[![MIT License][license-shield]][license-url]

<div>
<h2 align="center">The Tech Blog</h2>
<p align="center">
    A blog where tech enthusiasts can come to chat!
    <br />
    <a href="https://github.com/WhaleAnchor/Tech-Blog"><strong> Go to the GitHub Repository »</strong></a>
    <br />
    <br />
    <a href="https://arcane-caverns-02440.herokuapp.com/">Deployed on Heroku</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>

## Table of Contents

<li><a href="#about-the-project">About the Project</a></li>
<li><a href="#built-with">Built With</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contact">Contact</a></li>

## About The Project

![Tech-Blog](/assets/screenshot1.png "Image of tech blog home page") 

The Tech Blog website is a place where users can come and talk about any topics they like!
* Users and login/signup and start joining in on any conversation. 
* Users can create posts, edit posts, as well as delete them.
* Additionally, users can interact with another's post with comments!
* This website was made with Express, Node, MySQL, and Handlebars. 

![Tech-Blog](/assets/screenshot2.png "Image of tech blog dashboard") 

Here is a link to the repo: <a href="https://github.com/WhaleAnchor/Tech-Blog">Tech-Blog</a>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

[![Handlebars][handlebars-shield]][handlebars-url]

[![NodeJS][nodejs-shield]][nodejs-url]

[![ExpressJS][expressjs-shield]][expressjs-url]

[![mysql][mysql-shield]][mysql-url]

[![sequelize][sequelize-shield]][sequelize-url]

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

1. Clone the repo.
    ```sh
    git clone https://github.com/WhaleAnchor/Tech-Blog
    ```
2. Add your .env file. It should look like this:
   ```sh
    DB_NAME='tech_blog_db'
    DB_PASSWORD= [yourpasswordhere]
    DB_USER='root'
    DB_HOST='localhost'
   ```
3. Run the schema.sql from your mySQL shell.
    ```sh
    source db/schema.sql;
    quit;
    ```
4. Run the seeds and install your Node packages, run the seeds, and start the app!
    ```sh
    npm i && npm run seed && npm start
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

If you want to try using the deployed website follow these instructions below!

1. Head over to the deployed website on Heroku!
   ```sh
   https://arcane-caverns-02440.herokuapp.com/
   ```
2. Sign up and you can start right away!

![Tech-Blog](/assets/screenshot3.png "Instructions to sign up") 

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Andrew Choi - https://github.com/WhaleAnchor

Project Link: [[https://github.com/WhaleAnchor/Employee-Tracker](https://github.com/WhaleAnchor/Tech-Blog)]([https://github.com/WhaleAnchor/Employee-Tracker](https://github.com/WhaleAnchor/Tech-Blog))

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Markdown links -->
[contributors-shield]:https://img.shields.io/github/contributors/WhaleAnchor/Tech-Blog.svg?style=for-the-badge
[contributors-url]:https://github.com/WhaleAnchor/Tech-Blog/graphs/contributors

[license-shield]:https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]:https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

[handlebars-shield]:https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black
[handlebars-url]:https://handlebarsjs.com/guide/#what-is-handlebars

[nodejs-shield]:https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[nodejs-url]: https://nodejs.org/en/

[expressjs-shield]:https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[expressjs-url]:https://www.google.com/search?q=express+js&oq=express+js&aqs=chrome.0.69i59l2j0i67j0i131i433i512l2j69i60l3.2461j0j7&sourceid=chrome&ie=UTF-8

[mysql-shield]:https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]:https://www.mysql.com/

[sequelize-shield]:https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[sequelize-url]:https://sequelize.org/

