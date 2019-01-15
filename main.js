//1 Use JavaScript to obtain a reference to the first section with the class
// of article_header and change its text with the textContent property to
// "Welcome to the {insert your name here} blog"
// 2Use JavaScript to obtain a reference to all article__header elements
//  and change their classList property value to article__header important.
// 3Obtain a reference the element with a class of dashed and remove it.
// 4Obtain a reference the element with a class of article_footer and add the
// class of goldenrod it.


const firstSection = document.querySelector(".article__header")
console.log(firstSection)
firstSection.textContent = "Welcome to the Justina Vickers blog"

const articleHeader = document.querySelectorAll(".article__header")
for (let index = 0; index < articleHeader.length; index++) {
  const element = articleHeader[index];
  element.classList = "article__header important"
  // element.classList.add("important")............another way to make this work
}
const asideBox = document.querySelector(".aside_box--dark, dashed")
asideBox.classList.remove("dashed")

const footer = document.querySelector(".article__footer")
footer.classList.add("goldenrod")
