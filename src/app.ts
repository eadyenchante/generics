const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done");
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Daisy", hobbies: ["running"] }, { age: 10 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = " got no value";
  if (element.length === 1) {
    descriptionText = " got 1 element";
  } else if (element.length > 1) {
    descriptionText = " got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("hi there "));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert(
  {
    name: "daisy",
  },
  "name"
);

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("max");
textStorage.addItem("maxine");
textStorage.removeItem("max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal{
let courseGoal: Partial<CourseGoal> = {};
courseGoal.title = title;
courseGoal.description = description;
courseGoal.completeUntil = date;
return courseGoal as CourseGoal;
}


const personNames: Readonly<string[]> = ['max', 'anna'];
// personNames.push('dave');
// personNames.pop();
