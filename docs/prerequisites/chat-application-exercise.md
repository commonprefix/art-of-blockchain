# Chat Application Exercise

This exercise involves creating a command-line chat application that enables real-time communication between multiple users through WebSocket connections. The project encompasses both server and client components, focusing on providing a smooth, interactive chat experience directly from the terminal. It is strongly recommended that you first build a simple functional solution, and then build on top of it. As you progress through each chapter, use the new tools and techniques you learn to improve the Chat Application until you meet all the targets set below.

### Server Implementation

The server component forms the backbone of the chat application. It should handle WebSocket connections from multiple clients simultaneously while managing user sessions and authentication. The authentication system should be straightforward, using only usernames without passwords, but must prevent duplicate usernames and maintain accurate user status tracking.

Room management is a crucial aspect of the server's functionality. Users should be able to create new chat rooms, join existing ones, and participate in multiple rooms concurrently. The server must maintain a list of active users per room and handle user transitions between rooms seamlessly.

For message handling, the server should broadcast messages to all members of a room while also supporting private messages between users. Each message needs proper timestamping, and the server should maintain a message history of the last 50 messages per room. The system should distinguish between different types of messages, including regular chat messages, join/leave notifications, and system messages.

### Client Interface

The client interface should provide an intuitive command-line experience that doesn't sacrifice functionality for simplicity. Users should be able to type messages and commands while simultaneously receiving incoming messages without disruption. The interface should support command history through up/down arrow keys and provide tab completion for both commands and usernames.

Essential commands should include:

* `/help` for viewing available commands
* `/join` and `/leave` for room management
* `/rooms` and `/users` for viewing available rooms and current room participants
* `/msg` for private messaging
* `/quit`, `/clear`, and `/nick` for general interface control

The display should utilize colors effectively to distinguish between different types of messages and include clear indicators for timestamps, user status, and current room information. Connection status should always be visible to users.

### Technical Considerations

Error handling deserves special attention in this application. The system should gracefully handle connection losses with automatic recovery attempts, manage server timeouts, implement rate limiting to prevent abuse, and validate all user input. The application should support at least 100 concurrent connections while maintaining message delivery latency under 100ms.

The codebase should follow a modular design with clear separation of concerns. This includes implementing a robust logging system and maintaining consistent error handling throughout the application. Configuration options should be externalized to allow easy modification of server settings, color schemes, and other parameters.

### Testing Strategy

Testing should cover the entire application through a combination of unit and integration tests. Unit tests should focus on core functionality like message handling, command parsing, and user/room management. Integration tests should verify the complete flow of operations from client connection through message delivery.

Load testing is essential to verify the application can handle the required number of concurrent users and maintain performance under heavy message traffic. These tests should verify room capacity limits and message throughput capabilities.