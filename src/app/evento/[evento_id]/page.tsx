import { fetchEvento, Evento } from '../../../lib/data';

interface Props {
  params: { evento_id: string };
}

export default async function EventoPage({ params }: Props) {
  const { evento_id } = params;
  const evento: Evento = await fetchEvento(evento_id);

  const renderPlayerStats = (stats: any[]) => {
    return stats.map((stat) => (
      <tr key={stat.id} className="hover:bg-gray-100">
        <td className="py-2 px-4 border-b border-gray-200">{stat.player.nombre}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.numero_camiseta}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.minutos_jugados}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.goles}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.goal_assist}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_pases}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.pases_precisos}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_balones_en_largo}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.balones_en_largo_completados}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_centros}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.centros_completados}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.duelos_aereos_perdidos}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.duelos_aereos_ganados}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.perdida_de_posesion}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.fouls}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_tackle}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.dispossessed}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_offside}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.touches}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.key_pass}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.was_fouled}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_contest}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.won_contest}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_clearance}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.interception_won}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.big_chance_missed}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.blocked_scoring_attempt}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.big_chance_created}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.outfielder_block}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.challenge_lost}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.goal_assist}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.captain ? 'Sí' : 'No'}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.hit_woodwork}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.penalty_won}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.expected_goals}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.expected_assists}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.own_goals}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.error_lead_to_a_shot}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.error_lead_to_a_goal}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.total_keeper_sweeper}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.accurate_keeper_sweeper}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.saved_shots_from_inside_the_box}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.saves}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.punches}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.good_high_claim}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.goals_prevented}</td>
      </tr>
    ));
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          {evento.equipo_local} vs {evento.equipo_visitante}
        </h1>
        <p className="text-lg mb-4">
          Resultado: {evento.puntuacion_local} - {evento.puntuacion_visitante}
        </p>
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mb-2">Equipo Local</h2>
          <table className="min-w-full bg-white border border-gray-200 mb-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Jugador</th>
                <th className="py-2 px-4 border-b border-gray-200">#</th>
                <th className="py-2 px-4 border-b border-gray-200">Minutos Jugados</th>
                <th className="py-2 px-4 border-b border-gray-200">Goles</th>
                <th className="py-2 px-4 border-b border-gray-200">Asistencias</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Pases</th>
                <th className="py-2 px-4 border-b border-gray-200">Precisión de Pases</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Balones en Largo</th>
                <th className="py-2 px-4 border-b border-gray-200">Balones en Largo Completados</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Centros</th>
                <th className="py-2 px-4 border-b border-gray-200">Centros Completados</th>
                <th className="py-2 px-4 border-b border-gray-200">Duelos Aéreos Perdidos</th>
                <th className="py-2 px-4 border-b border-gray-200">Duelos Aéreos Ganados</th>
                <th className="py-2 px-4 border-b border-gray-200">Pérdida de Posesión</th>
                <th className="py-2 px-4 border-b border-gray-200">Fouls</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Tackle</th>
                <th className="py-2 px-4 border-b border-gray-200">Dispossessed</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Offside</th>
                <th className="py-2 px-4 border-b border-gray-200">Touches</th>
                <th className="py-2 px-4 border-b border-gray-200">Key Pass</th>
                <th className="py-2 px-4 border-b border-gray-200">Was Fouled</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Contest</th>
                <th className="py-2 px-4 border-b border-gray-200">Won Contest</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Clearance</th>
                <th className="py-2 px-4 border-b border-gray-200">Interception Won</th>
                <th className="py-2 px-4 border-b border-gray-200">Big Chance Missed</th>
                <th className="py-2 px-4 border-b border-gray-200">Blocked Scoring Attempt</th>
                <th className="py-2 px-4 border-b border-gray-200">Big Chance Created</th>
                <th className="py-2 px-4 border-b border-gray-200">Outfielder Block</th>
                <th className="py-2 px-4 border-b border-gray-200">Challenge Lost</th>
                <th className="py-2 px-4 border-b border-gray-200">Goal Assist</th>
                <th className="py-2 px-4 border-b border-gray-200">Captain</th>
                <th className="py-2 px-4 border-b border-gray-200">Hit Woodwork</th>
                <th className="py-2 px-4 border-b border-gray-200">Penalty Won</th>
                <th className="py-2 px-4 border-b border-gray-200">Expected Goals</th>
                <th className="py-2 px-4 border-b border-gray-200">Expected Assists</th>
                <th className="py-2 px-4 border-b border-gray-200">Own Goals</th>
                <th className="py-2 px-4 border-b border-gray-200">Error Lead to a Shot</th>
                <th className="py-2 px-4 border-b border-gray-200">Error Lead to a Goal</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Keeper Sweeper</th>
                <th className="py-2 px-4 border-b border-gray-200">Accurate Keeper Sweeper</th>
                <th className="py-2 px-4 border-b border-gray-200">Saved Shots from Inside the Box</th>
                <th className="py-2 px-4 border-b border-gray-200">Saves</th>
                <th className="py-2 px-4 border-b border-gray-200">Punches</th>
                <th className="py-2 px-4 border-b border-gray-200">Good High Claim</th>
                <th className="py-2 px-4 border-b border-gray-200">Goals Prevented</th>
              </tr>
            </thead>
            <tbody>
              {renderPlayerStats(evento.sofascore_stats_local)}
            </tbody>
          </table>

          <h2 className="text-xl font-bold mb-2">Equipo Visitante</h2>
          <table className="min-w-full bg-white border border-gray-200 mb-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Jugador</th>
                <th className="py-2 px-4 border-b border-gray-200">#</th>
                <th className="py-2 px-4 border-b border-gray-200">Minutos Jugados</th>
                <th className="py-2 px-4 border-b border-gray-200">Goles</th>
                <th className="py-2 px-4 border-b border-gray-200">Asistencias</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Pases</th>
                <th className="py-2 px-4 border-b border-gray-200">Precisión de Pases</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Balones en Largo</th>
                <th className="py-2 px-4 border-b border-gray-200">Balones en Largo Completados</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Centros</th>
                <th className="py-2 px-4 border-b border-gray-200">Centros Completados</th>
                <th className="py-2 px-4 border-b border-gray-200">Duelos Aéreos Perdidos</th>
                <th className="py-2 px-4 border-b border-gray-200">Duelos Aéreos Ganados</th>
                <th className="py-2 px-4 border-b border-gray-200">Pérdida de Posesión</th>
                <th className="py-2 px-4 border-b border-gray-200">Fouls</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Tackle</th>
                <th className="py-2 px-4 border-b border-gray-200">Dispossessed</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Offside</th>
                <th className="py-2 px-4 border-b border-gray-200">Touches</th>
                <th className="py-2 px-4 border-b border-gray-200">Key Pass</th>
                <th className="py-2 px-4 border-b border-gray-200">Was Fouled</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Contest</th>
                <th className="py-2 px-4 border-b border-gray-200">Won Contest</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Clearance</th>
                <th className="py-2 px-4 border-b border-gray-200">Interception Won</th>
                <th className="py-2 px-4 border-b border-gray-200">Big Chance Missed</th>
                <th className="py-2 px-4 border-b border-gray-200">Blocked Scoring Attempt</th>
                <th className="py-2 px-4 border-b border-gray-200">Big Chance Created</th>
                <th className="py-2 px-4 border-b border-gray-200">Outfielder Block</th>
                <th className="py-2 px-4 border-b border-gray-200">Challenge Lost</th>
                <th className="py-2 px-4 border-b border-gray-200">Goal Assist</th>
                <th className="py-2 px-4 border-b border-gray-200">Captain</th>
                <th className="py-2 px-4 border-b border-gray-200">Hit Woodwork</th>
                <th className="py-2 px-4 border-b border-gray-200">Penalty Won</th>
                <th className="py-2 px-4 border-b border-gray-200">Expected Goals</th>
                <th className="py-2 px-4 border-b border-gray-200">Expected Assists</th>
                <th className="py-2 px-4 border-b border-gray-200">Own Goals</th>
                <th className="py-2 px-4 border-b border-gray-200">Error Lead to a Shot</th>
                <th className="py-2 px-4 border-b border-gray-200">Error Lead to a Goal</th>
                <th className="py-2 px-4 border-b border-gray-200">Total Keeper Sweeper</th>
                <th className="py-2 px-4 border-b border-gray-200">Accurate Keeper Sweeper</th>
                <th className="py-2 px-4 border-b border-gray-200">Saved Shots from Inside the Box</th>
                <th className="py-2 px-4 border-b border-gray-200">Saves</th>
                <th className="py-2 px-4 border-b border-gray-200">Punches</th>
                <th className="py-2 px-4 border-b border-gray-200">Good High Claim</th>
                <th className="py-2 px-4 border-b border-gray-200">Goals Prevented</th>
              </tr>
            </thead>
            <tbody>
              {renderPlayerStats(evento.sofascore_stats_visitante)}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
