# SyncSpace - Collaborative Document AI Translations & Live Editing

SyncSpace is a modern real-time collaborative document editing platform with powerful AI-driven features such as chatting with documents, seamless translation, and live multi-user editing. Built with Next.js, Firebase, Liveblocks, and Clerk authentication, SyncSpace enables teams to create, edit, translate, and collaborate on documents securely and efficiently.

***

## Features

- **Real-Time Collaboration:** Multiple users can edit documents simultaneously with live cursors and instant syncing powered by Liveblocks and Yjs.
- **AI-Powered Chat:** Interact with your document content using AI to ask questions, get summaries, and generate insights.
- **Seamless Translation:** Translate your documents to multiple languages while preserving formatting and context with AI-powered translation.
- **Secure Authentication:** Enterprise-grade authentication and user management with Clerk.js.
- **Document Management:** Create, invite collaborators, manage users, and delete documents securely.
- **Responsive Design:** Optimized for desktop with accessible UI components based on Radix UI and Tailwind CSS.



## Architecture Diagram
 <img src="https://i.postimg.cc/0Qn0J0LN/diagram-export-04-09-2025-07-58-39.png" alt="architecture diagram" >






***

## Getting Started

### Prerequisites

- Node.js (Recommended version >= 18)
- Firebase Project with Firestore configured
- Liveblocks account with private API key
- Clerk account for authentication setup

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sujansince2003/SynkSpace-Collaborative-Docs_AI-Translations_Live-Editing.git
cd SynkSpace-Collaborative-Docs_AI-Translations_Live-Editing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure environment variables:

Create a `.env.local` file and add the necessary keys:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
NEXT_PUBLIC_FIREBASE_SERVICE_KEY=your_firebase_service_account_json_base64_encoded
NEXT_PUBLIC_LIVEBLOCKS_KEY=your_liveblocks_public_key
NEXT_PUBLIC_LIVEBLOCKS_PRIVATE_KEY=your_liveblocks_private_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Make sure to encode your Firebase Admin SDK service key as a JSON string base64 or regular JSON and provide it under `NEXT_PUBLIC_FIREBASE_SERVICE_KEY`.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to start using SyncSpace.

***

## Project Structure

- `app/` - Next.js app routes and layouts including:
  - Landing page and docs routes with nested layouts.
- `components/` - React components categorized by usage (general UI, landing page features, collaborative editor, context providers).
- `actions/` - Server actions for document management and user invitations.
- `lib/` - Utility functions including Liveblocks integration and user ownership hook.
- `firebase.ts` & `firebase-admin.ts` - Firebase client and admin configurations.
- `middleware.ts` - Route protection with Clerk middleware.
- `types/` - TypeScript type definitions.
- `components/ui/` - Radix UI primitives wrapped with Tailwind styling for buttons, dialogs, menus, inputs, tooltips, and more.

***

## Key Technologies

- **Next.js:** Framework for react-based server and client rendering.
- **Firebase Firestore:** NoSQL database for storing documents and user-room relationships.
- **Liveblocks:** Real-time collaboration infrastructure.
- **Yjs:** Conflict-free replicated data type (CRDT) for collaborative editing.
- **Clerk:** Authentication and user management.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Radix UI:** Accessible UI primitives supporting customization.
- **BlockNote Editor:** Powerful note-taking and editing component integrated with collaboration.

***

## Usage

- **Create Document:** Use the "Create Doc" button to create a new document.
- **Edit & Collaborate:** Real-time editing with live cursors and user presence inside documents.
- **Invite Users:** Add collaborators to your documents via email invitations.
- **Chat & Translate:** Access AI-powered chat to ask questions about your document or translate it into supported languages.
- **Manage Documents:** Update document titles, delete documents, and manage user roles from the workspace sidebar.

***

## Contributing

Contributions are welcome! Please open issues or pull requests for bug fixes, features, or improvements.

***

## License

This project is licensed under the MIT License.

***

## Author

Developed and maintained with ❤️ by Sujan Khatri ([@sujansince2003](https://www.facebook.com/sujansince2003))

***

This README provides a comprehensive overview, setup instructions, and usage guide for the SyncSpace collaborative document platform repository.

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/92630633/9c230ba4-8db9-433a-be46-da8acdc5de51/paste.txt)
