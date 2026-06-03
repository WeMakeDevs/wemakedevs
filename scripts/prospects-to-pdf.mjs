import puppeteer from "puppeteer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "..", "prospects.pdf");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log("Navigating to prospects page...");
  await page.goto("https://www.wemakedevs.org/prospects", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });

  // Wait for the React app to hydrate
  await delay(3000);

  const totalPages = 17;
  const screenshots = [];

  for (let i = 0; i < totalPages; i++) {
    console.log(`Capturing page ${i + 1}/${totalPages}...`);

    // Click the dot button for this slide (dots are 0-indexed buttons with aria-label)
    await page.evaluate((slideIndex) => {
      const dot = document.querySelector(`button[aria-label="Go to slide ${slideIndex + 1}"]`);
      if (dot) dot.click();
    }, i);

    // Wait for transition
    await delay(1000);

    // Verify the correct slide is active
    const activeSlide = await page.evaluate(() => {
      const counter = document.querySelector(".counter .cur");
      return counter ? counter.textContent.trim() : "?";
    });
    console.log(`  → Active slide: ${activeSlide}`);

    // Take a screenshot of the current slide
    const screenshotBuffer = await page.screenshot({
      fullPage: false,
      type: "png",
    });
    screenshots.push(screenshotBuffer);
  }

  console.log("Generating PDF from screenshots...");

  // Create a new page to compose the PDF from screenshots
  const pdfPage = await browser.newPage();
  await pdfPage.setViewport({ width: 1920, height: 1080 });

  // Build an HTML page with all screenshots
  const imagesHtml = screenshots
    .map(
      (buf, idx) =>
        `<div class="slide" style="page-break-after: ${idx < screenshots.length - 1 ? "always" : "auto"}; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 0; background: #000;">
          <img src="data:image/png;base64,${buf.toString("base64")}" style="width: 100%; height: 100%; object-fit: contain;" />
        </div>`
    )
    .join("\n");

  const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { margin: 0; padding: 0; background: #000; }
    @page { margin: 0; size: 1920px 1080px; }
  </style>
</head>
<body>${imagesHtml}</body>
</html>`;

  await pdfPage.setContent(html, { waitUntil: "networkidle0" });

  await pdfPage.pdf({
    path: outputPath,
    landscape: true,
    printBackground: true,
    width: "1920px",
    height: "1080px",
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  console.log(`\nPDF saved to: ${outputPath}`);
  await browser.close();
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
