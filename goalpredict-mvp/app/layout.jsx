import './globals.css';

export const metadata = {
  title: 'GoalPredict — Football Predictions & News',
  description: 'Football predictions, fixtures, form guides, news and match insights.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
