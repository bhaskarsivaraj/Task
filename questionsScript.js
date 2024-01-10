import { launch } from 'puppeteer';
import fs from 'fs';

async function scrapeStackOverflow() {
  const browser = await launch();
  const page = await browser.newPage();

  try {

    // Navigate to the link

    await page.goto('https://stackoverflow.com/questions/tagged/programming-languages');

    await page.waitForSelector('#questions');

    const data = await page.$("#questions");
    const questionSummaries = await page.evaluate(() => {
      const summaries = [];
      const questionElements = document.querySelectorAll('.js-post-summary');

      questionElements.forEach((questionElement) => {
        const postId = questionElement.getAttribute('data-post-id');


        const titleElement = questionElement.querySelector('.s-post-summary--content-title a');
        const title = titleElement ? titleElement.textContent.trim() : '';


        const scoreElement = questionElement.querySelector('.s-post-summary--stats-item-number');
        const answerCountElement = questionElement.querySelector('.has-accepted-answer .s-post-summary--stats-item-number');
        const viewsElement = questionElement.querySelector('.s-post-summary--stats-item-number');

        const score = scoreElement ? Number(scoreElement.textContent.trim()) : 0;
        const answerCount = answerCountElement ? Number(answerCountElement.textContent.trim()) : 0;
        const views = viewsElement ? Number(viewsElement.textContent.trim()) : 0;


        const tagElements = questionElement.querySelectorAll('.js-post-tag-list-item a');
        const tags = Array.from(tagElements).map(tagElement => tagElement.textContent.trim());

        summaries.push({
          postId,
          title,
          score,
          answerCount,
          views,
          tags,
        });
      });

      return summaries;
    });

    console.log(questionSummaries);

    // fs.writeFileSync('output.json', JSON.stringify(questionSummaries, null, 2), 'utf-8');

    return questionSummaries;
  } finally {
    await browser.close();
  }
}


export default scrapeStackOverflow;