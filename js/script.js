console.log("Hello World!", Vue);

const { createApp } = Vue

const app = createApp({
  data: () => ({
    name: "Boolzap",
    data,
  })
})

app.mount('#root')