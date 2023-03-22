async function requestCameraAccess() {
    if (navigator?.MediaDevices?.getUserMedia) {
        const video = document.querySelector('#video')
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true })
        video.srcObject = videoStream
    }
}