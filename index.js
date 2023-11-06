function countFlavors() {
    const input = document.getElementById("flavorsInput").value;
    const flavors = input.split(",");

    const flavorCounts = {};
    
    for (let i = 0; i < flavors.length; i++) {
        const flavor = flavors[i];
        const trimmedFlavor = flavor.trim(); // Remove leading/trailing spaces
        flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
    }

    // Clear the table body
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    // Populate the table with flavor counts
    for (const flavor in flavorCounts) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = flavor;
        cell2.textContent = flavorCounts[flavor];
    }
}

