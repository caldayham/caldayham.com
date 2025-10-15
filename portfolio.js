// Load and display portfolio projects from JSON data
async function loadPortfolioProjects() {
    try {
        const response = await fetch('portfolio/0-portfolio-data.json');
        const data = await response.json();

        const container = document.getElementById('portfolio-projects');

        data.projects.forEach(project => {
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
    } catch (error) {
        console.error('Error loading portfolio projects:', error);
        // Fallback content if JSON fails to load
        document.getElementById('portfolio-projects').innerHTML =
            '<p>Unable to load projects. Please check back later.</p>';
    }
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', loadPortfolioProjects);
