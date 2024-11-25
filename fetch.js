document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const studentList = document.getElementById('studentList');

            if (!studentList) {
                console.error('Element with ID "studentList" not found!');
                return;
            }

            data.forEach((student, index) => {
                console.log('Student:', student); // Check if student objects are loaded correctly

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

                sectionDiv.addEventListener('click', () => {
                    if (student.id) {
                        const redirectURL = `s${student.id}.html`;
                        console.log(`Redirecting to: ${redirectURL}`);
                        window.location.href = redirectURL; // Redirect to unique student page
                    } else {
                        console.error('Student ID is undefined!');
                    }
                });

                studentList.appendChild(sectionDiv);
            });
        })
        .catch(error => console.error('Error fetching student data:', error));
});

