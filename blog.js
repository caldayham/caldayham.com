// Store all posts globally
let allPosts = [];

// Function to dynamically resize dropdown to fit selected option
function resizeDropdown(selectElement) {
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.fontSize = '1.25rem';
    tempSpan.style.fontWeight = '600';
    tempSpan.style.fontFamily = getComputedStyle(selectElement).fontFamily;
    tempSpan.style.fontStyle = 'italic';
    tempSpan.textContent = selectElement.options[selectElement.selectedIndex].text;
    document.body.appendChild(tempSpan);
    selectElement.style.width = (tempSpan.offsetWidth + 5) + 'px';
    document.body.removeChild(tempSpan);
}

// Load and display blog posts from JSON data
async function loadBlogPosts() {
    try {
        const response = await fetch('blog/0-blog-data.json');
        const data = await response.json();
        allPosts = data.posts;

        const filterDropdown = document.getElementById('blog-filter');

        // Initial display with "recent" filter
        displayPosts('recent');
        resizeDropdown(filterDropdown);

        // Add event listener for filter dropdown
        filterDropdown.addEventListener('change', (e) => {
            displayPosts(e.target.value);
            resizeDropdown(e.target);
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

// Display posts based on selected filter
function displayPosts(filter) {
    const container = document.getElementById('blog-posts');
    container.innerHTML = ''; // Clear existing content

    // Filter out unpublished posts first
    let filteredPosts = allPosts.filter(p => p.published === true);

    // Apply filter
    if (filter === 'recent') {
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'popular') {
        filteredPosts.sort((a, b) => b.views - a.views);
    } else if (filter === 'personal-development') {
        filteredPosts = filteredPosts.filter(p => p.tags.includes('Personal Development'));
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'systems-thinking') {
        filteredPosts = filteredPosts.filter(p => p.tags.includes('Systems Thinking & Cognition'));
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'strategy-growth') {
        filteredPosts = filteredPosts.filter(p => p.tags.includes('Strategy & Growth Philosophy'));
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'complexity') {
        filteredPosts = filteredPosts.filter(p => p.tags.includes('Complexity & Philosophy'));
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // Render filtered posts
    filteredPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'callout';

        // Generate video thumbnail or fallback
        let mediaElement = '';
        if (post.video && post.video !== '') {
            // Extract YouTube video ID
            const videoId = post.video.includes('youtube.com') || post.video.includes('youtu.be')
                ? post.video.split('v=')[1]?.split('&')[0] || post.video.split('/').pop()
                : null;

            if (videoId) {
                mediaElement = `<img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="${post.title}" style="width: 200px; height: 150px; object-fit: cover; border-radius: var(--border-radius); pointer-events: none; flex-shrink: 0;">`;
            } else {
                mediaElement = `<div style="width: 200px; height: 150px; background: var(--callout-bg); border-radius: var(--border-radius); display: flex; align-items: center; justify-content: center; color: var(--text-secondary); flex-shrink: 0;">Video</div>`;
            }
        } else {
            mediaElement = `<div style="width: 200px; height: 150px; background: var(--callout-bg); border-radius: var(--border-radius); flex-shrink: 0;"></div>`;
        }

        postDiv.innerHTML = `
            <div style="display: flex; gap: 1.5rem; margin-bottom: 1rem; align-items: flex-start;">
                <div style="flex: 1;">
                    <h3 style="margin-bottom: 0.25rem;">${post.title}</h3>
                    <p class="subtitle" style="margin-bottom: 0;">${post.date}</p>
                </div>
                ${mediaElement}
            </div>
            <div>
                <p style="margin-bottom: 1rem;">${post.excerpt}</p>
                <p style="margin-bottom: 0;"><a href="${post.link}">Read more →</a></p>
            </div>
        `;

        container.appendChild(postDiv);
    });

    // Handle empty results
    if (filteredPosts.length === 0) {
        container.innerHTML = '<p>No posts found for this filter.</p>';
    }
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', loadBlogPosts);
