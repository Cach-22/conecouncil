async function startMic() {
  try {

    if (!navigator.mediaDevices) {
      alert("mediaDevices not available");
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });

    alert("Mic enabled");

  } catch(err) {
    alert(err.message);
  }
}
