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

      const day = this.padDate(date.getDay())
      const month = this.padDate(date.getMonth() + 1);
      const year = date.getFullYear();
      const hour = this.padDate(date.getHours())
      const minutes = this.padDate(date.getMinutes())
      const seconds = this.padDate(date.getSeconds())
      
      return currentDate = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
      // return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    },
    padDate(dateInfo){
      return String(dateInfo).padStart(2, "0");
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
    },
    showDMenu(id) {
      const deleteMenu = document.querySelector(`.delete-menu${id}`);
      deleteMenu.classList.toggle("d-none");
    },
    deleteMessage(id){
      this.currentContact.messages = this.currentContact.messages.filter(
        message => id !== message.id)
    }
  },
  created() {
    this.activeContactID = this.contacts[0].id;
  }
})

app.mount('#root')