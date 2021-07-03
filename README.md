![](/mockups/main-mockup.jpg?raw=true 'Start page of the app')

# GoMoreCreative App ✨

The application was built to help you train your creativity.

I am a huge fan of the simple technique according to which you just simply write 10 ideas a day and in this way become more creative. I was using it for about 2 months in my paper journal and can guarantee - it works.

When I was using this approach, sometimes the topic of my today 10 ideas was just "10 ideas for 10 ideas" which resulted in 10 topics for the next days - mostly topics associated with things I was doing on a daily basis.

And that's the reason, I was like: "It would be much more effective to get random topics that do not come from my head and about which I do not think at all, and as a result even more creative by making ideas".

And that's the reason I've made this app - to help you (and myself in the future, thanks to the features I want to add to it, listed at the end) in writing ideas for random topics and write them with more motivation due to points and streak features.

## Some screenshots:

![](/mockups/start-page.jpg?raw=true 'Start page of the app')

![](/mockups/adding-new-entry.jpg?raw=true 'Adding new entry')

![](/mockups/all-entries.jpg?raw=true 'All entries view')

## How can you run it in your local environment?

> To be clear - I am using node 14.16, but the app works when using newer versions too (been testing it on 16.4.1, for instance).

Copy the repo:

```
git clone https://github.com/robert-orlinski/go-more-creative.git
cd the-path-to-which-you-cloned-the-project
```

Run the app:

```
npm install
npm run dev
```

What's **important**, you need to put MongoDB Atlas URL in the `.env` file to make your server working (you can copy `.env.example` and change its name to `.env`). The cluster associated with this URL needs to have 2 collections: `entries` and `topics`. Additionally, you need to make your own GitHub OAuth app, provide the ID and Secret of that app in the `.env` file, and put your local URL in the `NEXTAUTH_URL` variable.

If you want to build the project, you can use:

```
npm run build
```

And if you want to start the built project, you can use:

```
npm run start
```

## Used technologies:

Front-End:

1. React.js (the main project framework);
2. Redux (the state managing tool for more predictable data flow);
3. Next.js (React framework with server side rendering, static pages generating and back-end building capabilities);
4. TypeScript (language which makes JavaScript type safe);
5. SCSS (CSS preprocessor);
6. NextAuth.js (authentication tool for Next.js);
7. React Hook Form (React library for better forms);
8. Jest and React Testing Library (for unit and React components testing);
9. MongoDB and Mongoose (as database tools).

## What's next?

1. Cover crucial functionalities with tests.
2. Add engaging streak and rewrite points algorithm to the one based on topic levels and streak ether.
3. Add functions that let people add their topics and choose if they want to have it only for themself or share it with the whole community.

And that's it for now. Maybe you have some ideas for new features? If yes, you can always propose them in the [issues](https://github.com/robert-orlinski/go-more-creative/issues) tab 😌

## Contribution

GoMoreCreative is an open-source project done for training, so code review or contributions of any kind are welcome and appreciated. Feel free to make `bug`, `code-review`, `enhancement` or `question` requests in the [issues](https://github.com/robert-orlinski/go-more-creative/issues) tab ☀️
