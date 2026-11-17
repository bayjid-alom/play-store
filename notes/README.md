# Conceptual Session-II | `Working Flow`

## Part-01: Introduction to Next.js
- Introduction and overview of Next.js



## Part-02: Project Setup & Routing

### Project Setup
- Create a new Next.js project named `play-store-next`.
- Remove all default code from `page.js`.
- Remove the default theme and styles from `globals.css`.

### DaisyUI Setup
Install DaisyUI:

    npm install -D daisyui@latest

Add the plugin to `globals.css`:

    @plugin "daisyui";

Set the default theme in `layout.js`:

    <html data-theme="light">

### Routing
- Create a folder inside `src/app` and add a `page.jsx` file to define a route.
- Each folder represents a route, and its `page.jsx` file defines the UI for that route.

**Example folder structure:**

    app/
    ├── apps/
    │   └── page.jsx
    ├── installation/
    │   └── page.js
    ├── app-details/
    │   └── [id]/
    │       └── page.jsx
    └── not-found.jsx

- `not-found.jsx` | Create a custom global 404 page.
- Dynamic routing | Use route parameters to access dynamic IDs.

### Dynamic Route Parameters

    const AppDetailsPage = async ({ params }) => {
        const { id } = await params;
        console.log(id, "from details page");
    };

### Favicon
- Replace the existing `favicon.ico` image with your preferred icon.
- Keep the same file name: `favicon.ico`.

### Components
- Create a `components` folder inside `src` to organize reusable components.

### Dynamic Tab Name (Metadata)

Use the `metadata` export to set the page title and description:

    export const metadata = {
        title: "Play Store | Apps",
        description: "This is an apps page of Play Store website",
    };

    const AppsPage = () => {};

### Layout Structure

Use `layout.jsx` to define the common structure shared across pages.

    <body className="min-h-full flex flex-col">
        <h2>Navbar</h2>
        {children}
        <h2>Footer</h2>
    </body>

## Part-03: Navbar & Others

- Navbar implementation and other common components.

## Part-04: Using Online Images in Next.js

- To use images from an external URL with Next.js `Image`, configure the image domain in `next.config.mjs`.
- After changing the configuration, restart the development server using `npm run dev`.

**Example:**

    <Image
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
    />

### Configure Remote Images

Add the following configuration to `next.config.mjs`:

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3.amazonaws.com",
                port: "",
                pathname: "/my-bucket/**",
                search: "",
            },
        ],
    },

- To use images from another domain, add another object inside `remotePatterns`.


### Best Way: Allow Images from Any HTTPS Domain

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },

- Now, you can use images from any HTTPS image resource without configuring each domain separately.





## Client-Side Rendering (CSR)

1. User requests a website.
2. Server sends a basic HTML file containing JavaScript file references.
3. Browser parses the HTML and constructs the DOM.
4. Browser downloads the required CSS and JavaScript files.
5. Browser executes the JavaScript code to render the page content.
6. Browser displays the fully rendered website to the user.


## Server-Side Rendering (SSR)

1. User requests a website.
2. Server receives the request and executes the required code.
3. Server fetches the necessary data.
4. Server generates the complete HTML page with the content.
5. Server sends the rendered HTML to the browser.
6. Browser parses the HTML and displays the page content.
7. Browser downloads and executes the JavaScript files to make the page interactive (Hydration).


### Server Component vs Client Component

- **Server Component** | Default component in Next.js. No need to add any directive.
- **Client Component** | Add `"use client"` at the top of the file to enable client-side features like `useState`, `useEffect`, and event handlers.

**Recommendation:**
- Try to keep components as Server Components whenever possible.
- Use Client Components only when you need interactivity or browser-specific features.
- Avoid making unnecessary Client Components to keep the application lightweight and improve performance.


<br>



### `page.js` | Home
### `layout.js` | Root Layout

- `layout.js` defines the common layout shared across all pages.
- Place reusable components like `Navbar` and `Footer` inside the root layout.
- `{children}` renders the content of the currently active page.
- Use padding-top (`pt-[66px]`) to prevent page content from overlapping with a fixed navbar.

**Example:**

```jsx
<body>
  <Navbar />

  <main className="pt-[66px]">
    {children}
  </main>

  <h2>Footer</h2>
</body>
```






## Part-05 

- HashLoader was not working as expected, so replaced it with the DaisyUI spinner.
18:30





