/* ========== DESIGN DATA (TEMPORARY FRONTEND STORAGE) ==========
   Later this will come from backend/database */
let designs = [
    {
        id: 1,
        name: "Designer blouse",
        image: "images/partywear2.jpeg"
    },
    {
        id: 2,
        name: "Lehanga",
        image: "images/lehanga_choli2.jpeg"
    },
    {
        id: 3,
        name: "kids Gown",
        image: "images/lehanga_choli1.jpeg"
    }
    
];

/* ========== DISPLAY DESIGNS ON PAGE ========== */
function renderDesigns() {
    let container = document.getElementById("designs");
    container.innerHTML = ""; // clear old content

    designs.forEach(design => {
        container.innerHTML += `
            <div class="card">
                <img src="${design.image}" alt="${design.name}">
                <h3>${design.name}</h3>
    <button onclick="removeDesign(${design.id})">
                    ❌ Remove
                </button>
            </div>
        `;
    });
}

/* ========== ADD NEW DESIGN (ADMIN – FRONTEND) ========== */
function addDesign() {
    let name = prompt("Enter dress name:");
    let image = prompt("Enter image path (example: images/new.jpg)");

    if (name) {
        designs.push({
            id: Date.now(), // unique ID
            name: name,
            image: image || "images/kurti1.jpg"
        });
        renderDesigns();
    }
}

/* ========== REMOVE DESIGN ========== */
function removeDesign(id) {
    designs = designs.filter(d => d.id !== id);
    renderDesigns();
}



/* ========== LOAD DESIGNS WHEN PAGE OPENS ========== */
renderDesigns();
/* ========== ADMIN LOGIN (TEMPORARY) ========== */
function adminLogin() {
    let pass = document.getElementById("adminPass").value;

    // temporary password (change later)
    if (pass === "divya123") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        renderDesigns();
    } else {
        alert("Wrong password!");
    }
}
// Toggle sidebar on mobile
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

// Highlight active page
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

function openModal(imgElement) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
window.onload = function() {
    let designs = JSON.parse(localStorage.getItem("designs")) || [];
    let container = document.getElementById("designs");

    designs.forEach(d => {
        let div = document.createElement("div");
        div.innerHTML = `
            <img src="${d.image}" style="width:200px;height:260px;">
            <p>${d.title}</p>
        `;
        container.appendChild(div);
    });
};

