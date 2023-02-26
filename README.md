# @codrjs/design-library

![npm version](https://img.shields.io/npm/v/@codrjs/design-library)
[![CodeQL](https://github.com/CodrJS/design-library/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/CodrJS/design-library/actions/workflows/codeql.yml)
[![Docker Image CI](https://github.com/CodrJS/design-library/actions/workflows/docker-image.yml/badge.svg)](https://github.com/CodrJS/design-library/actions/workflows/docker-image.yml)

## Purpose

Codr's react design library using StorybookJS. This repository builds both the Storybook docker image for `https://design.codrjs.com` and the npm module to be used within all web client microservices.

## Getting started

```tsx
import { Button } from "@codrjs/design-library";
import { useState } from "react";

const MyComponent = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Button
      primary
      disabled={disabled}
      onClick={() => {
        /* My onClick function */
      }}
    >
      Button
    </Button>
  );
};
```

## Contributing

When contributing, keep in mind this repository serves two purposes. For any changes made, please make sure that both storybook and npm builds correctly!

### Prerequisites

```bash
# Clone the repo
git clone git@github.com:CodrJS/design-library.git

# Install yarn if you don't have it already
npm install -g yarn

# Install dependencies, build, and test the code
yarn install
```

### Storybook

This repository uses a tool called Storybook to visualze available components, ways to configure them and get the code to use them.

Execute the following command to run storybook locally.

```bash
yarn storybook
```

To build and start a production version of storybook, execute the following commands.

```bash
# Build the static html
yarn storybook:build

# Run a local node server
yarn start
```

### NPM module

```bash
# Build, and test the code
yarn build
yarn test
```
