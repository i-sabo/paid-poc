# react-boot-hello

A "Hello World" using some interesting technologies.

Frontend:

* Universal/isomorphic view rendering with **React**
* Routing with **React Router**
* **Redux** state container
* **Express** framework
* **Node.js** environment
* Module bundling with **Webpack**
* JavaScript compilation with **Babel**

Backend:

* REST API implemented using **Spring Boot**
* Caching with **Ehcache**

Infrastructure:

* **Nginx** as a reverse proxy

Development environment:

* **Vagrant** development environment
* **Ansible** provisioning of required software


## Implementation status

Implemented so far:

* Configuring and provisioning a Vagrant box
* Starting a Spring Boot application
* REST API returns some dummy JSON objects
* Frontend app displays a list of objects retrieved over the REST API

To do:

* Frontend: API calls are currently made from the browser only. They should also be made from the server when doing the initial server-side render
* Frontend: Use e.g. Sass for CSS pre-processing
* Backend: Use a database instead of hard-coded data
* Etc.


## Server configuration

The following configuration is built on the Vagrant box:

* Nginx listens on port 80 (Vagrant forwards to this port from port 12345)
* URIs starting with `/api/` are forwarded to the Spring app (port 8080)
* Other requests are forwarded to the Node app (port 3000)


## Running

Start the Vagrant box and connect to it:

    vagrant up
    vagrant ssh

Compile and start the backend app:

    cd ~/project/backend
    ./gradlew build
    java -jar build/libs/react-boot-backend-0.0.1.jar

Start the frontend app:

    cd ~/project/frontend
    npm install
    NODE_ENV=production npm start

The frontend app should now be visible at <http://127.0.0.1:12345/>.
