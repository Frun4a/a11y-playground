function TitleToId(title) {
  if (title == undefined) return null;
  let id = title.replace(/[^a-zA-Z0-9 -]/g, '');
  id = id.split(' ').join('-').toLowerCase();
  return id;
}

export default TitleToId;