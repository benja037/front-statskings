'use client';

import { useState } from 'react';

interface EventoTableProps {
  stats: any[];
}

const EventoTable: React.FC<EventoTableProps> = ({ stats }) => {
  const [tableSize, setTableSize] = useState<number>(100); // Default size

  const handleTableSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setTableSize(newSize);
  };

  const renderPlayerStats = (stats: any[]) => {
    if (!stats || stats.length === 0) {
      return (
        <tr>
          <td colSpan={56} className="text-center py-2 px-4 border-b border-gray-200">
            No data available
          </td>
        </tr>
      );
    }

    return stats.map((stat) => (
      <tr key={stat.player.nombre} className="hover:bg-gray-100" style={{ fontSize: `${tableSize}%` }}>
        <td className="py-2 px-4 border-b border-gray-200 sticky left-0 bg-white z-10">{stat.player}</td>
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
        <td className="py-2 px-4 border-b border-gray-200">{stat.Min}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Gls}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Ast}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Sh}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.SoT}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.CrdY}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.CrdR}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Fls}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Fld}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Off}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Crs}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.TklW}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Int}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.OG}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.PKatt}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.PKwon}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.PK}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.PKcon}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.Pos}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.edad_dia_partido}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.nation}</td>
        <td className="py-2 px-4 border-b border-gray-200">{stat.fbref_player_id}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="tableSize" className="block text-sm font-medium text-gray-700">Tamaño de la tabla (%):</label>
        <input
          type="number"
          id="tableSize"
          name="tableSize"
          value={tableSize}
          onChange={handleTableSizeChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          min="50"
          max="200"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 mb-4" style={{ width: `${tableSize}%` }}>
          <thead style={{ fontSize: `${tableSize}%` }}>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 sticky left-0 bg-white z-10">Jugador</th>
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
              <th className="py-2 px-4 border-b border-gray-200">Capitan</th>
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
              <th className="py-2 px-4 border-b border-gray-200">Min</th>
              <th className="py-2 px-4 border-b border-gray-200">Gls</th>
              <th className="py-2 px-4 border-b border-gray-200">Ast</th>
              <th className="py-2 px-4 border-b border-gray-200">Sh</th>
              <th className="py-2 px-4 border-b border-gray-200">SoT</th>
              <th className="py-2 px-4 border-b border-gray-200">CrdY</th>
              <th className="py-2 px-4 border-b border-gray-200">CrdR</th>
              <th className="py-2 px-4 border-b border-gray-200">Fls</th>
              <th className="py-2 px-4 border-b border-gray-200">Fld</th>
              <th className="py-2 px-4 border-b border-gray-200">Off</th>
              <th className="py-2 px-4 border-b border-gray-200">Crs</th>
              <th className="py-2 px-4 border-b border-gray-200">TklW</th>
              <th className="py-2 px-4 border-b border-gray-200">Int</th>
              <th className="py-2 px-4 border-b border-gray-200">OG</th>
              <th className="py-2 px-4 border-b border-gray-200">PKatt</th>
              <th className="py-2 px-4 border-b border-gray-200">PKwon</th>
              <th className="py-2 px-4 border-b border-gray-200">PK</th>
              <th className="py-2 px-4 border-b border-gray-200">PKcon</th>
              <th className="py-2 px-4 border-b border-gray-200">Pos</th>
              <th className="py-2 px-4 border-b border-gray-200">edad_dia_partido</th>
              <th className="py-2 px-4 border-b border-gray-200">nation</th>
              <th className="py-2 px-4 border-b border-gray-200">fbref_player_id</th>
            </tr>
          </thead>
          <tbody>
            {renderPlayerStats(stats)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventoTable;
