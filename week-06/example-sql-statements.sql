INSERT INTO author(authorId, authorActivationToken, authorAvatarUrl, authorEmail, authorHash, authorUsername) VALUES (UUID_TO_BIN("5f18b9ee-8a2e-4106-b0b1-adad614b7919"), "nananananananananananananananana", "http://cool pic.com", "email@email.com", "nanananananananananananananananananananananananananananananananananananananananananananananananaa", "cool-username");

INSERT INTO article(articleId, articleAuthorId, articleContent, articleDate, articleImage) VALUES (UUID_TO_BIN("2683cbdc-e1fd-4cad-8c85-e9330058b7f0"), UUID_TO_BIN("5f18b9ee-8a2e-4106-b0b1-adad614b7919"), "Super cool article content", NOW(), "http://articleimage.com");

UPDATE article SET articleContent = "Pretty good article" WHERE articleId = UUID_TO_BIN("2683cbdc-e1fd-4cad-8c85-e9330058b7f0");

SELECT article.articleContent, author.authorUsername from article JOIN author ON article.articleAuthorId = author.authorId WHERE articleId = UUID_TO_BIN("2683cbdc-e1fd-4cad-8c85-e9330058b7f0");

DELETE FROM article WHERE articleId = UUID_TO_BIN("2683cbdc-e1fd-4cad-8c85-e9330058b7f0");