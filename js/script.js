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
    currentActiveID(){
      const currentActiveContact = this.contacts.find(contact => {
        return contact.id === this.activeContactID;
      });
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