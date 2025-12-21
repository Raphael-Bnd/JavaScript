Vue.createApp({
  data() {
    return {
      nome: '',
      matricula: '',
      foto: null,
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];

      if (!file) return;

      this.foto = URL.createObjectURL(file);
    },
  },
}).mount('#app');
