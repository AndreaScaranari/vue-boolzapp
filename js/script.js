console.log("Hello World!", Vue);

const {user, contacts} = data;

const chatWindow = document.getElementById(".chat-window");

const { createApp } = Vue;

const app = createApp({
  data: () => ({
    name: "Boolzap",
    activeContactID: 1,
    contacts,
    user,
    newMessage: ""
  }),
  computed: {
    currentContact(){
      const currentContact = this.contacts.find(contact => {
        if (contact.id === this.activeContactID) return contact;
      }); 
      return currentContact;
    },
  },
  methods: {
    setCurrentActiveID(id) {
      this.activeContactID = id;
    },
    sendMessage() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());
      const hour = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      const currentDate = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`

      this.currentContact.messages.push({
        id: this.currentContact["messages"].length+1,
        date: currentDate,
        text: this.newMessage,
        status: 'sent'
      })
      this.newMessage = "";
    }
  }
})

app.mount('#root')