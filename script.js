async function requestCameraAccess() {
    if (navigator?.mediaDevices?.getUserMedia) {
        const video = document.querySelector('#video')
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true })
        video.srcObject = videoStream
    }
}