# Conceptual Session-II | `Working Flow`

## Part-01: Introduction to Next.js
- Introduction and overview of Next.js

<br>



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

```jsx
 <body className="min-h-full flex flex-col">
     <h2>Navbar</h2>
     {children}
     <h2>Footer</h2>
 </body>
```



<br>



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



<br>



## Part-05: Server Components, Data Fetching & Loading States

### DaisyUI Spinner

- HashLoader was not working as expected, so replaced it with the DaisyUI loading spinner.

### Convert TrendingApps into a Server Component

- TrendingApps was previously a Client Component. Now, convert it into a Server Component.
- To keep a component as a Server Component, remove unnecessary `useEffect` and `useState` hooks.

**TrendingApps.jsx**

```jsx
const appsPromise = async function () {
    // const res = await fetch("/data.json"); // Failed to parse URL from /data.json
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
};

const TrendingApps = async () => {
    const apps = await appsPromise();
};
```

### Global Loading Spinner

- To show a loading spinner while a page is loading, create a `loading.jsx` file inside the `src/app` directory.
- This works as a global loading UI for the routes.

\<details> \<summary>loading.jsx\</summary>

```jsx
const loading = () => {
    return (
        <div>
            <div className="min-h-screen items-center flex justify-center mx-auto">
                {/* Somehow not working HashLoader */}
                {/* <HashLoader color="#632EE3" size={35}></HashLoader> */}
                <span className="loading loading-dots loading-xl"></span>
            </div>
        </div>
    );
};

export default loading;
```

\</details>

### Dynamic Content Based on Props

- We can pass props to the same component to display different content on different pages.
- Pass `from="homepage"` from the home page and `from="apps"` from the Apps page.

**Usage:**

```jsx
// Apps Page
<TrendingApps from="apps"></TrendingApps>

// Home Page
<TrendingApps from="homepage"></TrendingApps>
```

**TrendingApps.jsx**

```jsx
const TrendingApps = async ({ from }) => {
    // Component content
};
```

**Dynamic Heading:**

```jsx
<h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
    {from === "homepage" ? "Trending Apps" : "All Apps"}
</h2>
```

### Dynamic App Rendering

- Show only 8 apps on the homepage.
- Show all apps on the Apps page.

```jsx
{
    apps.slice(0, from === "homepage" ? 8 : apps.length - 1).map((app, index) => (
        <AppCard
            key={index}
            app={app}
        ></AppCard>
    ))
}
```

- `apps.length - 1` is used as the ending index to exclude the last app from the result.
- `slice()` does not include the ending index.

### Route-Specific Loading Spinner

- To show a separate loading spinner for a specific route, create a `loading.jsx` file inside that route's directory.
- For example, create `loading.jsx` inside the `apps` directory to show a loading UI specifically for the Apps route.

**Folder Structure:**

```text
src/
└── app/
    └── apps/
        ├── page.jsx
        ├── loading.jsx
        └── [id]/
```

### Conditional View All Button

- Show the View All button only on the homepage.
- Use the `from` prop to conditionally render the button.

```jsx
{/* View All Button */}
{
    // loading === false &&
    from === "homepage" &&
    <div className="flex justify-center mt-8">
        <Link href="/apps">
            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                View all <ChevronRight size={18} />
            </button>
        </Link>
    </div>
}
```



Part-06 [03:30]