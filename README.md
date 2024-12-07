# TypeScript Optional Parameter Behavior

This repository demonstrates a subtle but potentially confusing behavior in TypeScript regarding optional parameters. When an optional parameter is omitted during a function call, TypeScript passes `undefined` instead of throwing an error. This can lead to unexpected results if not handled correctly.

## Bug

The `bug.ts` file contains a simple function `printName` with an optional parameter `name`. Calling `printName()` without providing an argument will print `undefined` to the console.

## Solution

The `bugSolution.ts` file offers a solution for explicitly checking for undefined values, making the code more robust.