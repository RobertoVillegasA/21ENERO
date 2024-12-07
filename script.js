function loadHTML(filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("HTML file not found.");
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}
