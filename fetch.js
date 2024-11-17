document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const studentList = document.getElementById('studentList');
            data.forEach((student, index) => {
                // Create a new section for each student
                const sectionDiv = document.createElement('div');
                sectionDiv.className = `sectionB${index + 1}`; // Assign unique class based on index

                // Create the circle element
                const circle = document.createElement('div');
                circle.className = 'circle';

                // Create the student info element
                const studentInfo = document.createElement('div');
                studentInfo.className = 'studentInfoParent';
                studentInfo.innerHTML = `<p>${student.name}</p>`;

                // Append circle and student info to the section div
                sectionDiv.appendChild(circle);
                sectionDiv.appendChild(studentInfo);

                // Append the section div to the studentList container
                studentList.appendChild(sectionDiv);
            });
        })
        .catch(error => console.error('Error fetching student data:', error));
});