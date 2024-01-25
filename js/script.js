console.log("Hello World!", Vue);

const {user, contacts} = data;

const { createApp } = Vue;

const app = createApp({
  data: () => ({
    name: "Boolzap",
    activeContactID: 1,
    contacts,
    user,
  }),
  computed: {
    currentContact(){
      const currentContact = this.contacts.find(contact => {
        if (contact.id === this.activeContactID) return contact;
      }); 
      return currentContact;
    }
  },
  methods: {
    setCurrentActiveID(id) {
      this.activeContactID = id;
      console.log(this.activeContactID);
    }
  }
})

app.mount('#root')