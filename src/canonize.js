export default function canonize(url) {
  const re = new RegExp('@?(?:https?:)?(?:\/\/)?(?:[^\/]*\/)?([a-zA-Z0-9.@_-]*)', 'i');
  let username = url.match(re)[1];
  if (username.length)
  {
  	if (username[0] !== '@')
  		username = '@' + username;
  }
  else
  	username = 'Invalid username';
  return username;
}