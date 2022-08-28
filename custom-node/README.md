# How to make custom node for Node-RED

---

## :gift: Goal

- You can make your own custom node that can be used in Node-RED
- This sample node is to transform timestamp from _msg.payload_ to Date String format and return it.
- You will see your custom node in function category.

## :page_facing_up: Essential Files
You need 3 files below to make custom node.
| File                      | Description                                      |
| ------------------------- | ------------------------------------------------ |
| package.json              | information for custom node package              |
| \<custom file name\>.js   | defining and registering function of custom node |
| \<custom file name\>.html | description for custom node                      |

- try below in order to create package.json

```bash
npm init
```

![cmd](https://user-images.githubusercontent.com/48264542/187075851-83002fa3-3f1d-4e03-a497-28fa4d12d6fc.png)
then you'll see package.json inside your directory.

## :package: Install Custom Node
* When you're done typing 3 files above, open cmd and move to Node-RED directory

```bash
# Fill in your PC name instead of Admin
cd C:\Users\Admin\.node-red
```
* Install your custom node
```bash
npm install <custom-node-directory>
```

![cmd2](https://user-images.githubusercontent.com/48264542/187076853-d397f39e-8113-4b1f-95e5-3aa94109a00f.png)

* When install is done, you'll see your custom node inside the folder below
```bash
cd ~/.node-red/node_modules/node-red-contrib-custom-node
```