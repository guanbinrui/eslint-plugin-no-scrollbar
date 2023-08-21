// no-empty-catch.spec.js
const { RuleTester } = require("eslint");
const noScrollbarRule = require("./no-scrollbar.js");
const ruleTester = new RuleTester();

const ERROR = {
  message: "Use '[data-no-scrollbar]' instead of '::webkit-scrollbar'",
};

ruleTester.run("no-scrollbar", noScrollbarRule, {
  valid: [
    {
      code: `

        var useStyles = {
            content: {
            },
        };

        `,
    },
  ],
  invalid: [
    {
      code: `
        
        var useStyles = {
            content: {
                '::-webkit-scrollbar': {
                    display: 'none',
                }
            }
        };
        
        `,
      errors: [ERROR],
    },
    {
      code: `
        
        var useStyles = {
            content: {
                '*::-webkit-scrollbar': {
                    display: 'none',
                }
            }
        };
        
        `,
      errors: [ERROR],
    },
    {
      code: `
        
        var useStyles = {
            content: {
                '&::-webkit-scrollbar': {
                    display: 'none',
                }
            }
        };
        
        `,
      errors: [ERROR],
    },
    {
      code: `
        
        var useStyles = {
            content: {
                'div::-webkit-scrollbar': {
                    display: 'none',
                }
            }
        };
        
        `,
      errors: [ERROR],
    },
    {
      code: `
        
        var useStyles = {
            content: {
                '.selector::-webkit-scrollbar': {
                    display: 'none',
                }
            }
        };
        
        `,
      errors: [ERROR],
    },
  ],
});
