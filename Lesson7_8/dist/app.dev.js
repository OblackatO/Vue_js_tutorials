"use strict";

new Vue({
  el: '#vue-app',
  data: {
    counter: 0,
    username: '',
    password: ''
  },
  methods: {
    log_user_strock: function log_user_strock(event) {
      console.log("Key %s tapped on username field", event.key);
    },
    log_pwd_strock: function log_pwd_strock(event) {
      console.log("Key %s tapped on pwd field", event.key);
    },
    print_login_credentials: function print_login_credentials() {
      console.log("User: %s \n Pwd: %s", this.username, this.password);
    }
  }
});