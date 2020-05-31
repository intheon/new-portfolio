export default async ( { store, context } ) => {
  await store.dispatch("getBookmarks");
};
