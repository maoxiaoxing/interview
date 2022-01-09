interface Article<B, C> {
  title: string;
  isLock: B;
  comments: C[]
}

type CommentType = {
  content: string;
  author: string
}

const article: Article<boolean, CommentType> = {
  title: '标题',
  isLock: true,
  comments: [{content: '评论', author: 'mxx'}]
}
