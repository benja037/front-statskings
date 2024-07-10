import { fetchTorneos } from '@/app/lib/data';

export default async function TorneosPage() {
  const torneos = await fetchTorneos();

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Torneos</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Nombre del Torneo</th>
                <th className="py-2 px-4 border-b border-gray-200">Temporada</th>
                <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {torneos.map((torneo) => (
                <tr key={torneo.sofascore_id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-200">{torneo.nombre}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{torneo.nombre_temporada}</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <a
                      href={`/torneo/${torneo.sofascore_id}/partidos`}
                      className="text-blue-500 hover:underline"
                    >
                      Ver partidos
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
