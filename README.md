# My Personal Blog

Welcome to my personal blog built with Next.js! This blog is designed to share my thoughts, experiences, and insights on various topics.

## Features

- **Static Site Generation (SSG)**: The blog is built using Next.js, allowing for fast performance and SEO-friendly pages.
- **TypeScript**: The entire codebase is written in TypeScript, providing type safety and enhancing the development experience.
- **MDX Support**: I use `next-mdx-remote` to handle MDX content, allowing me to write React components alongside markdown.
- **Comment System**: I have integrated [Giscus](https://giscus.app/) for a seamless comment system, allowing visitors to engage with my content easily.
- **Hosted on GitHub Pages**: The blog will be hosted on GitHub Pages, ensuring easy access and deployment.

## Getting Started

To get started with this blog, follow the instructions below.

### Prerequisites

- Node.js (version 18.17 or higher)
- Yarn or npm

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/urbanique87/urbanique87.github.io.git my-project-name
   cd my-project-name
   ```

2. Install dependencies:

   Using Yarn:
   ```
   yarn install
   ```

   Using npm:
   ```
   npm install
   ```

### Development

To run the development server, use the following command:

```
yarn dev
```

or

```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the blog.

### Build and Export

To build the project for production and export it as a static site, run:

```
yarn build
```

or

```
npm run build
```

This will generate the static files in the `out` directory.

### Deploy to GitHub Pages

1. Ensure your `out` directory is ready.
2. Push the contents of the `out` directory to the `gh-pages` branch of your repository.
3. Set the GitHub Pages source to the `gh-pages` branch in your repository settings.

## Future Plans

- Plan to Continuously update the blog with new content and features.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out to me at [jungheeyov@gmail.com](mailto:jungheeyov@gmail.com).
