import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      arrTombol: [
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "/",
        "1",
        "2",
        "3",
        "+",
        "AC",
        "0",
        "=",
        "-",
      ],
      arrOpration: ["*", "/", "+", "-"],
      strNum: "",
      result: "0",
      prevNum: "",
      operatorClicked: false, // Menyimpan informasi apakah operator telah diklik
    };
  },
  methods: {
    calculate(item) {
      if (item === "=") {
        if (this.operatorClicked) {
          this.strNum = this.strNum.slice(0, -1);
        }
        this.result = eval(this.strNum);
        this.prevNum = this.result;
        this.strNum = this.result.toString();
        this.operatorClicked = false;
      } else if (item === "AC") {
        this.strNum = "";
        this.prevNum = "";
        this.result = "0";
        this.operatorClicked = false;
      } else if (this.arrOpration.includes(item)) {
        if (!this.operatorClicked) {
          this.strNum += item;
          this.operatorClicked = true;
        }
      } else {
        this.strNum += item;
        this.operatorClicked = false;
        this.prevNum = eval(this.strNum);
        this.result = this.prevNum;
      }
    },
  },
}).mount("#app");
