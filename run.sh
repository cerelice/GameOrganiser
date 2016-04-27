#!/bin/bash

cd ./backend

forever start server.js

cd ../frontend

grunt serve
