# Reloading the app returns to linked route

This app has two routes: `index` and `landing` and you can open a route via `test1234:/route` (e.g. `test1234:/landing`).


Steps to reproduce:
- Open the app
- In browser, go to `test1234:/landing`
- The app is on `landing` screen
- Press `Reload`, the app stays on `landing`

In Expo SDK 52, reloading the app was resetting the initial URL, opening the app on `index`. On Expo SDK 53, the initial url does not reset, causing the app to always open on `landing`.

Reloading the app (via `location.reload` or via Expo Updates `Updates.reloadAsync`) is really useful after logout to clear the in-memory state of React app.