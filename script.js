const facts = [
    "The sea covers about 71% of the Earth's surface, making it the largest habitat on the planet.",
    "The sea is home to an estimated 230,000 known species, but scientists believe there could be millions more yet to be discovered.",
    "The sea plays a crucial role in regulating the Earth's climate by absorbing heat and carbon dioxide from the atmosphere.",
    "The deepest part of the sea is the Mariana Trench in the Pacific Ocean, which reaches a depth of about 36,000 feet (10,972 meters).",
    "Phytoplankton in the sea are responsible for producing more than half of the world's oxygen through photosynthesis."
];

document.getElementById('generateFactBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
