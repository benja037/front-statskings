import { fetchPartidos } from '@/app/lib/data';

interface Props {
  params: { torneo_id: string };
}

export default async function PartidosPage({ params }: Props) {
  const { torneo_id } = params;
  const partidos = await fetchPartidos(torneo_id);

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Partidos</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Equipo Local</th>
                <th className="py-2 px-4 border-b border-gray-200">Equipo Visitante</th>
                <th className="py-2 px-4 border-b border-gray-200">Ronda</th>
                <th className="py-2 px-4 border-b border-gray-200">Detalles</th>
              </tr>
            </thead>
            <tbody>
              {partidos.map((partido) => (
                <tr key={partido.id_sofascore_evento} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-200">{partido.equipo_local.nombre}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{partido.equipo_visitante.nombre}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{partido.ronda}</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <a
                      href={`/evento/${partido.id_sofascore_evento}`}
                      className="text-blue-500 hover:underline"
                    >
                      Ver detalles
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
