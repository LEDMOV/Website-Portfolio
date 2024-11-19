// Blog posts array
const posts = [
    {
        title: "Start or end of an era?",
        date: "19/11/24",
        description: `Just made this simple website to document my life, School career and Qualifications. 
                      Makes it easy for me to look back and see in what detail I've done in the past, but I hope it also gives employers or researchers an easy way to get into my head.<br>None of those mind games candidates love to play with employers.`,
    },
    {
        title: "Another Milestone",
        date: "20/11/24",
        description: `Today, I completed my first Raspberry Pi project involving AI. It was a fantastic learning experience.<br>I look forward to doing more complex projects in the future.`,
    }
];

// Function to render blog posts
function renderBlogPosts(posts) {
    const blogContainer = document.getElementById("blog-posts");
    blogContainer.innerHTML = ""; // Clear existing content

    posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "achievement-card";

        const title = document.createElement("h2");
        title.className = "achievement-title";
        title.textContent = post.title;

        const date = document.createElement("p");
        date.className = "achievement-date";
        date.textContent = post.date;

        const description = document.createElement("p");
        description.className = "achievement-description";
        description.innerHTML = post.description; // Use innerHTML for line breaks

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(description);
        blogContainer.appendChild(card);
    });
}

// Render posts on page load
renderBlogPosts(posts);
