const dates = {
  get today() {
    return new Date().getDate();
  },

  get yesterday() {
    return this.today - 1;
  },
};

export default dates;
