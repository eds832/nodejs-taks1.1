process.stdin.on('data', (data) => {
  console.log(Buffer.from(data.reverse()).toString('utf8'));
});