#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
//  Classes Palyes and Opponent
class Palyer {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

//  Player name AND opponent selection
let player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "Please enter your Name:",
});
console.log(player.name);

let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select your Opponent",
  choices: ["Skeleton", "Assasin", "Zombi"],
});

//  Data Collection
let p1 = new Palyer(player.name);
let o1 = new Opponent(opponent.select);

do {
  //    Skeleton
  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your Opponent",
      choices: ["Attack", "Drink Portion", "Run for Life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.italic.red`${p1.name} fuel is ${p1.fuel}`);
        console.log(chalk.bold.italic.green`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.bold.blue("You Loose the Game Good Luck for Next Time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.italic.red`${o1.name} fuel is ${o1.fuel}`);
        console.log(chalk.bold.italic.green`${p1.name} fuel is ${p1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.italic.bold.green("You won"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.italic.bold.yellow(
          `You Drink Health Portion your furl is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run for Life") {
      console.log(
        chalk.italic.bold.blue("You Loose the Game Good Luck for Next Time")
      );
      process.exit();
    }
  }
  //  Assasin
  if (opponent.select == "Assasin") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your Opponent",
      choices: ["Attack", "Drink Portion", "Run for Life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.italic.red`${p1.name} fuel is ${p1.fuel}`);
        console.log(chalk.bold.italic.green`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.bold.blue("You Loose the Game Good Luck for Next Time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.italic.red`${o1.name} fuel is ${o1.fuel}`);
        console.log(chalk.bold.italic.green`${p1.name} fuel is ${p1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.italic.bold.green("You won"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.italic.bold.yellow(
          `You Drink Health Portion your furl is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run for Life") {
      console.log(
        chalk.italic.bold.blue("You Loose the Game Good Luck for Next Time")
      );
      process.exit();
    }
  }
  //  Zombie
  if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your Opponent",
      choices: ["Attack", "Drink Portion", "Run for Life"],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.italic.red`${p1.name} fuel is ${p1.fuel}`);
        console.log(chalk.bold.italic.green`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log(
            chalk.italic.bold.blue("You Loose the Game Good Luck for Next Time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.italic.red`${o1.name} fuel is ${o1.fuel}`);
        console.log(chalk.bold.italic.green`${p1.name} fuel is ${p1.fuel}`);
        if (o1.fuel <= 0) {
          console.log(chalk.italic.bold.green("You won"));
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.italic.bold.yellow(
          `You Drink Health Portion your furl is ${p1.fuel}`
        )
      );
    }
    if (ask.opt == "Run for Life") {
      console.log(
        chalk.italic.bold.blue("You Loose the Game Good Luck for Next Time")
      );
      process.exit();
    }
  }
} while (true);
