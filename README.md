# Canvas Ball Animation

This is a simple JavaScript animation project that utilizes the HTML5 Canvas API. The project creates an animation where multiple balls of different sizes and colors move randomly across the screen. When a ball hits an edge, it bounces back, creating a continuous, dynamic animation.

## Installation

1. Clone the repository to your local machine or download the files directly.
2. Open the `index.html` file in your web browser to view the animation.

## Usage

The animation starts automatically when you open the HTML file. Just sit back and enjoy the display of bouncing, colorful balls.

## Code Overview

The main logic of this project resides in the `script.js` file. The file begins by setting the canvas dimensions to match the window size. 

An array of ball objects is then created. Each ball has properties for its position (x, y), velocity (dx, dy), radius, and color. The positions and velocities are randomly generated to ensure each animation is unique.

The `drawBall` function is responsible for drawing each ball on the canvas. It creates a circle at the ball's current position, fills it with the ball's color, and then closes the path.

The `draw` function clears the canvas, then loops through the array of balls, drawing each one and updating its position. If a ball hits an edge of the canvas, its direction is reversed, giving the illusion of bouncing. Finally, the `draw` function calls `requestAnimationFrame` on itself to create a smooth animation.

## Contributing

Feel free to fork this project, modify it, and create pull requests for any features you think would improve the animation.

## License

This project is open source, under the [MIT License](LICENSE).
