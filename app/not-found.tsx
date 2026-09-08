import { LinkButton } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center py-24">
      <Container className="text-center">
        <Eyebrow>Erro 404</Eyebrow>
        <h1 className="mt-4">Essa página não existe.</h1>
        <p className="mx-auto mt-4 max-w-[48ch] text-fg-3">
          O link pode estar quebrado ou a página pode ter sido movida.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton href="/" size="lg">
            Voltar ao portfolio
          </LinkButton>
          <LinkButton href="/kaiserinc" variant="ghost" size="lg">
            Ver a KaiserInc
          </LinkButton>
        </div>
      </Container>
    </main>
  );
}
