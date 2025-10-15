// Load and display blog posts from JSON data
async function loadBlogPosts() {
    try {
        const response = await fetch('blog/0-blog-data.json');
        const data = await response.json();

        // Load blog posts
        const postsContainer = document.getElementById('blog-posts');

        data.posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'callout';

            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p class="subtitle">${post.date} - ${post.category}</p>
                <p>${post.excerpt}</p>
                <p><a href="${post.link}">Read more →</a></p>
            `;

            postsContainer.appendChild(postDiv);
        });

        // Load topics
        const topicsContainer = document.getElementById('blog-topics');

        data.topics.forEach(topic => {
            const topicLi = document.createElement('li');
            topicLi.innerHTML = `<a href="#">${topic}</a>`;
            topicsContainer.appendChild(topicLi);
        });
    } catch (error) {
        console.error('Error loading blog posts:', error);
        // Fallback content if JSON fails to load
        document.getElementById('blog-posts').innerHTML =
            '<p>Unable to load blog posts. Please check back later.</p>';
    }
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', loadBlogPosts);
