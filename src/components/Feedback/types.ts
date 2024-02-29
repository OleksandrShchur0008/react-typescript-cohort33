export interface FeedbackProps {
  onDislike: () => void;
  onLike: () => void;
  resetResults: () => void;
  likes: number;
  dislikes: number;
}
