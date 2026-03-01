"use strict"

  const projectsElement = document.getElementById("projects")
  const username ="keshimwe";

  async function getProjects() {
    const url = `https://api.github.com/users/${username}/repos`;
  try{
     const response = await fetch(url);
     if (!response.ok){
        throw new Error("Not found error");
     }
     const repos = await response.json();

     projectsElement.innerHTML = "";
     repos.forEach(repo => {
     projectsElement.innerHTML += `
     <div class="projectsection">
     <h3>
        <a href="${repo.html_url}" target="_blank">
           ${repo.name}
        </a>
     </h3>
     <p>${repo.description || "No description available"}</p> 
     </div> `;

     });
     
  } catch(error){
    console.error("Could not load projects");
  }
  }
        getProjects();