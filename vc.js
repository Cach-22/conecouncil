const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

const pc = new RTCPeerConnection({
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
});

stream.getTracks().forEach(track => pc.addTrack(track, stream));
