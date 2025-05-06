
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt: "Discover the emerging trends and technologies that will shape the web development landscape in the coming years.",
    content: `
# The Future of Web Development: What to Expect in 2025

Web development is evolving at a rapid pace. From new frameworks to innovative design patterns, the industry is constantly changing. In this article, we'll explore what the future holds for web developers.

## AI-Powered Development Tools

Artificial intelligence is revolutionizing how we build websites. Tools like GitHub Copilot and AI-assisted debugging are becoming common in developers' workflows. By 2025, we expect these tools to become even more sophisticated, handling complex tasks like:

- Generating entire components based on design mockups
- Automatically detecting and fixing performance issues
- Creating accessibility improvements without manual intervention

## WebAssembly Goes Mainstream

WebAssembly (Wasm) has been around for a few years, but by 2025, it's expected to be a standard part of web development. This technology allows code written in languages like C++, Rust, and Go to run in the browser at near-native speeds.

The implications are enormous:
- More powerful web applications that rival desktop performance
- Complex calculations happening client-side without compromising speed
- Gaming and simulations that were previously impossible on the web

## Micro-Frontends Architecture

As applications grow in complexity, teams are adopting micro-frontends architecture. This approach:
- Breaks down the UI into smaller, independently deployable pieces
- Allows different teams to work on different parts of the application
- Enables a mix of technologies within a single application

By 2025, we expect to see standard patterns and frameworks specifically designed for micro-frontend implementations.

## Conclusion

The web development landscape of 2025 will offer exciting opportunities for developers willing to adapt and learn. By staying informed about these trends, you can position yourself at the forefront of the industry's evolution.
    `,
    author: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    date: "May 2, 2025",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "Future Tech", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    featured: true
  },
  {
    id: "2",
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components and how they're changing the way we build React applications.",
    content: `
# Understanding React Server Components

React Server Components represent a significant evolution in the React ecosystem. Let's explore how they work and why they matter.

## What Are Server Components?

Server Components are React components that run exclusively on the server. They allow you to:

- Access server-side resources directly
- Keep large dependencies on the server
- Reduce bundle size for improved client performance

## How Do They Differ From Traditional Components?

Unlike traditional React components, Server Components:
- Cannot use hooks or state
- Don't have access to browser APIs
- Can fetch data directly without client-side effects

## Real-World Use Cases

Server Components excel in scenarios like:

1. **Data-heavy UIs**: Components that need to display large datasets can fetch and process data server-side
2. **CMS Integration**: Direct database or API access without exposing credentials to the client
3. **Legacy System Integration**: Connect to systems that aren't web-friendly

## Getting Started

Here's a simple example of a Server Component:

\`\`\`jsx
// This component runs only on the server
async function ProductDetails({ id }) {
  const product = await db.products.findUnique({ where: { id } });
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ClientComponent price={product.price} />
    </div>
  );
}
\`\`\`

## The Future of React

Server Components are just the beginning of React's server-first approach. In the coming years, we expect to see more innovations that blur the line between client and server, creating more efficient, secure, and performant applications.
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    date: "April 28, 2025",
    readTime: "6 min read",
    category: "Development",
    tags: ["React", "JavaScript", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: "3",
    title: "The Complete Guide to CSS Grid Layout",
    excerpt: "Master the CSS Grid Layout system with this comprehensive tutorial for beginners and advanced developers alike.",
    content: `
# The Complete Guide to CSS Grid Layout

CSS Grid has revolutionized web layouts, making it easier to create complex designs with less code. This guide will take you from basics to advanced techniques.

## Getting Started with Grid

Creating a grid is simple:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
\`\`\`

This creates a three-column layout with equal column widths and 20px gaps.

## Grid Areas

For more complex layouts, named grid areas offer an intuitive way to design:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Advanced Techniques

### Auto-Fill and Auto-Fit

For responsive designs without media queries:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}
\`\`\`

This creates as many 250px columns as will fit, automatically adjusting as the viewport changes.

### Alignment Control

Grid offers powerful alignment capabilities:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
}
\`\`\`

## Real-World Examples

Let's examine some common layouts and how to implement them with Grid:

1. **Magazine Layout**: Combining different sized elements
2. **Photo Gallery**: Masonry-style layouts
3. **Dashboard Interface**: Complex panels and widgets

## Browser Support

CSS Grid is now supported in all major browsers. For older browsers, consider using a feature detection approach with @supports or a simple fallback layout.

## Conclusion

CSS Grid has matured into an essential tool for modern web design. Its flexibility, power, and intuitive nature make it suitable for everything from simple layouts to the most complex design requirements.
    `,
    author: {
      name: "Michael Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    date: "April 22, 2025",
    readTime: "10 min read",
    category: "Design",
    tags: ["CSS", "Web Design", "Responsive"],
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to make your web applications accessible to all users, including those with disabilities.",
    content: `
# Building Accessible Web Applications

Web accessibility is not just a nice-to-have feature—it's a necessity. This guide explores how to make your web applications usable by everyone, regardless of their abilities.

## Why Accessibility Matters

Web accessibility (often abbreviated as a11y) ensures that websites and applications can be used by people with:
- Visual impairments
- Hearing impairments
- Motor limitations
- Cognitive disabilities

Beyond being ethically right, accessibility is:
- Required by law in many countries
- Good for SEO
- Beneficial for all users, not just those with disabilities

## Key Accessibility Principles

### 1. Semantic HTML

Using appropriate HTML elements communicates meaning to assistive technologies:

\`\`\`html
<!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
\`\`\`

### 2. Keyboard Navigation

All interactive elements should be accessible via keyboard:
- Ensure logical tab order
- Make focus states clearly visible
- Implement keyboard shortcuts for complex actions

### 3. Alternative Text

Images need descriptive alt text:

\`\`\`html
<img src="chart.png" alt="Bar chart showing sales increasing 25% in Q3 2024">
\`\`\`

### 4. ARIA When Necessary

ARIA (Accessible Rich Internet Applications) attributes enhance HTML:

\`\`\`html
<div 
  role="alert" 
  aria-live="assertive"
>
  Your changes have been saved
</div>
\`\`\`

## Testing for Accessibility

Several approaches should be combined:
1. **Automated testing** with tools like Axe or Lighthouse
2. **Manual testing** with keyboard navigation
3. **Screen reader testing** with VoiceOver, NVDA, or JAWS
4. **User testing** with participants who have disabilities

## Common Issues and Fixes

### Color Contrast

Insufficient contrast makes text difficult to read:
- Use tools like WebAIM's Contrast Checker
- Aim for WCAG AA standard (4.5:1 for normal text)

### Form Accessibility

Forms are often problematic:
- Always use proper labels
- Group related fields with fieldset
- Provide clear error messages

## Integrating Accessibility into Your Workflow

- Start with accessible design patterns
- Include accessibility in code reviews
- Add automated tests to CI/CD pipelines
- Train teams on accessibility fundamentals

## Conclusion

Building accessible applications is a continuous process that should be integrated into every stage of development. By following these guidelines, you'll create better experiences for all users while meeting legal requirements and improving your SEO.
    `,
    author: {
      name: "Emily Washington",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    date: "April 15, 2025",
    readTime: "12 min read",
    category: "Development",
    tags: ["Accessibility", "Web Development", "HTML"],
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "5",
    title: "The Psychology of User Experience Design",
    excerpt: "Explore how psychological principles can inform better UX design and create more engaging digital experiences.",
    content: `
# The Psychology of User Experience Design

Understanding human psychology is fundamental to creating exceptional user experiences. This article explores key psychological principles and how to apply them in UX design.

## Cognitive Load Theory

Users have limited cognitive processing capacity. To design effectively:

- Break complex tasks into smaller steps
- Remove unnecessary elements
- Group related information
- Use familiar patterns and conventions

## The Von Restorff Effect

Also known as the "isolation effect," this principle states that items that stand out are more likely to be remembered:

- Use distinct styling for primary actions
- Highlight important information
- Create visual hierarchy to guide attention

## Hick's Law

The time it takes to make a decision increases with the number and complexity of choices:

- Limit options in navigation
- Use progressive disclosure for complex features
- Prioritize common actions

## The Serial Position Effect

Users tend to remember items at the beginning (primacy) and end (recency) of a list:

- Place the most important items at the beginning or end of menus
- Consider this when designing onboarding sequences
- Use for content organization on landing pages

## Gestalt Principles

These principles explain how humans perceive patterns, groups, and relationships:

### Proximity
Elements close to each other are perceived as related:

\`\`\`css
/* Grouping related items */
.related-items {
  display: flex;
  gap: 8px;
}

/* Separating unrelated sections */
.section {
  margin-bottom: 40px;
}
\`\`\`

### Similarity
Similar elements are perceived as related:

\`\`\`css
/* Making all action buttons visually similar */
.action-button {
  background-color: #0066cc;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
\`\`\`

### Closure
The mind fills in missing information to create complete shapes:

This explains why users can recognize icons and simplified visuals.

## Practical Applications

### Forms Design
- Group related fields
- Show only relevant fields
- Provide immediate validation feedback

### Navigation
- Organize by user mental models
- Limit main navigation options
- Use recognizable patterns

### Content Design
- Use chunking for better comprehension
- Create visual hierarchy with typography
- Use white space to reduce cognitive load

## Testing Psychology-Based Designs

- A/B testing to validate assumptions
- Eye-tracking studies to observe attention patterns
- User interviews to understand mental models

## Conclusion

Psychological principles provide a scientific foundation for making design decisions. By understanding how users think, perceive, and behave, we can create more intuitive and effective digital experiences.
    `,
    author: {
      name: "David Nguyen",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    date: "April 10, 2025",
    readTime: "9 min read",
    category: "Design",
    tags: ["UX Design", "Psychology", "Web Design"],
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
];

export const getRecentPosts = () => {
  return [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};

export const getPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getPostsByTag = (tag: string) => {
  return blogPosts.filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
};

export const getAllCategories = () => {
  const categories = new Set(blogPosts.map(post => post.category));
  return Array.from(categories);
};

export const getAllTags = () => {
  const tags = new Set(blogPosts.flatMap(post => post.tags));
  return Array.from(tags);
};

export const searchPosts = (query: string) => {
  const searchTerms = query.toLowerCase().split(' ');
  
  return blogPosts.filter(post => {
    const content = `${post.title} ${post.excerpt} ${post.content} ${post.category} ${post.tags.join(' ')}`.toLowerCase();
    return searchTerms.every(term => content.includes(term));
  });
};
