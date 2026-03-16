---
title: Snake Rubik
description: Rubix Cube functionality merged with Snake Game
lang: "en"
group: "Snakerubik"
cover: "/Media/SnakeRubik/snake.png"
url: https://github.com/checho1402/SnakeRubik
---

In this project, we have taken the Rubik's Cube experience to a new level by merging it with the classic **Snake** game. This game has been reinterpreted in a two-dimensional environment where **each segment of the snake is a Rubik's Cube either solved or waiting to be solved**. The essence of the game lies in the constant resolution of these cubes while the snake moves through space, consuming **fruits**, which are represented by additional scrambled cubes placed at a random position within the game space.

This video demonstrates the **snake movement and the cube animation** while the game is running.
<p align="center">
<video src="/Media/SnakeRubik/animation_video.mp4" controls width="700" autoplay loop></video>
</p>

## ✨ Representation of the Snake and the Fruits

- **Snake Head:** The snake’s head is an initially solved Rubik's Cube. This cube acts as the main entity that guides the snake’s movement.
- **Snake Tail:** Each time the snake consumes a fruit, a new scrambled Rubik's Cube is added to its tail. This tail represents the history of consumed fruits.
- **Fruits:** The fruits are scrambled Rubik's Cubes scattered throughout the three-dimensional space. Once consumed, they attach to the snake’s tail, and solving them becomes part of the ongoing challenge.

## 📱 **Game Dynamics**

- **Snake Movement:** The snake moves through three-dimensional space following a predefined pattern. As it advances, the snake’s head resolves its own state, always remaining solved.
- **Fruit Consumption:** When the snake’s head comes into contact with a fruit, it attaches to the tail. The solving process of the fruit begins, and the game continues as the snake searches for the next fruit.


## 🏗️ Project Structure

```
SnakeRubik/
├── Project_108_Snake_Ubuntu/
│   ├── CSolver/src/
│   │   ├── rubik-cube-solver.hpp              #Solver Rubik
│   │   ├── rubik_cube_3basic_solver.cpp       #Solver 3 basic
│   │   └── ....
│   ├── main.cpp
│   ├── rubikCube.h      
│   ├── shapes.h      
│   ├── snake.h 
│   ├── temp_script.py
│   └── .....
├── Project_108_Windows_Snake/
│   ├── CSolver/
│   │   ├── rubik-cube-solver.hpp            
│   │   ├── rubik_cube_3basic_solver.cpp    
│   │   └── ....
│   ├── CMakeList.txt  
│   ├── main.cpp       
│   ├── rubikCube.h      
│   ├── shapes.h      
│   ├── snake.h         
│   └── ....  
├── Project_Ubuntu_Solver/
└── Project_Windows_Solver/Project_108s/      

```

## 🚀 Getting Started

### Prerequisites

- OpenGL  
- glad  

## 🎥 Solver Demonstration

This video shows how the **Rubik's Cube solver** works when a scrambled cube is consumed by the snake.
<p align="center">
<video src="/Media/SnakeRubik/solver_video.mp4" controls width="700" autoplay loop></video>
</p>

## 📧 Contact

- **Email:** slrv.ramosv@gmail.com
- **LinkedIn:** [sergioramosvillena](https://www.linkedin.com/in/sergio-leandro-ramos-villena-45b0bb270/)
- **Phone:** +51 3932416666

**Made with ❤️ by Sergio Ramos and Luigi Cabrera | 2023**


