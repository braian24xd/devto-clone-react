export function searchPostsByContent(posts, query) {
  return posts.filter((post) =>
    post.content.toLowerCase().includes(query.toLowerCase())
  );
}

export function filterPostsByDate(posts, range) {
  const now = new Date();
  let from;

  if (range === "week") {
    from = new Date(now.setDate(now.getDate() - 7));
  } else if (range === "month") {
    from = new Date(now.setMonth(now.getMonth() - 1));
  } else if (range === "year") {
    from = new Date(now.setFullYear(now.getFullYear() - 1));
  } else {
    return posts;
  }

  return posts.filter((post) => new Date(post.createdAt) >= from);
}