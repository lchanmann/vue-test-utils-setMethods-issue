# Getting started with `vue-test-utils`

## Setup

``` bash
npm install
npm test
```

## Test fails
```bash
 FAIL  ./setMethods.test.js
  ● Console

    console.log setMethods.test.js:9
      clickMethod

  ● setMethods › calls stub when event is triggered

    expect(jest.fn()).toHaveBeenCalled()

    Expected mock function to have been called.

      at Object.<anonymous> (setMethods.test.js:17:29)
          at new Promise (<anonymous>)
          at <anonymous>
      at process._tickCallback (internal/process/next_tick.js:188:7)
```
## Resources

- [vue-test-utils docs](https://vue-test-utils.vuejs.org)
- [vue-test-utils repo](https://github.com/vuejs/vue-test-utils)
