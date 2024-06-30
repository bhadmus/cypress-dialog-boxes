# Cypress-Dialog-Boxes

## Installation
`npm i -D cypress-dialog-boxes`

## Configuration

- [ ] Insert `import 'cypress-dialog-boxes'` in the `support/e2e.js` file.

## Usage

### Window Alert

> cy.checkAlert(alert-text)

```
cy.get(#alert-button).click();
cy.checkAlert(alert-text)
```

### Window Confirm Box

> cy.checkConfirmBox(confirm-box-text)

```
cy.checkConfirmBox(confirm-text)
cy.get(#confirm-button).click();
```

### Window Cancel Confirm Box

> cy.cancelConfirmBox(confirm-box-text)

```
cy.cancelConfirmBox(confirm-text)
cy.get(#confirm-button).click();
```

## Compatibility

It should be compatible with all versions of Cypress

## Support

[Issues](https://github.com/bhadmus/cypress-dialog-boxes/issues)
