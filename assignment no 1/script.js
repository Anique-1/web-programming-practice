// Profile object with required properties
const profile = {
    name: 'Anique',
    age: 28,
    hobbies: ['Coding', 'Photography', 'Hiking', 'Reading']
};

let isProfileVisible = true;

// Function to get age category
function getAgeCategory() {
    if (profile.age < 13) {
        return 'Child';
    } else if (profile.age >= 13 && profile.age < 20) {
        return 'Teenager';
    } else {
        return 'Adult';
    }
}

// Function to toggle profile visibility
function toggleProfileVisibility() {
    const profileCard = document.querySelector('.profile-card');
    const toggleButton = document.getElementById('toggle-visibility');
    
    isProfileVisible = !isProfileVisible;
    
    if (isProfileVisible) {
        profileCard.classList.remove('hidden');
        toggleButton.textContent = 'Hide Profile';
    } else {
        profileCard.classList.add('hidden');
        toggleButton.textContent = 'Show Profile';
    }
}

// Function to display hobbies
function displayHobbies() {
    const hobbiesList = document.getElementById('hobbies-list');
    
    // Clear existing list
    hobbiesList.innerHTML = '';
    
    // Add hobbies using forEach
    profile.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });
}

// Initialize page
function initializePage() {
    // Set name and description
    document.getElementById('profile-name').textContent = profile.name;
    
    // Display hobbies
    displayHobbies();
    
    // Display age category
    document.getElementById('age-category').textContent = `Age Category: ${getAgeCategory()}`;
    
    // Add event listener to toggle button
    document.getElementById('toggle-visibility').addEventListener('click', toggleProfileVisibility);
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', initializePage);