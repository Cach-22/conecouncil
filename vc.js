async function startMic() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });

    alert("Mic enabled");
  } catch(err) {
    alert(err);
  }
}
