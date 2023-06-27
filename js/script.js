const EmailsApi = 'https://flynn.boolean.careers/exercises/api/random/mail';

console.log('JS OK', 'VUE OK', Vue);

// Estrapolo i metodi che mi servono
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      emails: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(EmailsApi).then(res => {
        this.emails.push(res.data.response);
      });
    }
  },
});

// La monto nell'html
app.mount('#root');
