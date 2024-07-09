<h1 align="center" style="font-weight: bold;">Simpple Back-end 💻</h1>
<p align="center">Simple back-end for webdevelopment classes at UniSenai university</p>

<h2 align="center">Tecnologies</h2>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,prisma,nodejs,mongodb" />
  </a>
</p>

<p align="center">
  <b>Simple back-end for a web app that register clients, personal and enterprises.</b>
</p>

<h2 align="center" id="started">🚀 Start from 0</h2>
<p>First you need a Mongodb acount and NodeJs installed</p>
<p>them to inicialize the project</p>
```bash
npm init -y
```
<p>install the express library</p>
```bash
npm i express
```
<p>create a file server,js and import express</p>
<p>put express in a variable like this: const app = express()</p>
<p>then use it: app.use(express.json()) for tell express we are using Json type</p>
<p>install prisma</p>
```bash
npm i prisma --save-dev
```
<p>iniciate prisma</p>
```bash
npx prisma init
```
<p>put your database url and code at .env file</p>
<p>change to your model the schems.prisma file</p>
<p>use the bellow command to push your model into MongoDB and see if it is all ok</p>
```bash
npx prisma db push
```
<p>inistall prisma cliente</p>
```bash
npm i @prisma/client
```
<p>iniciar o prisma studio</p>
```bash
npx prisma studio
```
<h2 align="center" id="routes">📍 API Endpoints</h2>
<p align="center"> All API endpoints are at server.js file</p>
