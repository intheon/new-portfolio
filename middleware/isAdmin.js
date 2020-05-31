// this is to chaperone the user to somewhere sensible if they try to access a protected page/route
// dont worry, because the actual route API itself is protected, so no data can be extracted from the server
export default async ( { context, redirect, route, store } ) => {
  if (!store.getters.userMeta){
    redirect(`/loading?returnTo=${route.path}`);
  }
};
