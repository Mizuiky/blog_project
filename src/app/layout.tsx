import type { Metadata } from 'next';
import './globals.css';

//layout recebe children
//layout e page inicial sao obrigatorios
//aqui colocamos o esqueleto do site: body, componentes, html se quisessemos que em todas as pagina do meu componente tenham
//um header e footer é aqui que colocamos
//o children é um children que vem de page

export const metadata: Metadata = {
  title: 'The blog este é um blog next js',
  description: 'Descricao da pagina next app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
