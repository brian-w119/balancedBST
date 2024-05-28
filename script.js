const balancedBST = {
   display: document.querySelector("#output"),
   createList: document.querySelector("#newArr"),
   arraySize: document.querySelector("#user-Input"),
   reset: document.querySelector("#clear"),
   arr: [],
   sortedArr: [],
   finalArr: [],

   //clears input fields and storage arrays
   clearAll() {
      this.arr = [];
      this.sortedArr = [];
      this.finalArr = [];
      this.display.innerText = "";
      this.arraySize.value = "";
   },

   //creates a single random number
   generateRandom() {
      let y = Math.floor(Math.random() * 30);
      this.arr.push(y);
      return this.arr;
   },

   //creates set number of random numbers according to user input
   createRandom() {
      const input = this.arraySize.value;
      if (input < 10 || input > 20) {
         return;
      } else {
         for (let i = 0; i < input; i++) {
            this.generateRandom();
         }
         console.log(
            `original array: ${this.arr}. array length: ${this.arr.length}`
         );
      }
   },

   checkDuplicates() {
      let repeated;
      let newArr = new Set(this.arr);
      if (newArr.size === this.arr.length) {
         repeated = "No duplicates";
         console.log("No duplicates");
      } else {
         repeated = "Duplicates found";
         console.log("Duplicates found");
      }
      return repeated;
   },

   init() {
      this.reset.addEventListener("click", () => this.clearAll());
      this.createList.addEventListener("click", () => {
         if (this.arr.length != 0) {
            this.clearAll();
         }
         this.createRandom();

         this.checkDuplicates();
      });
   },
};

balancedBST.init();
