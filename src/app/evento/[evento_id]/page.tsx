// src/app/evento/[evento_id]/page.tsx
import { fetchEvento, Evento } from '../../../lib/data';
import EventoTable from '@/app/components/EventoTable';

interface Props {
  params: { evento_id: string };
}

export default async function EventoPage({ params }: Props) {
  const { evento_id } = params;
  const evento = await fetchEvento(evento_id);

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          {evento.equipo_local} vs {evento.equipo_visitante}
        </h1>
        <p className="text-lg mb-4">
          Resultado: {evento.puntuacion_local} - {evento.puntuacion_visitante}
        </p>
        <EventoTable stats={evento.sofascore_stats_local} />
        <EventoTable stats={evento.sofascore_stats_visitante} />
      </div>
    </main>
  );
}