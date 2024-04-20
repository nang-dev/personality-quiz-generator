#!/bin/bash

# Directory containing result images
RESULT_DIR="assets/results"

# Output directory for HTML files
OUTPUT_DIR="."

# Base URL for your ad client
AD_CLIENT_ID="ca-pub-7301867383494347"

# Iterate over each image in the results directory
for image in ${RESULT_DIR}/*.png; do
  # Extract the result name from the image file name
  result_name=$(basename "$image" .png)
  
  # Create an HTML file for this result
  cat <<EOF >"${OUTPUT_DIR}/results/${result_name}.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${result_name}</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap">
    <!-- Google Ads Script -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT_ID}"
    crossorigin="anonymous"></script>
</head>
<body>
    <div class="quiz-container">
        <div class="result-page">
            <h1>Your Result</h1>
            <div class="result-image">
                <img src="${image}" alt="Result ${result_name} Image">
            </div>
            <!-- Content specific to the result -->
            <div class="result-content">
                <!-- Dynamic content based on the result -->
            </div>
            <a href="index.html" class="restart-button">Take the Quiz Again!</a>
        </div>
    </div>
</body>
</html>
EOF

done