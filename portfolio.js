// Store all projects globally
let allProjects = [];

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

// Load and display portfolio projects from JSON data
async function loadPortfolioProjects() {
    try {
        const response = await fetch('portfolio/0-portfolio-data.json');
        const data = await response.json();
        allProjects = data.projects;

        const filterDropdown = document.getElementById('portfolio-filter');

        // Initial display with "recent" filter
        displayProjects('recent');
        resizeDropdown(filterDropdown);

        // Add event listener for filter dropdown
        filterDropdown.addEventListener('change', (e) => {
            displayProjects(e.target.value);
            resizeDropdown(e.target);
        });
    } catch (error) {
        console.error('Error loading portfolio projects:', error);
        // Fallback content if JSON fails to load
        document.getElementById('portfolio-projects').innerHTML =
            '<p>Unable to load projects. Please check back later.</p>';
    }
}

// Display projects based on selected filter
function displayProjects(filter) {
    const container = document.getElementById('portfolio-projects');
    container.innerHTML = ''; // Clear existing content

    let filteredProjects = [...allProjects];

    // Apply filter
    if (filter === 'recent') {
        filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'popular') {
        filteredProjects.sort((a, b) => b.views - a.views);
    } else if (filter === 'research') {
        filteredProjects = filteredProjects.filter(p => p.tags.includes('Research'));
        filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'design') {
        filteredProjects = filteredProjects.filter(p => p.tags.includes('Design'));
        filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'personal') {
        filteredProjects = filteredProjects.filter(p => p.tags.includes('Personal'));
        filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // Render filtered projects
    filteredProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'callout';

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
            <p><a href="${project.link}">View Details →</a></p>
        `;

        container.appendChild(projectDiv);
    });

    // Handle empty results
    if (filteredProjects.length === 0) {
        container.innerHTML = '<p>No projects found for this filter.</p>';
    }
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', loadPortfolioProjects);
