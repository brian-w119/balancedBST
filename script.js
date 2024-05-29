const balancedBST = {
   display: document.querySelector("#output"),
   createList: document.querySelector("#newArr"),
   arraySize: document.querySelector("#user-Input"),
   reset: document.querySelector("#clear"),
   arr: [],
   sortedArr: [],
   finalArr: [],
   mid: null,

   //clears input fields and storage arrays
   clearAll() {
      this.arr = [];
      this.sortedArr = [];
      this.finalArr = [];
      this.display.innerText = "";
      this.arraySize.value = "";
   },

   //creates a single random number and pshes to an array
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

   //checks for duplicates
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

   //removes duplicates
   removeDuplicates() {
      this.sortedArr = [...new Set(this.arr)];
      this.sortedArr.sort(function (a, b) {
         return a - b;
      });
      console.log(this.sortedArr);
      return this.sortedArr;
   },

   //creates a random number
   createRandNum() {
      const num = Math.floor(Math.random() * 30);
      return num;
   },

   //adjust length of array if its length is less than original array created
   adjustLength() {
      this.display.innerText = "";
      console.log(
         `sorted length: ${this.sortedArr.length}, original array: ${this.arr.length}`
      );
      while (this.sortedArr.length < this.arr.length) {
         let number = this.createRandNum();
         if (this.sortedArr.includes(number)) {
            number = Math.floor(Math.random() * 30);
         } else if (!this.sortedArr.includes(number)) {
            this.sortedArr.push(number);
         }
      }
      console.log(`length adjusted arr: ${this.sortedArr}`);
      this.sortedArr.sort(function (a, b) {
         return a - b;
      });
      console.log(
         `final sorted Array: [${this.sortedArr}], length: ${this.sortedArr.length}`
      );
      this.display.innerText = this.sortedArr;
   },

   findRoot() {
      let mid;
      let middleValue;
      if (this.arraySize.value % 2 === 0) {
         mid = this.sortedArr.length / 2;
         middleValue = this.sortedArr[mid];
         console.log(middleValue);
      } else {
         mid = this.sortedArr.length / 2;
         mid = Math.floor(mid);
         middleValue = this.sortedArr[mid];
         console.log(middleValue);
      }
   },

   Node: class {
      constructor(left, right, root) {
         this.leftChild = left;
         this.rightChild = right;
         this.root = root;
      }
   },

   init() {
      this.reset.addEventListener("click", () => this.clearAll());
      this.createList.addEventListener("click", () => {
         if (this.arr.length != 0) {
            this.clearAll();
         }
         this.createRandom();
         this.checkDuplicates();
         this.removeDuplicates();
         this.adjustLength();
         this.findRoot();
      });
   },
};

balancedBST.init();
