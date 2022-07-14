export interface PropsI {
  data: Array<PostMetaI>;
}
interface PostMetaI {
  title: string;
  excerpt: string;
  slug: string;
  date: Date;
  [x: string]: any;
}
