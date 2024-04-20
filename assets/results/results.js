document.addEventListener('DOMContentLoaded', function() {
    const resultOptions = {
        "0": {
            "image": "assets/results/ISTJ.png"
        },
        "1": {
            "image": "assets/results/ISFJ.png"
        },
        "2": {
            "image": "assets/results/INFJ.png"
        },
        "3": {
            "image": "assets/results/INTJ.png"
        },
        "4": {
            "image": "assets/results/ISTP.png"
        },
        "5": {
            "image": "assets/results/ISFP.png"
        },
        "6": {
            "image": "assets/results/INFP.png"
        },
        "7": {
            "image": "assets/results/INTP.png"
        },
        "8": {
            "image": "assets/results/ESTP.png"
        },
        "9": {
            "image": "assets/results/ESFP.png"
        },
        "10": {
            "image": "assets/results/ENFP.png"
        },
        "11": {
            "image": "assets/results/ENTP.png"
        },
        "12": {
            "image": "assets/results/ESTJ.png"
        },
        "13": {
            "image": "assets/results/ESFJ.png"
        },
        "14": {
            "image": "assets/results/ENFJ.png"
        },
        "15": {
            "image": "assets/results/ENTJ.png"
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const resultNumber = urlParams.get('result');
    if (resultNumber !== null && resultOptions.hasOwnProperty(resultNumber)) {
        const resultData = resultOptions[resultNumber];
        document.getElementById('result-image').src = resultData.image;
    }
});
