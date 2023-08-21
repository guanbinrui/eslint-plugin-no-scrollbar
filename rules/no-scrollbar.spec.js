// no-empty-catch.spec.js
const { RuleTester } = require('eslint');
const noScrollbarRule = require('./no-scrollbar.js');
const ruleTester = new RuleTester();

ruleTester.run('no-scrollbar', noScrollbarRule, {
    valid: [{
        code: `

        var useStyles = {
            content: {
            },
        };

        `,
    }],
    invalid: [{
        code: `
        
        var useStyles = {
            content: {
                '::-webkit-scrollbar': {
                    display: 'none',
                }
            }
        };
        
        `,
        // we can use messageId from the rule object
        errors: [{ message: "Use '[data-no-scrollbar]' instead of '::webkit-scrollbar'" }],
    }]
});