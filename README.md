# Hyia, I'm Mario, the creator of this HR management platform!

Doctory.network is a real company that asked me to create this mockup for a possible future HR management platform. The license is closed.

## Key Features

- **Professionally studied research page**: Access expertly curated industry insights and reports to support strategic HR decisions.
- **Overall Dashboard**: Get a centralized view of metrics, notifications, and tasks with a real-time interface.
- **Command CLI**: Execute commands and manage tasks efficiently through a powerful command-line interface.
- **UI/UX Spot on**: A visually appealing and user-friendly design that enhances usability and efficiency.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Packages](#packages)
- [Backend Implementation](#backend)
- [Future Features](#future-features)
- [License](#license)

## Installation

To get started with DeployTheThing, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/MarioCarcota/doctory.network
   cd doctory.network
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Configuration

##### Google Maps API Key

To show graphically the position of the candidate I integrated a google maps embed but to work needs an api_key from a google cloud account

##### Email Service /// To be integrated

Need to add an email service (like Resend or Mailgun) to send and receive offer emails and updates.

##### Stripe /// To be integrated

Need to add a stripe logic to handle buying tokens and manage them.

## Packages

- **Framer-Motion**: My main choice for creating animations quickly and securely.
- **Radix-ui**: Quick and secure basic collection of reusable component
- **Styling Helpers**: Class-variance-authority / clsx / tailwind-merge / tailwindcss-animate.
- **lucide-react**: Icon pack.
- **cmdk**: Versatile command palette that allows users to execute commands quickly and efficiently.
- **recharts**: Dynamic and customizable charts, designed for simplicity and performance.
- **sonner**: Accessible notifications with this lightweight and easy-to-use toast notification library.

- **next-themes**: Easily manage and switch between light and dark themes.
- **react-hook-form**: Simplify form handling and validation in React and managing form states.
- **hookform/resolvers**: Integrates validation libraries with React Hook Form easily, enabling seamless schema validation with validation libraries like Zod.
- **Zod**: Define and validate schemas with this schema validation library, ensuring type-safe and reliable data handling in forms.

## Backend Implementation

##### Authentication Context & CRUD Operations:

The authentication context is not yet created as the implementation depends on your choice of database and authentication method. However, it is easily implementable once those details are determined. Similarly, CRUD operations are pre-configured and just require calls to the respective backend functions to be fully operational. For assistance with setting up the auth context, multi-language support, and other features, please visit my other project: [deploythething](https://github.com/MarioCarcota/deploythething) repository for guidance.

## Future Features

##### Terminal CLI:

Enhance the Terminal CLI to provide general, context-aware search results. For example, searching for "male nurse" should return relevant profiles, even if it's not a perfect match, couldn't already be done cause of time and effort constraints.

##### Implement Save Searches:

Add functionality to save searches with specific filters. This will allow HR to easily revisit and reuse previous searches without having to reapply filters each time.

##### Improve Candidates Pipeline:

Rethink the candidate pipeline, currently limited to 4 cards, by better understanding the needs of HR professionals. Aim to redesign it from an HR perspective for enhanced usability and efficiency.

##### In-App Chat:

Integrate a chat feature within the app to facilitate direct communication, eliminating the need for emails. Initially, invite users via email to the platform (the first approach will be, since we know just their emails, would be inviting them on the platform. That implies that we should do a little platform for users too where they can see possible new opportunities and connect with HR)

## License

DeployTheThing is licensed under a Custom License. See the license file for more information.
