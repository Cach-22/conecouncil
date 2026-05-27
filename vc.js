let localStream;

async function startMic() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    alert("Mic enabled");

    // optional: test audio playback (self echo)
    const audio = document.createElement("audio");
    audio.srcObject = localStream;
    audio.autoplay = true;
    document.body.appendChild(audio);

  } catch (err) {
    alert(err);
  }
}

const stream = localStream
const pc = new RTCPeerConnection({
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
});

stream.getTracks().forEach(track => pc.addTrack(track, stream));
