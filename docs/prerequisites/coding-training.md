# Training in Coding

If you have some programming experience but only in leetcode-style problems and small-scale university projects, and you are looking to learn how to build larger-scale projects, then this guide will help you achieve this. We propose a series of projects that are medium-sized and you can pursue on your own, but they are larger-scale than your usual leetcode-style problems, and will help you get a grasp of architecturing software, using libraries, and improving your debugging skills. These projects may take from a few days to a few weeks each, depending on your level. You can use whatever programming language you prefer or want to learn for these, but probably Python or TypeScript is the easiest.

We recommend not using AI to solve these educational problems so that you can well acquainted with your programming language of choice, even though we do use and encourage the use of AI in your everyday work environment.

These problems are great if you are preparing for a software interview that goes beyond just leetcode (e.g., Common Prefix's SWE interviews).

---

# Games

---

## **Guess the Number**

- CLI game
- The computer guesses a uniformly random number between 0 and 100
- Player gets to guess the computer number by typing it
- Computer tells player if they are too high or too low and lets them try again until they can find the number

## **Snake**

- Graphical single-player game, displays into a window with nice colors
- You can use a library like pygame, cairo, etc.
- This is the classic snake game, you already know the mechanics (snake, fruits, self-collision, walls)

## **Tetris**

- Graphics single-player game
- Usual tetris mechanics, if you want add some nice animations, scoring system, next piece prediction

## **Arcanoid**

- Graphics single-player game
- Google “Arcanoid” to see the gameplay, you probably know this game

## **Pac-man**

- You know what to do
- Optional: Multiple levels, fruits, teleport right-to-left etc.

## **Super Mario**

- Again a graphics single-player game
- You control a character on the screen
- Character walks and jumps on platforms
- There are moving enemies, you can kill them by jumping on them
- Collect coins for points
- Move from left to right, the level scrolls as you move until you get to the end
- Optional: Make a level editor

---

# Graphics

---

## **BMP file loader**

- Your program reads from a BMP image file, but without using any libraries beyond file open / file read
- You must read and understand the BMP format standard
- There are variants of the BMP format, you can download an example BMP and focus on that particular format (e.g., RGB)
- Your program reads the BMP and displays it graphically

## **Grayscale filter**

- Given an existing colorful image, convert it to grayscale and display it
- You can use an existing library for loading images, or your BMP solution
- Use a graphics library like cairo

## **Blur filter**

- Same as previous exercise but apply a Gaussian blur to the image so that it looks blurry
- Allow the user to control the amount of blur (blur radius) by a slider

---

# Audio

---

## **WAV file loader**

- Same as BMP loader, but for audio
- You have to read and understand the WAV format
- Your program reads from a WAV file using only file open / file read libraries
- Your program plays the sounds in the WAV file

## **Pitch filter**

- Your program allows the user to change the pitch of a song
- Your song can be loaded using your WAV solution
- Pitch adjustment means increasing/lowering the pitch and at the same time speeding up / slowing down the song, so it is a very simple waveform transformation

---

# Networking

---

## **CLI HTTP client**

- User enters an HTTP URL, your program connects to the HTTP server and downloads the file
- Do not implement an HTML/CSS renderer or anything like that, just file download
- Do not use any libraries beyond standard TCP sockets
- Parse HTTP responses, interpret HTTP codes, follow redirect codes such as 302
- Optional: Implement extra features based on HTTP headers (e.g., cookies)

## **CLI chat application**

- Two-player CLI program, allows user Alice and user Bob to communicate
- Both run your chat application, each on their own computer
- One of them types the IP of the other
- The chat application connects the two computers
- Only use the standard TCP or UDP sockets, no other libraries
- They can now chat by sending messages to one another
- Note that they don’t have to send messages sequentially: e.g., Alice can send 5 messages, then Bob send 1, then Alice send another 3, etc.
- Optional: “Alice is typing a message…”

## **CLI POP3 / SMTP simple email client**

- Your program connects to target POP3/SMTP endpoint, authenticates itself using username/password that it asks from the user
- Displays user’s emails (subjects and bodies)
- Use standard TCP libraries + TLS libraries

## **Simple CLI DNS resolver**

- User enters a domain name like ‘google.com’
- Your program resolve it to an IP
- Only use UDP sockets/libraries
- Allow user to specify their own DNS server
- Do not allow your OS to do the DNS resolution for you, your program should not use your own OS’s features or DNS server!

## **TFTP CLI client**

- User inputs a TFTP address and filename
- Your program downloads that file using the TFTP protocol
- Use only standard TCP socket libraries

## **CLI torrent client**

- User inputs a .torrent file that your program reads
- Your program downloads the contents
- Use only standard TCP socket libraries
- Do not use a ready torrent protocol implementation or torrent file parser
- Parse the torrent file on your own
- You can use an existing library for benconding
- Connect to tracker, manage peers
- Connect to peers, request chunks
- Check checksums
- Leech and seed
- Optional: Allow resuming download when your program restarts
- Optional: Remember peers across restarts
- Optional: Implement magnet links

---

# Local Tools

---

## **Grep clone**

- Your tool does the same thing as ‘grep’
- You are given a file, or an input stream, and must output those lines matching an expression specified by the user
- Optional: Show the matching keywords in red color, and the rest of the line in white

## **Find clone**

- Your tool does the same thing as ‘find’
- Given a directory and a filename, traverse the directory and all its subdirectories (recursively) to find files that match the pattern given by the user
- Optional: Allow the user to enter regular expressions (you may use a regexp library)

## **CLI symbolic mathematics**

- User enters an expression such as ‘x^2 + 3x + 2’
- Your tool allows computing the derivative symbolically (’2x + 3’)
- Optional: Multiple variables x, y, z, etc.
- Optional: Implement a simplification strategy (e.g. 2x + x + 3 - 1 —> 3x + 2)
- Optional: Implement simple integration strategies (e.g., polynomials)
- Do not use pre-made symbolic mathematics libraries such as sympy! Your program must properly parse the string expressions and understand them.