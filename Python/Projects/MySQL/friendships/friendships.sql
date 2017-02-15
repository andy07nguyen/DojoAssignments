SELECT * FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN  users AS user2 ON friendships.id = user2.friend_id


