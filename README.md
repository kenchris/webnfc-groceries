Web NFC Groceries Demo
====

A small demo show-casing how you can enhance your app with the new
Web NFC API.

The application is written with LitElement, Material Web Components (MWC),
kv-storage, Workbox CLI and Rollup.js

It is a Progressive Web App that works on desktop and mobile.

What can you do?
---

- You can add new grocery items that you are missing (to buy). The app
contains two lists (potentially empty), "to buy" (unchecked items) and
"bought" (checked items).
- Items can be checked when bought where after they will show up in the
bought list after all to buy items, making it easy to move to "to buy"
again.
- If you re-add an existing item, it's description will be updated and
it will be moved to "to buy".
- If you want to remove an item for good, you can swipe it away (mobile)
or click on the trash can on desktop, which is visible on hover.
- When you add an item, you can check the "Write to NFC tag instead",
which will show a toast allowing you to touch a NFC tag you want to
write the item to, or cancel.
- When you tap a NFC tag that was written to, the item will be added
to "to buy" or moved to "to buy" if in the "bought" list.
- You can open the drawer and learn about the Web NFC specification