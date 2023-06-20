let a = [
    "Initializing Hack tool",
    "connect to Facebook",
    "Connecting to the server 1",
    "Connection failed. Retrying ...",
    "Connecting to the server 2",
    "Connected Successfully",
    "Username Khushi Nema",
    "700K Password Tried",
    "Match not found",
    "Accessing Account",
    "Mark successful"
  ];
  
  const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, seconds * 500);
    });
  };
  
  const showHack = async (messages) => {
    await sleep(2);
    // console.log(messages);
    text.innerHTML = text.innerHTML + messages + "<br>";
  };
  
  (async () => {
    for (let i = 0; i < a.length; i++) {
      await showHack(a[i]);
    }
  })();
  