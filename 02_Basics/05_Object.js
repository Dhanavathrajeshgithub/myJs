const course = {
  courseName: "Js by chai",
  coursePrice: 999,
  courseInstructor: "Hitesh",
};

// course.courseName = "Js in hindi";  -> more complicated to write course.key everytime

//  ########    De-structuring
// const { courseName } = course;
const { courseInstructor: instructor } = course;
console.log(instructor);
