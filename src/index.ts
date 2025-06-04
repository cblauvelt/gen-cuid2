#!/usr/bin/env node

import { Command } from "commander";
import { init } from "@paralleldrive/cuid2";

const program = new Command();

program.name("gen-cuid2").description("Generate CUID2 IDs").version("1.0.0");

// Add an option to generate multiple IDs
program
  .option("-c, --count <number>", "Number of CUID2s to generate", "1")
  .option("-l, --length <number>", "Length of the CUID2 ID", "24");

program.parse(process.argv);

const options = program.opts();
const count = parseInt(options.count, 10);
const length = parseInt(options.length, 10);
const cuid = init({ length });

for (let i = 0; i < count; i++) {
  console.log(cuid());
}
