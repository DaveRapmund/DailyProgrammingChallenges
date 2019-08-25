const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const challenges = [
  "Read the Javascript summary",
  "Read the CSS3 summary",
  "Read the AGILE & SCRUM summary",
  "Read the AJAX summary",
  "Read the ATOM summary",
  "Read the Bootstrap summary",
  "Read the Commandline & CMDER summary",
  "Read the ES6 summary",
  "Read the GIT & GITHUB summary",
  "Read the GULP summary",
  "Read the HTML5 summary",
  "Read the JQuery summary",
  "Read the JSON summary",
  "Read the Redux summary",
  "Read the React Router summary",
  "Read the React summary",
  "Read the Regex summary",
  "Read the SCSS summary",
  "Read the Webpack summary",

  "Write ~ HTML markup(s)",
  "Write out all HTML5 tags ~ time(s)",
  "Load ~ Javascript file(s) into an HTML page",

  "Write out the Agile Manifesto ~ time(s)",
  "Write out the Agile Principles ~ time(s)",
  "Write out the User Story template ~ time(s)",
  "Write out ~ Product Vision(s) with Themes and Features",

  "Write out ~ XMLHTTP Request(s)",

  "Write the needed files for Bootstrap down ~ time(s)",
  "Write out all Bootstrap breakpoints ~ time(s)",
  "Write down all Bootstrap color classes ~ time(s)",
  "Write out a standard Bootstrap grid ~ time(s)",
  "Make ~ navigation(s) using Bootstrap",
  "Make ~ navbar(s) using Bootstrap",
  "Make ~ navbar(s) with a dropdown using Bootstrap",
  "Make ~ collapsable navbar(s) using Bootstrap",
  "Make ~ Breadcrumb(s) using Bootstrap",
  "Make ~ Jumbotron(s) using Bootstrap",
  "Make ~ Card Element(s) using Bootstrap",
  "Make ~ Tooltip(s) using Bootstrap",
  "Make ~ Dropdown(s) using Bootstrap",
  "Make ~ Collapse(s) using Bootstrap",
  "Make ~ Accordion(s) using Bootstrap",
  "Make ~ Modal(s) using Bootstrap",
  "Make ~ Carousel(s) using Bootstrap",
  "Make ~ Tabsystem(s) using Bootstrap",

  "Make ~ full-window-height page(s) using CSS3",
  "Write out ~ Transition(s) with CSS3",
  "Write out ~ Animation(s) with CSS3",
  "Write all CSS3 Selectors down ~ time(s)",
  "Make ~ Gradient Backgrounds with CSS3",
  "Create a CSS grid ~ time(s)",

  "Write out ~ ES6 Template String(s)",
  "Write out ~ ES6 Set(s)",
  "Write out ~ ES6 Map(s)",
  "Write out ~ ES6 For-Of loop(s)",
  "Write out ~ ES6 Arrow Function(s)",
  "Write out ~ ES6 Ternary Operator(s)",
  "Write out ~ ES6 Class(es)",

  "Write out the GIT CMDER commands ~ time(s)",
  "Write down the steps to making a GIT REPO ~ time(s)",
  "Write down the GITHUB workflow ~ time(s)",

  "Write down the packages you need for GULP ~ time(s)",
  "Write out ~ GULP Task(s)",
  "Write out ~ GULP Watch(es)",
  "Write out a gulpfile.js ~ time(s)",
  "Add SCSS to a GULP project ~ time(s)",
  "Add Babel to a GULP project ~ time(s)",

  "Write out ~ Date(s) in Javascript",
  "Reverse an array in place ~ time(s)",
  "Write out all Array Methods ~ time(s) in Javascript",
  "Write ~ For loop(s) using Javascript",
  "Write out ~ Closure(s)",
  "Write out ~ IIFE(s)",
  "Make ~ Event Listener(s)",
  "Write out ~ While loops using Javascript",
  "Write out ~ Do While loops using Javascript",
  "Write out ~ Javascript Constructor Function(s)",
  "Make ~ Javascript Prototype(s)",
  "Make ~ Javascript Promise(s)",
  "Write out ~ Try/Catch statement(s)",
  "Create ~ random number(s) using Javascript",
  "Use all Date Object Methods ~ time(s)",
  "Use the Map method ~ time(s)",
  "Use the Reduce method ~ time(s)",
  "Use the Filter method ~ time(s)",
  "Use the Spread Operator ~ time(s)",
  "Use SetTimeout ~ time(s)",

  "Write down all CSS/JQuery Filters ~ time(s)",
  "Write ~ AJAX request(s) using JQuery",

  "Write down the AJAX Request lifecycle ~ time(s)",

  "Write out ~ Redux Action Creator(s)",
  "Write out ~ Redux Reducer(s)",
  "Create ~ Redux Store(s)",
  "Import all Redux files and methods ~ time(s)",
  "Write down the Redux Cycle ~ time(s)",
  "Use combineReducers ~ time(s)",
  "Make ~ Redux Reducer file(s)",
  "Make ~ Redux Action Creator file(s)",
  "Add ~ Redux Provider(s) to an index.js file",
  "Connect ~ component(s) to the Redux Provider",
  "Write ~ mapStateToProps function(s)",
  "Write ~ mapDispatchToProps function(s)",
  "Write ~ bindActionCreators function(s)",
  "Use applyMiddleware ~ time(s)",
  "Write down the rules of Redux Reducers ~ time(s)",
  "Write out ~ Switch statement(s)",
  "Write out ~ Conditional Return(s)",
  "Use Thunk ~ time(s) for an async Action Creator",

  "Add React Router to a component ~ time(s)",
  "Make a React Router Prompt ~ time(s)",
  "Add props to a React Router component ~ time(s)",

  "Pass down props to a component ~ time(s)",
  "Write out ~ Functional Component(s)",
  "Write out ~ Class Based Component(s)",
  "Write down the React Lifecycle Methods ~ time(s)",
  "Write out ~ React Form(s)",
  "Add Bootstrap to a React project ~ time(s)",
  "Add SCSS to a React Project ~ time(s)",
  "Use setState ~ time(s)",
  "Use default and named exports ~ time(s)",
  "Use the fetch API with Promise.all ~ time(s)",
  "Call a method from a PARENT component ~ times(s)",

  "Create an Axios Custom Client ~ time(s)",

  "Write out ~ Regular Expression(s)",

  "Make ~ SCSS variable(s)",
  "Create ~ SCSS Mixin(s)",
  "Use extend with an invisible class ~ time(s)",
  "Write out all different methods to use comments ~ time(s)",
  "Use @each with SCSS ~ time(s)",
  "Create ~ SCSS map(s) and loop through them",

  "Draw something with SVG",

  "Make a new package.json file ~ time(s)",
  "Create ~ webpack.config.js file(s) for a React Project",
  "Add SASS with Webpack ~ time(s)",
  "Add Bootstrap with Webpack ~ time(s)",

  "Complete ~ wordlists on the Tickomatic App",
  "Use Flexbox ~ time(s)"
];

let randomQuantity, randomChallenge, fullRandomChallenge;
let challengeArray = [];

for(let i = 0; i < 3; i++){
  randomQuantity = quantity[Math.floor((Math.random() * quantity.length))];
  randomChallenge = challenges[Math.floor((Math.random() * challenges.length))];
  fullRandomChallenge = randomChallenge.replace('~', randomQuantity);
  challengeArray.push(fullRandomChallenge);
}
