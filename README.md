# Functional tests with BACnet REST-API

The tests are written in TypeScript and run by the k6
test tool (https://k6.io/docs/) within a browser context.

### Run modes

- Functional test: 1 user and 1 iteration
- Performance test: X iterations over Y users (_NOT CONFIGURED_)

See `scenario/scenario.ts` for details.

### Commands

Install k6 and the xk6-extension to write to file (error log in `/logs`). On Mac (assume Go is installed along with `GOPATH` is set on `PATH`):
```bash
$ brew install k6
$ go install go.k6.io/xk6/cmd/xk6@latest
$ xk6 build v0.54.0 --with github.com/avitalique/xk6-file@latest
$ yarn install
```

Run functional test

```bash
bacnet$  ./k6 run --compatibility-mode=experimental_enhanced runTest.ts

```

Run performance test (_when configured_) - default: 100 iterations with 10 users

```bash
bacnet$  ./k6 run --compatibility-mode=experimental_enhanced runTest.ts -e performanceTest=true
```
