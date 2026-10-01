import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "outputs/mail-merge-recipients";
const outputPath = `${outputDir}/tulsa_hri_authors_mail_merge.xlsx`;

const recipients = [
  ["Allen", "Marshall", "allen-marshall@utulsa.edu", "The University of Tulsa (US)"],
  ["Aakriti", "Upadhyay", "aau5917@utulsa.edu", "The University of Tulsa (US)"],
  ["Roger", "Kollock", "roger-kollock@utulsa.edu", "The University of Tulsa (US)"],
  ["Bryce", "Day", "bcd5306@utulsa.edu", "The University of Tulsa (US)"],
  ["Madeleine", "Fulk", "mlf7706@utulsa.edu", "The University of Tulsa (US)"],
  ["Katie", "Smith", "kms8621@utulsa.edu", "The University of Tulsa (US)"],
  ["Rose", "Gamble", "gamble@utulsa.edu", "University of Tulsa (US)"],
];

await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Recipients");
sheet.showGridLines = false;
sheet.getRange("A1:D1").values = [["FirstName", "LastName", "EmailAddress", "Institution"]];
sheet.getRange("A2:D8").values = recipients;
sheet.getRange("A1:D8").format.font = { name: "Arial", size: 10 };
sheet.getRange("A1:D1").format = {
  fill: "#1F4E78",
  font: { name: "Arial", size: 10, bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
};
sheet.getRange("A1:D8").format.verticalAlignment = "center";
sheet.getRange("A1:D8").format.borders = { preset: "all", style: "thin", color: "#D9E2F3" };
sheet.getRange("A1").format.columnWidth = 16;
sheet.getRange("B1").format.columnWidth = 16;
sheet.getRange("C1").format.columnWidth = 32;
sheet.getRange("D1").format.columnWidth = 34;
sheet.getRange("A1:D8").format.rowHeight = 20;
sheet.freezePanes.freezeRows(1);
sheet.tables.add("A1:D8", true, "MailMergeRecipients");

workbook.recalculate();

const inspection = await workbook.inspect({
  kind: "table",
  range: "Recipients!A1:D8",
  include: "values,formulas",
  tableMaxRows: 10,
  tableMaxCols: 4,
});
console.log(inspection.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",
  options: { useRegex: true, maxResults: 50 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const preview = await workbook.render({
  sheetName: "Recipients",
  range: "A1:D8",
  scale: 2,
  format: "png",
});
await fs.writeFile(`${outputDir}/preview.png`, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(`Saved ${outputPath}`);
