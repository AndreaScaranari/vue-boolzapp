console.log("Hello World!", Vue);

const {user, contacts} = data;

const { createApp } = Vue;

const app = createApp({
  data: () => ({
    name: "Boolzap",
    activeContactID: null,
    contacts,
    user,
    newMessage: "",
    autoAnswerTiming: null,
    searchText: "",
  }),
  computed: {
    currentContact(){
      return this.contacts.find(contact => contact.id === this.activeContactID);
    },
    filteredContacts(){
      const searchTerm = this.searchText.toLowerCase();

      return this.contacts.filter(contact =>
          contact.name.toLowerCase().includes(searchTerm)
      );
    }
  },
  methods: {
    setCurrentActiveID(id) {
      this.activeContactID = id;
    },
    getSendingTiming() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());
      const hour = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
  
      return currentDate = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
    },
    prepareMessage(text, status) {
      this.currentContact.messages.push({
        id: new Date().getTime(),
        date: this.getSendingTiming(),
        text,
        status,
      })
    },
    sendMessage() {
      if (!this.newMessage) return
      this.prepareMessage(this.newMessage, "sent");

      this.newMessage = "";
 
      this.autoAnswerTiming = setTimeout(() => {
        this.prepareMessage("Ok!", "received");
      }, 1000);
    }
  },
  created() {
    this.activeContactID = this.contacts[0].id;
  }
})

app.mount('#root')