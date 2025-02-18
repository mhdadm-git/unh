var map = L.map('map').setView([33.5138, 36.2765], 11); // إحداثيات دمشق

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var sewageProjects = [
    {name: "مشروع الصرف الصحي 1", coords: [33.5138, 36.2765]},
    // إضافة المزيد من المشاريع
];

var roadsProjects = [
    {name: "مشروع الطرق 1", coords: [33.515, 36.280]},
    // إضافة المزيد من المشاريع
];

function addProjectsToMap(projects) {
    projects.forEach(project => {
        L.marker(project.coords).addTo(map)
            .bindPopup(project.name);
    });
}

function filterProjects(type) {
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    if (type === 'sewage') {
        addProjectsToMap(sewageProjects);
    } else if (type === 'roads') {
        addProjectsToMap(roadsProjects);
    }
}

// إضافة جميع المشاريع عند تحميل الصفحة
addProjectsToMap(sewageProjects.concat(roadsProjects));
