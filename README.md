# blog

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


---

### To-Do-List

- [ ] Add Password reset
- [ ] Add User Profile 
- [ ] Add Admin role (user roles)
- [ ] Add Pagination on video/image and blog page
- [ ] Add Contact forms
- [ ] Add Search bar
- [ ] Add Social Media Buttons / Share Buttons
- [ ] Add Image uploader / Video uploader
- [ ] Add Video page
- [ ] Add Discussion Boards - Community
- [ ] Add Google Sign-In and Facebook Sign-in to Login page
- [ ] Add an SSL Certificate


### Prerequisites
This instructions assume that you already have the following software installed on your system:
- Node.js
- npm
- Git

Before you continue, please check that you have the prerequisites installed properly.

```
$ node -v
v5.9.1
```

```
$ npm -v
3.7.3
```

```
$ git --version
git version 2.2.1
```

### Environment Variable

In order to run this app, you need to set this environment variables 
```
$ export DATABASE_URL=mongodb://localhost/blog
```

## Deploy using Heroku Git

The tutorial assumes that you have a free Heroku account, and that you have Node.js and npm installed locally.

If you do not have access Heroku app, please contact the admin to give you access.

### Install the Heroku CLI
Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)


If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
```bash
$ heroku login
```

### Clone the repository
Use Git to clone <app> source code to your local machine.
```bash
$ heroku git:clone -a <app-name>
$ cd <app-name>
```

### Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.
```bash
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```
