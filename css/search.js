function filter() {
    const year = document.getElementById("year").value;
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const posts = document.getElementById("posts").children;
  
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const postYear = post.dataset.year;
      const postKeywords = post.dataset.keywords.toLowerCase();
  
      if ((year === "all" || postYear === year) && postKeywords.includes(keyword)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
}}

// ボタンがクリックされた時の処理
$('#filter-buttons button').click(function() {
  // 選択されたカテゴリーを取得
  const category = $(this).attr('id');

  // 全ての記事を取得
  const articles = $('.article');

  // 選択されたカテゴリーに基づいて記事をフィルタリング
  articles.each(function() {
    const article = $(this);
    if (category === 'all' || article.hasClass(category)) {
      article.show();
    } else {
      article.hide();
    }
  });
});



// ボタンがクリックされた時の処理
$('#filter-buttons button').click(function() {
    // 選択されたカテゴリーを取得
    const category = $(this).attr('id');
  
    // 全ての記事を取得
    const articles = $('.article');
  
    // 選択されたカテゴリーに基づいて記事をフィルタリング
    articles.each(function() {
      const article = $(this);
      if (category === 'all' || article.hasClass(category)) {
        article.show();
      } else {
        article.hide();
      }
    });
  });
  