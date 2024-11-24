document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const studentList = document.getElementById('studentList');
            data.forEach((student, index) => {
                console.log(student); // Check if student objects are being loaded correctly

                const sectionDiv = document.createElement('div');
                sectionDiv.className = `sectionB${index + 1}`;
                sectionDiv.style.cursor = 'pointer';

                const circle = document.createElement('div');
                circle.className = 'circle';

                const studentInfo = document.createElement('div');
                studentInfo.className = 'studentInfoParent';
                studentInfo.innerHTML = `<span>${student.first_name} ${student.last_name}</span>`;

                sectionDiv.appendChild(circle);
                sectionDiv.appendChild(studentInfo);

                // Check if student.id is being passed correctly
                console.log('Student ID:', student.id);  // Add a log to verify student.id

                sectionDiv.addEventListener('click', () => {
                    if (student.id) {
                        window.location.href = `s${student.id}.html`; // Redirect to unique student page
                    } else {
                        console.error("Student ID is undefined!");
                    }
                });

                studentList.appendChild(sectionDiv);
            });
        })
        .catch(error => console.error('Error fetching student data:', error));
        
        sectionDiv.addEventListener('click', () => {
            // Log the URL to check if it's correct
            console.log(`Redirecting to: s${student.id}.html`);
            window.location.href = `s${student.id}.html`; // This redirects to the student profile
});
